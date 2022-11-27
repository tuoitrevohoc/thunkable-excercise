import Project from "../models/Project";

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

    const project: Project = {
      id: this.lastId.toString(),
      name,
      createdAt: new Date(),
      order: this.lastOrder,
    };

    this.projects.push(project);
    return project;
  }

  async updateProject(id: string, name: string): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }

    project.name = name;
    return project;
  }

  async deleteProject(id: string): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }

    this.projects = this.projects.filter((project) => project.id !== id);
    return project;
  }

  async reorderProject(id: string, newOrder: number): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }

    project.order = newOrder;
    this.lastOrder = Math.max(this.lastOrder, newOrder);
    return project;
  }
}

export default new ProjectService();
