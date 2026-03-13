<template>
  <div class="page-container">
    <main class="project-page">
      <section class="project-hero">
        <div class="project-hero-media">
          <img src="@/assets/images/pacific-climate-dinner1.png" alt="Pacific Climate Change Forum Welcome Banquet" />
        </div>
        <div class="project-hero-text">
          <p class="breadcrumb">
            <span class="crumb"><router-link to="/projects">Projects</router-link></span>
            <span class="crumb-sep">/</span>
            <span class="crumb">Event & Diplomacy</span>
          </p>
          <span class="path-pill">Event Coordination &amp; Diplomacy</span>
          <h1>TAISE 2023 Pacific Climate Change Forum — Welcome Banquet</h1>
          <p class="project-subtitle">
            Coordinated the Welcome Banquet for TAISE's 2023 Pacific Climate Change Forum, hosting diplomatic delegates
            and climate leaders from Pacific island nations in Taipei.
          </p>
          <dl class="project-meta">
            <div>
              <dt>Organisation</dt>
              <dd>TAISE (Taiwan Institute for Sustainable Energy)</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Event Coordinator</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Taipei, Taiwan</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>2023</dd>
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
          <h2>Welcoming Pacific Climate Leaders</h2>
          <p class="summary-tagline">A high-protocol diplomatic banquet bridging Pacific island nations and Taiwan's
            sustainability community.</p>
          <div class="summary-highlight">
            <span class="summary-label">Context</span>
            <p>
              TAISE hosted delegates from Pacific island nations for a multi-day forum on climate change adaptation. As
              part of the organising team, I coordinated the welcome banquet — managing venue liaison, guest logistics,
              seating protocol and day-of operations.
            </p>
          </div>
        </div>
        <div class="summary-side">
          <article class="summary-chip">
            <h3>My Role</h3>
            <p>Coordinated guest reception, venue setup, and real-time coordination between TAISE staff and venue teams
              to ensure a smooth, diplomatic-standard event experience.</p>
          </article>
          <article class="summary-chip">
            <h3>Key Responsibilities</h3>
            <ul>
              <li>Liaised with restaurants and venue contacts for seating and dietary logistics.</li>
              <li>Managed delegate scheduling and escorted VIP guests.</li>
              <li>Supported simultaneous translation and cross-cultural communication.</li>
            </ul>
          </article>
          <article class="summary-chip">
            <h3>Outcome</h3>
            <ul>
              <li>Delivered a smooth welcome banquet for 50+ international delegates.</li>
              <li>Strengthened TAISE's reputation as a professional international host.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="case-gallery">
        <p class="eyebrow">Gallery</p>
        <h2>Highlights from the banquet</h2>
        <div class="gallery-grid">
          <figure class="zoom-card">
            <img src="../../../DiplomacyPacific/0718png/歡迎晚宴議程_page-0001.jpg"
              alt="Climate Change Forum banquet — event overview slide" />
          </figure>

          <figure class="zoom-card">
            <img src="../../../DiplomacyPacific/0718png/歡迎晚宴議程_page-0002.jpg"
              alt="Climate Change Forum banquet — program &amp; run-of-show" />
          </figure>

          <figure class="zoom-card">
            <img src="../../../DiplomacyPacific/0718png/歡迎晚宴議程_page-0003.jpg"
              alt="Delegates and guests at the Climate Change Forum welcome banquet" />
          </figure>

          <figure class="zoom-card">
            <img src="../../../DiplomacyPacific/0718png/歡迎晚宴議程_page-0004.jpg"
              alt="Delegates and guests at the Climate Change Forum welcome banquet" />
          </figure>


          <figure class="zoom-card">
            <img src="../../../DiplomacyPacific/0718png/歡迎晚宴議程_page-0005.jpg"
              alt="Delegates and guests at the Climate Change Forum welcome banquet" />
          </figure>
        </div>
      </section>

      <section class="project-gallery">
      <h2>Behind the scenes</h2>
      <div class="photo-row">
        <figure>
          <img
            src="../../../images/pacific_forum.jpg"
            alt="Production team preparing the Climate Change Forum welcome banquet"
          />
        </figure>
        <figure>
          <img
            src="../../../images/pacific_大合照.jpg"
            alt="On-site coordination during the welcome banquet program"
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

.case-gallery {
  margin-bottom: 3rem;
}

.case-gallery h2 {
  margin: 0.2rem 0 1.3rem;
}
.gallery-grid {
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scroll-snap-type: x mandatory;
}

/* 預設（手機 / 窄螢幕）：一次看一頁 */
.gallery-grid figure {
  flex: 0 0 80vw;
  margin: 0;
  scroll-snap-align: start;
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

.project-gallery {
  margin-bottom: 3rem;
}

.project-gallery h2 {
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

.zoom-card {
  flex: 0 0 90vw;
  scroll-snap-align: start;
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
