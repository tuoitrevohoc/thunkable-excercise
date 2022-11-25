import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./relay/RelayEnvironment";

import "./App.css";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<div>Loading..</div>}>
        <ProjectList />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
