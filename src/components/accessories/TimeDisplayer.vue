<<<<<<< HEAD
<template>
  <div class='time-displayer-container'>
    <div class='title'> <span> {{ title }} </span> </div>
    <div class='displayer'> <span> {{hour}} </span> </div>
    <div class='delimiter'> <span> {{ delimiter }} </span> </div>
    <div class='displayer'> <span> {{minute}} </span> </div>
    <div class='delimiter'> <span> {{ delimiter }} </span> </div>
    <div class='displayer'> <span> {{second}} </span> </div>
  </div>
</template>

<script>
export default {
  name: 'time-displayer',
  created () {
    this.updateTime()
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime () {
      var today = new Date()
      this.hour = today.getHours().toString()
      this.minute = today.getMinutes().toString()
      this.second = today.getSeconds().toString()
      if (this.hour.length === 1) {
        this.hour = '0' + this.hour
      }
      if (this.minute.length === 1) {
        this.minute = '0' + this.minute
      }
      if (this.second.length === 1) {
        this.second = '0' + this.second
      }
    }
  },
  data () {
    return {
      title: 'current time is:',
      delimiter: ':',
      hour: '00',
      minute: '00',
      second: '00'
    }
  }
}
</script>

<style lang="less" scoped>
.time-displayer-container {
  .title {
    margin-right: 5px;
  }
  display: flex;
  align-items: center;
  .displayer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    padding: 2px 3px;
    &:nth-child(1) {
      margin: 0 5px;
    }
    span {
      color: #555555;
    }
  }
}
</style>
=======
<template>
  <div class='time-displayer-container'>
    <div class='title'> <span> {{ title }} </span> </div>
    <div class='displayer'> <span> {{hour}} </span> </div>
    <div class='delimiter'> <span> {{ delimiter }} </span> </div>
    <div class='displayer'> <span> {{minute}} </span> </div>
    <div class='delimiter'> <span> {{ delimiter }} </span> </div>
    <div class='displayer'> <span> {{second}} </span> </div>
  </div>
</template>

<script>
export default {
  name: 'time-displayer',
  created () {
    this.updateTime()
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime () {
      var today = new Date()
      this.hour = today.getHours().toString()
      this.minute = today.getMinutes().toString()
      this.second = today.getSeconds().toString()
      if (this.hour.length === 1) {
        this.hour = '0' + this.hour
      }
      if (this.minute.length === 1) {
        this.minute = '0' + this.minute
      }
      if (this.second.length === 1) {
        this.second = '0' + this.second
      }
    }
  },
  data () {
    return {
      title: 'current time is:',
      delimiter: ':',
      hour: '00',
      minute: '00',
      second: '00'
    }
  }
}
</script>

<style lang="less" scoped>
.time-displayer-container {
  .title {
    margin-right: 5px;
  }
  display: flex;
  align-items: center;
  .displayer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    padding: 2px 3px;
    &:nth-child(1) {
      margin: 0 5px;
    }
    span {
      color: #555555;
    }
  }
}
</style>
>>>>>>> dc57ad0f1776b5cd8d3704caed4c4ce23c6aa953
