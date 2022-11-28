/**
 * @generated SignedSource<<f2274c825668b35cb5f8bd54f1307b77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProjectListSubscriptionCreatedSubscription$variables = {
  connections: ReadonlyArray<string>;
};
export type ProjectListSubscriptionCreatedSubscription$data = {
  readonly projectCreated: {
    readonly id: string;
    readonly order: number;
    readonly " $fragmentSpreads": FragmentRefs<"ProjectRow_project">;
  };
};
export type ProjectListSubscriptionCreatedSubscription = {
  response: ProjectListSubscriptionCreatedSubscription$data;
  variables: ProjectListSubscriptionCreatedSubscription$variables;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "order",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProjectListSubscriptionCreatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projectCreated",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProjectRow_project"
          }
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
    "name": "ProjectListSubscriptionCreatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "projectCreated",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "filters": null,
        "handle": "appendNode",
        "key": "",
        "kind": "LinkedHandle",
        "name": "projectCreated",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          },
          {
            "kind": "Literal",
            "name": "edgeTypeName",
            "value": "ProjectEdge"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "8b950ffcb5b08e83c3c0b7551a306b8b",
    "id": null,
    "metadata": {},
    "name": "ProjectListSubscriptionCreatedSubscription",
    "operationKind": "subscription",
    "text": "subscription ProjectListSubscriptionCreatedSubscription {\n  projectCreated {\n    id\n    order\n    ...ProjectRow_project\n  }\n}\n\nfragment ProjectRow_project on Project {\n  id\n  name\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "c5f8c77114753be2cae875c1a47ed96e";

export default node;
