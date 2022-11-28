import React, { Suspense, useMemo } from "react";
import RelayEnvironment from "./relay/RelayEnvironment";
import { RelayEnvironmentProvider } from "~/relay";

import "./App.css";

const ProjectList = React.lazy(() => import("./components/pages/ProjectList"));

function App() {
  const environment = useMemo(() => RelayEnvironment(), []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<div>Loading..</div>}>
        <ProjectList />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
