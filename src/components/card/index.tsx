import React, { useCallback, useState } from "react";

interface Section {
  name: string;
  label: string;
}

interface ICard {
  label: string;
  initialValues?: any;
  sections: Section[];
  onClick: (data: any) => Promise<any>;
}

const Card: React.FC<ICard> = ({ sections, onClick, label, initialValues }) => {
  const [loading, setLoading] = useState(false);
  const [localState, setState] = useState(initialValues || {});

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { name, value } }) => {
      setState((prev: any) => ({ ...(prev || {}), [name]: value }));
    },
    []
  );

  const onSubmit = useCallback(() => {
    setLoading(true);
    onClick(localState).then((res) => {
      setLoading(false);
    });
  }, [localState, onClick]);

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-8">
      {sections.map((section) => (
        <div key={section.name}>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-90 "
          >
            {section.label}
          </label>
          <input
            required
            type="text"
            name={section.name}
            onChange={onChange}
            value={localState[section.name]}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      ))}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onSubmit}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {label}
        </button>
      </div>
    </form>
  );
};

export default Card;
