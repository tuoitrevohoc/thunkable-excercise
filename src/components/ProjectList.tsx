import { graphql, useLazyLoadQuery } from "react-relay";
import { ProjectListQuery } from "./__generated__/ProjectListQuery.graphql";
export const query = graphql`
  query ProjectListQuery {
    projects {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export default function ProjectList() {
  const { projects } = useLazyLoadQuery<ProjectListQuery>(query, {});

  return (
    <div>
      <h1>Projects</h1>
      {projects.edges.map((edge) => (
        <div key={edge.node.id}>
          <div>{edge.node.name}</div>
        </div>
      ))}
    </div>
  );
}
