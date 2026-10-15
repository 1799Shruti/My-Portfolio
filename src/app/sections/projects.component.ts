import { Component } from "@angular/core";
import { PROJECTS, Project, ProjectCategory } from "../data";

@Component({
  selector: "app-projects",
  standalone: true,
  template: `
    <section id="projects" class="section alt">
      <div class="container">
        <p class="section-label">// selected work</p>
        <h2 class="section-title">Projects</h2>
        <div class="project-filters" role="group" aria-label="Filter projects by category">
          @for (category of categories; track category) {
            <button
              class="project-filter"
              [class.active]="selectedCategory === category"
              [attr.aria-pressed]="selectedCategory === category"
              type="button"
              (click)="selectCategory(category)"
            >
              {{ category }}
            </button>
          }
        </div>
        <div class="projects-grid">
          @for (project of filteredProjects; track project.name) {
            <article class="card card-hover project-card">
              <p class="project-category">{{ project.category }}</p>
              <h3 class="project-title">{{ project.name }}</h3>
              <p class="project-summary">{{ project.summary }}</p>
              @if (project.focusAreas?.length) {
                <ul class="project-focus">
                  @for (area of project.focusAreas; track area) {
                    <li>{{ area }}</li>
                  }
                </ul>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly categories = [
    "All Projects",
    "Healthcare",
    "SaaS & Enterprise",
    "AI & Automation",
    "HR & Workforce",
    "Education",
  ] as const;
  selectedCategory: (typeof this.categories)[number] = "All Projects";

  get filteredProjects(): Project[] {
    if (this.selectedCategory === "All Projects") {
      return PROJECTS;
    }

    return PROJECTS.filter(
      (project) => project.category === (this.selectedCategory as ProjectCategory),
    );
  }

  selectCategory(category: (typeof this.categories)[number]): void {
    this.selectedCategory = category;
  }
}