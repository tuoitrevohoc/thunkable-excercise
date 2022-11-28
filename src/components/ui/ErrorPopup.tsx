import "./ErrorPopup.css";

interface Props {
  errorMessage: string | null;
  onDismiss(): any;
}

export default function ErrorPopup(props: Props) {
  if (props.errorMessage === null) {
    return null;
  }

  return (
    <div className="error-popup">
      <div className="message">{props.errorMessage}</div>
      <button
        onClick={props.onDismiss}
        className="secondary button"
        aria-label="Dismiss"
      >
        Dismiss
      </button>
    </div>
  );
}
