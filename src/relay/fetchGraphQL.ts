import { Observable, PayloadData, RequestParameters } from "relay-runtime";
import { type Client, createClient, ExecutionResult, Sink } from "graphql-ws";
import { RelayObservable } from "relay-runtime/lib/network/RelayObservable";
import { Disposable } from "relay-runtime/lib/util/RelayRuntimeTypes";
import {
  GraphQLResponse,
  PayloadExtensions,
} from "relay-runtime/lib/network/RelayNetworkTypes";

export async function fetchGraphQL(
  request: RequestParameters,
  variables: Record<string, unknown> = {}
) {
  let endPoint = "/graphql";

  // for nodejs v > 17.5 fetch is included so we don't need to import it
  if (typeof window === "undefined") {
    endPoint = "http://localhost:5173/graphql";
  }

  try {
    const response = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: request.text!,
        variables,
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("Error fetching GraphQL", error);
  }
}

let wsClient: Client | undefined;

export function subscribe(
  operation: RequestParameters,
  variables: Record<string, unknown> = {}
): RelayObservable<GraphQLResponse> | Disposable {
  if (typeof window === "undefined") {
    // no subscribe on server
    return Observable.from([]);
  }

  if (!wsClient) {
    const isSecure = window.location.protocol === "https:";
    const wsProtocol = isSecure ? "wss:" : "ws:";
    const url = `${wsProtocol}//${window.location.host}/graphql`;

    wsClient = createClient({
      url,
    });
  }

  return Observable.create((sink) => {
    return wsClient!.subscribe(
      {
        operationName: operation.name,
        query: operation.text!,
        variables,
      },
      sink as unknown as Sink<ExecutionResult<PayloadData, PayloadExtensions>>
    );
  });
}
