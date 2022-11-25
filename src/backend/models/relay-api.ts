export interface CreateProjectInput {
  name: string;
}

export interface UpdateProjectInput {
  id: string;
  name: string;
}

export interface DeleteProjectInput {
  id: string;
}

export interface ReorderProjectInput {
  id: string;
  newOrder: number;
}

export interface Edge<Data> {
  node: Data;
  cursor: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Indexable {
  id: string;
}

export interface Connection<Data extends Indexable> {
  edges: Edge<Data>[];
  pageInfo: PageInfo;
}

export function convertToConnection<Data extends Indexable>(items: Data[]) {
  if (items.length === 0) {
    return {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: "",
        endCursor: "",
      },
    };
  }

  return {
    edges: items.map((item) => ({
      node: item,
      cursor: item.id,
    })),
    pageInfo: {
      /// support pagination later
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: items[0].id,
      endCursor: items[items.length - 1].id,
    },
  };
}
