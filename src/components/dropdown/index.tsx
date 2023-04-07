import React from "react";

import { IApp } from "../../types";
import "./styles.scss";

interface IDropdown {
  label: string;
  items: IApp[];
  selected: string;
  hasUpload?: boolean;
  onUpload?: () => void;
  onSelect: (id: string) => void;
}

export const Dropdown: React.FC<IDropdown> = ({
  label,
  items,
  onSelect,
  selected,
  onUpload,
  hasUpload,
}) => {
  return (
    <div className="dropdown">
      <button
        type="button"
        id="dropdownHoverButton"
        data-dropdown-trigger="hover"
        data-dropdown-toggle="dropdownHover"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600"
      >
        {items.filter((app) => app.appId === selected)?.[0]?.name || label}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div className="dropdown-content">
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-700"
          aria-labelledby="dropdownHoverButton"
        >
          {items.map((val) => {
            if (val.appId === selected) return null;
            return (
              <li key={val.appId}>
                <span
                  onClick={() => onSelect(val.appId)}
                  className="block px-4 py-2 dark:hover:text-gray-500"
                >
                  {val.name}
                </span>
              </li>
            );
          })}
          {hasUpload && (
            <li>
              <span
                onClick={onUpload}
                className="block px-4 py-2 dark:hover:text-gray-500"
              >
                Upload App
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
