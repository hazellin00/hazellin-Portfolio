<template>
  <div class="page-container">
    <main class="project-page">
      <section class="project-hero">
        <div class="project-hero-media">
          <img src="@/assets/images/gigadevice-graduation.jpg" alt="GigaDevice Internship Germany" />
        </div>
        <div class="project-hero-text">
          <p class="breadcrumb">
            <span class="crumb"><router-link to="/projects">Projects</router-link></span>
            <span class="crumb-sep">/</span>
            <span class="crumb">Internship</span>
          </p>
          <span class="path-pill">Tech &amp; Operations Internship</span>
          <h1>GigaDevice Semiconductor — Internship, Germany</h1>
          <p class="project-subtitle">
            Interned at GigaDevice Semiconductor's European operations in Germany, supporting business development,
            client communication, and technical product documentation for the European market.
          </p>
          <dl class="project-meta">
            <div>
              <dt>Company</dt>
              <dd>GigaDevice Semiconductor</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Business Development Intern</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Germany</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>Internship</dd>
            </div>
          </dl>
          <div class="hero-actions">
            <router-link to="/projects" class="btn ghost">← Back to projects</router-link>
          </div>
        </div>
      </section>

      <section class="project-summary">
        <div class="summary-main">
          <p class="eyebrow">Project Overview</p>
          <h2>European Market Support for a Global Semiconductor Brand</h2>
          <p class="summary-tagline">Bridging technology and business at a global semiconductor company's European hub.
          </p>
          <div class="summary-highlight">
            <span class="summary-label">Context</span>
            <p>
              GigaDevice is a leading Chinese semiconductor company. During my internship at their German office, I
              supported the European business development team with client outreach, product documentation localisation,
              and market research to help expand the company's footprint in Europe.
            </p>
          </div>
        </div>
        <div class="summary-side">
          <article class="summary-chip">
            <h3>My Role</h3>
            <p>Supported business development activities including client communication, market research, and technical
              documentation for European semiconductor clients.</p>
          </article>
          <article class="summary-chip">
            <h3>Key Responsibilities</h3>
            <ul>
              <li>Assisted with European client outreach and follow-up communications.</li>
              <li>Researched European semiconductor market trends and competitor landscape.</li>
              <li>Localised technical product documentation for the European market.</li>
            </ul>
          </article>
          <article class="summary-chip">
            <h3>Outcome</h3>
            <ul>
              <li>Gained cross-cultural B2B experience in the tech industry.</li>
              <li>Contributed to expanded client pipeline for the European office.</li>
            </ul>
          </article>
        </div>
      </section>

      <div class="embed-wrapper">
    <embed
    src="/hazellin-Portfolio/giga_device/GigaDevice+Semiconductor+Inc-e-Commerce+Marketing+and+Logistics+Intern+(1).pdf" width="100%" height="480">
    </embed>
</div>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  font-size: 1.05rem;
  background: radial-gradient(circle at top left, #e2f0ff, #f5f0ff 45%, #fdfcff 80%);
}

.project-page {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3.5rem;
}

h1,
h2,
h3 {
  font-family: "Libre Bodoni", "Times New Roman", serif;
  color: #020617;
  margin-top: 0;
}

.eyebrow {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6366f1;
  margin: 0 0 0.4rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.3rem;
  border-radius: 999px;
  font-size: 1rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.12s, box-shadow 0.18s;
  text-decoration: none;
}

.btn.ghost {
  background: #ffffff;
  color: #0f172a;
  border-color: rgba(148, 163, 184, 0.8);
}

.btn.ghost:hover {
  background: #eef2ff;
  box-shadow: 0 12px 30px rgba(148, 163, 184, 0.6);
  transform: translateY(-1px);
}

.project-hero {
  display: grid;
  grid-template-columns: minmax(0, 3.5fr) minmax(0, 3fr);
  gap: 2rem;
  align-items: center;
  margin-bottom: 2.8rem;
}

.project-hero-media img {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 22px 55px rgba(148, 163, 184, 0.7);
}

.project-hero-text h1 {
  margin: 0.4rem 0 0.7rem;
  font-size: clamp(2rem, 3.5vw, 2.8rem);
}

.project-subtitle {
  margin: 0 0 1.1rem;
  color: #6b7280;
  line-height: 1.7;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 0.4rem;
}

.crumb-sep {
  margin: 0 0.25rem;
}

.crumb a {
  text-decoration: underline;
}

.path-pill {
  display: inline-flex;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  background: #eef2ff;
  border: 1px solid rgba(129, 140, 248, 0.8);
}

.project-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 1.5rem;
  margin: 1rem 0 1.3rem;
  font-size: 0.95rem;
}

.project-meta dt {
  font-weight: 600;
  color: #4b5563;
}

.project-meta dd {
  margin: 0.1rem 0 0;
  color: #6b7280;
}

.project-summary {
  margin: 3rem 0 2.5rem;
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 2fr);
  gap: 2rem;
  align-items: flex-start;
}

.project-summary h2 {
  margin: 0.3rem 0 0.8rem;
  font-size: 2rem;
}

.summary-tagline {
  margin: 0 0 1.2rem;
  font-size: 1.1rem;
  color: #4b5563;
}

.summary-highlight {
  position: relative;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow: 0 16px 40px rgba(148, 163, 184, 0.5);
}

.summary-label {
  display: inline-flex;
  padding: 0.15rem 0.7rem;
  border-radius: 999px;
  font-size: 1rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background: #eef2ff;
  border: 1px solid rgba(129, 140, 248, 0.8);
  color: #4f46e5;
  margin-bottom: 0.4rem;
}

.summary-highlight p {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #374151;
}

.summary-side {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.summary-chip {
  background: rgba(255, 255, 255, 0.96);
  border-radius: 18px;
  padding: 1.1rem 1.2rem 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.55);
  box-shadow: 0 12px 30px rgba(148, 163, 184, 0.45);
  font-size: 0.95rem;
  color: #4b5563;
}

.summary-chip h3 {
  margin: 0 0 0.4rem;
  font-size: 1.1rem;
}

.summary-chip p {
  margin: 0;
}

.summary-chip ul {
  margin: 0;
  padding-left: 1.1rem;
}

.summary-chip li {
  margin-bottom: 0.25rem;
}

.embed-wrapper {
  margin-top: 1rem;
  padding: 1.1rem 1.2rem;
  border-radius: 18px;
  background: #ffffff;
  border: 1px dashed rgba(148, 163, 184, 0.8);
  font-size: 0.85rem;
  color: #6b7280;
}

@media (min-width: 900px) {
  .zoom-card {
    flex: 0 0 calc(50% - 0.75rem);
    max-width: calc(50% - 0.75rem);
  }
}

@media (max-width: 900px) {
  .project-hero {
    grid-template-columns: 1fr;
  }

  .project-summary {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .project-page {
    padding-inline: 1.25rem;
  }
}
</style>
