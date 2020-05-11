<template>
  <div class='floating-label-input-container'>
    <div class='error-container' v-show='errors.first(name)'>
      <span> {{ errors.first(name) }} </span>
    </div>
    <div class='input-container' :class='{error: errors.any()}' @click='focusInput()'>
        <input @input='updateInput()' v-validate="rule" :name='name' :id='name' v-model='input' :type='type' required />
        <div :for='name' :ref='name + " label"' class='floating-label' :class='{right: errors.first(name)}' @click='focusInput()'>
          {{ name }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'floating-label-input',
  props: {
    name: String,
    type: String,
    rule: String,
    value: String
  },
  data () {
    return {
      input: ''
    }
  },
  mounted () {
    this.input = this.value
    var width = this.$refs[this.name + ' label'].clientWidth
    var currentWidth = width + 'px'
    document.getElementById(this.name).style.width = `calc(94% - ${currentWidth})`
  },
  methods: {
    focusInput () {
      document.getElementById(this.name).focus()
    },
    updateInput () {
      if (this.errors.any()) {
        this.$emit('input', this.input, false)
      } else {
        this.$emit('input', this.input, true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.floating-label-input-container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 15px;
  .error-container {
    top: -15%;
    height: 25px;
    width: 100%;
    display: flex;
    position: absolute;
    span {
      display: flex;
      padding-left: 3%;
      text-align: left;
      color: #ff0303;
      font-size: 15px;
    }
  }
  .input-container {
    background-color: #ffffff;
    border: 1px solid #44cfaa;
    border-radius: 20px;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    position: relative;
    cursor: text;
    &.error {
      border-color: #ff0303;
    }
    input {
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-left: 3%;
      width: 80%;
      height: 90%;
      border: 0;
      outline: none;
      &:focus + .floating-label {
        right: 3%;
        left: auto;
      }
      &:valid + .floating-label {
        right: 3%;
        left: auto;
      }
    }
    .floating-label {
      position: absolute;
      display: flex;
      top: 20%;
      left: 3%;
      color: #999999;
      font-size: 18px;
      cursor: text;
      transition: right 0.2s ease-in-out;
      &.right {
        right: 3%;
        left: auto;
      }
    }
  }
}
</style>
