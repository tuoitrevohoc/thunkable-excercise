/**
 * @generated SignedSource<<89119203726c1f3086486f51f8263618>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProjectRow_project$data = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "ProjectRow_project";
};
export type ProjectRow_project$key = {
  readonly " $data"?: ProjectRow_project$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProjectRow_project">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProjectRow_project",
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
  "type": "Project",
  "abstractKey": null
};

(node as any).hash = "b3f6f9baf249071f360cac45f43b234e";

export default node;
