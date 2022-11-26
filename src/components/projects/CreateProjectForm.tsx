import DefaultProjectIcon from "../assets/DefaultProjectIcon.png";
import "./CreateProjectForm.css";
import { FormEvent, useState } from "react";
import useCreateProjectMutation from "../../mutations/projects/CreateProjectMutation";

interface Props {
  connectionKey: string;
  onClose(): any;
}

export default function CreateProjectForm(props: Props) {
  const [name, setName] = useState("");

  const [createProject, isCreating] = useCreateProjectMutation();

  function onSave(event: FormEvent) {
    event.preventDefault();

    if (isCreating) {
      return;
    }

    createProject({
      variables: {
        name: name,
        connection: [props.connectionKey],
      },
      onCompleted: props.onClose,
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
        disabled={isCreating}
        ref={(element) => element?.focus()}
      />
    </form>
  );
}
