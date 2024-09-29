import React from "react";

interface HeaderProps {
  title: string;
  button_name: string;
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, button_name, onClick }) => {
  return (
    <div className="p-4 bg-white text-purple-950 flex flex-row justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>
      <button
        onClick={onClick}
        className="bg-purple-400 text-indigo-950 rounded p-2 transition-all hover:bg-purple-800 hover:text-white"
      >
        + | {button_name}
      </button>
    </div>
  );
};

export default Header;
