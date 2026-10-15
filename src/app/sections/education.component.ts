import { Component } from "@angular/core";
import { EDUCATION } from "../data";

@Component({
  selector: "app-education",
  standalone: true,
  template: `
    <section id="education" class="section">
      <div class="container">
        <p class="section-label">// learning</p>
        <h2 class="section-title">Education</h2>
        @if (education.length) {
          <div class="jobs">
            @for (item of education; track item.qualification) {
              <article class="card job-card">
                <div class="job-head">
                  <h3 class="job-role">{{ item.qualification }}</h3>
                  <span class="job-period">{{ item.period }}</span>
                </div>
                <p class="job-summary">{{ item.institution }}</p>
                <p class="education-cgpa">CGPA: {{ item.cgpa }}</p>
              </article>
            }
          </div>
        } @else {
          <p class="education-empty">Education details have not been added yet.</p>
        }
      </div>
    </section>
  `,
})
export class EducationComponent {
  readonly education = EDUCATION;
}