<template>
  <div class="page-container">
  <main class="case-page">
    <!-- Hero -->
    <section class="case-hero">
      <div class="case-hero-media">
        <img
          src="@/assets/images/zarastus/helsinki-1.jpg"
          alt="Zarastus – Literacy 2.0 Challenge, Helsinki"
          style="margin-top: 2.5rem;"
        />
      </div>

      <div class="case-hero-text">
        <p class="breadcrumb">
          <span class="crumb"><router-link to="/cases">Cases</router-link></span>
          <span class="crumb-sep">/</span>
          <span class="crumb">Portfolio &amp; Projects</span>
        </p>

        <span class="path-pill">EdTech &amp; Misinformation</span>

        <h1>Zarastus — Fighting Misinformation Through Education</h1>

        <p class="case-subtitle">
          As part of the <strong>Literacy 2.0 Challenge: Bridging Tradition and Tech</strong> in Helsinki, our team co-created <strong>Zarastus</strong>, a browser plug-in powered by Perplexity AI. The tool helps students and educators compare media sources, spot bias, and access credible information — building critical thinking skills against misinformation and hybrid threats in the age of AI.
        </p>

        <dl class="case-meta">
          <div>
            <dt>Organizer</dt>
            <dd>Helsinki Education Hub (HEH) &amp; Helsinki Think Company</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Co-creator, product &amp; communication</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Helsinki, Finland</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>Nov 2024</dd>
          </div>
        </dl>

        <div class="hero-actions">
          <router-link to="/cases" class="btn ghost">← Back to cases</router-link>
        </div>
      </div>
    </section>

    <!-- Embedded / Context -->
    <section class="case-embed">
      <p class="eyebrow">Challenge</p>
      <h2>Literacy 2.0 — Why Zarastus matters</h2>

      <p class="case-embed-intro">
        The Literacy 2.0 Challenge brought together innovators to tackle one of
        the most urgent issues online: misinformation. Adults report seeing false
        or misleading content every day, yet only a minority feel confident
        telling real news from fake. The event pushed us to bridge critical
        thinking, data privacy and branding into one practical solution for
        students and educators.
      </p>

      <div>
        <strong style="line-height: 2rem">Context highlights:</strong>
        <ul class="checklist">
          <li>
            Older adults report encountering false information online far more
            often than younger users, yet only a small share of people say they
            feel very confident separating real from fake news.
          </li>
          <li>
            Mentors and judges emphasised the need for tools that don’t just
            fact-check, but actively teach media literacy and critical thinking.
          </li>
          <li>
            Over three days we iterated quickly with support from HEH mentors,
            refining our concept from vague idea to a focused education-first
            plug-in.
          </li>
        </ul>
      </div>

      <br />
    </section>

    <!-- Slides Gallery -->
    <section class="case-gallery">
      <p class="eyebrow">Gallery</p>
      <h2>Snapshots from Literacy 2.0</h2>
      <div class="gallery-grid">
        <figure class="zoom-card" v-for="i in 12" :key="`slide-${i}`">
          <img
            :src="getSlideUrl(i)"
            alt="Zarastus presentation and team process"
          />
        </figure>
      </div>
    </section>

    <section class="case-embed">
      <p class="eyebrow">Solution</p>
      <h2>Zarastus — Education aggregator &amp; browser plug-in</h2>

      <p class="case-embed-intro">
        Zarastus is a browser plug-in that works as an education aggregator.
        Powered by Perplexity AI, it guides users to compare media sources,
        surface different viewpoints and reflect on bias instead of passively
        accepting a single narrative.
      </p>

      <div>
        <strong style="line-height: 2rem">Key features:</strong>
        <ul class="checklist">
          <li>
            <strong>Source comparison:</strong> lets users place articles and
            posts side-by-side to understand how stories are framed across media.
          </li>
          <li>
            <strong>Bias &amp; credibility prompts:</strong> nudges readers to
            check author, evidence and possible agendas behind each source.
          </li>
          <li>
            <strong>Classroom-ready flows:</strong> designed for students and
            educators to use in assignments, helping them practice critical
            reading in real time.
          </li>
        </ul>
      </div>
    </section>

    <!-- Behind the scenes -->
    <section class="case-photos case-photos-full">
      <h2>Behind the scenes</h2>
      <div class="gallery-grid">
        <figure class="zoom-card" v-for="img in btsImages" :key="img">
          <img :src="getBtsUrl(img)" alt="Mentoring session and hackathon prep" />
        </figure>
      </div>
    </section>
  </main>
  </div>
</template>

<script setup>
const btsImages = [
  '_DSF6318.jpg', 
  '_DSF6422.jpg', 
  'helsinki.jpg', 
  'hackathon-competition-mac.jpg', 
  'helsinki-stage2.jpg', 
  'hackthon_helsinki.jpg', 
  'helsinki-black.jpg'
];

const getSlideUrl = (index) => {
  const paddedIndex = String(index).padStart(4, '0');
  return new URL(`../../assets/images/zarastus/Zarastus-1_page-${paddedIndex}.jpg`, import.meta.url).href;
};

const getBtsUrl = (imgName) => {
  // First check if it's a global asset, else point to zarastus folder
  if (imgName.startsWith('hack')) {
    return new URL(`../../assets/images/${imgName}`, import.meta.url).href;
  }
  return new URL(`../../assets/images/zarastus/${imgName}`, import.meta.url).href;
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
  transition: background 0.18s ease, color 0.18s ease, transform 0.12s ease, box-shadow 0.18s ease;
  text-decoration: none;
}

.btn.primary {
  background-image: linear-gradient(135deg, #5b8dff, #a855f7);
  color: #f9fafb;
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.6);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 55px rgba(129, 140, 248, 0.9);
}

.btn.ghost {
  background: #ffffff;
  color: #0f172a;
  border-color: rgba(148, 163, 184, 0.7);
}

.btn.ghost:hover {
  background: #f3f4ff;
}

/* Hero */
.case-hero {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 3.5fr);
  gap: 2rem;
  align-items: center;
  margin-bottom: 2.5rem;
}

.case-hero-media img {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 22px 55px rgba(148, 163, 184, 0.7);
}

.case-hero-text h1 {
  margin: 0.4rem 0 0.7rem;
  font-size: clamp(2.2rem, 3vw, 2.8rem);
}

.case-subtitle {
  margin: 0 0 1rem;
  color: #6b7280;
  line-height: 1.6;
  font-size: 1.1rem;
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
  padding: 0.4rem 1.2rem;
  border-radius: 999px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  background: #eef2ff;
  border: 1px solid rgba(129, 140, 248, 0.8);
  margin-top: 1.5rem;
}

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

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

/* Checklist bullets */
.checklist {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  line-height: 2rem;
}

.checklist li {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.4rem;
  font-size: 1.05rem;
  color: #4b5563;
}

.checklist li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0.1rem;
  color: #6366f1;
}

/* Deliverable / embed section */
.case-embed {
  margin-bottom: 3rem;
}

.case-embed-intro {
  margin: 2rem 0;
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.7;
}

/* Gallery (horizontal scroll) */
.case-gallery, .case-photos {
  margin-bottom: 3rem;
}

.case-gallery h2, .case-photos h2 {
  margin: 0.2rem 0 1.3rem;
}

/* 共用：橫向滑動 */
.gallery-grid {
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding-bottom: 0.8rem;
  scroll-snap-type: x mandatory;
}

.gallery-grid .zoom-card {
  flex: 0 0 80vw;
  margin: 0;
  scroll-snap-align: start;
}

@media (min-width: 900px) {
  .gallery-grid .zoom-card {
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
}

.zoom-card:hover {
  transform: scale(1.04);
  box-shadow: 0 24px 60px rgba(129, 140, 248, 0.9);
}

/* Behind the scenes full width photo row */
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
.case-photos-full .gallery-grid {
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive */
@media (max-width: 900px) {
  .case-hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .case-page {
    padding-inline: 1.25rem;
  }
}
</style>
