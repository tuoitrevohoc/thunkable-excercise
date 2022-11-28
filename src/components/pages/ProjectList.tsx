import { graphql, useLazyLoadQuery } from "~/relay";
import { ProjectListQuery } from "./__generated__/ProjectListQuery.graphql";
import Header from "../ui/Header";

import FloatingButton from "../ui/FloatingButton";
import "./ProjectList.css";
import AddIcon from "../icons/AddIcon";
import ProjectRow from "../projects/ProjectRow";
import React, { useMemo, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import useReorderProjectMutation from "../../relay/mutations/projects/ReorderProjectMutation";
import useProjectListSubscription from "../../relay/subscriptions/ProjectListSubscription";
import classNames from "classnames";
import ErrorPopup from "~/components/ui/ErrorPopup";

const CreateProjectForm = React.lazy(
  () => import("../projects/CreateProjectForm")
);

export const query = graphql`
  query ProjectListQuery {
    projects(first: "") @connection(key: "ProjectList_projects") {
      __id
      edges {
        node {
          id
          order
          name
          ...ProjectRow_project
        }
      }
    }
  }
`;

export default function ProjectList() {
  const { projects } = useLazyLoadQuery<ProjectListQuery>(query, {});
  const [showAddProject, setShowAddProject] = useState(false);
  const [updateOrder, isUpdatingOrder] = useReorderProjectMutation();
  const [error, setError] = useState<string | null>(null);

  useProjectListSubscription(projects.__id);

  const sortedProjects = [...projects.edges].sort(
    (a, b) => a.node.order - b.node.order
  );

  const addProject = useMemo(
    () => () => setShowAddProject(true),
    [setShowAddProject]
  );

  const onDragEnd = useMemo(
    () =>
      ({ source, destination }: DropResult) => {
        const sourceIndex = source.index;
        const destinationIndex = destination?.index;

        if (
          destinationIndex !== undefined &&
          destinationIndex !== sourceIndex
        ) {
          const project = sortedProjects[sourceIndex].node;
          let newOrder: number;

          if (sourceIndex > destinationIndex) {
            if (destinationIndex === 0) {
              newOrder = sortedProjects[0].node.order - 1;
            } else {
              const previousProject = sortedProjects[destinationIndex - 1].node;
              const nextProject = sortedProjects[destinationIndex].node;
              newOrder = (previousProject.order + nextProject.order) / 2;
            }
          } else {
            if (destinationIndex === sortedProjects.length - 1) {
              newOrder = sortedProjects[destinationIndex].node.order + 1;
            } else {
              const previousProject = sortedProjects[destinationIndex].node;
              const nextProject = sortedProjects[destinationIndex + 1].node;
              newOrder = (previousProject.order + nextProject.order) / 2;
            }
          }

          updateOrder({
            variables: {
              id: project.id,
              order: newOrder,
            },
            optimisticResponse: {
              reorderProject: {
                id: project.id,
                order: newOrder,
              },
            },
            onError() {
              setError("Can't reorder project. Please try again later.");
            },
          });
        }
      },
    [sortedProjects, updateOrder]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="page">
        <Header title="My Projects" />
        <div
          className={classNames("project-list top", {
            loading: isUpdatingOrder,
            empty: sortedProjects.length === 0 && !showAddProject,
          })}
        >
          <div className="wrapper">
            <FloatingButton onClick={addProject} title="Create new Project">
              <AddIcon />
            </FloatingButton>
            <Droppable droppableId="projects">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {sortedProjects.map((edge, index) => (
                    <Draggable
                      key={edge.node.id}
                      draggableId={edge.node.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${snapshot.isDragging && "dragging"}`}
                        >
                          <ProjectRow
                            project={edge.node}
                            key={edge.node.id}
                            connectionKey={projects.__id}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            {showAddProject && (
              <CreateProjectForm
                connectionKey={projects.__id}
                onClose={() => setShowAddProject(false)}
              />
            )}
          </div>
        </div>
        <ErrorPopup errorMessage={error} onDismiss={() => setError(null)} />
      </div>
    </DragDropContext>
  );
}
