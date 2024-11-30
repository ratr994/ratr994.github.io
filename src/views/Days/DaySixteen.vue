<template>
  <div class="container pyro">
    <div class="before">
    </div>
    <hr>
    <h2>6 Monate</h2>
    <hr>
    <h2>voller</h2>
    <hr>
    <h2>schöner</h2>
    <hr>
    <h2>Momente</h2>
    <hr>
    <h2>und</h2>
    <hr>
    <h2>Erlebnisse</h2>
    <hr>
    <h2>-</h2>
    <hr>
    <h2>Auf</h2>
    <hr>
    <h2>die</h2>
    <hr>
    <h2>nächsten</h2>
    <hr>
    <h2>6</h2>
    <hr>
    <h2>Monate</h2>
    <hr>
    <h2>-</h2>
    <hr>
    <h2>Jeder</h2>
    <hr>
    <h2>Augenblick</h2>
    <hr>
    <h2>war</h2>
    <hr>
    <h2>wunderbar</h2>
    <hr>
    <h2>-</h2>
    <hr>
    <h2>Man</h2>
    <hr>
    <h2>sagt</h2>
    <hr>
    <h2>es</h2>
    <hr>
    <h2>sich</h2>
    <hr>
    <h2>zu</h2>
    <hr>
    <h2>selten</h2>
    <hr>
    <h2>-</h2>
    <hr>
    <h2>Ich</h2>
    <hr>
    <h2>hab</h2>
    <hr>
    <h2>dich</h2>
    <hr>
    <h2>lieb</h2>
    <hr>
    <div class="after"></div>
  </div>
</template>

<script>
export default {
  name: "DayThirteen.vue",
};
</script>

<style lang="scss" scoped>

.container {
  height: 100%;
}

$particles: 50;
$width: 500;
$height: 500;

// Create the explosion...
$box-shadow: ();
$box-shadow2: ();
@for $i from 0 through $particles {
  $box-shadow: $box-shadow,
               random($width)-$width / 2 + px
               random($height)-$height / 1.2 + px
               hsl(random(360), 100, 50);
  $box-shadow2: $box-shadow2, 0 0 #fff
}
@mixin keyframes ($animationName) {
    @-webkit-keyframes #{$animationName} {
        @content;
    }

    @-moz-keyframes #{$animationName} {
        @content;
    }

    @-o-keyframes #{$animationName} {
        @content;
    }

    @-ms-keyframes #{$animationName} {
        @content;
    }

    @keyframes #{$animationName} {
        @content;
    }
}

@mixin animation-delay ($settings) {
    -moz-animation-delay: $settings;
    -webkit-animation-delay: $settings;
    -o-animation-delay: $settings;
    -ms-animation-delay: $settings;
    animation-delay: $settings;
}

@mixin animation-duration ($settings) {
    -moz-animation-duration: $settings;
    -webkit-animation-duration: $settings;
    -o-animation-duration: $settings;
    -ms-animation-duration: $settings;
    animation-duration: $settings;
}

@mixin animation ($settings) {
    -moz-animation: $settings;
    -webkit-animation: $settings;
    -o-animation: $settings;
    -ms-animation: $settings;
    animation: $settings;
}

@mixin transform ($settings) {
    transform: $settings;
    -moz-transform: $settings;
    -webkit-transform: $settings;
    -o-transform: $settings;
    -ms-transform: $settings;
}

body {
  margin:0;
  padding:0;
  background: #000;
  overflow: hidden;
}

.pyro > .before, .pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: $box-shadow2;
  @include animation((1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards));
}
    
.pyro > .after {
  @include animation-delay((1.25s, 1.25s, 1.25s));
  @include animation-duration((1.25s, 1.25s, 6.25s));
}
        
@include keyframes(bang) {
  to {
    box-shadow:$box-shadow;
  }
}
    
@include keyframes(gravity)  {
  to {
    @include transform(translateY(200px));
    opacity: 0;
  }
}
    
@include keyframes(position) {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {  
    margin-top: 20%;
    margin-left: 70%
  }
  60%, 79.9% {  
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {  
    margin-top: 30%;
    margin-left: 80%;
  }
}

</style>
