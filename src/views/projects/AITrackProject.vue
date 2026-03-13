<template>
  <div class="page-container">
    <main class="project-page">
      <section class="project-hero">
        <div class="project-hero-media">
          <img src="@/assets/images/ai-track-home.jpg" alt="AI Track Programme" />
        </div>
        <div class="project-hero-text">
          <p class="breadcrumb">
            <span class="crumb"><router-link to="/projects">Projects</router-link></span>
            <span class="crumb-sep">/</span>
            <span class="crumb">AI &amp; Tech</span>
          </p>
          <span class="path-pill">AI &amp; Tech-Driven Growth</span>
          <h1>AI Track Programme — Applied AI for Business</h1>
          <p class="project-subtitle">
            Participated in an AI track programme focused on applying artificial intelligence tools to real business
            challenges — covering prompt engineering, AI-assisted analytics, and AI product strategy.
          </p>
          <dl class="project-meta">
            <div>
              <dt>Programme</dt>
              <dd>AI Track</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Applied AI for Business</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Participant &amp; Project Lead</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>Intensive Programme</dd>
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
          <h2>Putting AI to Work for Real Business Problems</h2>
          <p class="summary-tagline">Hands-on AI applications — from prompt engineering to data-backed strategy.</p>
          <div class="summary-highlight">
            <span class="summary-label">Context</span>
            <p>
              This intensive AI track brought together participants to learn and apply AI tools across business
              functions. Projects ranged from building AI-assisted workflows to developing AI product strategies and
              presenting findings to industry mentors.
            </p>
          </div>
        </div>
        <div class="summary-side">
          <article class="summary-chip">
            <h3>My Role</h3>
            <p>Led a project team applying AI tools to a real business brief — designing the workflow, running
              experiments, and presenting actionable recommendations.</p>
          </article>
          <article class="summary-chip">
            <h3>Key Areas</h3>
            <ul>
              <li>Prompt engineering and AI tool evaluation.</li>
              <li>AI-assisted market research and data analysis.</li>
              <li>AI product strategy and roadmap development.</li>
            </ul>
          </article>
          <article class="summary-chip">
            <h3>Outcome</h3>
            <ul>
              <li>Delivered a complete AI-powered strategy proposal to programme mentors.</li>
              <li>Built hands-on proficiency with AI tools for business applications.</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- =============================
     PROGRAM PROCESS
============================== -->
      <section class="case-process">
        <p class="eyebrow">Learning Journey</p>
        <h2>How the Program Works</h2>

        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Technical Foundations</h3>
            <p>Built strong fundamentals across Python, SQL, Git, and cloud tools.</p>
          </div>

          <div class="step">
            <div class="step-number">2</div>
            <h3>AI / ML Development</h3>
            <p>Trained and evaluated ML/DL models, explored LLM applications.</p>
          </div>

          <div class="step">
            <div class="step-number">3</div>
            <h3>Full-Stack Engineering</h3>
            <p>Combined FastAPI + Vue.js + Docker to build integrated systems.</p>
          </div>

          <div class="step">
            <div class="step-number">4</div>
            <h3>Capstone & Internship</h3>
            <p>Delivered an industry-aligned smart application with real clients.</p>
          </div>
        </div>
      </section>


      <!-- =============================
     OUTCOMES
============================== -->
      <section class="case-outcomes">
        <p class="eyebrow">Outcomes</p>
        <h2>What I Achieved</h2>

        <div class="outcome-grid">
          <div class="outcome-card">
            <h3>Real-world technical stack</h3>
            <p>Gained production-ready skills in backend, frontend, AI, and deployment.</p>
          </div>

          <div class="outcome-card">
            <h3>AI + System Integration</h3>
            <p>Learned to connect data, models, APIs, and cloud infrastructure.</p>
          </div>

          <div class="outcome-card">
            <h3>Industry Internship</h3>
            <p>Will participate in an applied AI project with a partner company.</p>
          </div>

          <div class="outcome-card">
            <h3>Career Transition Readiness</h3>
            <p>Developed a cross-functional portfolio bridging analytics, AI, and engineering.</p>
          </div>
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

/* =========================
   Process
========================= */
.case-process {
  margin-bottom: 3rem;
}

.case-process h2 {
  margin: 0.2rem 0 1.4rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.4rem;
}

.step {
  background: #ffffff;
  border-radius: 18px;
  padding: 1rem 1.1rem 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.6);
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.6);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-image: linear-gradient(135deg, #5b8dff, #a855f7);
  color: #f9fafb;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.step h3 {
  margin: 0 0 0.3rem;
  font-size: 1rem;
}

.step p {
  margin: 0;
  font-size: 0.88rem;
  color: #4b5563;
}

/* =========================
   Outcomes
========================= */
.case-outcomes {
  margin-bottom: 3rem;
}

.case-outcomes h2 {
  margin: 0.2rem 0 1.4rem;
}

.outcome-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.4rem;
}

.outcome-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.1rem 1.2rem 1.3rem;
  border: 1px solid rgba(148, 163, 184, 0.6);
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.6);
}

.outcome-card h3 {
  margin: 0 0 0.4rem;
  font-size: 1rem;
}

.outcome-card p {
  margin: 0;
  font-size: 0.9rem;
  color: #4b5563;
}

/* =========================
   File embed section
========================= */
.case-embed {
  margin-bottom: 3rem;
}

.case-embed-intro {
  margin: 2rem;
  font-size: 0.92rem;
  color: #4b5563;
  line-height: 1.7;
}

.case-embed-intro2 {
  margin: 2rem;
  font-size: 1.2rem;
  color: #4b5563;
  line-height: 1.8;
}


.embed-wrapper embed {
  width: 100%;
  height: 650px; 
   /* 直式文件可以高一點 */
}

.frame{
  width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
}
/* 手機把高度縮小一點 */
@media (max-width: 768px) {
  .embed-wrapper embed {
    height: 480px;
  }
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
