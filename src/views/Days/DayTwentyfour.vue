<template>
  <div class="container">
    <div>
      <hr />
      <h2>24. Dezember 2022</h2>
      <hr />
    </div>
    <div>
      <div class="snow"></div>
<div>

<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
</div>
      <br>
      <p>
       Heute ist der 24. Dezember.
      </p>
      <br>
      <p>Damit erreichen wir auch schon das letzte Kästchen in diesem Kalender, jetzt werde ich fast ein wenig traurig.</p>
      <br>
      <p>Und wir haben draußen schon wieder keinen Schnee, weil es ja unbedingt 10 Grad haben muss - so blöd aber auch.</p>
      <br>
      <p>Aus diesem Grund lasse ich es dafür hier schneien, jetzt schneit es mal pünktlich zum 24.12 - ich hoffe nur, 
        dass es hier nicht zu viel schneit und man sich anstrengen muss, den Text zu lesen.</p>
      <br>
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_x9UUxZOAUC.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
      <br>
      <p>Ich habe lange überlegt, was ich denn nun in dieses besondere Kästchen reingeben soll 
        - einen Text? Ein Spiel? Bilder? Hmmmm....</p>
      <br>
      <p>
        Irgendwie waren alle Ideen nicht gut genug 🤪 Noch ein Memory kann ich echt nicht bringen -
         also habe ich mir gedacht, dass ich einfach drauflos schreibe - dann sehe ich ja, welche 
         Gedanken und Themen aus mir rausprudeln. 😆
      </p>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_jd3txk72.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
      <br>
      <p>
          ....Ich dir einfach mal erzähle, dass das heurige Jahr, obwohl es wieder mal viele "Downs" gab, 
          es Mitte April ein "Up" gab, dass alle "Downs" mal eben weggeputzt hat?
      </p>
      <br>
      <p>
        Dass.....dieses "Up" so toll ist, dass ich seither ein glücklicherer Mensch bin. Nennen wir das "Up" doch beim Namen.
      </p>
      <br>
      <p>
        Dieses "Up" heißt Manuela Zeiner, ist 27 Jahre alt und kommt aus Guttenbrunn - einfach wunderbar dieser Mensch.
      </p>
      <br>
      <p>
        Hübsch ist sie, sie lacht über meine Witze, mag meinen Humor - und sie auch mit Kinder gut umgehen 
        (Ja, ich falle gleich wieder vom Sessel - das musste rein, habe das extra nach der Di Mare nachgetragen 😆)
      </p>
      <br>
      <p>
       Ich danke dem Schicksal, dass es uns vor gut 8 Monaten unsere Wege hat kreuzen lassen.
      </p>
      <br>
      <p>Weihnachten ist auch die Zeit mal danke zu sagen.</p>
      <br>
      <p>Danke, dass es dich gibt.</p>
      <br>
      <p>Danke, dass so bist wie du bist.</p>
      <br>
      <p>Ich hab dich lieb.</p>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_b6cz19m8.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayTwentyfour.vue",
};
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 200;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + ($random-offset / 2);
    $random-yoyo-time: random_range(30000, 80000) / 100000;
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
</style>
