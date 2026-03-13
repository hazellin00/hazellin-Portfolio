<template>
  <div class="page-container">
  <main class="case-page">
    <!-- Hero -->
    <section class="case-hero">
      <div class="case-hero-media">
        <img
          src="@/assets/images/hultprize/hult-union.jpg"
          alt="Hult Prize campus competition workshop and training session"
        />
      </div>

      <div class="case-hero-text">
        <p class="breadcrumb">
          <span class="crumb"><router-link to="/cases">Cases</router-link></span>
          <span class="crumb-sep">/</span>
          <span class="crumb">Leadership &amp; Social Impact</span>
        </p>

        <span class="path-pill">Hult Prize Campus Competition</span>

        <h1>Hult Prize @ THI — Campus Outreach &amp; Training</h1>

        <p class="case-subtitle">
          As a student outreach leader, I grew engagement for the Hult Prize campus
          competition by running training sessions, mentoring teams and promoting
          sustainability-focused ideas across campus.
        </p>

        <dl class="case-meta">
          <div>
            <dt>Partner</dt>
            <dd>Hult Prize Foundation &amp; THI Campus Program</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Campus outreach &amp; student mentor</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Ingolstadt, Germany</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>2023–2024</dd>
          </div>
        </dl>

        <div class="hero-actions">
          <router-link to="/cases" class="btn ghost">← Back to cases</router-link>
        </div>
      </div>
    </section>

    <!-- Project snapshot -->
    <section class="case-summary">
      <div class="summary-main">
        <p class="eyebrow">Project snapshot</p>
        <h2>Building momentum for a sustainability challenge</h2>

        <p class="summary-tagline">
          Supporting student teams to turn SDG ideas into competition-ready pitches.
        </p>

        <div class="summary-highlight">
          <span class="summary-label">Challenge</span>
          <p>
            Many students knew the SDGs from class, but few translated them into
            concrete impact ideas or joined the Hult Prize competition.
          </p>
        </div>
      </div>

      <div class="summary-side">
        <article class="summary-chip">
          <h3>My role</h3>
          <p>
            Led campus outreach and training as a Hult Prize Campus team member,
            connecting students, faculty and the global competition.
          </p>
        </article>

        <article class="summary-chip">
          <h3>Approach</h3>
          <ul>
            <li>Organised info sessions and training on SDGs and impact business basics.</li>
            <li>Hosted hands-on workshops on problem framing, pitch structure and storytelling.</li>
            <li>Provided 1:1 feedback and mentoring to teams as they shaped their ideas.</li>
          </ul>
        </article>

        <article class="summary-chip">
          <h3>Impact</h3>
          <ul>
            <li>
              Increased training session attendance by ~10% compared with regular
              university SDG seminars.
            </li>
            <li>Supported more teams to move from “idea” to competition submission.</li>
            <li>Deepened awareness of sustainability goals in the student community.</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Gallery (Slides) -->
    <section class="case-gallery">
      <p class="eyebrow">Gallery</p>
      <h2>Moments from the campus program</h2>

      <div class="gallery-scroll">
        <figure class="zoom-card" v-for="i in 8" :key="`slide-${i}`">
          <img :src="getSlideUrl(i)" alt="Workshop and training content" />
        </figure>
      </div>
    </section>

    <!-- Deliverable / what I did -->
    <section class="case-embed">
      <p class="eyebrow">What I worked on</p>
      <h2>Hult Prize Campus Competition Foundation</h2>

      <p class="case-embed-intro">
        I helped move the campus program beyond a one-time announcement into a
        series of touchpoints that guided students from curiosity to submission.
      </p>

      <p><strong>Highlights:</strong></p>
      <ul class="checklist">
        <li>
          Organised training sessions as a student outreach leader, boosting
          participant attendance by around 10% compared with standard university
          SDG seminars.
        </li>
        <li>
          Provided coaching and mentoring to participants, helping them connect
          sustainability goals to viable social-business ideas.
        </li>
        <li>
          Coordinated with faculty and the campus Hult Prize team to keep
          communications, timelines and expectations clear for students.
        </li>
      </ul>
    </section>

    <!-- Behind the scenes -->
    <section class="case-photos case-photos-full">
      <h2>Behind the scenes</h2>
      <div class="gallery-grid">
        <figure class="zoom-card" v-for="img in btsImages" :key="img">
          <img :src="getBtsUrl(img)" alt="Team coordination" />
        </figure>
      </div>
    </section>
  </main>
  </div>
</template>

<script setup>
const btsImages = ['IMG_5791.JPG', 'IMG_5124.JPG', 'IMG_7947.JPG', 'IMG_7396.JPG', 'IMG_5797.JPG'];

const getSlideUrl = (index) => {
  return new URL(`../../assets/images/hultprize/slide-${index}.jpg`, import.meta.url).href;
};

const getBtsUrl = (imgName) => {
  return new URL(`../../assets/images/hultprize/${imgName}`, import.meta.url).href;
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

/* Gallery scrolls - shared logic */
.case-gallery, .case-photos {
  margin-bottom: 3rem;
}

.case-gallery h2, .case-photos h2 {
  margin: 0.2rem 0 1.2rem;
  font-size: 2rem;
}

.gallery-scroll, .gallery-grid {
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

.gallery-grid .zoom-card {
  flex: 0 0 80vw;
  scroll-snap-align: start;
  margin: 0;
}

@media (min-width: 900px) {
  .gallery-scroll .zoom-card {
    flex: 0 0 calc(50% - 0.75rem);
    max-width: calc(50% - 0.75rem);
  }
  .gallery-grid .zoom-card {
    flex: 0 0 calc(33.333% - 1rem);
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
