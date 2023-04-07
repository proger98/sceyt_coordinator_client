import React, { useCallback, useState } from "react";

import { PrimaryButton, SecondaryButton } from "../buttons";
import { IUploadData } from "../../types";
import { useApp } from "../../hooks";
import { Input } from "../inputs";
import "./styles.scss";

export const UploadAppModal: React.FC = () => {
  const { uploadApp } = useApp();
  const [state, setState] = useState<Partial<IUploadData>>({});

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value, files, name } }) => {
      setState((prev) => ({
        ...(prev || {}),
        [name]: name === "file" ? files?.[0] : value,
      }));
    },
    []
  );

  const onSubmit = useCallback(() => {
    const { file, name, appId, endpoint } = state;
    if (file?.name && name && appId && endpoint) {
      uploadApp({ file, name, appId, endpoint });
      // @ts-ignore
      window.setVisible?.(false);
    }
  }, [state, uploadApp]);

  return (
    <div
      className="overlay"
      onClick={() => {
        // @ts-ignore
        window.setVisible?.(false);
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Input
          className="mb-3"
          name={"name"}
          label="App Name"
          onChange={handleInput}
        />
        <Input
          className="mb-3"
          name={"appId"}
          label="App ID"
          onChange={handleInput}
        />
        <Input
          className="mb-3"
          name={"endpoint"}
          label="Endpoint"
          onChange={handleInput}
        />
        <Input
          className="mb-3"
          name={"file"}
          label="Private key"
          type="file"
          onChange={handleInput}
        />
        <div className="flex justify-evenly">
          <SecondaryButton
            label={"Cancel"}
            onClick={() => {
              // @ts-ignore
              window.setVisible?.(false);
            }}
          />
          <PrimaryButton label="Upload" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};
