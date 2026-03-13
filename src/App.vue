<template>
  <div class="app-layout">
    <GlobalHeader />
    <main class="page-content">
      <router-view />
    </main>
    <GlobalFooter />
  </div>
</template>

<script setup>
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';
</script>

<style>
/* Base layout styles */
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page-content {
  flex: 1;
}
</style>
