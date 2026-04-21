const NAV_ITEMS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "applications.html", label: "Applications", key: "applications" },
  { href: "contact.html", label: "Contact", key: "contact" }
];

const getNavLinks = (currentPage) =>
  NAV_ITEMS.map(
    ({ href, label, key }) =>
      `<a class="nav-link${currentPage === key ? " is-active" : ""}" href="${href}">${label}</a>`
  ).join("");

export function StickyHeader(currentPage) {
  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Terralytics home">
          <img src="assets/images/terralytics-logo-horizontal.png" alt="Terralytics" />
        </a>
        <nav class="nav" aria-label="Primary">
          ${getNavLinks(currentPage)}
        </nav>
        <button class="mobile-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-mobile-toggle>
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Menu</span>
        </button>
      </div>
      <div class="container">
        <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden>
          ${getNavLinks(currentPage)}
        </nav>
      </div>
    </header>
  `;
}

export function HeroSection({ eyebrow, title, text, actions = "", brand = "" }) {
  return `
    <div class="hero-copy stack-lg reveal">
      ${brand}
      <span class="eyebrow">${eyebrow}</span>
      <h1 class="section-title wide">${title}</h1>
      <p class="lead">${text}</p>
      ${actions ? `<div class="button-row">${actions}</div>` : ""}
    </div>
  `;
}

export function SectionIntro({ eyebrow, title, text, wide = false }) {
  return `
    <div class="stack-md reveal">
      <span class="eyebrow">${eyebrow}</span>
      <h2 class="section-title${wide ? " wide" : ""}">${title}</h2>
      <p class="section-subtitle">${text}</p>
    </div>
  `;
}

export function FeatureCard({ icon, title, items, description = "" }) {
  const details = items.map((item) => `<li>${item}</li>`).join("");
  return `
    <article class="card feature-card reveal">
      <div class="card-icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3>
      ${description ? `<p>${description}</p>` : ""}
      <ul>${details}</ul>
    </article>
  `;
}

export function UseCaseCard({ icon, title, text, href = "applications.html" }) {
  return `
    <article class="card use-case-card reveal">
      <div class="card-icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
      <a class="application-link" href="${href}">Explore application</a>
    </article>
  `;
}

export function CTASection({ title, text, align = "", secondaryLink = "" }) {
  return `
    <section class="section compact">
      <div class="container">
        <div class="panel cta-band reveal ${align}">
          <div class="stack-md">
            <span class="eyebrow">Next Step</span>
            <h2 class="section-title wide">${title}</h2>
            <p class="section-subtitle">${text}</p>
            <div class="button-row">
              <a class="cta-button" href="contact.html">Discuss an Application</a>
              ${secondaryLink}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function ContactCard({ name, title, email, phone, bio }) {
  return `
    <article class="card contact-card reveal">
      <div class="profile">
        <div class="avatar" aria-hidden="true"></div>
        <div>
          <h3>${name}</h3>
          <p>${title}</p>
        </div>
      </div>
      <p>${bio}</p>
      <ul class="contact-meta">
        <li>${email}</li>
        <li>${phone}</li>
      </ul>
    </article>
  `;
}

export function Footer(currentPage) {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <p class="footer-copy">
          Terralytics is building a new category of climate risk intelligence by integrating modelling, AI, and secure data into decision-ready systems.
        </p>
        <nav class="footer-links" aria-label="Footer">
          ${getNavLinks(currentPage)}
        </nav>
      </div>
    </footer>
  `;
}
