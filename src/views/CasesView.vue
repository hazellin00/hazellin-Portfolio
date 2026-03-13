<template>
  <main class="page-container">
    <!-- === FULLSCREEN PHOTO HERO === -->
    <section class="hero-full">
      <div class="hero-img-wrapper">
        <img src="@/assets/images/speech2.jpg" alt="Hero Background" class="hero-img">
      </div>

      <div class="hero-title">
        <h1 style="color: rgb(248, 255, 255)">Case Portfolio</h1>
        <h3 style="color: rgb(253, 252, 253)">Open to roles in marketing analytics, operations & tech-enabled growth.</h3>
      </div>
    </section>

    <!-- Paths summary cards -->
    <section class="paths" id="paths">
        <h2>Two Core Professional Paths</h2>

        <div class="paths-grid">
          <div class="path-card">
            <div class="path-icon">📊</div>
            <h3>Marketing & Branding Strategy &amp; Analytics</h3>
            <p>Campaigns, dashboards, product &amp; brand marketing.</p>
            <div class="case-links">
              <router-link to="/cases/andertons">Andertons</router-link>
              <router-link to="/cases/hultprize">Hult Prize</router-link>
            </div>
            <span class="path-tag">2 cases</span>
          </div>

          <div class="path-card">
            <div class="path-icon">🤖</div>
            <h3>Tech &amp; AI-Driven Growth</h3>
            <p>Using software, data &amp; AI tools to support growth.</p>
            <div class="case-links">
              <router-link to="/cases/david-sobey">David Sobey</router-link>
              <router-link to="/cases/zarastus">Zarastus</router-link>
            </div>
            <span class="path-tag">2 cases</span>
          </div>
        </div>
      </section>

      <!-- EXPLORE GALLERY — Photography Style -->
      <section class="cases-banner">
        <h2 class="banner-title">Explore All Cases</h2>

        <section class="floating-cases">
          <router-link class="float-img size-large pos-a" to="/cases/andertons">
            <img src="@/assets/images/andertons-musicshop.jpg" alt="Andertons Musicshop">
          </router-link>

          <router-link class="float-img size-large pos-b" to="/cases/david-sobey">
            <img src="@/assets/images/dsc-logo.png" alt="DSC">
          </router-link>

          <router-link class="float-img size-medium pos-c" to="/cases/hultprize">
            <img src="@/assets/images/hultprize-wholeteam.webp" alt="Hult Prize">
          </router-link>

          <router-link class="float-img size-medium pos-d" to="/cases/zarastus">
            <img src="@/assets/images/helsinki-stage.jpg" alt="Helsinki Stage">
          </router-link>
        </section>

        <footer class="footer1">
          <router-link to="/projects" class="btn primary">Learn More on Projects</router-link>
        </footer>
      </section>

      <!-- ===== PROCESS TIMELINE ===== -->
      <section class="process">
        <p class="eyebrow center">How I Work</p>
        <h2 class="center">Standard Work Process</h2>

        <div class="process-line">
          <div class="process-step">
            <div class="step-dot">1</div>
            <h4>Understand Context</h4>
            <p>Clarify goals & constraints.</p>
          </div>
          <div class="process-step">
            <div class="step-dot">2</div>
            <h4>Define Requirements</h4>
            <p>Map journeys & KPIs.</p>
          </div>
          <div class="process-step">
            <div class="step-dot">3</div>
            <h4>Execute</h4>
            <p>Run campaigns & operations.</p>
          </div>
          <div class="process-step">
            <div class="step-dot">4</div>
            <h4>Review</h4>
            <p>Measure & optimize.</p>
          </div>
        </div>
      </section>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const handleScroll = () => {
  const img = document.querySelector('.hero-img');
  if (img) {
    const offset = window.scrollY * 0.3; // Parallax effect
    img.style.transform = `translateY(${offset}px)`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Global increases to font size */
.page-container {
  width: 100%;
  font-size: 1.05rem; /* Increased base font size */
  overflow-x: hidden;
}

/* Base Typo */
h1 { font-size: clamp(2.4rem, 4vw, 3.4rem); }
h2 { font-size: clamp(2rem, 3.5vw, 2.8rem); margin-bottom: 1.5rem; }
h3 { font-size: 1.25rem; }
h4 { font-size: 1.15rem; }
p { font-size: 1.05rem; }

.eyebrow {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6366f1;
  margin: 0 0 0.4rem;
}
.eyebrow.center { text-align: center; }
.center { text-align: center; }

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-size: 1rem;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease, transform 0.12s ease, border-color 0.18s ease, box-shadow 0.18s ease;
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

/* HERO 滿版區塊 */
.hero-full {
  position: relative;
  height: 90vh;
  overflow: hidden;
}

.hero-img-wrapper {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateZ(0);
  will-change: transform;
}

.hero-img-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
  z-index: 2;
}

.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Libre Bodoni", serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 0 6px 18px rgba(227, 121, 59, 0.81);
  animation: fadeInHero 1.3s ease-out forwards;
  opacity: 0;
}
.hero-title h1 {
  margin-bottom: 0.5rem; 
}
.hero-title h3 {
  margin: 0; 
  font-weight: 500;
}

@keyframes fadeInHero {
  0% { opacity: 0; transform: translate(-50%, -45%); }
  100% { opacity: 1; transform: translate(-50%, -50%); }
}

/* Paths cards */
.paths {
  margin: 3rem auto;
  padding: 0 1.5rem;
  max-width: 1120px;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.6rem;
}

.path-card {
  background: #ffffff;
  border-radius: 1.1rem;
  padding: 1.5rem 1.4rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow: 0 18px 45px rgba(148, 163, 184, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.path-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 55px rgba(148, 163, 184, 0.7);
  border-color: rgba(129, 140, 248, 0.8);
}

.path-icon {
  width: 48px;
  height: 48px;
  font-size: 1.4rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(91, 141, 255, 0.12);
  margin-bottom: 0.4rem;
}

.path-card h3 {
  margin: 0;
  font-size: 1.15rem;
}

.path-card p {
  margin: 0;
  font-size: 1rem;
  color: #6b7280;
}

.case-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.8rem;
  margin-top: 0.4rem;
}

.case-links a {
  font-size: 0.88rem;
  color: #5b8dff;
  text-decoration: none;
  border-bottom: 1px solid rgba(91, 141, 255, 0.3);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.case-links a:hover {
  color: #c15b28;
  border-color: #c15b28;
}

.path-tag {
  margin-top: 0.8rem;
  font-size: 0.9rem;
  align-self: flex-start;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid rgba(148, 163, 184, 0.5);
}

/* PROCESS TIMELINE */
.process {
  margin: 5rem auto 3rem;
  max-width: 1120px;
  padding: 0 1.5rem;
}

.process-line {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.8rem;
  padding-top: 1.4rem;
  margin: 2rem 5rem 0;
}

.process-line::before {
  content: "";
  position: absolute;
  top: 2.1rem;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(148, 163, 184, 0.4);
  z-index: 0;
}

.process-step {
  position: relative;
  text-align: center;
  padding: 0 0.5rem;
}

.step-dot {
  position: relative;
  z-index: 1;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background-image: linear-gradient(135deg, #5b8dff, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9fafb;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 auto 0.8rem;
  box-shadow: 0 10px 25px rgba(129, 140, 248, 0.7);
}

.process-step h4 {
  margin: 0 0 0.4rem;
}

.process-step p {
  margin: 0;
  color: #6b7280;
}

/* EXPLORE GRID (PHOTOGRAPHY STYLE) */
.cases-banner {
  width: 100%;
  text-align: center;
  padding: 4rem 0 3rem;
}

.banner-title {
  font-family: "Libre Bodoni", serif;
  margin-bottom: 1.5rem;
}

/* SECTION 2 — 自由漂浮圖片 */
.floating-cases {
  position: relative;
  width: 100%;
  height: 1000px; 
  margin-top: 6rem;
}

/* 統一圖片 base style */
.float-img {
  position: absolute;
  display: block;
  transition: transform 0.5s ease, box-shadow 0.4s ease;
}

.float-img img {
  width: 100%;
  height: auto;
  border-radius: 18px;
  display: block;
}

.float-img:hover {
  transform: scale(1.05);
  z-index: 10;
}

.size-large { width: 480px; }
.size-medium { width: 450px; }
.size-small { width: 300px; }

.pos-a { top: 0; left: 10%; }
.pos-b { top: 180px; left: 50%; }
.pos-c { top: 500px; left: 10%; }
.pos-d { top: 650px; left: 50%; }

.footer1 {
  border-top: none;
  margin-top: 3rem;
  text-align: center;
}

/* ===== Mobile layout ===== */
@media (max-width: 768px) {
  .hero-full { height: 70vh; }
  .hero-title {
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem;
  }
  .hero-title h1 { font-size: 2.2rem; }

  .paths { margin: 2rem 1rem; padding: 0; }
  .paths h2 { text-align: left; }
  .paths-grid { grid-template-columns: 1fr; }

  .floating-cases {
    position: static;
    height: auto;
    margin-top: 2rem;
    padding: 0 1.5rem 2rem;
    display: grid;
    gap: 1.5rem;
    justify-content: center;
  }
  
  .float-img {
    position: static;
    width: 100%;
    max-width: 450px;       
    margin: 0 auto;        
    transform: none !important;
  }
  .size-large, .size-medium, .size-small { width: 100%; }
  
  .process-line {
    grid-template-columns: 1fr;
    margin: 2rem 1rem 0;
    gap: 1.2rem;
  }
  .process-line::before { display: none; }
  .process-step { text-align: center; }
}
</style>
