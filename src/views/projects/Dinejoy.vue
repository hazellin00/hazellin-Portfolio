<template>
  <div class="page-container">
    <main class="project-page">

      <!-- HERO -->
      <section class="project-hero">
        <div class="project-hero-media">
          <img :src="base + 'dinejoy/homepage.png'" alt="DINE JOY homepage" />
        </div>
        <div class="project-hero-text">
          <p class="breadcrumb">
            <span class="crumb"><router-link to="/projects">Projects</router-link></span>
            <span class="crumb-sep">/</span>
            <span class="crumb">Full-Stack</span>
          </p>
          <span class="path-pill">Tech &amp; AI-Driven Growth</span>
          <h1>DINE JOY — 智慧餐廳系統</h1>
          <p class="project-subtitle">
            A full-stack restaurant platform that goes beyond keyword search — understanding natural language intent
            to match users with restaurants by vibe, mood, and occasion across Taiwan.
          </p>
          <dl class="project-meta">
            <div>
              <dt>Role</dt>
              <dd>Full-Stack Developer &amp; Data Architect</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>2025/12 – 2026/06</dd>
            </div>
            <div>
              <dt>Tech Stack</dt>
              <dd>Python · FastAPI · MySQL · TiDB · Vue 3 · Pinia · Leaflet.js · ChromaDB · text2vec · CLIP · LLM</dd>
            </div>
            <div>
              <dt>Deliverables</dt>
              <dd>RESTful API · Vue 3 Frontend · AI Semantic Search Engine · Automated Data Pipeline</dd>
            </div>
          </dl>
          <div class="hero-actions">
            <router-link to="/projects" class="btn ghost">← Back to projects</router-link>
          </div>
        </div>
      </section>

      <!-- BUSINESS PAIN POINTS -->
      <section class="project-summary">
        <div class="summary-main">
          <p class="eyebrow">Business Pain Points</p>
          <h2>Taiwan's Domestic Tourism Needs a Smarter Discovery Tool</h2>
          <p class="summary-tagline">Traditional search can't understand "氛圍" (vibe) or natural language — DINE JOY fills that gap.</p>
          <div class="summary-highlight">
            <span class="summary-label">Context</span>
            <p>
              The goal wasn't just to build a UI — it was to build a reliable data ML semantic engine. <br> Most restaurant apps look
              pretty but fail on data depth. Starting with 100 restaurants as a prototype, I took 4,000+ messy,
              "thin" data points from the <strong>Taiwan Tourism Administration (台灣觀光局)</strong> and transformed 100 of them into a high-integrity
              booking platform.</br> 
              <p>Applying AI enrichment, smart categorization, and probability-based pricing to fill
              the gaps the raw data left behind.</p>
              
            </p>
            <p style="margin-top: 0.7rem;">
              Taiwan's domestic tourism spending is only <strong>29%</strong> of the total travel market, with
              per-capita spend less than 1/25 of outbound tourism. Average trip length has dropped to a 10-year low
              of <strong>1.39 days</strong>. Existing platforms rely on rigid keyword filters that fail to capture
              intent. DINE JOY acts like a knowledgeable friend — understanding what you mean, not just what you type.
            </p>
          </div>
        </div>
        <div class="summary-side">
          <article class="summary-chip">
            <h3>My Role</h3>
            <p>Designed and built the full stack — data pipeline, REST API, Vue 3 frontend, and the AI semantic search engine — and presented the architecture at demo day.</p>
          </article>
          <article class="summary-chip">
            <h3>Key Deliverables</h3>
            <ul>
              <li>AI semantic search (text2vec + ChromaDB + CrossEncoder)</li>
              <li>Image-to-text tagging pipeline (Chinese-CLIP)</li>
              <li>FastAPI backend with service component layer</li>
              <li>Map-List sync via Leaflet.js + reservation flow</li>
            </ul>
          </article>
          <article class="summary-chip">
            <h3>Outcome</h3>
            <ul>
              <li>4,000+ enriched restaurant records searchable by intent</li>
              <li>Semantic search gain score consistently above 0.4</li>
              <li>Presented live — Map-List Sync logic earned the most questions</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- PRESENTATION EMBED -->
      <section class="placeholder-section">
        <p class="eyebrow">Presentation</p>
        <div class="embed-wrapper">
          <div class="frame">
            <iframe
              src="https://drive.google.com/file/d/1uoVBWoabAaOTfdfdzBdTa42BWuYMNdX5/preview"
              width="800"
              height="500"
              allow="autoplay"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <!-- DEMO VIDEO -->
      <section class="placeholder-section">
        <p class="eyebrow">Demo Video</p>
        <div class="embed-wrapper">
          <div class="frame">
            <iframe
              src="https://drive.google.com/file/d/1QMCnus-28H5e-hH0hnrHclzvalwYLLZu/preview"
              width="800"
              height="500"
              allow="autoplay"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <!-- PILLAR 1: TRADITIONAL VS SEMANTIC -->
      <section class="case-process">
        <p class="eyebrow">Key Pillar 1</p>
        <h2>Traditional Search vs. AI Semantic Search</h2>
        <p class="pillar-intro">Traditional platforms lock you into dropdowns: city → district → category → price. DINE JOY reads your intent directly from natural language.</p>

        <div class="compare-grid">
          <div class="compare-card old">
            <div class="compare-label">Traditional</div>
            <h3>SQL Fuzzy Matching</h3>
            <p>User selects county → district → tag. System runs <code>LIKE %親子%</code> against DB tags. Only returns exact matches — no vibe, no context.</p>
            <div class="compare-steps">
              <span>① Lock region</span>
              <span>② Match tag</span>
              <span>③ Filter price</span>
            </div>
          </div>
          <div class="compare-arrow">→</div>
          <div class="compare-card new">
            <div class="compare-label">DINE JOY</div>
            <h3>Semantic Vector Search</h3>
            <p>User types "新北市適合情侶約會餐廳推薦" in natural language. System understands intent, returns top 5 semantically matched restaurants.</p>
            <div class="compare-steps">
              <span>① Encode query</span>
              <span>② Vector recall</span>
              <span>③ Re-rank</span>
            </div>
          </div>
        </div>
      </section>

      <!-- PILLAR 2: AI PIPELINE -->
      <section class="case-outcomes">
        <p class="eyebrow">Key Pillar 2</p>
        <h2>The ML Semantic Search Pipeline</h2>
        <p class="pillar-intro">Two stages working together: a fast bi-encoder for recall, and a precise CrossEncoder for re-ranking — balancing speed and accuracy.</p>

        <div class="outcome-grid">
          <div class="outcome-card">
            <h3>Image → Visual Tags (Chinese-CLIP)</h3>
            <p>Each restaurant photo is classified into ENV / Food categories using cosine similarity. Tags like "浪漫約會", "文青設計感" are injected into the text description — filling the gap raw data leaves behind.</p>
          </div>
          <div class="outcome-card">
            <h3>NLP Pipeline (CKIP + KeyBERT)</h3>
            <p>CKIP (Academia Sinica) handles deep tokenization and POS tagging to extract noun features. KeyBERT identifies signature dishes by BERT weight. Together they compress each description to its 3 most representative terms.</p>
          </div>
          <div class="outcome-card">
            <h3>Vector Encoding (text2vec)</h3>
            <p>Refined descriptions are converted to 768d vectors using <strong>shibing624/text2vec-base-chinese</strong>. OpenCC Traditional→Simplified conversion boosted raw search gain from &lt;0.3 to consistently above 0.4.</p>
          </div>
          <div class="outcome-card">
            <h3>Two-Stage Search</h3>
            <p><strong>Stage 1 (bi-encoder):</strong> ChromaDB vector recall returns Top 20–50 candidates in milliseconds. <strong>Stage 2 (CrossEncoder / BGE-Reranker):</strong> Re-scores each pair for precision. Score &lt;0.30 = no result returned.</p>
          </div>
        </div>
      </section>

      <!-- PILLAR 3: FEATURES -->
      <section class="case-process">
        <p class="eyebrow">Key Pillar 3</p>
        <h2>Platform Features</h2>
        <p class="pillar-intro">Four integrated modules covering the full journey — from discovery to reservation and review.</p>

        <div class="process-steps">
          <div class="step">
            <div class="step-number">01</div>
            <h3>Member Management</h3>
            <p>Login / register / profile edit / password reset. Member data auto-fills reservation forms via Pinia state management.</p>
          </div>
          <div class="step">
            <div class="step-number">02</div>
            <h3>Restaurant Discovery</h3>
            <p>Semantic search + Leaflet map with 150-pin cap for performance. Marker clustering when density is high. Map-region search triggers when no city is selected.</p>
          </div>
          <div class="step">
            <div class="step-number">03</div>
            <h3>AI Review Intelligence</h3>
            <p>Latest 5 Google Maps reviews → LLM analysis → <strong>golden combo</strong> (must-order dish pairing) + <strong>warning tips</strong> shown directly on search results.</p>
          </div>
          <div class="step">
            <div class="step-number">04</div>
            <h3>Reservation Flow</h3>
            <p>B2C auto-confirm model. User submits → system writes to DB → status immediately set to Confirmed. Future: POS API integration via pre-reserved <code>pos_system_id</code> field.</p>
          </div>
        </div>
      </section>

      <!-- DB DESIGN -->
      <section class="case-process db-section">
        <p class="eyebrow">The Foundation</p>
        <h2>Database Design — Built to Scale</h2>
        <p class="pillar-intro">Static and dynamic data are separated. Expansion interfaces are reserved from day one — no schema rebuild needed when POS integration is added.</p>

        <div class="db-table">
          <div class="db-row db-header">
            <span>Feature</span>
            <span>Implementation</span>
            <span>Business Value</span>
          </div>
          <div class="db-row">
            <span><strong>Relational Integrity</strong></span>
            <span><code>ON DELETE CASCADE</code></span>
            <span>When a restaurant is removed, its media assets are wiped — no ghost data.</span>
          </div>
          <div class="db-row">
            <span><strong>Audit Protection</strong></span>
            <span><code>ON DELETE RESTRICT</code></span>
            <span>Prevents deleting a user with active reservations — protecting transaction history.</span>
          </div>
          <div class="db-row">
            <span><strong>Concurrency Control</strong></span>
            <span><code>Unique Constraint</code></span>
            <span>Composite key on <code>(user_id, booking_time)</code> prevents double-booking at DB level.</span>
          </div>
          <div class="db-row">
            <span><strong>POS Expansion Slot</strong></span>
            <span><code>pos_system_id (NULL)</code></span>
            <span>Pre-reserved field for future merchant POS integration — no migration needed.</span>
          </div>
        </div>
      </section>

      <!-- GALLERY -->
      <section class="case-gallery">
        <p class="eyebrow">Behind the Scenes</p>
        <h2>Presenting at Demo Day</h2>
        <p class="pillar-intro">"Sharing the logic with a room full of peers. My favorite part was explaining the Map-List Sync — seeing that 'aha!' moment when they realized the map wasn't just moving, it was thinking."</p>
        <div class="gallery-grid">
          <figure class="zoom-card"><img :src="base + 'dinejoy/01.jpg'" alt="Demo Day photo 1" /></figure>
          <figure class="zoom-card"><img :src="base + 'dinejoy/02.jpg'" alt="Demo Day photo 2" /></figure>
          <figure class="zoom-card"><img :src="base + 'dinejoy/03.jpg'" alt="Demo Day photo 3" /></figure>
          <figure class="zoom-card"><img :src="base + 'dinejoy/04.jpg'" alt="Demo Day photo 4" /></figure>
          <figure class="zoom-card"><img :src="base + 'dinejoy/05.jpg'" alt="Demo Day photo 5" /></figure>
          <figure class="zoom-card"><img :src="base + 'dinejoy/06.jpg'" alt="Demo Day photo 6" /></figure>
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

/* PLACEHOLDERS / EMBED */
.placeholder-section {
  margin-bottom: 2.5rem;
}

.pres-link-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.6rem;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(193, 91, 40, 0.25);
  box-shadow: 0 12px 30px rgba(148, 163, 184, 0.35);
  text-decoration: none;
  color: #020617;
  transition: box-shadow 0.18s, transform 0.12s;
}

.pres-link-card:hover {
  box-shadow: 0 18px 45px rgba(193, 91, 40, 0.2);
  transform: translateY(-2px);
}

.pres-link-icon { font-size: 1.6rem; }

.pres-link-text {
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
}

.pres-link-arrow {
  font-size: 1.2rem;
  color: #c15b28;
  font-weight: 700;
}

.embed-wrapper {
  display: flex;
  justify-content: center;
}

.frame {
  display: flex;
  justify-content: center;
  width: 100%;
}

.frame iframe {
  width: 100%;
  max-width: 800px;
  border-radius: 18px;
  border: none;
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.4);
}

/* COMPARE */
.compare-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
  margin-top: 1.4rem;
}

.compare-arrow {
  font-size: 2rem;
  color: #c15b28;
  text-align: center;
}

.compare-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.3rem 1.4rem 1.5rem;
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.4);
  position: relative;
}

.compare-card.old { border-top: 4px solid #94a3b8; }
.compare-card.new { border-top: 4px solid #c15b28; }

.compare-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 0.4rem;
}

.compare-card.new .compare-label { color: #c15b28; }

.compare-card h3 { margin: 0 0 0.4rem; font-size: 1rem; }
.compare-card p { margin: 0 0 0.8rem; font-size: 0.88rem; color: #4b5563; line-height: 1.6; }
.compare-card code { background: #f3f4f6; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.82rem; }

.compare-steps {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.compare-steps span {
  background: #f3f4f6;
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.78rem;
  color: #374151;
}

.compare-card.new .compare-steps span {
  background: #fff1eb;
  color: #c15b28;
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
.step code { background: #f3f4f6; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.82rem; }

/* OUTCOMES */
.case-outcomes { margin-bottom: 3rem; }
.case-outcomes h2 { margin: 0.2rem 0 1rem; }

.outcome-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-top: 1.2rem;
}

.zoom-card { position: relative; cursor: pointer; margin: 0; }
.zoom-card img { width: 100%; height: auto; object-fit: cover; border-radius: 12px; display: block; }

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
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .compare-grid { grid-template-columns: 1fr; }
  .compare-arrow { transform: rotate(90deg); }
}

@media (max-width: 768px) {
  .project-page { padding-inline: 1.25rem; }
  .gallery-grid { grid-template-columns: 1fr; }
}
</style>
