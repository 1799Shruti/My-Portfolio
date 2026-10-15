import { Component } from "@angular/core";
import { CONTACT } from "../data";

@Component({
  selector: "app-contact",
  standalone: true,
  template: `
    <section id="contact" class="section alt contact">
      <div class="container">
        <p class="section-label">// let's talk</p>
        <h2 class="section-title">Let's build something together</h2>
        <p class="contact-lead">
          I'm open to new opportunities and interesting projects. Reach out anytime.
        </p>
        <div class="contact-actions">
          <a href="mailto:{{ email }}" class="btn btn-primary">{{ email }}</a>
          <a [href]="phoneHref" class="btn btn-outline">{{ phone }}</a>
          <a [href]="linkedin" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly email = CONTACT.email;
  readonly phone = CONTACT.phone;
  readonly phoneHref = CONTACT.phoneHref;
  readonly linkedin = CONTACT.linkedin;
}
