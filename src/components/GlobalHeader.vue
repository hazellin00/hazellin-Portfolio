<template>
  <header class="site-header">
    <router-link to="/" class="logo">Hazellin</router-link>
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/cases">Cases</router-link>
    </nav>
  </header>
</template>

<style scoped>
/* These styles will be refined with the global CSS tokens */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--bg-primary, rgba(255, 255, 255, 0.8));
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
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
  gap: 1.5rem;
  font-family: 'Cutive Mono', monospace;
  font-size: 1rem;
  letter-spacing: 0.01em;
}
.main-nav a {
  position: relative;
  padding-bottom: 0.1rem;
  text-decoration: none;
  color: var(--text-secondary, #666);
  font-weight: 500;
  transition: color 0.3s ease;
}
.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #c15b28;
  transition: width 0.8s ease;
}
.main-nav a:hover,
.main-nav a.router-link-active {
  color: #c15b28;
}
.main-nav a:hover::after,
.main-nav a.router-link-active::after {
  width: 100%;
}
</style>
