/**
 * @generated SignedSource<<d152f7abf3eafa6860fe6411809713f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProjectListSubscription$variables = {
  connections: ReadonlyArray<string>;
};
export type ProjectListSubscription$data = {
  readonly projectCreated: {
    readonly id: string;
    readonly order: number;
    readonly " $fragmentSpreads": FragmentRefs<"ProjectRow_project">;
  };
};
export type ProjectListSubscription = {
  response: ProjectListSubscription$data;
  variables: ProjectListSubscription$variables;
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
    "name": "ProjectListSubscription",
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
    "name": "ProjectListSubscription",
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
    "cacheID": "98db7d0d76591020748675a38b75ba55",
    "id": null,
    "metadata": {},
    "name": "ProjectListSubscription",
    "operationKind": "subscription",
    "text": "subscription ProjectListSubscription {\n  projectCreated {\n    id\n    order\n    ...ProjectRow_project\n  }\n}\n\nfragment ProjectRow_project on Project {\n  id\n  name\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "394a76d4fcac287efc0d52a218d3f863";

export default node;
