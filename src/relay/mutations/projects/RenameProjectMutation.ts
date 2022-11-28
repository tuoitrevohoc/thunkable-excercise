import { graphql, useMutation } from "~/relay";

export default function useRenameProjectMutation() {
  return useMutation(graphql`
    mutation RenameProjectMutation($id: ID!, $name: String!) {
      updateProject(id: $id, name: $name) {
        id
        ...ProjectRow_project
      }
    }
  `);
}
