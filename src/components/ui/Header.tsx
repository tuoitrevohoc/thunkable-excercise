import React from "react";
import Logo from "../assets/ThunkableBeaver.png";
import "./Header.css";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className="header">
      <div className="wrapper">
        <img src={Logo} className="logo" alt="Thunkable Logo" />
        <h1>{title}</h1>
      </div>
    </header>
  );
}
