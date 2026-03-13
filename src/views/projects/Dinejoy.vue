<template>
  <div class="page-container">
    <main class="project-page">

      <!-- HERO -->
      <section class="project-hero">
        <div class="project-hero-media media-placeholder">
          <img :src="base + 'dinejoy/homepage.png'" alt="Demo Day photo 1" />
        </div>
        <div class="project-hero-text">
          <p class="breadcrumb">
            <span class="crumb"><router-link to="/projects">Projects</router-link></span>
            <span class="crumb-sep">/</span>
            <span class="crumb">Full-Stack</span>
          </p>
          <span class="path-pill">Tech &amp; AI-Driven Growth</span>
          <h1>DINE JOY — Data-Driven Gastronomy Platform</h1>
          <p class="project-subtitle">
            "Bridging the gap between 4,000+ raw data points and a seamless user intent."
            Built a full-stack restaurant booking platform by transforming messy open data from the Taiwan Tourism
            Administration into a high-integrity, AI-enhanced data engine.
          </p>
          <dl class="project-meta">
            <div>
              <dt>Role</dt>
              <dd>Full-Stack Developer &amp; Data Architect</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Tech Stack</dt>
              <dd>Python · FastAPI · MySQL · Vue 3 · Pinia · Leaflet.js · Ollama LLM</dd>
            </div>
            <div>
              <dt>Deliverables</dt>
              <dd>RESTful API · Vue 3 Frontend · Automated Data Pipeline</dd>
            </div>
          </dl>
          <div class="hero-actions">
            <router-link to="/projects" class="btn ghost">← Back to projects</router-link>
          </div>
        </div>
      </section>

      <!-- OVERVIEW -->
      <section class="project-summary">
        <div class="summary-main">
          <p class="eyebrow">Project Overview</p>
          <h2>A Reliable Data Engine Behind a Seamless Experience</h2>
          <p class="summary-tagline">The goal wasn't just to build a UI — it was to build a reliable data engine.</p>
          <div class="summary-highlight">
            <span class="summary-label">Context</span>
            <p>
              Most restaurant apps look pretty but fail on data depth. I took 4,000+ messy, "thin" data points from the
              Taiwan Tourism Administration and transformed them into a high-integrity booking platform — applying AI
              enrichment, smart categorization, and probability-based pricing to fill the gaps the raw data left behind.
            </p>
          </div>
        </div>
        <div class="summary-side">
          <article class="summary-chip">
            <h3>My Role</h3>
            <p>Designed and built the full stack — from data pipeline to REST API to Vue 3 frontend — and presented the
              architecture to peers and instructors.</p>
          </article>
          <article class="summary-chip">
            <h3>Key Deliverables</h3>
            <ul>
              <li>AI-enhanced data pipeline (Pandas + Ollama LLM)</li>
              <li>FastAPI backend with Service Component Layer</li>
              <li>Vue 3 frontend with Pinia state management</li>
              <li>Map-List sync via Leaflet.js</li>
            </ul>
          </article>
          <article class="summary-chip">
            <h3>Outcome</h3>
            <ul>
              <li>A production-ready platform serving 4,000+ enriched restaurant records.</li>
              <li>Presented live to a full classroom — the Map-List Sync logic earned the most questions.</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- VIDEO INSERT AREA -->
      <div class="embed-wrapper">
        <div class="frame">
          <iframe src="https://drive.google.com/file/d/1Ziz3Oxk9QqjumwHs_9K6V3EmhsLGLgiz/preview" width="800"
            height="500" allow="autoplay"></iframe>
        </div>
      </div>

      
      <!-- PILLAR 1: BACKEND -->
      <section class="case-process">
        <p class="eyebrow">Key Pillar 1</p>
        <h2>The Data "Glow-Up" — Backend Pipeline</h2>
        <p class="pillar-intro">I didn't just import a CSV. I built a pipeline to ensure the platform felt "alive" even where the original data was lacking.</p>

        <div class="process-steps">
          <div class="step">
            <div class="step-number">AI</div>
            <h3>AI-Enhanced Descriptions</h3>
            <p>Used <strong>Pandas</strong> to identify ~200 entries with "thin" descriptions, then leveraged <strong>Ollama (LLM)</strong> to generate natural, human-like restaurant intros — at zero API cost.</p>
          </div>
          <div class="step">
            <div class="step-number">IMG</div>
            <h3>Smart Categorization</h3>
            <p>Developed a mapping script to assign high-quality, relevant images based on category tags (e.g., "Japanese," "Romantic") using local directory mapping — no external APIs needed.</p>
          </div>
          <div class="step">
            <div class="step-number">$$$</div>
            <h3>Probability-Based Pricing</h3>
            <p>Since raw data lacked pricing, implemented a distribution algorithm: <strong>40% Economy · 40% Mid-range · 20% Fine Dining</strong> — simulating a realistic market spread.</p>
          </div>
          <div class="step">
            <div class="step-number">API</div>
            <h3>Service Component Layer</h3>
            <p>Moved beyond basic scripts to keep REST API endpoints clean while complex search logic (LIKE fuzzy matching + coordinate bounding) stays encapsulated in the service layer.</p>
          </div>
        </div>
      </section>

      <!-- PILLAR 2: FRONTEND UX -->
      <section class="case-outcomes">
        <p class="eyebrow">Key Pillar 2</p>
        <h2>Intent-Based UX — Frontend Logic</h2>
        <p class="pillar-intro">The most frustrating part of map-based apps is when the map "flies away" or reloads unnecessarily. I focused on respecting user intent.</p>

        <div class="outcome-grid">
          <div class="outcome-card">
            <h3>Smart Map-List Sync</h3>
            <p>The map stays locked if a user manually selects a city. It only switches to "Coordinate-Boundary Search" when the user explicitly clears filters — respecting their focus.</p>
          </div>
          <div class="outcome-card">
            <h3>Performance Capping</h3>
            <p>Capped map pins at <strong>150</strong> and list results at <strong>20</strong> with a "Show More" trigger, preventing browser lag during heavy data fetches.</p>
          </div>
          <div class="outcome-card">
            <h3>One-Click Conversions</h3>
            <p>Using <strong>Pinia</strong> for state management, the app auto-fills member data into the reservation form — reducing friction from discovery to booking.</p>
          </div>
        </div>
      </section>


      <!-- PILLAR 3: DATABASE -->
      <section class="case-process db-section">
        <p class="eyebrow">The Foundation</p>
        <h2>Database Integrity — Audit Trail, Not Just Storage</h2>

        <div class="db-table">
          <div class="db-row db-header">
            <span>Feature</span>
            <span>Implementation</span>
            <span>Business Value</span>
          </div>
          <div class="db-row">
            <span><strong>Relational Integrity</strong></span>
            <span><code>ON DELETE CASCADE</code></span>
            <span>Ensures when a restaurant is removed, its media assets are wiped — preventing "ghost data."</span>
          </div>
          <div class="db-row">
            <span><strong>Audit Protection</strong></span>
            <span><code>ON DELETE RESTRICT</code></span>
            <span>Prevents deleting a user if they have active reservations — protecting business transaction history.</span>
          </div>
          <div class="db-row">
            <span><strong>Concurrency Control</strong></span>
            <span><code>Unique Constraint</code></span>
            <span>A composite key on <code>(user_id, booking_time)</code> prevents double-booking at the database level.</span>
          </div>
        </div>
      </section>

      <!-- MEDIA: INSERT AREA -->
      <section class="case-gallery">
        <p class="eyebrow">Behind the Scenes</p>
        <h2>Presenting at the Demo Day</h2>
        <p class="pillar-intro">"Sharing the logic with a room full of peers. My favorite part was explaining the 'Map-List Sync' — seeing that 'aha!' moment when they realized the map wasn't just moving, it was thinking."</p>
        <div class="gallery-grid">
          <figure class="zoom-card">
            <img :src="base + 'dinejoy/01.jpg'" alt="Demo Day photo 1" />
          </figure>
          <figure class="zoom-card">
            <img :src="base + 'dinejoy/02.jpg'" alt="Demo Day photo 2" />
          </figure>
          <figure class="zoom-card">
            <img :src="base + 'dinejoy/03.jpg'" alt="Demo Day photo 3" />
          </figure>
          <figure class="zoom-card">
            <img :src="base + 'dinejoy/04.jpg'" alt="Demo Day photo 4" />
          </figure>
          <figure class="zoom-card">
            <img :src="base + 'dinejoy/05.jpg'" alt="Demo Day photo 5" />
          </figure>
          <figure class="zoom-card">
            <img :src="base + 'dinejoy/06.jpg'" alt="Demo Day photo 6" />
          </figure>
        </div>
      </section>

      

      <!-- REFLECTION -->
      <section class="reflection-section">
        <p class="eyebrow">Personal Reflection</p>
        <h2>"Under the Hood"</h2>
        <blockquote class="reflection-quote">
          Presenting this project taught me that <strong>logic stays the same even as markets change</strong>. Whether
          I'm an engineer or a business strategist, my value lies in being a <strong>borderless specialist</strong> — not
          afraid to look under the hood of a complex database to fix a "pixel" problem on the screen.
          <br /><br />
          The result? A platform that doesn't just show restaurants — it <em>understands</em> the data behind them.
        </blockquote>
      </section>

    </main>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL
</script>

<style scoped>
.page-container {
  width: 100%;
  font-size: 1.05rem;
  background: radial-gradient(circle at top left, #fff5f0, #fff0e8 45%, #fdfcff 80%);
}

.project-page {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3.5rem;
}

h1, h2, h3 {
  font-family: "Libre Bodoni", "Times New Roman", serif;
  color: #020617;
  margin-top: 0;
}

.eyebrow {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #c15b28;
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
  background: #fff5f0;
  box-shadow: 0 12px 30px rgba(193, 91, 40, 0.2);
  transform: translateY(-1px);
}

/* HERO */
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

.breadcrumb { font-size: 0.9rem; color: #6b7280; margin: 0 0 0.4rem; }
.crumb-sep { margin: 0 0.25rem; }
.crumb a { text-decoration: underline; }

.path-pill {
  display: inline-flex;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  background: #fff1eb;
  border: 1px solid rgba(193, 91, 40, 0.5);
  color: #c15b28;
}

.project-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 1.5rem;
  margin: 1rem 0 1.3rem;
  font-size: 0.95rem;
}

.project-meta dt { font-weight: 600; color: #4b5563; }
.project-meta dd { margin: 0.1rem 0 0; color: #6b7280; }

/* SUMMARY */
.project-summary {
  margin: 3rem 0 2.5rem;
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 2fr);
  gap: 2rem;
  align-items: flex-start;
}

.project-summary h2 { margin: 0.3rem 0 0.8rem; font-size: 2rem; }

.summary-tagline { margin: 0 0 1.2rem; font-size: 1.1rem; color: #4b5563; }

.summary-highlight {
  position: relative;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(193, 91, 40, 0.2);
  box-shadow: 0 16px 40px rgba(193, 91, 40, 0.1);
}

.summary-label {
  display: inline-flex;
  padding: 0.15rem 0.7rem;
  border-radius: 999px;
  font-size: 1rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  background: #fff1eb;
  border: 1px solid rgba(193, 91, 40, 0.5);
  color: #c15b28;
  margin-bottom: 0.4rem;
}

.summary-highlight p { margin: 0.5rem 0 0; font-size: 1rem; color: #374151; }

.summary-side { display: flex; flex-direction: column; gap: 0.9rem; }

.summary-chip {
  background: rgba(255, 255, 255, 0.96);
  border-radius: 18px;
  padding: 1.1rem 1.2rem 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.55);
  box-shadow: 0 12px 30px rgba(148, 163, 184, 0.45);
  font-size: 0.95rem;
  color: #4b5563;
}

.summary-chip h3 { margin: 0 0 0.4rem; font-size: 1.1rem; }
.summary-chip p { margin: 0; }
.summary-chip ul { margin: 0; padding-left: 1.1rem; }
.summary-chip li { margin-bottom: 0.25rem; }

/* GALLERY */
.case-gallery { margin-bottom: 3rem; }
.case-gallery h2 { margin: 0.2rem 0 1rem; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.4rem;
}

.zoom-card {
  position: relative;
  cursor: pointer;
}

.zoom-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.zoom-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.zoom-card:hover::before {
  opacity: 1;
}

.zoom-card img:hover {
  transform: scale(1.05);
}

/* PROCESS (pillars) */
.case-process { margin-bottom: 3rem; }
.case-process h2 { margin: 0.2rem 0 1rem; }

.pillar-intro {
  margin: 0 0 1.5rem;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.7;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.4rem;
}

.step {
  background: #ffffff;
  border-radius: 18px;
  padding: 1rem 1.1rem 1.2rem;
  border: 1px solid rgba(193, 91, 40, 0.15);
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.4);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 32px;
  padding: 0 0.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #c15b28, #e07843);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0.6rem;
}

.step h3 { margin: 0 0 0.3rem; font-size: 1rem; }
.step p { margin: 0; font-size: 0.88rem; color: #4b5563; line-height: 1.6; }

/* OUTCOMES */
.case-outcomes { margin-bottom: 3rem; }
.case-outcomes h2 { margin: 0.2rem 0 1rem; }

.outcome-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.4rem;
}

.outcome-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.1rem 1.2rem 1.3rem;
  border: 1px solid rgba(193, 91, 40, 0.15);
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.4);
}

.outcome-card h3 { margin: 0 0 0.4rem; font-size: 1rem; }
.outcome-card p { margin: 0; font-size: 0.9rem; color: #4b5563; line-height: 1.6; }

/* DB TABLE */
.db-section { margin-bottom: 3rem; }

.db-table {
  margin-top: 1.4rem;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(193, 91, 40, 0.2);
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.35);
}

.db-row {
  display: grid;
  grid-template-columns: 1.2fr 1.4fr 2fr;
  gap: 1rem;
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  font-size: 0.93rem;
  color: #374151;
  background: #ffffff;
  align-items: center;
}

.db-row:last-child { border-bottom: none; }

.db-header {
  background: linear-gradient(135deg, #c15b28, #e07843);
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.05em;
}

.db-row code {
  background: #f3f4f6;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  font-size: 0.83rem;
  color: #374151;
}

/* GALLERY */
.case-gallery { margin-bottom: 3rem; }
.case-gallery h2 { margin: 0.2rem 0 0.8rem; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 1.2rem;
}

/* EMBED */
.case-embed { margin-bottom: 3rem; }
.case-embed h2 { margin: 0.2rem 0 1rem; }

/* PLACEHOLDER BOXES */
.placeholder-box {
  background: rgba(193, 91, 40, 0.05);
  border: 2px dashed rgba(193, 91, 40, 0.3);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c15b28;
  font-size: 0.9rem;
  font-family: "Cutive Mono", monospace;
  min-height: 200px;
  text-align: center;
  padding: 1.5rem;
}

.placeholder-box.tall { min-height: 400px; }

/* REFLECTION */
.reflection-section { margin-bottom: 3rem; }
.reflection-section h2 { margin: 0.2rem 0 1rem; }

.reflection-quote {
  background: #ffffff;
  border-left: 4px solid #c15b28;
  border-radius: 0 18px 18px 0;
  margin: 0;
  padding: 1.5rem 1.8rem;
  font-size: 1.05rem;
  color: #374151;
  line-height: 1.8;
  box-shadow: 0 16px 40px rgba(148, 163, 184, 0.35);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .project-hero { grid-template-columns: 1fr; }
  .project-summary { grid-template-columns: 1fr; }
  .db-row { grid-template-columns: 1fr; gap: 0.3rem; }
  .db-header span:nth-child(2), .db-header span:nth-child(3) { display: none; }
  .gallery-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .project-page { padding-inline: 1.25rem; }
}
</style>
