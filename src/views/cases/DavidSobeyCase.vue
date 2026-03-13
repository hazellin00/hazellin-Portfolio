<template>
  <div class="page-container">
  <main class="case-page">
    <!-- Hero -->
    <section class="case-hero">
      <div class="case-hero-media">
        <img
          src="@/assets/images/canadacase/1.jpg"
          alt="Analytics dashboard and charts for David Sobey Centre"
        />
      </div>

      <div class="case-hero-text">
        <p class="breadcrumb">
          <span class="crumb"><router-link to="/cases">Cases</router-link></span>
          <span class="crumb-sep">/</span>
          <span class="crumb">Digital Analytics &amp; AI</span>
        </p>

        <span class="path-pill">Customer Strategy &amp; AI</span>

        <h1>HSFM × The Shelf — Customer Strategy with David Sobey Centre</h1>

        <p class="case-subtitle">
          Strategy case from my Master’s at THI with the David Sobey Centre in Canada. We rethought the growth plan for Halifax Seaport Farmers’ Market and its brand “The Shelf” to bring in younger locals and add new revenue streams.
        </p>

        <dl class="case-meta">
          <div>
            <dt>Client / Partner</dt>
            <dd>David Sobey Centre</dd>
          </div>
          <div>
            <dt>Deliverable</dt>
            <dd>Analytics report, customer strategy deck &amp; notebook</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Ingolstadt, Germany</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>2023</dd>
          </div>
        </dl>

        <div class="hero-actions">
          <router-link to="/cases" class="btn ghost">← Back to cases</router-link>
        </div>
      </div>
    </section>

    <!-- Project overview + role -->
    <section class="case-summary">
      <div class="summary-main">
        <p class="eyebrow">Project overview</p>
        <h2>HSFM × The Shelf at Halifax Seaport Farmers’ Market</h2>

        <p class="summary-tagline">
          From cruise-season tourists to a younger, local-first community market.
        </p>

        <div class="summary-highlight">
          <span class="summary-label">Challenge</span>
          <p>
            Revenue leaned on cruise tourists and older regulars. Weekdays were
            quiet and social reach was low.
          </p>
        </div>
      </div>

      <div class="summary-side">
        <article class="summary-chip">
          <h3>My role</h3>
          <p>
            Co-led concept and growth strategy with the David Sobey Centre team.
          </p>
        </article>

        <article class="summary-chip">
          <h3>Approach</h3>
          <ul>
            <li>Mapped who comes when – locals vs. cruise visitors.</li>
            <li>Used a light Five-Forces view to place HSFM in the market.</li>
            <li>Designed low-cost pilots for young locals (uni link, food trucks, chill area).</li>
          </ul>
        </article>

        <article class="summary-chip">
          <h3>Impact</h3>
          <ul>
            <li>3-step path to more revenue and younger footfall.</li>
            <li>Shifted HSFM to an “incubator for local vendors”, not just a landlord.</li>
            <li>Clear pilots HSFM can test next season.</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Gallery -->
    <section class="case-gallery">
      <p class="eyebrow">Gallery</p>
      <h2>Strategy Slide Deck &amp; Case Presentation</h2>

      <div class="gallery-scroll">
        <figure class="zoom-card" v-for="i in 15" :key="i">
          <img
            :src="getSlideUrl(i)"
            alt="HSFM Presentation Slide"
          />
        </figure>
      </div>
    </section>

    <!-- Deliverable / file embed -->
    <section class="case-embed">
      <p class="eyebrow">Deliverable</p>
      <h2>Analytics deck &amp; Colab notebook</h2>
      <p class="case-embed-intro">
        The deliverable is a slide deck plus an analysis notebook that tracks the full pipeline from raw transaction data to concrete growth actions for David Sobey Centre.
      </p>

      <p><strong>Included in this file:</strong></p>
      <ul class="checklist">
        <li>Customer &amp; product segmentations charts</li>
        <li>Experiment roadmap for AI-assisted recommendations</li>
      </ul>
    </section>
  </main>
  </div>
</template>

<script setup>
const getSlideUrl = (index) => {
  return new URL(`../../assets/images/canadacase/${index}.jpg`, import.meta.url).href;
};
</script>

<style scoped>
/* Layout */
.page-container {
  width: 100%;
  font-size: 1.05rem;
  background: radial-gradient(circle at top left, #e2f0ff, #f5f0ff 45%, #fdfcff 80%);
}

.case-page {
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
  color: #6366f1;
  margin: 0 0 0.4rem;
}

/* Buttons */
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

/* Hero */
.case-hero {
  display: grid;
  grid-template-columns: minmax(0, 3.5fr) minmax(0, 3fr);
  gap: 2rem;
  align-items: center;
  margin-bottom: 2.8rem;
}

.case-hero-media img {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 22px 55px rgba(148, 163, 184, 0.7);
}

.case-hero-text h1 {
  margin: 0.4rem 0 0.7rem;
  font-size: clamp(2.4rem, 3.5vw, 3rem);
}

.case-subtitle {
  margin: 0 0 1.1rem;
  color: #6b7280;
  line-height: 1.7;
}

/* Breadcrumb & pill */
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

/* Meta */
.case-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 1.5rem;
  margin: 1rem 0 1.3rem;
  font-size: 0.95rem;
}

.case-meta dt {
  font-weight: 600;
  color: #4b5563;
}

.case-meta dd {
  margin: 0.1rem 0 0;
  color: #6b7280;
}

/* Overview section */
.case-summary {
  margin: 3rem 0 2.5rem;
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 2fr);
  gap: 2rem;
  align-items: flex-start;
}

.case-summary h2 {
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
  margin: 1.5rem 0 0;
  font-size: 1rem;
  text-align: left;
  color: #374151;
}

/* right side chips */
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

/* Checklist bullets */
.checklist {
  list-style: none;
  padding: 0;
  margin: 0.4rem 0 1rem;
}

.checklist li {
  position: relative;
  padding-left: 1.1rem;
  margin-bottom: 0.35rem;
  font-size: 1rem;
  color: #4b5563;
}

.checklist li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0.1rem;
  color: #6366f1;
}

/* Deliverable / embed */
.case-embed {
  margin-bottom: 3rem;
}

.case-embed-intro {
  margin: 0.8rem 0 1.2rem;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.8;
}

/* Gallery */
.case-gallery {
  margin-bottom: 3rem;
}

.case-gallery h2 {
  margin: 0.2rem 0 1.2rem;
  font-size: 2rem;
}

.gallery-scroll {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 0.8rem;
  scroll-snap-type: x mandatory;
}

.gallery-scroll .zoom-card {
  flex: 0 0 90vw;
  scroll-snap-align: start;
}

@media (min-width: 900px) {
  .gallery-scroll .zoom-card {
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

/* Responsive tweaks */
@media (max-width: 900px) {
  .case-hero {
    grid-template-columns: 1fr;
  }
  .case-summary {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .case-page {
    padding-inline: 1.25rem;
  }
}
</style>
