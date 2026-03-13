<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="page-container">
    <main class="project-page">
      <section class="project-hero">
        <div class="project-hero-media">
          <img src="@/assets/images/modular-agency.png" alt="Modular Agency Project" />
        </div>
        <div class="project-hero-text">
          <p class="breadcrumb">
            <span class="crumb"><router-link to="/projects">Projects</router-link></span>
            <span class="crumb-sep">/</span>
            <span class="crumb">Marketing &amp; Branding</span>
          </p>
          <span class="path-pill">Marketing &amp; Brand Strategy</span>
          <h1>Modular Agency × Acer — Brand &amp; Marketing Project</h1>
          <p class="project-subtitle">
            Collaborated with Modular Agency on brand strategy and marketing campaigns for Acer, developing creative
            briefs, campaign concepts, and go-to-market materials.
          </p>
          <dl class="project-meta">
            <div>
              <dt>Agency</dt>
              <dd>Modular Agency</dd>
            </div>
            <div>
              <dt>Client</dt>
              <dd>Acer</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Brand &amp; Marketing Strategist</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Taiwan</dd>
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
          <h2>Brand Strategy for a Global Tech Client</h2>
          <p class="summary-tagline">Translating Acer's product strengths into campaigns that resonate with Taiwanese
            consumers.</p>
          <div class="summary-highlight">
            <span class="summary-label">Context</span>
            <p>
              Working within Modular Agency's creative team, I contributed to brand strategy and campaign planning for
              Acer. The work spanned market research, creative direction, and campaign execution across digital and
              physical touchpoints.
            </p>
          </div>
        </div>
        <div class="summary-side">
          <article class="summary-chip">
            <h3>My Role</h3>
            <p>Supported campaign ideation, creative brief writing, and market positioning for Acer product launches and
              brand activations.</p>
          </article>
          <article class="summary-chip">
            <h3>Key Responsibilities</h3>
            <ul>
              <li>Conducted competitive landscape and consumer insight research.</li>
              <li>Developed creative briefs and campaign concepts.</li>
              <li>Coordinated with design and production teams for asset delivery.</li>
            </ul>
          </article>
          <article class="summary-chip">
            <h3>Outcome</h3>
            <ul>
              <li>Delivered campaign materials on time for product launch windows.</li>
              <li>Contributed to increased brand engagement across targeted channels.</li>
            </ul>
          </article>
        </div>
      </section>

<div class="embed-wrapper">
    <embed
    src="/hazellin-Portfolio/Modular/Modular-Agency-Acer-E-Scoo-terProject-Management.pdf"
    type="application/pdf"
    width="100%"
    height="480">
    </embed>
</div>

      <section class="case-gallery">
        <p class="eyebrow">Gallery</p>
        <h2>Selected pages from the plan</h2>
        <div class="gallery-grid">
          <figure class="zoom-card">
            <img
              :src="base + 'modular/slide-1.jpg'"
              alt="Acer E-Scooter Project Management Site Usage Plan — page 1" />
          </figure>

          <figure class="zoom-card">
            <img
              :src="base + 'modular/slide-2.jpg'"
              alt="Acer E-Scooter Project Management Site Usage Plan — page 2" />
          </figure>

          <figure class="zoom-card">
            <img
              :src="base + 'modular/slide-3.jpg'"
              alt="Acer E-Scooter Project Management Site Usage Plan — page 3" />
          </figure>
          <figure class="zoom-card">
            <img
              :src="base + 'modular/slide-4.jpg'"
              alt="Acer E-Scooter Project Management Site Usage Plan — page 4" />
          </figure>
          <figure class="zoom-card">
            <img
              :src="base + 'modular/slide-5.jpg'"
              alt="Acer E-Scooter Project Management Site Usage Plan — page 5" />
          </figure>
        </div>
      </section>
      <section class="case-photos case-photos-full">
  <h2>Behind the scenes</h2>
  <div class="photo-row">
    <figure>
      <img
        :src="base + 'modular/modular-acer-1.jpg'"
        alt="Modular Agency & Acer e-scooter shoot – team group photo"
      />
    </figure>
    <figure>
      <img
        :src="base + 'modular/modular-agent-3.png'"
        alt="On set during the e-scooter shoot"
      />
    </figure>
  </div>
</section>

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
/* project content */
.embed-wrapper {
  margin-top: 1rem;
  padding: 1.1rem 1.2rem;
  border-radius: 18px;
  background: #ffffff;
  border: 1px dashed rgba(148, 163, 184, 0.8);
  font-size: 0.85rem;
  color: #6b7280;
}

/* =========================
   Gallery (horizontal scroll)
========================= */
.case-gallery {
  margin-bottom: 3rem;
}

.case-gallery h2 {
  margin: 0.2rem 0 1.2rem;
}

/* 共用：橫向滑動 */
.gallery-grid {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 0.8rem;
  scroll-snap-type: x mandatory;
}

/* 預設（手機 / 窄螢幕）：一次看一頁 */
.gallery-grid figure {
  flex: 0 0 80vw;
  margin: 0;
  scroll-snap-align: start;
}

/* =========================
   Behind the scenes photos
========================= */
.case-photos {
  margin-top: 2.5rem;
}

.case-photos h2 {
  margin: 0 0 1.2rem;
}

.photo-row {
  display: flex;
  gap: 1.2rem;
}

.photo-row figure {
  flex: 1 1 0;
  margin: 0;
}

.photo-row img {
  width: 100%;
  display: block;
  border-radius: 10px;
  object-fit: cover;
}

/* 滿版版本：整個區塊拉成 100vw */
.case-photos-full {
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  padding: 2rem 4vw 2.5rem;
}

.case-photos-full h2,
.case-photos-full .photo-row {
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
}

/* 較寬螢幕：一次看兩頁 */
@media (min-width: 900px) {
  .gallery-grid figure {
    flex: 0 0 calc(50% - 0.75rem);
    max-width: calc(50% - 0.75rem);
  }
}

.zoom-card {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.zoom-card img {
  width: 100%;
  display: block;
  border-radius: 18px;
  object-fit: cover;
  cursor: zoom-in;
}

.zoom-card:hover {
  transform: scale(1.04);
  box-shadow: 0 24px 60px rgba(129, 140, 248, 0.9);
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
