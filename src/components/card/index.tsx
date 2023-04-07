import React, { useCallback, useState } from "react";
import { Input } from "../inputs";

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

export const Card: React.FC<ICard> = ({
  sections,
  onClick,
  label,
  initialValues,
}) => {
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
    <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 m-8">
      {sections.map((section) => (
        <Input
          key={section.name}
          className="mb-3"
          label={section.label}
          name={section.name}
          onChange={onChange}
          value={localState[section.name]}
        />
      ))}
      <button
        type="button"
        onClick={onSubmit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        {label}
      </button>
    </form>
  );
};
