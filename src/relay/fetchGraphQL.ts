export async function fetchGraphQL(
  query: string,
  variables: Record<string, unknown> = {}
) {
  let endPoint = "/graphql";
  if (typeof window === "undefined") {
    endPoint = "http://localhost:5173/graphql";
  }

  try {
    const response = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("Error fetching GraphQL", error);
  }
}
