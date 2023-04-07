import React from "react";

interface IButton {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton: React.FC<IButton> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export const SecondaryButton: React.FC<IButton> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg"
    >
      {label}
    </button>
  );
};
