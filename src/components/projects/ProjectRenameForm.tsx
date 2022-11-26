import { FormEvent, useMemo, useState } from "react";

interface Props {
  name: string;
  onRename(name: string): any;
  disabled?: boolean;
}

export default function ProjectRenameForm(props: Props) {
  const [name, setName] = useState(props.name);

  const onRenameConfirmed = useMemo(
    () => (event: FormEvent) => {
      event.preventDefault();
      props.onRename(name);
      return false;
    },
    [props.onRename, name]
  );

  return (
    <form className="name form" onSubmit={onRenameConfirmed}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        disabled={props.disabled}
        ref={(element) => element?.focus()}
      />
    </form>
  );
}
