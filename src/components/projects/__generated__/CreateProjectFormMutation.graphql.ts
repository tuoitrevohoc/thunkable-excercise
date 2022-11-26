/**
 * @generated SignedSource<<5438429d5aff0ae988f8c44d15f136d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateProjectFormMutation$variables = {
  connection: ReadonlyArray<string>;
  name: string;
};
export type CreateProjectFormMutation$data = {
  readonly createProject: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ProjectRow_project">;
  };
};
export type CreateProjectFormMutation = {
  response: CreateProjectFormMutation$data;
  variables: CreateProjectFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connection"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateProjectFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "createProject",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProjectRow_project"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateProjectFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "createProject",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "appendNode",
        "key": "",
        "kind": "LinkedHandle",
        "name": "createProject",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connection"
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
    "cacheID": "5d6635cb951e43bba60b43fe12dd47ae",
    "id": null,
    "metadata": {},
    "name": "CreateProjectFormMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProjectFormMutation(\n  $name: String!\n) {\n  createProject(name: $name) {\n    id\n    ...ProjectRow_project\n  }\n}\n\nfragment ProjectRow_project on Project {\n  id\n  name\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "3aa7759f1f0d8ea6a87136765f691dd7";

export default node;
