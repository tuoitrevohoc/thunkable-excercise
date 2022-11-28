import DefaultProjectIcon from "../assets/DefaultProjectIcon.png";
import "./CreateProjectForm.css";
import { FormEvent, useState } from "react";
import useCreateProjectMutation from "../../relay/mutations/projects/CreateProjectMutation";
import classNames from "classnames";
import { validName } from "~/backend/models/ProjectValidator";
import ErrorPopup from "~/components/ui/ErrorPopup";

interface Props {
  connectionKey: string;
  onClose(): any;
}

export default function CreateProjectForm(props: Props) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [createProject, isCreating] = useCreateProjectMutation();

  function onSave(event: FormEvent) {
    event.preventDefault();

    if (isCreating || !validName(name)) {
      return;
    }

    setError(null);

    createProject({
      variables: {
        name: name,
        connection: [props.connectionKey],
      },
      onCompleted: props.onClose,
      onError() {
        setError("Can't create project. Please try again later.");
      },
    });

    return false;
  }

  return (
    <form
      className={classNames("project-row", { loading: isCreating })}
      onSubmit={onSave}
    >
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
      <ErrorPopup errorMessage={error} onDismiss={() => setError(null)} />
    </form>
  );
}
