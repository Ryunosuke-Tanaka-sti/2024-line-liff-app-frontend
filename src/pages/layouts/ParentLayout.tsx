import { Outlet } from "react-router-dom";
import { SWRConfig } from "swr";
import { RouterLiffInit } from "../../router/RouterLiffInit";
import { ErrorBoundaryComponent } from "../../utilities/ErrorBoundary";

export const ParentLayout = () => {
  return (
    <>
      <section className="">
        <main>
          <ErrorBoundaryComponent>
            <SWRConfig>
              <RouterLiffInit>
                <Outlet />
              </RouterLiffInit>
            </SWRConfig>
          </ErrorBoundaryComponent>
        </main>
      </section>
    </>
  );
};
