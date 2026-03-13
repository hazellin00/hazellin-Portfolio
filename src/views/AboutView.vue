<template>
  <main class="page">
    <!-- Hero：個人故事開頭 -->
    <section class="hero">
      <div class="hero-left">
        <p class="eyebrow">About Me</p>
        <h1>Blending Marketing, Logistics &amp; AI.</h1>
        <p class="hero-lead">
          Educated across
          <strong> Germany, France, Finland &amp; Taiwan</strong>.
        </p>
        <p>
          International retail, marketing, and global business. My Master’s in
          Germany sharpens my digital marketing, supply chain, and data
          skills. An AI & ICT summer school in Finland adds hands-on Python
          and machine learning for business.
        </p>
        <div class="hero-actions">
          <router-link to="/cases" class="btn primary">View my case studies</router-link>
          <a href="#my-journey" class="btn ghost">See my journey</a>
        </div>
      </div>

      <aside class="hero-right">
        <div class="photo-placeholder">
          <img src="@/assets/images/portfolio.jpg" class="photo" alt="Hazel Lin" />
        </div>
      </aside>
    </section>

    <!-- Skills & Stats section -->
    <section class="skills-stats">
      <div class="skills-left">
        <h2>Where I’m Strongest Right Now</h2>
        <p class="skills-text">
          These bars reflect how I currently split my focus.
        </p>

        <div class="skill-row">
          <div class="skill-label">
            <span>Marketing Strategy &amp; Analytics</span>
            <span class="skill-percent">85%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill skill-1"></div>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-label">
            <span>Logistics &amp; Operations</span>
            <span class="skill-percent">75%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill skill-2"></div>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-label">
            <span>Tech &amp; AI-Driven Growth</span>
            <span class="skill-percent">80%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill skill-3"></div>
          </div>
        </div>
      </div>

      <div class="stats-right">
        <div class="stat-block">
          <span class="stat-number">8+</span>
          <span class="stat-label">Case studies</span>
        </div>
        <div class="stat-block">
          <span class="stat-number">4+</span>
          <span class="stat-label">Industries</span>
        </div>
        <div class="stat-block">
          <span class="stat-number">4</span>
          <span class="stat-label">Countries worked / studied in</span>
        </div>
        <div class="stat-block">
          <span class="stat-number">10+</span>
          <span class="stat-label">Events &amp; programs supported</span>
        </div>
      </div>
    </section>

    <section id="my-journey" class="vp-hero">
      <p class="eyebrow center">My Journey</p>
      <h2>What a journey!</h2>

      <div class="vp-stage"
           @mousedown="onDragStart"
           @mouseup="onDragEnd"
           @mouseleave="onDragEnd"
           @touchstart="onTouchStart"
           @touchend="onTouchEnd">
        <div class="vp-track" :style="trackStyle">
          <!-- Card 1 -->
          <div class="vp-card" :class="getCardClass(0)" @click="setVpIndex(0)">
            <img src="@/assets/images/association-linkage.jpg" />
            <div class="vp-caption">
              2019-2021: Activities Leader at Feng Chia University, connecting
              cultures, guiding international students, and leading community
              and eco initiatives through the Volunteer Linkage Association.
            </div>
          </div>
          <!-- Card 2 -->
          <div class="vp-card" :class="getCardClass(1)" @click="setVpIndex(1)">
            <img src="@/assets/images/hultprize-wholeteam.webp" />
            <div class="vp-caption">
              2021:Hult Prize — global collaboration & student experience
              design.
            </div>
          </div>
          <!-- Card 3 -->
          <div class="vp-card" :class="getCardClass(2)" @click="setVpIndex(2)">
            <img src="@/assets/images/edhec.jpg" alt="France exchange" />
            <div class="vp-caption">
              2022:Exchange at France EDHEC Business School, exploring luxury
              branding, digital marketing, and strategic thinking through
              real-world case studies.
            </div>
          </div>
          <!-- Card 4 -->
          <div class="vp-card" :class="getCardClass(3)" @click="setVpIndex(3)">
            <img src="@/assets/images/speech-event.jpg" alt="speach" />
            <div class="vp-caption">
              2022: I spoke at Feng Chia University about my exchange
              experience, sharing what I learned and offering guidance to
              younger students.
            </div>
          </div>
          <!-- Card 5 -->
          <div class="vp-card" :class="getCardClass(4)" @click="setVpIndex(4)">
            <img src="@/assets/images/line-event.jpg" alt="LINE" />
            <div class="vp-caption">
              2022: Managed event engagement and digital strategy, creating interactive experiences for LINE users.
            </div>
          </div>
          <!-- Card 6 -->
          <div class="vp-card" :class="getCardClass(5)" @click="setVpIndex(5)">
            <img src="@/assets/images/pacific-climate.jpg" />
            <div class="vp-caption">
              2022: Managed green transport proposals and SDG events, gaining confidence and stronger management skills.
            </div>
          </div>
          <!-- Card 7 -->
          <div class="vp-card" :class="getCardClass(6)" @click="setVpIndex(6)">
            <img src="@/assets/images/taise-golden-eagle.jpg" />
            <div class="vp-caption">
              2022: Supported the ESG-focused Taipei Golden Eagle Micro-Movie
              Festival, contributing to the opening video and project reporting.
            </div>
          </div>
          <!-- Card 8 -->
          <div class="vp-card" :class="getCardClass(7)" @click="setVpIndex(7)">
            <img src="@/assets/images/christmas-germany.jpg" />
            <div class="vp-caption">
              2023: Master’s in CRM in Germany, working on global
              projects and Python-based RFM analysis.
            </div>
          </div>
          <!-- Card 9 -->
          <div class="vp-card" :class="getCardClass(8)" @click="setVpIndex(8)">
            <img src="@/assets/images/intern-germany.jpg" />
            <div class="vp-caption">
              2024:Logistics internship — learning how operations shape
              customer experience.
            </div>
          </div>
          <!-- Card 10 -->
          <div class="vp-card" :class="getCardClass(9)" @click="setVpIndex(9)">
            <img src="@/assets/images/hackathon-helsinki.jpg" />
            <div class="vp-caption">
              2024:Worked with an international team to create Zarastus, an AI
              tool that helps users identify misinformation.
            </div>
          </div>
          <!-- Card 11 -->
          <div class="vp-card" :class="getCardClass(10)" @click="setVpIndex(10)">
            <img src="@/assets/images/finland-exchange.jpg" />
            <div class="vp-caption">
              2025:AI & ICT summer school in Finland — Python, ML, real
              business problem solving.
            </div>
          </div>
          <!-- Card 12 -->
          <div class="vp-card" :class="getCardClass(11)" @click="setVpIndex(11)">
            <img src="@/assets/images/ai-track-home.jpg" />
            <div class="vp-caption">
              2025:Smart Systems Track — Python, FastAPI, SQL, Docker, AI for
              marketing analytics.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How I Work / Strengths -->
    <section class="strengths">
      <p class="eyebrow center">How I Work</p>
      <h2>What I Bring to a Team</h2>

      <div class="strengths-grid">
        <article class="strength-card">
          <div class="strength-icon">🔍</div>
          <h3>Data-informed thinking</h3>
          <p>Turning data into clear insights that guide smarter decisions.</p>
        </article>

        <article class="strength-card">
          <div class="strength-icon">🌍</div>
          <h3>Global &amp; cross-cultural</h3>
          <p>Communicating and collaborating effectively across cultures and international teams.</p>
        </article>

        <article class="strength-card">
          <div class="strength-icon">🚚</div>
          <h3>Execution &amp; logistics</h3>
          <p>Transforming ideas into action — planning constraints and delivering smooth end-to-end execution.</p>
        </article>

        <article class="strength-card">
          <div class="strength-icon">🧠</div>
          <h3>Curious &amp; technical</h3>
          <p>Fast learner who loves new tools, applying Python, AI, and workflows to solve real business challenges.</p>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-inner">
        <div>
          <h2>Let’s talk about growth.</h2>
          <p>
            I’m open to roles in global marketing analytics, operations, and AI-supported expansion teams.
          </p>
        </div>
        <div class="cta-actions">
          <router-link to="/cases" class="btn ghost">Browse cases</router-link>
          <a href="https://www.linkedin.com/in/hazellinn/" class="btn primary" target="_blank">Contact me</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const vpIndex = ref(0);
const totalCards = 12; // Adjusted based on HTML items
let autoplayInterval = null;

const trackStyle = computed(() => {
  const offset = -vpIndex.value * 380; // card width + gap
  return {
    transform: `translateY(-50%) translateX(${offset}px)`
  };
});

const getCardClass = (index) => {
  const center = vpIndex.value;
  const left = (vpIndex.value - 1 + totalCards) % totalCards;
  const right = (vpIndex.value + 1) % totalCards;

  if (index === center) return 'is-center';
  if (index === left) return 'is-left';
  if (index === right) return 'is-right';
  return '';
};

const setVpIndex = (index) => {
  vpIndex.value = index;
  resetAutoplay();
};

const resetAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval);
  autoplayInterval = setInterval(() => {
    vpIndex.value = (vpIndex.value + 1) % totalCards;
  }, 4000);
};

// Drag functionality
let startX = 0;
let dragging = false;

const onDragStart = (e) => {
  dragging = true;
  startX = e.clientX;
};
const onDragEnd = (e) => {
  if (!dragging) return;
  dragging = false;
  handleSwipe(e.clientX - startX);
};

const onTouchStart = (e) => {
  dragging = true;
  startX = e.touches[0].clientX;
};
const onTouchEnd = (e) => {
  if (!dragging) return;
  dragging = false;
  handleSwipe(e.changedTouches[0].clientX - startX);
};

const handleSwipe = (diff) => {
  if (Math.abs(diff) < 70) return;
  if (diff > 0) {
    vpIndex.value = (vpIndex.value - 1 + totalCards) % totalCards;
  } else {
    vpIndex.value = (vpIndex.value + 1) % totalCards;
  }
  resetAutoplay();
};

onMounted(() => {
  setTimeout(() => {
    resetAutoplay();
  }, 100);
});

onUnmounted(() => {
  if (autoplayInterval) clearInterval(autoplayInterval);
});
</script>

<style scoped>
/* Scoped CSS based on about.css. Increased fonts across the board */
.page {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3.5rem;
  font-size: 1.05rem; /* Increased base font */
}

.eyebrow {
  font-size: 0.9rem; /* Increased */
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6366f1;
  margin: 0 0 0.4rem;
}
.eyebrow.center {
  text-align: center;
}

/* Typography increases */
h1 { font-size: clamp(2.4rem, 4vw, 3.2rem); }
h2 { font-size: clamp(2rem, 3.5vw, 2.6rem); }
h3 { font-size: 1.15rem; }

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem; /* Increased */
  border-radius: 999px;
  font-size: 1rem; /* Increased */
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease, transform 0.12s ease,
    border-color 0.18s ease, box-shadow 0.18s ease;
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
.hero {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.3fr);
  gap: 2rem;
  align-items: center;
  margin-bottom: 4rem;
}

.hero-lead {
  font-size: 1.15rem; /* Increased */
  color: #111827;
}

.hero-left p {
  margin: 0 0 0.9rem;
  color: #6b7280;
  line-height: 1.8; /* Increased spacing */
}

.hero-left h1 {
  margin: 0 0 0.9rem;
}

.hero-actions {
  margin-top: 1.4rem;
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.photo-placeholder {
  border-radius: 24px;
  background: linear-gradient(135deg, #6365f149, #a955f736);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  box-shadow: 0 18px 45px rgba(129, 140, 248, 0.8);
}

.photo {
  width: 100%;
  border-radius: 20px;
}

/* Skills + Stats section */
.skills-stats {
  margin-bottom: 4rem;
  padding: 2.5rem 2.2rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow: 0 20px 50px rgba(148, 163, 184, 0.5);
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.2fr);
  gap: 2rem;
  align-items: center;
}

.skills-left h2 {
  margin: 0.2rem 0 0.6rem;
}

.skills-text {
  margin: 0 0 1.4rem;
  font-size: 1rem; /* Increased */
  color: #6b7280;
}

.skill-row {
  margin-bottom: 1rem;
}

.skill-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem; /* Increased */
  color: #4b5563;
  margin-bottom: 0.35rem;
}

.skill-percent {
  font-weight: 600;
}

.skill-bar {
  height: 10px; /* Increased */
  border-radius: 999px;
  background: #e5e7eb;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 999px;
  background-image: linear-gradient(135deg, #5b8dff, #a855f7);
}
.skill-1 { width: 85%; }
.skill-2 { width: 75%; }
.skill-3 { width: 80%; }

.stats-right {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
}

.stat-block {
  background: linear-gradient(135deg, #eef2ff, #fdf2ff);
  border-radius: 18px;
  padding: 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.7);
  box-shadow: 0 14px 35px rgba(148, 163, 184, 0.6);
}

.stat-number {
  display: block;
  font-size: 1.8rem; /* Increased */
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.95rem; /* Increased */
  color: #6b7280;
  line-height: 1.4;
}

/* Vision Pro Floating Carousel */
.vp-hero {
  text-align: center;
  margin: 3rem auto;
  max-width: 1050px;
}

.vp-stage {
  perspective: 2000px;
  overflow: hidden;
  position: relative;
  height: 440px;
  margin-top: 2rem;
}

.vp-track {
  display: flex;
  gap: 3rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.8s ease;
}

.vp-card {
  width: 450px;
  height: 400px;
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  cursor: pointer;
}

.vp-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vp-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.3rem;
  font-size: 1.05rem; /* Increased */
  color: white;
  line-height: 1.5;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.vp-card.is-center {
  transform: translateZ(80px) scale(1.08);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.35);
  z-index: 2;
}
.vp-card.is-left {
  transform: translateZ(0) rotateY(12deg) scale(0.9);
  opacity: 0.5;
}
.vp-card.is-right {
  transform: translateZ(0) rotateY(-12deg) scale(0.9);
  opacity: 0.5;
}

/* Strengths */
.strengths {
  margin-bottom: 4rem;
}
.strengths h2 {
  text-align: center;
  margin: 0.2rem 0 2rem;
}

.strengths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.6rem;
}

.strength-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.5rem;
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.5);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.strength-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 55px rgba(129, 140, 248, 0.8);
  border-color: rgba(129, 140, 248, 0.9);
}

.strength-icon {
  width: 42px;
  height: 42px;
  font-size: 1.4rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(129, 140, 248, 0.15);
  margin-bottom: 0.8rem;
}

.strength-card h3 {
  margin: 0 0 0.5rem;
}

.strength-card p {
  margin: 0;
  font-size: 1rem; /* Increased */
  color: #6b7280;
  line-height: 1.6;
}

/* CTA */
.cta {
  margin-bottom: 2.5rem;
}

.cta-inner {
  background: linear-gradient(135deg, #5b8dff, #a855f7);
  border-radius: 24px;
  padding: 2.2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  color: #f9fafb;
  box-shadow: 0 22px 55px rgba(129, 140, 248, 0.9);
}

.cta-inner h2 {
  margin: 0 0 0.6rem;
  color: #f9fafb;
}

.cta-inner p {
  margin: 0;
  font-size: 1.1rem; /* Increased */
  opacity: 0.95;
}

.cta-actions {
  display: flex;
  gap: 1rem;
}

/* Responsive Overrides */
@media (max-width: 900px) {
  .hero, .skills-stats {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .page {
    padding: 1.5rem 1.25rem 3rem;
  }
  .hero-left h1 {
    font-size: 2.4rem;
  }
  .cta-inner {
    flex-direction: column;
    text-align: center;
  }
  .vp-stage {
    height: 380px;
  }
  .vp-card {
    width: 280px;
    height: 340px;
  }
}
</style>
