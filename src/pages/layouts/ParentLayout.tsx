import { Outlet } from "react-router-dom";
import { SWRConfig } from "swr";
import { ErrorBoundaryComponent } from "../../utilities/ErrorBoundary";
import { LiffInit } from "../../utilities/LiffInit";

export const ParentLayout = () => {
  return (
    <>
      <section className="">
        <main>
          <ErrorBoundaryComponent>
            <SWRConfig>
              <LiffInit>
                <Outlet />
              </LiffInit>
            </SWRConfig>
          </ErrorBoundaryComponent>
        </main>
      </section>
    </>
  );
};
