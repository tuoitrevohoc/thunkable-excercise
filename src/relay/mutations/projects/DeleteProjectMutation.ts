import { graphql, useMutation } from "~/relay";

export default function useDeleteProjectMutation() {
  return useMutation(graphql`
    mutation DeleteProjectMutation($id: ID!, $connections: [ID!]!) {
      deleteProject(id: $id) {
        id @deleteEdge(connections: $connections)
      }
    }
  `);
}
