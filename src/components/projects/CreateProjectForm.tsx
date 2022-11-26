import DefaultProjectIcon from "../assets/DefaultProjectIcon.png";
import "./CreateProjectForm.css";
import { FormEvent, useState } from "react";
import { graphql, useMutation } from "react-relay";

interface Props {
  connectionKey: string;
}

export default function CreateProjectForm(props: Props) {
  const [name, setName] = useState("");

  const [commit, isLoading] = useMutation(graphql`
    mutation CreateProjectFormMutation($name: String!, $connection: [ID!]!) {
      createProject(name: $name)
        @appendNode(connections: $connection, edgeTypeName: "ProjectEdge") {
        id
        ...ProjectRow_project
      }
    }
  `);

  function onSave(event: FormEvent) {
    event.preventDefault();

    commit({
      variables: {
        name: name,
        connection: [props.connectionKey],
      },
    });

    return false;
  }

  return (
    <form className="project-row" onSubmit={onSave}>
      <img className="icon" src={DefaultProjectIcon} alt="Project Icon" />
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="text"
        type="text"
        placeholder="Project name"
      />
    </form>
  );
}
