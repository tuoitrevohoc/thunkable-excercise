/**
 * @generated SignedSource<<81c325d18d697d8bb39c386232a515d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateProjectMutation$variables = {
  connection: ReadonlyArray<string>;
  name: string;
};
export type CreateProjectMutation$data = {
  readonly createProject: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ProjectRow_project">;
  };
};
export type CreateProjectMutation = {
  response: CreateProjectMutation$data;
  variables: CreateProjectMutation$variables;
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
    "name": "CreateProjectMutation",
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
    "name": "CreateProjectMutation",
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
    "cacheID": "fea9e58952f673e3f95084bac60c8bea",
    "id": null,
    "metadata": {},
    "name": "CreateProjectMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProjectMutation(\n  $name: String!\n) {\n  createProject(name: $name) {\n    id\n    ...ProjectRow_project\n  }\n}\n\nfragment ProjectRow_project on Project {\n  id\n  name\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "fab3bb929dbce865c3e8780735c21882";

export default node;
