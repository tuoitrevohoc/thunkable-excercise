import { graphql, useMutation } from "react-relay";

export default function useReorderProjectMutation() {
  return useMutation(graphql`
    mutation ReorderProjectMutation($id: ID!, $order: Float!) {
      reorderProject(id: $id, newOrder: $order) {
        id
        order
      }
    }
  `);
}
