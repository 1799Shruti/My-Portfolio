import { Component } from "@angular/core";
import { HeroComponent } from "./sections/hero.component";
import { SkillsComponent } from "./sections/skills.component";
import { ExperienceComponent } from "./sections/experience.component";
import { ProjectsComponent } from "./sections/projects.component";
import { EducationComponent } from "./sections/education.component";
import { ContactComponent } from "./sections/contact.component";
import { CONTACT } from "./data";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  template: `
    <!-- Nav -->
    <header class="header">
      <div class="container header-inner">
        <a href="#top" class="brand font-display">
          <span class="text-primary">~/</span>shruti-bhandari
        </a>
        <nav class="nav">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Work Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="mailto:{{ email }}" class="btn btn-primary btn-sm">Hire me</a>
      </div>
    </header>

    <app-hero />
    <app-skills />
    <app-projects />
    <app-experience />
    <app-education />
    <app-contact />

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-inner">
        <span class="font-display">
          <span class="text-primary">~/</span>shruti-bhandari
        </span>
        <span>© 2026 Shruti Bhandari. Built with care.</span>
      </div>
    </footer>
  `,
})
export class AppComponent {
  readonly email = CONTACT.email;
}
