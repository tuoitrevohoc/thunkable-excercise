import { graphql, useMutation } from "react-relay";

export default function useCreateProjectMutation() {
  return useMutation(graphql`
    mutation CreateProjectMutation($name: String!, $connection: [ID!]!) {
      createProject(name: $name)
        @appendNode(connections: $connection, edgeTypeName: "ProjectEdge") {
        id
        ...ProjectRow_project
      }
    }
  `);
}
