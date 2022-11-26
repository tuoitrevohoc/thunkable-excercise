import { graphql, useLazyLoadQuery } from "react-relay";
import { ProjectListQuery } from "./__generated__/ProjectListQuery.graphql";
import Header from "../ui/Header";

import FloatingButton from "../ui/FloatingButton";
import "./ProjectList.css";
import AddIcon from "../icons/AddIcon";
import ProjectRow from "../projects/ProjectRow";
import { useMemo, useState } from "react";
import CreateProjectForm from "../projects/CreateProjectForm";

export const query = graphql`
  query ProjectListQuery {
    projects(first: "") @connection(key: "ProjectList_projects") {
      __id
      edges {
        node {
          id
          ...ProjectRow_project
        }
      }
    }
  }
`;

export default function ProjectList() {
  const { projects } = useLazyLoadQuery<ProjectListQuery>(query, {});
  const [showAddProject, setShowAddProject] = useState(false);
  console.log(projects);

  const addProject = useMemo(
    () => () => setShowAddProject(true),
    [setShowAddProject]
  );

  return (
    <div>
      <Header title="My Projects" />
      <div className="project-list">
        <div className="wrapper">
          <FloatingButton onClick={addProject}>
            <AddIcon />
          </FloatingButton>
          {projects.edges.map((edge) => (
            <ProjectRow
              project={edge.node}
              key={edge.node.id}
              connectionKey={projects.__id}
            />
          ))}
          {showAddProject && (
            <CreateProjectForm
              connectionKey={projects.__id}
              onClose={() => setShowAddProject(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
