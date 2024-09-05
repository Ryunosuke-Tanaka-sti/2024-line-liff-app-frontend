import { Outlet } from "react-router-dom";

import { AxiosConfig } from "@utilities/AxiosConfig";
import { ErrorBoundaryComponent } from "@utilities/ErrorBoundary";
import { LiffInit } from "@utilities/LiffInit";
import { SWRConfigComponent } from "@utilities/SwrConfig";

export const ParentLayout = () => {
  return (
    <>
      <section className="relative">
        <main>
          <ErrorBoundaryComponent>
            <SWRConfigComponent>
              <LiffInit>
                <AxiosConfig>
                  <Outlet />
                </AxiosConfig>
              </LiffInit>
            </SWRConfigComponent>
          </ErrorBoundaryComponent>
        </main>
      </section>
    </>
  );
};
