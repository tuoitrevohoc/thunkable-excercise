import Project from "../models/Project";
import pubsub from "../pubsub";

class ProjectService {
  projects: Project[] = [];
  lastId = 1;
  lastOrder = 1;

  async findProjects(): Promise<Project[]> {
    return this.projects;
  }

  async createProject(name: string): Promise<Project> {
    this.lastId++;
    this.lastOrder++;

    throw new Error("Can't create project");

    const project: Project = {
      id: this.lastId.toString(),
      name,
      createdAt: new Date(),
      order: this.lastOrder,
    };

    this.projects.push(project);
    await pubsub.publish("PROJECT_CREATED", { projectCreated: project });
    return project;
  }

  async updateProject(id: string, name: string): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }

    project.name = name;
    await pubsub.publish("PROJECT_UPDATED", { projectUpdated: project });
    return project;
  }

  async deleteProject(id: string): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }

    this.projects = this.projects.filter((project) => project.id !== id);
    await pubsub.publish("PROJECT_DELETED", { projectDeleted: project });
    return project;
  }

  async reorderProject(id: string, newOrder: number): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }

    project.order = newOrder;
    this.lastOrder = Math.max(this.lastOrder, newOrder);
    await pubsub.publish("PROJECT_UPDATED", { projectUpdated: project });
    return project;
  }
}

export default new ProjectService();
