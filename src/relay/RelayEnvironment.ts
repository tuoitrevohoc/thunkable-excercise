import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { fetchGraphQL } from "./fetchGraphQL";

export default new Environment({
  network: Network.create((params, variables) =>
    fetchGraphQL(params.text!, variables)
  ),
  store: new Store(new RecordSource()),
});
