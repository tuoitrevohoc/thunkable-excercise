import React from "react";
import "./FloatingButton.css";

interface Props {
  children: React.ReactNode;
  title: string;
  onClick?: () => any;
}

export default function FloatingButton({ children, onClick, title }: Props) {
  return (
    <div className="floating-button">
      <button onClick={onClick} aria-label={title} title={title}>
        {children}
      </button>
    </div>
  );
}
