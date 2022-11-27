import { graphql, useSubscription } from "react-relay";
import { useMemo } from "react";

export default function useProjectListSubscription(connectionKey: string) {
  const projectCreatedConfig = useMemo(
    () => ({
      subscription: graphql`
        subscription ProjectListSubscriptionCreatedSubscription(
          $connections: [ID!]!
        ) {
          projectCreated
            @appendNode(
              connections: $connections
              edgeTypeName: "ProjectEdge"
            ) {
            id
            order
            ...ProjectRow_project
          }
        }
      `,
      variables: {
        connections: [connectionKey],
      },
    }),
    [connectionKey]
  );

  const projectDeletedConfig = useMemo(
    () => ({
      subscription: graphql`
        subscription ProjectListSubscriptionDeletedSubscription(
          $connections: [ID!]!
        ) {
          projectDeleted {
            id @deleteEdge(connections: $connections)
          }
        }
      `,
      variables: {
        connections: [connectionKey],
      },
    }),
    [connectionKey]
  );

  const projectUpdatedConfig = useMemo(
    () => ({
      subscription: graphql`
        subscription ProjectListSubscriptionUpdatedSubscription {
          projectUpdated {
            __typename
            id
            order
            ...ProjectRow_project
          }
        }
      `,
      variables: {},
    }),
    []
  );

  useSubscription(projectCreatedConfig);
  useSubscription(projectUpdatedConfig);
  useSubscription(projectDeletedConfig);
}
