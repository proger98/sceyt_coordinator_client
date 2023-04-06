import React, { useCallback } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { AppLayout, Dropdown } from "../components";
import { MainPage } from "../pages";

const AppRoutes: React.FC = () => {
  const onError = useCallback((e: Error) => {
    console.log({ appError: e });
  }, []);

  return (
    <ErrorBoundary onError={onError} fallback={<div />}>
      <Routes>
        <Route
          element={
            <AppLayout
              headerRight={
                <Dropdown
                  items={[]}
                  label="Select app"
                  onSelect={() => undefined}
                />
              }
            >
              <Outlet />
            </AppLayout>
          }
        >
          <Route index element={<MainPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
