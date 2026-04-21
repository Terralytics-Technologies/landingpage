import { StickyHeader, Footer } from "./components.js";

const page = document.body.dataset.page;
const headerTarget = document.querySelector("[data-site-header]");
const footerTarget = document.querySelector("[data-site-footer]");
const pageShell = document.querySelector(".page-shell");

if (pageShell && !pageShell.querySelector(".ambient-climate")) {
  pageShell.insertAdjacentHTML("afterbegin", '<div class="ambient-climate" aria-hidden="true"></div>');
}

if (headerTarget) {
  headerTarget.innerHTML = StickyHeader(page);
}

if (footerTarget) {
  footerTarget.innerHTML = Footer(page);
}

const header = document.querySelector("[data-header]");
const mobileToggle = document.querySelector("[data-mobile-toggle]");
const mobileNav = document.getElementById("mobile-nav");

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 12);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const open = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -10% 0px"
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent =
      "Thanks for outlining your application. This placeholder form is ready to be connected to your preferred email or CRM workflow.";
  });
}
