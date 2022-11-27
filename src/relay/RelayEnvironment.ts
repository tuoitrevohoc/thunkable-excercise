import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { fetchGraphQL, subscribe } from "./fetchGraphQL";

export default () =>
  new Environment({
    network: Network.create(fetchGraphQL, subscribe),
    store: new Store(new RecordSource()),
  });
