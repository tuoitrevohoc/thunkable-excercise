import { graphql, useFragment } from "~/relay";
import { ProjectRow_project$key } from "./__generated__/ProjectRow_project.graphql";
import DefaultProjectIcon from "../assets/DefaultProjectIcon.png";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import moment from "moment";
import React, { useMemo, useState } from "react";
import useDeleteProjectMutation from "../../relay/mutations/projects/DeleteProjectMutation";
import useRenameProjectMutation from "../../relay/mutations/projects/RenameProjectMutation";
import classNames from "classnames";
import { validName } from "~/backend/models/ProjectValidator";
import ErrorPopup from "~/components/ui/ErrorPopup";

const WarningDialog = React.lazy(() => import("../ui/WarningDialog"));
const ProjectRenameForm = React.lazy(() => import("./ProjectRenameForm"));

interface Props {
  project: ProjectRow_project$key;
  connectionKey: string;
}

export default function ProjectRow(props: Props) {
  const project = useFragment(
    graphql`
      fragment ProjectRow_project on Project {
        id
        name
        createdAt
      }
    `,
    props.project
  );

  const [showRename, setShowRename] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [deleteProject, isDeleting] = useDeleteProjectMutation();
  const [renameProject, isRenaming] = useRenameProjectMutation();

  const onRename = useMemo(
    () => (name: string) => {
      if (validName(name)) {
        renameProject({
          variables: {
            id: project.id,
            name: name,
          },
          onCompleted: () => setShowRename(false),
          onError() {
            setError("Can't update project. Please try again later.");
          },
        });
      }
    },
    [project.id, renameProject]
  );

  return (
    <div
      className={classNames("project-row", {
        loading: isDeleting || isRenaming,
      })}
    >
      <img className="icon" src={DefaultProjectIcon} alt="Project Icon" />
      <div className={classNames("details", { "showing-rename": showRename })}>
        {showRename ? (
          <ProjectRenameForm
            key={project.id}
            name={project.name}
            onRename={onRename}
            disabled={isRenaming}
          />
        ) : (
          <>
            <div className="name">{project.name}</div>
            <button
              className="icon-button edit-button"
              title="Edit this project"
              aria-label="Edit this project"
              onClick={() => setShowRename(true)}
            >
              <EditIcon />
            </button>
          </>
        )}
        <div className="created-date">
          {moment(+project.createdAt).format("MMM DD, YYYY hh:mm A")}
        </div>
      </div>
      <div className="actions">
        <button
          className="icon-button mobile-only edit-button"
          title="Edit this project"
          aria-label="Edit this project"
          onClick={() => setShowRename(true)}
        >
          <EditIcon />
        </button>
        <button
          className="icon-button"
          disabled={isDeleting}
          title="Delete this project"
          aria-label="Delete this project"
          onClick={() => setShowDeleteConfirmation(true)}
        >
          <DeleteIcon />
        </button>
      </div>
      {showDeleteConfirmation && (
        <WarningDialog
          title="Are you sure you want to delete this project?"
          message="This action can't be undone."
          onConfirm={() =>
            deleteProject({
              variables: {
                id: project.id,
                connections: [props.connectionKey],
              },
              onError() {
                setError("Can't delete project. Please try again later.");
              },
            })
          }
          onClose={() => setShowDeleteConfirmation(false)}
        />
      )}
      <ErrorPopup errorMessage={error} onDismiss={() => setError(null)} />
    </div>
  );
}
