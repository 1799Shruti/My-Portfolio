import { Component } from "@angular/core";
import { EXPERIENCE } from "../data";

@Component({
  selector: "app-experience",
  standalone: true,
  template: `
    <section id="experience" class="section">
      <div class="container">
        <p class="section-label">// career</p>
        <h2 class="section-title">Work Experience</h2>
        <div class="jobs">
          @for (job of experience; track job.role) {
            <article class="card card-hover job-card">
              <div class="job-head">
                <h3 class="job-role">{{ job.role }}</h3>
                <span class="job-period">{{ job.period }}</span>
              </div>
              <p class="job-company">{{ job.company }}</p>
              <ul class="job-responsibilities">
                @for (responsibility of job.responsibilities; track responsibility) {
                  <li>{{ responsibility }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;
}
