<template>
  <div class="main-container">

  <div class="container">
    <div class="marquee">
  <div class="marquee__group">
    <img src='/src/assets/14-1.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-2.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-3.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-4.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-5.jpg' alt='' style="width: 100%;">
  </div>

  <div aria-hidden="true" class="marquee__group">
    <img src='/src/assets/14-3.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-4.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-5.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-1.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-2.jpg' alt='' style="width: 100%;">
  </div>
</div>

<div class="marquee marquee--borders" style="--duration: 100s">
  <div class="marquee__group">
    <p aria-hidden="true">Die coolsten</p>
    <p aria-hidden="true">Das sind wir</p>
  </div>

  <div aria-hidden="true" class="marquee__group">
    <p>Erlebnisse</p>
    <p>Erinnerungen</p>
    <p>Freude</p>
  </div>
</div>

<div class="marquee marquee--reverse">
  <div class="marquee__group">
    <img src='/src/assets/14-4.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-5.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-3.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-2.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-1.jpg' alt='' style="width: 100%;">
  </div>

  <div aria-hidden="true" class="marquee__group">
    <img src='/src/assets/14-4.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-5.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-3.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-2.jpg' alt='' style="width: 100%;">
    <img src='/src/assets/14-1.jpg' alt='' style="width: 100%;">
  </div>
  
</div>
  </div>

</div>
</template>

<script>
export default {
  name: "DayThirteen.vue",
};
</script>

<style lang="scss" scoped>

.main-container {
  --space: 2rem;
  overflow: hidden;
  width: 100%;
  font-family: "Corben", system-ui, sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
}

.marquee {
  --duration: 100s;
  --gap: var(--space);

  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  transform: skewY(-3deg);
}

.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  animation: scroll var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .marquee__group {
    animation-play-state: paused;
  }
}

.marquee__group img {
  max-width: clamp(10rem, 1rem + 28vmin, 20rem);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 1rem;
}

.marquee__group p {
  background-image: linear-gradient(
    75deg,
    hsl(240deg 70% 49%) 0%,
    hsl(253deg 70% 49%) 11%,
    hsl(267deg 70% 49%) 22%,
    hsl(280deg 71% 48%) 33%,
    hsl(293deg 71% 48%) 44%,
    hsl(307deg 71% 48%) 56%,
    hsl(320deg 71% 48%) 67%,
    hsl(333deg 72% 48%) 78%,
    hsl(347deg 72% 48%) 89%,
    hsl(0deg 73% 47%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.marquee--borders {
  border-block: 3px solid dodgerblue;
  padding-block: 0.75rem;
}

.marquee--reverse .marquee__group {
  animation-direction: reverse;
  animation-delay: calc(var(--duration) / -2);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

</style>
