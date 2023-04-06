import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface Props {
  headerRight?: React.ReactNode;
}

export const AppHeader: React.FC<Props> = ({ headerRight }) => {
  return (
    <header>
      <div className="container">
        <div className="data-wrap">
          <div className="logo">
            <Link to="/">
              <p>Sceyt</p>
            </Link>
          </div>
          {headerRight}
        </div>
      </div>
    </header>
  );
};
