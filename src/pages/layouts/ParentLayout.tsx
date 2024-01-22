import { Outlet } from "react-router-dom";

import { ErrorBoundaryComponent } from "@utilities/ErrorBoundary";
import { LiffInit } from "@utilities/LiffInit";
import { SWRConfigComponent } from "@utilities/SwrConfig";

export const ParentLayout = () => {
  return (
    <>
      <section className="">
        <main>
          <ErrorBoundaryComponent>
            <SWRConfigComponent>
              <LiffInit>
                <Outlet />
              </LiffInit>
            </SWRConfigComponent>
          </ErrorBoundaryComponent>
        </main>
      </section>
    </>
  );
};
