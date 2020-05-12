<<<<<<< HEAD
<template>
  <div class='slider-container'>
    <div class='slider-option' :class='{focus: checked}' @click='$emit("switch", false)' > {{ optionA }} </div>
    <div class='slider-bar-container'>
      <div class='slider-ball' :class='{move: checked}'></div>
      <div class='slider-bar' v-on:mouseup ='$emit("switch", checked)'></div>
    </div>
    <div class='slider-option' :class='{focus: !checked}' @click='$emit("switch", true)'> {{ optionB }} </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    optionA: String,
    optionB: String,
    checked: Boolean
  }
}
</script>

<style lang="less" scoped>
.slider-container {
  display: flex;
  align-items: center;
  .slider-option {
    cursor: pointer;
    font-size: 15px;
    color: #1e5e4d;
    &.focus {
      color: #44cfaa;
    }
  }
  .slider-bar-container {
    width: 30px;
    height: 25px;
    margin: 0 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .slider-bar {
      height: 12.5px;
      width: 100%;
      background-color: #161f29;
      border-radius: 5px;
    }
    .slider-ball {
      position: absolute;
      right: 0px;
      top: 4.5px;
      background-color: #44cfaa;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      transition: all .25s;
      &.move {
        transform: translateX(-100%);
      }
  }
  }
}
</style>
=======
<template>
  <div class='slider-container'>
    <div class='slider-option' :class='{focus: checked}' @click='$emit("switch", false)' > {{ optionA }} </div>
    <div class='slider-bar-container'>
      <div class='slider-ball' :class='{move: checked}'></div>
      <div class='slider-bar' v-on:mouseup ='$emit("switch", checked)'></div>
    </div>
    <div class='slider-option' :class='{focus: !checked}' @click='$emit("switch", true)'> {{ optionB }} </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    optionA: String,
    optionB: String,
    checked: Boolean
  }
}
</script>

<style lang="less" scoped>
.slider-container {
  display: flex;
  align-items: center;
  .slider-option {
    cursor: pointer;
    font-size: 15px;
    color: #1e5e4d;
    &.focus {
      color: #44cfaa;
    }
  }
  .slider-bar-container {
    width: 30px;
    height: 25px;
    margin: 0 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .slider-bar {
      height: 12.5px;
      width: 100%;
      background-color: #161f29;
      border-radius: 5px;
    }
    .slider-ball {
      position: absolute;
      right: 0px;
      top: 4.5px;
      background-color: #44cfaa;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      transition: all .25s;
      &.move {
        transform: translateX(-100%);
      }
  }
  }
}
</style>
>>>>>>> dc57ad0f1776b5cd8d3704caed4c4ce23c6aa953
