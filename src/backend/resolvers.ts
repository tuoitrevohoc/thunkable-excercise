import projectService from "./services/ProjectService";
import Project from "./models/Project";
import {
  convertToConnection,
  CreateProjectInput,
  DeleteProjectInput,
  ReorderProjectInput,
  UpdateProjectInput,
} from "./models/relay-api";
import pubSub from "./pubsub";

export const resolvers = {
  Query: {
    projects() {
      return projectService.findProjects().then(convertToConnection);
    },
  },
  Mutation: {
    createProject(_: any, { name }: CreateProjectInput): Promise<Project> {
      return projectService.createProject(name);
    },
    updateProject(_: any, { id, name }: UpdateProjectInput): Promise<Project> {
      return projectService.updateProject(id, name);
    },
    deleteProject(_: any, { id }: DeleteProjectInput): Promise<Project> {
      return projectService.deleteProject(id);
    },
    reorderProject(
      _: any,
      { id, newOrder }: ReorderProjectInput
    ): Promise<Project> {
      return projectService.reorderProject(id, newOrder);
    },
  },
  Subscription: {
    projectCreated: {
      subscribe: () => pubSub.asyncIterator("PROJECT_CREATED"),
    },
    projectDeleted: {
      subscribe: () => pubSub.asyncIterator("PROJECT_DELETED"),
    },
    projectUpdated: {
      subscribe: () => pubSub.asyncIterator("PROJECT_UPDATED"),
    },
  },
};
