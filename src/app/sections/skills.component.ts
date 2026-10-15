import { Component } from "@angular/core";
import { SKILLS } from "../data";

@Component({
  selector: "app-skills",
  standalone: true,
  template: `
    <section id="skills" class="section alt">
      <div class="container">
        <p class="section-label">// tech stack</p>
        <h2 class="section-title">Skills &amp; Technologies</h2>
        <div class="skills-grid">
          @for (skill of skills; track skill.name) {
            <div class="card card-hover skill-card">
              <div class="skill-head">
                <h3 class="skill-name">{{ skill.name }}</h3>
                <span class="tag">{{ skill.category }}</span>
              </div>
              <p class="skill-desc">{{ skill.description }}</p>
            </div>
          }

          <!-- Terminal card -->
          <div class="card card-hover skill-card terminal">
            <div class="dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <pre class="terminal-pre">const shruti = &#123;
  role: "Full Stack Dev",
  exp: "5 years",
  stack: ["MEAN", "Java"],
  openToWork: true,
&#125;;</pre>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly skills = SKILLS;
}
