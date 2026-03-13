<template>
  <header class="site-header">
    <router-link to="/" class="logo">Hazellin</router-link>
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>

      <!-- Projects dropdown -->
      <div class="nav-item" @mouseenter="openProjects" @mouseleave="closeProjects">
        <router-link to="/projects" class="nav-trigger">Projects</router-link>
        <div class="mega-menu" :class="{ visible: projectsOpen }">
          <div class="mega-col">
            <p class="mega-category">Event Marketing &amp; Branding Analytics</p>
            <router-link to="/projects/pacific-climate" @click="closeProjects">Pacific Climate</router-link>
            <router-link to="/projects/game-modular" @click="closeProjects">Game Modular</router-link>
            <router-link to="/projects/golden-eagle" @click="closeProjects">Golden Eagle ESG</router-link>
            <router-link to="/projects/modular-agency" @click="closeProjects">Modular × Acer</router-link>
          </div>
          <div class="mega-divider"></div>
          <div class="mega-col">
            <p class="mega-category">Tech &amp; AI-Driven Growth</p>
            <router-link to="/projects/ai-track" @click="closeProjects">AI Track</router-link>
            <router-link to="/projects/dinejoy" @click="closeProjects">Dine Joy</router-link>
            <router-link to="/projects/master-thesis" @click="closeProjects">Master Thesis</router-link>
          </div>
          <div class="mega-divider"></div>
          <div class="mega-col">
            <p class="mega-category">Logistics &amp; Operations</p>
            <router-link to="/projects/gigadevice" @click="closeProjects">GigaDevice Semiconductor</router-link>
          </div>
        </div>
      </div>

      <!-- Cases dropdown -->
      <div class="nav-item" @mouseenter="openCases" @mouseleave="closeCases">
        <router-link to="/cases" class="nav-trigger">Cases</router-link>
        <div class="mega-menu" :class="{ visible: casesOpen }">
          <div class="mega-col">
            <p class="mega-category">Marketing &amp; Branding Strategy &amp; Analytics</p>
            <router-link to="/cases/andertons" @click="closeCases">Andertons</router-link>
            <router-link to="/cases/hultprize" @click="closeCases">Hult Prize</router-link>
          </div>
          <div class="mega-divider"></div>
          <div class="mega-col">
            <p class="mega-category">Tech &amp; AI-Driven Growth</p>
            <router-link to="/cases/david-sobey" @click="closeCases">David Sobey</router-link>
            <router-link to="/cases/zarastus" @click="closeCases">Zarastus</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const projectsOpen = ref(false);
const casesOpen = ref(false);

let projectsTimer, casesTimer;

function openProjects() {
  clearTimeout(projectsTimer);
  projectsOpen.value = true;
}
function closeProjects() {
  projectsTimer = setTimeout(() => { projectsOpen.value = false; }, 120);
}
function openCases() {
  clearTimeout(casesTimer);
  casesOpen.value = true;
}
function closeCases() {
  casesTimer = setTimeout(() => { casesOpen.value = false; }, 120);
}
</script>

<style scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--bg-primary, rgba(255, 255, 255, 0.8));
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 200;
  border-bottom: 1px solid var(--border-color, rgba(0,0,0,0.05));
}

.logo {
  font-family: 'Cutive Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary, #333);
  text-decoration: none;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-family: 'Cutive Mono', monospace;
  font-size: 1rem;
  letter-spacing: 0.01em;
}

/* plain links (Home, About Me) */
.main-nav > a {
  position: relative;
  padding-bottom: 0.1rem;
  text-decoration: none;
  color: var(--text-secondary, #666);
  font-weight: 500;
  transition: color 0.3s ease;
}
.main-nav > a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #c15b28;
  transition: width 0.8s ease;
}
.main-nav > a:hover,
.main-nav > a.router-link-active {
  color: #c15b28;
}
.main-nav > a:hover::after,
.main-nav > a.router-link-active::after {
  width: 100%;
}

/* dropdown wrapper */
.nav-item {
  position: relative;
}

.nav-trigger {
  position: relative;
  padding-bottom: 0.1rem;
  text-decoration: none;
  color: var(--text-secondary, #666);
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  font-family: 'Cutive Mono', monospace;
  font-size: 1rem;
}
.nav-trigger::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #c15b28;
  transition: width 0.8s ease;
}
.nav-trigger:hover,
.nav-trigger.router-link-active {
  color: #c15b28;
}
.nav-trigger:hover::after,
.nav-trigger.router-link-active::after {
  width: 100%;
}

/* mega menu panel */
.mega-menu {
  position: absolute;
  top: calc(100% + 1.2rem);
  right: 0;
  display: flex;
  gap: 0;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(193, 91, 40, 0.12);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.10), 0 4px 16px rgba(193, 91, 40, 0.08);
  padding: 1.4rem 1.6rem;
  min-width: 480px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 300;
}

.mega-menu.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.mega-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  padding: 0 1rem;
}
.mega-col:first-child { padding-left: 0; }
.mega-col:last-child { padding-right: 0; }

.mega-category {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c15b28;
  margin: 0 0 0.6rem;
  line-height: 1.4;
}

.mega-col a {
  font-family: 'Cutive Mono', monospace;
  font-size: 0.88rem;
  color: #4b5563;
  text-decoration: none;
  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, padding-left 0.2s ease;
  white-space: nowrap;
}

.mega-col a:hover {
  color: #c15b28;
  border-color: rgba(193, 91, 40, 0.3);
  padding-left: 4px;
}

.mega-divider {
  width: 1px;
  background: rgba(148, 163, 184, 0.25);
  margin: 0 0.4rem;
  align-self: stretch;
}

/* mobile: hide dropdowns, keep nav scrollable */
@media (max-width: 768px) {
  .mega-menu { display: none; }
  .main-nav { gap: 1rem; font-size: 0.9rem; }
}
</style>
