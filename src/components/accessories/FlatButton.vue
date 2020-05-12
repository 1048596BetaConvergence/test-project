<template>
  <div class="flat-button" :class='[theme, {disabled: disabled}]' @click='buttonClicked()'>
    <span> {{ text }} </span>
  </div>
</template>

<script>
export default {
  name: 'flat-button',
  props: {
    text: String,
    theme: String,
    disabled: Boolean
  },
  methods: {
    buttonClicked () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.flat-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px 5px 10px;
  border-radius: 2px;
  color: #ffffff;
  &.green {
    background-color: #2e856e;
    &:hover {
      background-color: #006a4e;
    }
  }
  &.disabled {
    background-color: grey;
    color: #000000;
    cursor: initial;
    &:hover {
      background-color: grey;
    }
  }
}
</style>
