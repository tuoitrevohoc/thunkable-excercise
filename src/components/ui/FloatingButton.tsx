import React from "react";
import "./FloatingButton.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => any;
}

export default function FloatingButton({ children, onClick }: Props) {
  return (
    <div className="floating-button">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
