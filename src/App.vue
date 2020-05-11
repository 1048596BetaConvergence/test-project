<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
html {
  height: 100%;
  display: flex;
  flex: 1;
}
body {
  -webkit-user-select: none;
  background-color: #253442;
  margin: 0 !important;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #44cfaa;
  min-width: 650px;
  width: 100%;
  height: 100%;
}
@keyframes spinner {
  0% {
    opacity: 0;
  }
  50% {
    transform: rotate(-180deg);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes spinnerDirect {
  0% {
    opacity: 0;
  }
  100% {
    transform: rotate(1080deg);
    opacity: 1;
  }
}
@keyframes spinnerScale {
  0% {
    opacity: 0;
  }
  25% {
    transform: rotate(45deg) scale(0.5);
    opacity: 1;
  }
  50% {
    transform: rotate(0deg) scale(1);
    opacity: 1
  }
  75% {
    transform: rotate(-45deg) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
}
@keyframes spinnerSlideRight {
  0% {
    transform: translateX(150%);
    opacity: 0;
  }
  25% {
    transform: translateX(150%) rotate(-270deg);
    opacity: 1;
  }
  50% {
    transform: translateX(100%) rotate(-540deg);
    opacity: 1;
  }
  75% {
    transform: translateX(50%) rotate(-810deg);
    opacity: 1;
  }
  100% {
    transform: translateX(0) rotate(-1080deg);
    opacity: 1;
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
      transform: translateX(0);
  }
}
@keyframes slideDown {
  0% {
    transform: translateY(-300%);
  }
  100% {
      transform: translateY(0);
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(300%);
    opacity: 0;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
  }
}
@keyframes slideUpBounce {
  0% {
    transform: translateY(300%);
    opacity: 0;
  }
  50% {
    transform: translateY(-100%);
    opacity: 1;
  }
  75% {
    transform: translateY(10%);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes opacityChange {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes resize {
  0% {
    opacity: 0;
  }
  50% {
    transform: scale(2, 2);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes skewTitle {
  0% {
    transform: skew(120deg, 40deg)
  }
  100% {
    transform: skew(0deg, 0deg)
  }
}
@keyframes pivotRight {
  0% {
    transform: rotate(-90deg);
    transform-origin: 0 100%;
    opacity: 1
  }
  100% {
    transform: rotate(0deg);
    transform-origin: 0 100%;
    opacity: 1
  }
}
@keyframes pivotLeft {
  0% {
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    opacity: 1
  }
  100% {
    transform: rotate(0deg);
    transform-origin: 100% 100%;
    opacity: 1
  }
}
</style>
