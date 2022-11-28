/**
 * @generated SignedSource<<e826453d5f72be1d1a1e6b7c45d95df7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type ProjectListSubscriptionDeletedSubscription$variables = {
  connections: ReadonlyArray<string>;
};
export type ProjectListSubscriptionDeletedSubscription$data = {
  readonly projectDeleted: {
    readonly id: string;
  };
};
export type ProjectListSubscriptionDeletedSubscription = {
  response: ProjectListSubscriptionDeletedSubscription$data;
  variables: ProjectListSubscriptionDeletedSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectListSubscriptionDeletedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projectDeleted",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProjectListSubscriptionDeletedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projectDeleted",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1fce89c140e8c59848048f728a0df4bc",
    "id": null,
    "metadata": {},
    "name": "ProjectListSubscriptionDeletedSubscription",
    "operationKind": "subscription",
    "text": "subscription ProjectListSubscriptionDeletedSubscription {\n  projectDeleted {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "78c7699d2340eb7326fd8154d144a8d9";

export default node;
