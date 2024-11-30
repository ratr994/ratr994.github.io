<template>
  <div class="container">
    <img src="/src/assets/15-1.jpg" alt="" style="width: 100%" />
    <div>
      <hr />
      <h2>15. Dezember 2022</h2>
      <hr />
    </div>
    <div>
      <br />
      <p>Salzburg 🧂🏰 - Teil V</p>
      <br />
      <p>
        Wir waren dann im Wasser und nach einer so anstrengenden Wanderung
        hatten wir uns die Abkühlung auch verdient.
      </p>
      <br />
      <p>
        Natürlich sind wir, frisch verliebt wie wir waren, auch eng umschlungen
        im Wasser getrieben. Ich weiß noch, dass du erstaunt warst, dass ich
        noch im Wasser stehen konnte. Und so kam es, dass meine Hände irgendwann
        auf deinem Po waren, ich musste dich auch immerhin festhalten. 😬
      </p>
      <br />
      <p>
        Es wäre natürlich gelogen, wenn ich behaupten würde, dass das keine
        Absicht war. Und du hattest auch scheinbar nichts dagegen - wir haben
        uns ja schon lange nicht mehr gesehen. 😆 Da fällt mir gerade wieder
        ein, wie du meine Betthälfte schmutzig gemacht hast und dann war später
        auch noch Blut oben - super. 😆 Und die erste Nacht, ich konnte nicht schlafen, 
        weil du auf einmal nicht geatmet hast und das nicht gewusst hab bzw. ich mir das 
        anders vorgestellt hatte. 🤪
      </p>
      <br />
      <p>
        Also wir treiben da im Wasser umher und auf einmal sehen wir rüber zum
        FKK Strand, ich dachte, ich sehe nicht richtig. 😣 Und dabei bin ich mit
        dem Fuß auch noch bei einem Stein hängengeblieben, ouch. 😣 Meine armen Augen....
      </p>
      <br />
      <p>
        Lange Rede kurzer Sinn: Meine Hände waren überall - Details schreibe ich
        hier jetzt nicht rein, denn falls das mal irgendwer lesen sollte: Sorry,
        das mache ich nicht. 🤪
      </p>
      <br />
      <p>
        Aber das weißt du bestimmt noch ganz genau, was genau passiert ist - das
        war ein absolutes Highlight, das vergesse ich nicht. 🤪 🔥🔥🔥
      </p>
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
