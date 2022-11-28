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
        <div className="content">
          <div className="icon">
            <WarningIcon />
          </div>
          <div className="right-panel">
            <div className="title">{props.title}</div>
            <div className="message">{props.message}</div>
          </div>
        </div>
        <div className="actions">
          <button
            onClick={props.onClose}
            className="secondary button"
            aria-label="Cancel this action"
          >
            No
          </button>
          <button
            onClick={props.onConfirm}
            className="primary button"
            aria-label="Confirm this action"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
