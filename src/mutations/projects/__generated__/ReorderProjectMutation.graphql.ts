/**
 * @generated SignedSource<<947f27e250acac80fef88a2522449f98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ReorderProjectMutation$variables = {
  id: string;
  order: number;
};
export type ReorderProjectMutation$data = {
  readonly reorderProject: {
    readonly id: string;
    readonly order: number;
  };
};
export type ReorderProjectMutation = {
  response: ReorderProjectMutation$data;
  variables: ReorderProjectMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "newOrder",
        "variableName": "order"
      }
    ],
    "concreteType": "Project",
    "kind": "LinkedField",
    "name": "reorderProject",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "order",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReorderProjectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReorderProjectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5ab4fc1ab9a043af785afa5497936cc9",
    "id": null,
    "metadata": {},
    "name": "ReorderProjectMutation",
    "operationKind": "mutation",
    "text": "mutation ReorderProjectMutation(\n  $id: ID!\n  $order: Float!\n) {\n  reorderProject(id: $id, newOrder: $order) {\n    id\n    order\n  }\n}\n"
  }
};
})();

(node as any).hash = "31dbf489f75928733febc9f0e5e9dca0";

export default node;
