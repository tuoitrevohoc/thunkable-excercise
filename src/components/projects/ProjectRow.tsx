import { graphql, useFragment, useMutation } from "react-relay";
import { ProjectRow_project$key } from "./__generated__/ProjectRow_project.graphql";
import DefaultProjectIcon from "../assets/DefaultProjectIcon.png";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import moment from "moment";

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

  const [deleteProject, isDeleting] = useMutation(graphql`
    mutation ProjectRowDeleteProjectMutation($id: ID!, $connections: [ID!]!) {
      deleteProject(id: $id) {
        id @deleteEdge(connections: $connections)
      }
    }
  `);

  console.log(props.connectionKey);

  return (
    <div className="project-row">
      <img className="icon" src={DefaultProjectIcon} alt="Project Icon" />
      <div className="name">{project.name}</div>
      <button className="icon-button">
        <EditIcon />
      </button>
      <div className="created-date">
        {moment(+project.createdAt).format("MMM DD, YYYY hh:mm A")}
      </div>

      <div className="actions">
        <button
          className="icon-button"
          onClick={() =>
            deleteProject({
              variables: {
                id: project.id,
                connections: [props.connectionKey],
              },
            })
          }
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
