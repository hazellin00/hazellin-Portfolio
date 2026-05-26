<template>
  <main class="page">
    <section class="hero">
      <h1 class="hero-title">Hi, I'm Hazel.</h1>
      <h1 class="hero-title">Design workflows that make teams work smarter.</h1>
      <p class="hero-subtitle">Marketing · Product · Operations · AI</p>
      <div class="social-row">
        <router-link to="/projects">View Skills</router-link>
        <span>•</span>
        <a href="https://www.linkedin.com/in/hazellinn/" target="_blank">LinkedIn</a>
        <span>•</span>
        <a href="mailto:hazellin63@gmail.com">Email</a>
      </div>
    </section>

    <!-- Current focus -->
    <div ref="floatWrapperRef" class="float-wrapper hidden-float" :class="{ 'float-in': isFloating }">
      <div class="ribbon-badge">AI Trainee — Smart Systems Practitioner Track</div>
    </div>

    <!-- AI Highlight -->
    <div class="ai-highlight">
      <p class="ai-label">Taiwan Industrial Development Bureau, MOEA</p>
      <div class="skills-interactive">
        <!-- left tabs -->
        <div class="skills-tabs">
          <button class="skill-tab" :class="{ active: activeSkill === 'backend' }" @click="setActiveSkill('backend')">Backend</button>
          <button class="skill-tab" :class="{ active: activeSkill === 'frontend' }" @click="setActiveSkill('frontend')">Frontend</button>
          <button class="skill-tab" :class="{ active: activeSkill === 'ai' }" @click="setActiveSkill('ai')">AI &amp; ML</button>
        </div>

        <!-- right panels -->
        <div class="skills-panel-wrapper">
          <div class="skill-panel" :class="{ active: activeSkill === 'backend' }">
            <p>Designing lightweight APIs and data flows with <strong>Python</strong>, <strong>FastAPI</strong>, <strong>SQL/MySQL</strong>, <strong>Docker</strong>, and <strong>Git</strong>.</p>
          </div>
          <div class="skill-panel" :class="{ active: activeSkill === 'frontend' }">
            <p>Building clear, responsive interfaces for dashboards and internal tools with <strong>HTML</strong>, <strong>CSS</strong>, JavaScript, and <strong>Vue.js</strong>.</p>
          </div>
          <div class="skill-panel" :class="{ active: activeSkill === 'ai' }">
            <ul>
              <li>ML</li>
              <li>Deep Learning</li>
              <li>LLMs, vector search</li>
              <li>Azure ML</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- JOURNEY SECTION -->
    <section class="journey-section">
      <div class="journey-copy">
        <h2 class="journey-title">Why I moved into AI &amp; tech-driven marketing.</h2>
        <p class="journey-text">My path blends marketing strategy, logistics, and now AI & data – and led me to the AI trainee track after Taiwan.</p>
        <router-link to="/about" class="journey-cta-btn">Read my story →</router-link>
      </div>

      <div class="journey-carousel">
        <div class="journey-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <article class="journey-slide">
            <h3>Marketing &amp; Branding</h3>
            <img class="journey-photo" src="@/assets/images/line.png" alt="Marketing & Branding" />
            <p>Started in international marketing and product branding, learning how campaigns, content, and positioning shape growth.</p>
          </article>
          <article class="journey-slide">
            <h3>Logistics &amp; Operations</h3>
            <img class="journey-photo" src="@/assets/images/tech-supply-chain.png" alt="Supply Chain" />
            <p>3PL analytics intern in a Munich tech company, seeing how details, timelines, and constraints shape customer experience.</p>
          </article>
          <article class="journey-slide">
            <h3>AI Trainee Track</h3>
            <img class="journey-photo" src="@/assets/images/ai-track-home.jpg" alt="AI Trainee Track" />
            <p>Joined the Smart Systems program to build hands-on Python, API, data, and ML skills for marketing analytics.</p>
          </article>
          <article class="journey-slide">
            <img class="journey-photo" src="@/assets/images/decathlon-horizontal.jpg" alt="Decathlon" />
            <p>Marketing & brand roles at Decathlon Taiwan and LINE Taiwan, learning how campaigns and positioning drive growth.</p>
          </article>
          <article class="journey-slide">
            <img class="journey-photo" src="@/assets/images/speech-event.jpg" alt="Event Leadership" />
            <p>Event Leadership &amp; Engagement, leading on-site flow, stakeholder communication and audience engagement for forums, festivals and performances.</p>
          </article>
        </div>
        <div class="journey-dots">
          <button v-for="n in 5" :key="n" class="dot" :class="{ active: currentSlide === (n - 1) }" @click="goToSlide(n - 1)"></button>
        </div>
      </div>
    </section>

    <!-- INDUSTRY SECTION -->
    <section class="industry-scroll-section">
      <h2 class="industry-scroll-title">Diverse Industry Background</h2>
      <div class="industry-scroll-container">
        <div class="industry-scroll-card">
          <img src="@/assets/images/giga-logo.png" alt="GigaDevice" />
          <a href="https://drive.google.com/file/d/1T1Jei_63ZcQrs-LMtwnBZR9o4itAxtoP/view?usp=sharing" target="_blank">Read Bio →</a>
        </div>
        <div class="industry-scroll-card">
          <img src="@/assets/images/taise-logo.jpg" alt="TAISE" />
          <a href="https://drive.google.com/file/d/1Kr_-vx3gbAdhLObhgi1UZT3XMkgttVdk/view?usp=sharing" target="_blank">Read Bio →</a>
        </div>
        <div class="industry-scroll-card">
          <img src="@/assets/images/line-logo.jpeg" alt="LINE" />
          <a href="https://drive.google.com/file/d/13hYO7UqeVXfAwydJaRWLW44vGf4L_u5n/view?usp=sharing" target="_blank">Read Bio →</a>
        </div>
        <div class="industry-scroll-card">
          <img src="@/assets/images/modular-logo.jpeg" alt="Modular" />
          <a href="https://drive.google.com/file/d/1BnkHqUyigOAanuyq3jehW70dIfXdtBO3/view?usp=sharing"target="_blank">Read Bio →</a>
        </div>
        <div class="industry-scroll-card">
          <img src="@/assets/images/decathlon-logo.jpeg" alt="Decathlon" />
          <a href="https://drive.google.com/file/d/1EdlT49FUQdijb6daiYd2Y19mGh_ef5vK/view?usp=sharing" target="_blank">Read Bio →</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Intersection Observer for floating animation
const floatWrapperRef = ref(null);
const isFloating = ref(false);

// Skill Tabs Logic
const activeSkill = ref('backend');
const setActiveSkill = (skill) => {
  activeSkill.value = skill;
};

// Carousel Logic
const currentSlide = ref(0);
const totalSlides = 5;
let autoPlayInterval = null;

const goToSlide = (index) => {
  currentSlide.value = index;
  resetAutoPlay();
};

const resetAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
  }, 4000);
};

onMounted(() => {
  resetAutoPlay();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isFloating.value = true;
        } else {
          isFloating.value = false;
        }
      });
    },
    { threshold: 0.4 }
  );

  if (floatWrapperRef.value) {
    observer.observe(floatWrapperRef.value);
  }
});

onUnmounted(() => {
  if (autoPlayInterval) clearInterval(autoPlayInterval);
});
</script>

<style scoped>
/* Scoped styles extracted from homepage.css */

.eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6366f1;
  margin: 0 0 0.4rem;
}

.page {
  min-height: 100vh;
}

.hero {
  max-width: 900px;
  height: 400px;
  margin: 120px auto 0;
  padding: 0 24px;
}

.hero-title {
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.6rem;
  color: #0b0c1d;
  text-align: center;
}

.hero-subtitle {
  font-size: 1rem;
  color: #7a7e85;
  font-family: inherit;
  margin-top: 5rem;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.6;
}

.cta-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-row {
  margin-top: 0.3rem;
  font-size: 0.95rem;
  color: #555;
  opacity: 0.85;
  text-align: center;
}

.social-row a {
  text-decoration: none;
  color: inherit;
}

.social-row a:hover {
  text-decoration: underline;
}

/* AI Trainee Floating Badge */
.ribbon-badge {
  font-family: "Libre Bodoni", serif;
  font-style: italic;
  font-weight: 600;
  display: inline-block;
  margin: 1rem auto 0.4rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #84aad9, #6971dcac);
  color: white;
  border-radius: 12px;
  font-size: 1.2rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.25);
}

.float-wrapper {
  text-align: center;
  margin-top: 1rem;
}

.hidden-float {
  opacity: 0;
  transform: translateY(30px);
  transition: 0.6s ease;
}

.float-in {
  opacity: 1;
  transform: translateY(0);
}

/* AI Highlight Card */
.ai-highlight {
  max-width: 840px;
  margin: 1.8rem auto 2.5rem;
  padding: 1.75rem 2rem;
  border-radius: 24px;
  background: linear-gradient(135deg, #eef2ff, #fdf2ff);
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
  text-align: center;
}

.ai-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #6b7280;
  margin: 0 0 0.4rem;
}

.skills-interactive {
  display: grid;
  grid-template-columns: minmax(160px, 200px) 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.skills-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.skill-tab {
  border: none;
  padding: 0.6rem 1rem;
  background: #e0e3ff;
  border-radius: 999px;
  cursor: pointer;
  text-align: left;
  font-size: 0.9rem;
  transition: 0.25s ease;
}

.skill-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.25);
}

.skill-tab.active {
  background: linear-gradient(135deg, #4f46e5, #a855f7);
  color: white;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.45);
}

.skills-panel-wrapper {
  min-height: 120px;
  text-align: left;
}

.skill-panel {
  display: none;
  opacity: 1;
  position: static;
  transform: none;
}

.skill-panel.active {
  display: block;
}

.skill-panel ul {
  margin: 0.4rem 0 0;
  padding-left: 1.2rem;
}

.skill-panel li {
  margin: 0.1rem 0;
}

/* Journey Section */
.journey-section {
  width: 100%;
  margin: 3rem 0;
  padding: 3rem 5vw;
  background: #fbf5ff;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.7fr);
  gap: 2.8rem;
}

.journey-copy {
  max-width: 560px;
}

.journey-title {
  font-family: "Libre Bodoni", serif;
  margin: 6rem 0 2rem;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1.5;
}

.journey-text {
  margin-top: 20px;
  font-size: 1rem;
  color: #4b3b41;
  line-height: 1.9;
}

.journey-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: #efe3ff;
  box-shadow: 0 18px 44px rgba(148, 90, 211, 0.25);
  padding: 1.75rem 1.5rem 2.3rem;
}

.journey-track {
  display: flex;
  transition: transform 0.5s ease;
}

.journey-slide {
  min-width: 100%;
  padding-right: 1rem;
  box-sizing: border-box;
}

.journey-slide h3 {
  font-family: inherit;
  margin: 0 0 0.7rem;
  font-size: 1.1rem;
}

.journey-slide p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.8;
}

.journey-dots {
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.journey-dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: none;
  background: rgba(148, 90, 211, 0.35);
  cursor: pointer;
  transition: width 0.2s ease, background 0.2s ease;
}

.journey-dots .dot.active {
  width: 18px;
  background: rgba(148, 90, 211, 0.95);
}

.journey-photo {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 0.9rem;
}

.journey-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-size: 0.9rem;
  border: none;
  background-image: linear-gradient(135deg, #5b8dff, #a855f7);
  color: #f9fafb;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.18s ease;
  text-decoration: none;
}

.journey-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(88, 80, 236, 0.55);
}

/* Industry Section */
.industry-scroll-section {
  padding: 70px 0 90px;
  background: #faf5ff;
  text-align: left;
  overflow: hidden;
  width: 100%;
}

.industry-scroll-title {
  font-family: "Libre Bodoni", serif;
  font-size: 40px;
  margin-bottom: 40px;
  padding-left: 20px;
}

.industry-scroll-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 32px;
  padding: 20px 20px 40px 20px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.industry-scroll-container::-webkit-scrollbar {
  height: 8px;
}
.industry-scroll-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
.industry-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.industry-scroll-card {
  flex: 0 0 auto;
  width: 280px;
  min-width: 280px;
  background: #fff;
  border-radius: 20px;
  padding: 24px 18px;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
}

.industry-scroll-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 45px rgba(0, 0, 0, 0.12);
}

.industry-scroll-card img {
  width: 80%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 20px;
}

.industry-scroll-card a {
  color: #b66a57;
  text-decoration: none;
  border-bottom: 1px solid #d8a49a;
  padding-bottom: 3px;
  font-size: 16px;
  transition: 0.2s;
}

.industry-scroll-card a:hover {
  color: #a25748;
  border-color: #a25748;
}

/* Responsive Overrides */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    padding: 4.5rem 1.5rem 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    margin: 90px auto 0;
    padding: 0 1.4rem 2.2rem;
  }

  .hero-title {
    font-size: 1.8rem;
    text-align: left;
    margin-bottom: 1.1rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-top: 1.2rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .ai-highlight {
    margin: 1.6rem 1rem 2.4rem;
    padding: 1.4rem 1.4rem 1.8rem;
  }

  .skills-interactive {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skills-tabs {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .journey-section {
    grid-template-columns: 1fr;
    padding: 2.4rem 1.5rem 2.6rem;
    gap: 2rem;
  }

  .journey-photo {
    height: 220px;
  }

  .industry-scroll-section {
    padding: 2.5rem 0 3rem;
  }

  .industry-scroll-title {
    font-size: 2rem;
    margin-bottom: 1.6rem;
    padding: 0 1.5rem;
    text-align: left;
  }

  .industry-scroll-container {
    gap: 16px;
    padding: 0 1.5rem 1.5rem;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .industry-scroll-container::-webkit-scrollbar {
    display: none;
  }

  .industry-scroll-card {
    flex: 0 0 80%;
    max-width: 80%;
    scroll-snap-align: start;
  }

  .industry-scroll-card img {
    height: 90px;
  }
}
</style>
