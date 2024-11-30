<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'v-spoiler/dist/v-spoiler.css';
import 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Start</RouterLink>
        <RouterLink to="/about">Information</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
