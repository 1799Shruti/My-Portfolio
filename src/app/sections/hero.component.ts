import { Component } from "@angular/core";
import { CONTACT, PROFILE } from "../data";

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section id="top" class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="section-label">SENIOR ANGULAR DEVELOPER</p>
          <h1 class="hero-title">Hi, I'm Shruti Bhandari.</h1>
          <p class="hero-lead">{{ profile.introduction }}</p>
          <ul class="hero-technologies" aria-label="Technologies">
            @for (technology of profile.technologies; track technology) {
              <li>{{ technology }}</li>
            }
          </ul>
          <div class="hero-actions">
            @if (hasCv) {
              <a class="btn btn-primary" [href]="cvPath" download="Shruti_Bhandari_CV.pdf">
                Download CV <span aria-hidden="true">&#8595;</span>
              </a>
            } @else {
              <button
                class="btn btn-primary"
                type="button"
                disabled
                aria-describedby="cv-status"
              >Download CV</button>
            }
            <a href="#contact" class="btn btn-outline">Contact Me</a>
          </div>
          @if (!hasCv) {
            <p id="cv-status" class="asset-status">
              Add your PDF at public/assets/shruti-bhandari-cv.pdf to enable downloads.
            </p>
          }
          <address class="hero-contact" aria-label="Contact information">
            <a [href]="phoneHref">
              <span>Phone</span>
              <strong>{{ phone }}</strong>
            </a>
            <a [href]="'mailto:' + email">
              <span>Email</span>
              <strong>{{ email }}</strong>
            </a>
            <a [href]="linkedin" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <strong>View Profile</strong>
            </a>
          </address>
        </div>

        <div class="photo-frame">
          <div class="photo-box">
            @if (hasProfilePhoto) {
              <img
                class="photo-img"
                src="./assets/my_profile_photo.jpeg"
                alt="Shruti Bhandari — Senior Angular Developer"
              />
            } @else {
              <div class="photo-placeholder">
                <span class="photo-initials" aria-hidden="true">SB</span>
                <p>Profile photo placeholder</p>
                <small>Place your photo at public/assets/shruti-bhandari-photo.jpg</small>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly profile = PROFILE;
  readonly email = CONTACT.email;
  readonly phone = CONTACT.phone;
  readonly phoneHref = CONTACT.phoneHref;
  readonly linkedin = CONTACT.linkedin;
  readonly cvPath = "./assets/shruti-bhandari-cv.pdf";
  readonly hasCv = false;
  readonly hasProfilePhoto = true;
}
