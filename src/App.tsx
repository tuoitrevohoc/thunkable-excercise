import { Suspense, useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./relay/RelayEnvironment";

import "./App.css";
import ProjectList from "./components/pages/ProjectList";

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
