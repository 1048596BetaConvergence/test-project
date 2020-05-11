<template>
  <div class='information-page-container'>
    <div class='global-time-watch' id='clock'>
      <time-displayer class='time-displayer' :class='{ show: displayTime }' />
      <slider class='slider' optionA='display time' optionB='do not display time' :checked='displayTime' @switch='switchDisplayTime' />
    </div>
    <div class='title'>
      <transition name='title-wizard'>
        <span> {{ title }} </span>
      </transition>
    </div>
    <div class='information-container'>
      <img id='image' src='@/assets/information.jpg' />
      <span id='text'> {{ information }}  </span>
      <div class='button-group'>
        <flat-button id='button' class='flat-button' :disabled='disabled' text='Sign Up' theme='green' @click='redirect'/>
      </div>
    </div>
  </div>
</template>

<script>
import FlatButton from '../accessories/FlatButton'
import TimeDisplayer from '../accessories/TimeDisplayer'
import Slider from '../accessories/Slider'

export default {
  name: 'information-page',
  components: {
    FlatButton,
    TimeDisplayer,
    Slider
  },
  mounted () {
    var text = document.getElementById('text')
    var button = document.getElementById('button')
    var clock = document.getElementById('clock')
    var image = document.getElementById('image')
    setTimeout(() => {
      text.style.opacity = 1
    }, 2500)
    setTimeout(() => {
      button.style.opacity = 1
      this.disabled = false
    }, 3500)
    setTimeout(() => {
      clock.style.opacity = 1
    }, 2750)
    setTimeout(() => {
      image.style.opacity = 1
    }, 1500)
  },
  methods: {
    redirect () {
      this.$router.push('/sign-up-page')
    },
    switchDisplayTime (origin) {
      this.displayTime = !origin
    }
  },
  data () {
    return {
      displayTime: false,
      disabled: true,
      timer: 0,
      title: 'Information',
      information: 'To procceed to the next page, click the sign up button...'
    }
  }
}
</script>

<style lang="less" scoped>
.information-page-container {
  padding: 5% 10% 0 10%;
  height: 89%;
  display: flex;
  flex-direction: column;
  position: relative;
  .global-time-watch {
    animation: 1s linear 2s 1 spinnerDirect;
    opacity: 0;
    position: absolute;
    top: 5px;
    right: 10%;
    z-index: 1;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .time-displayer {
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    .slider {
      margin-top: 2%;
    }
  }
  .title {
    display: flex;
    border-bottom: 1px solid #3db897;
    height: 40px;
    width: 100%;
    span {
      display: flex;
      animation: 1s ease-out 0s 1 slideInFromLeft;
      padding-left: 1%;
      font-size: 32px;
      width: 50%;
    }
  }
  .information-container {
    margin: 2% 1% 4%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      opacity: 0;
      z-index: 1;
      width: 25%;
      height: auto;
      padding-bottom: 5px;
      animation: 1.5s ease-out 1s 1 spinnerScale;
    }
    span{
      display: flex;
      font-size: 25px;
      padding-bottom: 5px;
      opacity: 0;
      animation: 1s ease-out 2s 1 opacityChange;
      text-align: center;
      align-items: center;
      height: auto;
    }
    .button-group {
      padding-top: 5%;
      align-items: center;
      justify-content: center;
      .flat-button {
        opacity: 0;
        animation: 1s ease-out 3s 1 resize;
        -webkit-user-select: none;
        width: 80px;
        height: 30px;
      }
    }
  }
}
</style>
