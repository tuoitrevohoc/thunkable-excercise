import { graphql, useFragment, useMutation } from "react-relay";
import { ProjectRow_project$key } from "./__generated__/ProjectRow_project.graphql";
import DefaultProjectIcon from "../assets/DefaultProjectIcon.png";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import moment from "moment";
import { FormEvent, useMemo, useState } from "react";
import useDeleteProjectMutation from "../../mutations/projects/DeleteProjectMutation";
import useRenameProjectMutation from "../../mutations/projects/RenameProjectMutation";
import WarningDialog from "../ui/WarningDialog";

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
  const [name, setName] = useState(project.name);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const [deleteProject, isDeleting] = useDeleteProjectMutation();
  const [renameProject, isRenaming] = useRenameProjectMutation();

  const onRename = useMemo(
    () => (event: FormEvent) => {
      event.preventDefault();
      renameProject({
        variables: {
          id: project.id,
          name: name,
        },
        onCompleted: () => setShowRename(false),
      });
      return false;
    },
    [project.id, name, renameProject]
  );

  return (
    <div className="project-row">
      <img className="icon" src={DefaultProjectIcon} alt="Project Icon" />
      {showRename ? (
        <form className="name form" onSubmit={onRename}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={isRenaming}
          />
        </form>
      ) : (
        <>
          <div className="name">{project.name}</div>
          <button className="icon-button" onClick={() => setShowRename(true)}>
            <EditIcon />
          </button>
        </>
      )}
      <div className="created-date">
        {moment(+project.createdAt).format("MMM DD, YYYY hh:mm A")}
      </div>
      <div className="actions">
        <button
          className="icon-button"
          disabled={isDeleting}
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
            })
          }
          onClose={() => setShowDeleteConfirmation(false)}
        />
      )}
    </div>
  );
}
