import WarningIcon from "../icons/WarningIcon";
import "./WarningDialog.css";

interface Props {
  title: string;
  message: string;
  onConfirm(): any;
  onClose(): any;
}

export default function WarningDialog(props: Props) {
  return (
    <div className="dialog-background">
      <div className="warning-dialog">
        <div className="icon">
          <WarningIcon />
        </div>
        <div className="right-panel">
          <div className="title">{props.title}</div>
          <div className="message">{props.message}</div>
          <div className="actions">
            <button onClick={props.onClose} className="secondary button">
              No
            </button>
            <button onClick={props.onConfirm} className="primary button">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
