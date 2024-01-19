import { Outlet } from "react-router-dom";
import { RouterLiffInit } from "../../router/RouterLiffInit";
import { ErrorBoundaryComponent } from "../../utilities/ErrorBoundary";

export const ParentLayout = () => {
  return (
    <>
      <section className="">
        <main>
          <ErrorBoundaryComponent>
            <RouterLiffInit>
              <Outlet />
            </RouterLiffInit>
          </ErrorBoundaryComponent>
        </main>
      </section>
    </>
  );
};
