/**
 * @generated SignedSource<<856b3a29ab976615bfa9b9c300ced170>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ProjectRowDeleteProjectMutation$variables = {
  connections: ReadonlyArray<string>;
  id: string;
};
export type ProjectRowDeleteProjectMutation$data = {
  readonly deleteProject: {
    readonly id: string;
  };
};
export type ProjectRowDeleteProjectMutation = {
  response: ProjectRowDeleteProjectMutation$data;
  variables: ProjectRowDeleteProjectMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
    "name": "ProjectRowDeleteProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "deleteProject",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "ProjectRowDeleteProjectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "deleteProject",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
    "cacheID": "2ab43355a281f0f684564e8a74de8046",
    "id": null,
    "metadata": {},
    "name": "ProjectRowDeleteProjectMutation",
    "operationKind": "mutation",
    "text": "mutation ProjectRowDeleteProjectMutation(\n  $id: ID!\n) {\n  deleteProject(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9aad213d10ea2b199663493866ae0688";

export default node;
