import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const content = {
  skip: "Skip to main content",
  navLabel: "Main navigation",
  title: "Somiya El Mimouni",
  role: "Digital Accessibility Consultant",
  hero:
    "I audit web and mobile experiences against WCAG and EN 301 549, then translate findings into clear, usable fixes for teams.",
  ctaPrimary: "Contact me",
  ctaSecondary: "Explore services",
  nav: [
    ["home", "Home"],
    ["about", "About"],
    ["accessibility", "Accessibility"],
    ["skills", "Skills"],
    ["services", "Services"],
    ["projects", "Projects"],
    ["ai", "AI and Accessibility"],
    ["contact", "Contact"]
  ],
  sections: {
    about: {
      heading: "About",
      text:
        "I work in digital accessibility with a practical audit approach across web and mobile products. My work combines standards knowledge, assistive technology testing, and clear communication so teams can understand barriers and remove them."
    },
    accessibility: {
      heading: "Accessibility in practice",
      intro:
        "My audits look at the complete experience: structure, focus, contrast, assistive technology behavior, and the clarity of each recommended fix.",
      checks: [
        "Keyboard path",
        "Screen reader output",
        "Color contrast",
        "HTML semantics"
      ],
      tools: [
        "WCAG",
        "EN 301 549",
        "NVDA",
        "JAWS",
        "VoiceOver",
        "TalkBack",
        "axe",
        "Lighthouse"
      ]
    },
    skills: {
      heading: "Skills",
      intro:
        "Accessibility work is strongest when standards, tools, and real user impact are considered together.",
      groups: [
        {
          title: "Standards",
          items: ["WCAG", "EN 301 549", "Semantic HTML", "Responsive accessibility"]
        },
        {
          title: "Assistive technologies",
          items: ["NVDA", "JAWS", "VoiceOver", "TalkBack", "Keyboard navigation"]
        },
        {
          title: "Audit tools",
          items: ["axe", "Lighthouse", "Accessibility Insights", "Manual inspection"]
        }
      ]
    },
    services: {
      heading: "Services",
      items: [
        {
          title: "Web accessibility audits",
          text:
            "Detailed WCAG-based reviews for websites, design systems, and product flows."
        },
        {
          title: "Mobile accessibility audits",
          text:
            "iOS and Android checks with VoiceOver, TalkBack, touch targets, focus order, and mobile interaction patterns."
        },
        {
          title: "Remediation guidance",
          text:
            "Prioritized findings with plain-language impact, expected behavior, and practical implementation notes."
        },
        {
          title: "Team support",
          text:
            "Accessibility reviews, retesting, and collaborative support for designers, developers, and product teams."
        }
      ]
    },
    projects: {
      heading: "Projects",
      items: [
        {
          title: "Audit reports",
          text:
            "Structured reports that connect each issue to user impact, success criteria, evidence, and recommended fixes."
        },
        {
          title: "Accessible journeys",
          text:
            "Evaluation of critical user paths such as account creation, search, checkout, forms, and mobile navigation."
        },
        {
          title: "Retesting and validation",
          text:
            "Follow-up checks to confirm that accessibility fixes work with keyboard and assistive technology."
        }
      ]
    },
    ai: {
      heading: "AI and Accessibility",
      text:
        "AI can help teams review patterns, draft alternative text, summarize audit evidence, and accelerate documentation. It still needs human judgment, assistive technology testing, and direct attention to disabled users' needs."
    },
    contact: {
      heading: "Contact",
      text:
        "Interested in an accessibility audit or collaboration? Send a message and include the product type, platform, and timeline.",
      emailLabel: "Email Somiya El Mimouni",
      emailText: "testtest@example.com"
    }
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/"
    },
    {
      label: "GitHub",
      href: "https://github.com/"
    },
    {
      label: "Email",
      href: "mailto:testtest@example.com"
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/"
    }
  ]
};

function App() {
  const t = content;

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label={`${t.title}, ${t.role}`}>
            <span className="brand-mark" aria-hidden="true">
              SE
            </span>
            <span>
              <span className="brand-name">{t.title}</span>
              <span className="brand-role">{t.role}</span>
            </span>
          </a>

          <nav className="site-nav" aria-label={t.navLabel}>
            <ul>
              {t.nav.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero-section" aria-labelledby="home-title">
          <div className="hero-content">
            <p className="eyebrow">{t.role}</p>
            <h1 id="home-title">{t.title}</h1>
            <p className="hero-text">{t.hero}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#contact">
                {t.ctaPrimary}
              </a>
              <a className="button button-secondary" href="#services">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <aside className="hero-summary" aria-label="Accessibility audit focus">
            <h2>Accessibility audit focus</h2>
            <ul>
              <li>WCAG and EN 301 549 reviews</li>
              <li>Keyboard and screen reader testing</li>
              <li>Clear remediation guidance</li>
            </ul>
          </aside>
        </section>

        <TextSection id="about" heading={t.sections.about.heading} text={t.sections.about.text} />

        <section id="accessibility" className="section accessibility-section" aria-labelledby="accessibility-title">
          <div className="section-heading">
            <h2 id="accessibility-title">{t.sections.accessibility.heading}</h2>
            <p>{t.sections.accessibility.intro}</p>
          </div>
          <div className="accessibility-story">
            <Checklist title="What I check" items={t.sections.accessibility.checks} />
            <Checklist title="Tools and references" items={t.sections.accessibility.tools} />
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">{t.sections.skills.heading}</h2>
            <p>{t.sections.skills.intro}</p>
          </div>
          <div className="grid three-columns">
            {t.sections.skills.groups.map((group) => (
              <article className="card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <CardSection id="services" heading={t.sections.services.heading} items={t.sections.services.items} />
        <CardSection id="projects" heading={t.sections.projects.heading} items={t.sections.projects.items} />
        <TextSection id="ai" heading={t.sections.ai.heading} text={t.sections.ai.text} />

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div className="contact-intro">
            <h2 id="contact-title">{t.sections.contact.heading}</h2>
          </div>
          <div className="contact-content">
            <p>{t.sections.contact.text}</p>
            <a
              className="button button-primary contact-button"
              href={`mailto:${t.sections.contact.emailText}`}
              aria-label={t.sections.contact.emailLabel}
            >
              Contact me
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-labelledby="social-title">
        <nav className="social-links" aria-label="Social links">
          <h2 id="social-title">Social links</h2>
          <ul>
            {t.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href}>{social.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p>&copy; {new Date().getFullYear()} Somiya El Mimouni</p>
      </footer>
    </>
  );
}

function Checklist({ title, items }) {
  return (
    <section className="plain-list-block" aria-labelledby={`${title.toLowerCase().replaceAll(" ", "-")}-title`}>
      <h3 id={`${title.toLowerCase().replaceAll(" ", "-")}-title`}>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function TextSection({ id, heading, text }) {
  return (
    <section id={id} className="section text-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{heading}</h2>
      <p>{text}</p>
    </section>
  );
}

function CardSection({ id, heading, items }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <h2 id={`${id}-title`}>{heading}</h2>
      </div>
      <div className="grid">
        {items.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
