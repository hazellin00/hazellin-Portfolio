<template>
  <main class="page-container">
    <!-- === FULLSCREEN PHOTO HERO === -->
    <section class="hero-full">
      <div class="hero-img-wrapper">
        <img src="@/assets/images/hackathon-competition-mac.jpg" alt="Hero Background" class="hero-img">
      </div>

      <div class="hero-title">
        <h1 style="color: rgb(175, 57, 57)">Project Portfolio</h1>
        <h3 style="color: rgb(191, 26, 26)">Open to roles in marketing analytics, operations & tech-enabled growth.</h3>
      </div>
    </section>

    <!-- Paths summary cards -->
    <section class="paths" id="paths">
        <h2>Three Core Professional Paths</h2>

        <div class="paths-grid">
          <div class="path-card">
            <div class="path-icon">📊</div>
            <h3>Event Marketing & Branding Analytics</h3>
            <p>Campaigns, dashboards, product &amp; brand marketing.</p>
            <div class="case-links">
              <router-link to="/projects/pacific-climate">Pacific Climate</router-link>
              <router-link to="/projects/game-modular">Game Modular</router-link>
              <router-link to="/projects/golden-eagle">Golden Eagle ESG</router-link>
              <router-link to="/projects/modular-agency">Modular × Acer</router-link>
            </div>
            <span class="path-tag">4 cases</span>
          </div>

          <div class="path-card">
            <div class="path-icon">🤖</div>
            <h3>Tech &amp; AI-Driven Growth</h3>
            <p>Using software, data &amp; AI tools to support growth.</p>
            <div class="case-links">
              <router-link to="/projects/ai-track">AI Track</router-link>
            </div>
            <span class="path-tag">1 case</span>
          </div>

          <div class="path-card">
            <div class="path-icon">📦</div>
            <h3>Logistics &amp; Operations</h3>
            <p>Execution, coordination and on-the-ground problem solving.</p>
            <div class="case-links">
              <router-link to="/projects/gigadevice">GigaDevice Semiconductor</router-link>
            </div>
            <span class="path-tag">1 case</span>
          </div>
        </div>
      </section>

      <!-- EXPLORE GALLERY — Photography Style -->
      <section class="cases-banner">
        <h2 class="banner-title">Explore All Projects</h2>

        <section class="floating-cases" ref="galleryRef">
          <router-link class="float-img size-large pos-a" to="/projects/pacific-climate">
            <img src="@/assets/images/pacific-climate-dinner1.png" alt="Pacific Forum">
          </router-link>

          <router-link class="float-img size-large pos-b" to="/projects/golden-eagle">
            <img src="@/assets/images/golden-eagle-bg.jpg" alt="Golden Eagle Film Festival">
          </router-link>

          <router-link class="float-img size-medium pos-d" to="/projects/modular-agency">
            <img src="@/assets/images/modular-agency.png" alt="Modular Agency">
          </router-link>

          <router-link class="float-img size-medium pos-c" to="/projects/game-modular">
            <img src="@/assets/images/game-modular.png" alt="Game Modular X-Legend">
          </router-link>

          <router-link class="float-img size-medium pos-e" to="/projects/gigadevice">
            <img src="@/assets/images/gigadevice-graduation.jpg" alt="GigaDevice Internship">
          </router-link>

          <router-link class="float-img size-medium pos-f" to="/projects/ai-track">
            <img src="@/assets/images/ai-track-home.jpg" alt="AI Track">
          </router-link>

          <router-link class="float-img size-medium pos-g" to="/projects/master-thesis">
            <img src="@/assets/images/master-thesis-1.jpg" alt="Master Thesis">
          </router-link>
        </section>
      </section>

    <div class="footer1" style="margin-bottom: 50px;">
      <router-link to="/cases" class="btn primary">Learn More on Cases</router-link>
    </div>
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
p { font-size: 1.05rem; }

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
  height: 90vh; /* Keep original design aspect */
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
  background: rgba(255, 255, 255, 0.4);
  pointer-events: none;
  z-index: 2;
}

.hero-title {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Libre Bodoni", serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 0 6px 18px rgba(243, 241, 251, 0.81);
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
  height: 2300px;
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
.pos-c { top: 800px; left: 10%; }
.pos-d { top: 600px; left: 50%; }
.pos-e { top: 950px; left: 50%; }
.pos-f { top: 1200px; left: 10%; }
.pos-g { top: 1750px; left: 50%; }

.footer1 {
  margin-top: 3rem;
  text-align: center;
}

/* ===== Mobile layout (Portfolio Homepage) ===== */
@media (max-width: 768px) {
  .hero-full { height: auto; }
  .hero-img-wrapper { position: relative; height: 260px; }
  
  .hero-title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 100%;
    text-align: center;
    padding: 0;
  }
  .hero-title h1 { font-size: 2.2rem; }
  .hero-title h3 { font-size: 1.1rem; }

  .paths { margin: 2rem 1rem 2rem; padding: 0; }
  .paths-grid { grid-template-columns: 1fr; gap: 1rem; }

  .cases-banner { padding: 1.5rem 0 2rem; }
  
  .floating-cases {
    position: static;
    height: auto;
    margin-top: 2rem;
    padding: 0 1rem 2rem;
    display: grid;
    gap: 1.5rem;
  }
  
  .float-img { position: static; width: 100%; }
  .size-large, .size-medium, .size-small { width: 100%; }
  
  .pos-a, .pos-b, .pos-c, .pos-d, .pos-e, .pos-f, .pos-g { top: auto; left: auto; }
}
</style>
