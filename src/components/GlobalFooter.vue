<template>
  <footer class="site-footer">
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/cases">Cases</router-link>
    </nav>
    <p>© {{ currentYear }} Hazellin. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.site-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 1rem 2rem;
  background: var(--bg-secondary, #f9f9f9);
  color: var(--text-tertiary, #999);
  font-size: 0.9rem;
  border-top: 1px solid var(--border-color, rgba(0,0,0,0.05));
  margin-top: auto;
}

.main-nav {
  font-family: "Cutive Mono", monospace;
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.01em;
}

.main-nav a {
  position: relative;
  padding-bottom: 0.1rem;
  text-decoration: none;
  color: var(--text-secondary, #666);
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 8%;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: red;
  transition: width 0.8s ease;
}

.main-nav a:hover::after {
  background: #c15b28;
  width: 100%;
}
</style>
