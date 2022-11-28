import React, { Suspense, useMemo } from "react";
import RelayEnvironment from "./relay/RelayEnvironment";
import { RelayEnvironmentProvider } from "~/relay";

import "./App.css";
import ErrorBoundary from "~/components/ui/ErrorBoundary";

const ProjectList = React.lazy(() => import("./components/pages/ProjectList"));

function App() {
  const environment = useMemo(() => RelayEnvironment(), []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading..</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}

export default App;
