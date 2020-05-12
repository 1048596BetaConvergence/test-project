<<<<<<< HEAD
<template>
  <div class='profile-page-container'>
    <div class='title'>
      <svg xmlns="http://www.w3.org/2000/svg" id='goBack' @click='onGoBack()' viewBox='0 0 438.533 438.533'><path d="M409.133 109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736 9.801 259.058 0 219.273 0c-39.781 0-76.47 9.801-110.063 29.407-33.595 19.604-60.192 46.201-79.8 79.796C9.801 142.8 0 179.489 0 219.267c0 39.78 9.804 76.463 29.407 110.062 19.607 33.592 46.204 60.189 79.799 79.798 33.597 19.605 70.283 29.407 110.063 29.407s76.47-9.802 110.065-29.407c33.593-19.602 60.189-46.206 79.795-79.798 19.603-33.596 29.403-70.284 29.403-110.062.001-39.782-9.8-76.472-29.399-110.064zm-120.487 197.71c3.621 3.614 5.435 7.901 5.435 12.847 0 4.948-1.813 9.236-5.435 12.847l-29.126 29.13c-3.61 3.617-7.891 5.428-12.84 5.421-4.951 0-9.232-1.811-12.854-5.421L104.21 232.111c-3.617-3.62-5.424-7.898-5.424-12.848 0-4.949 1.807-9.233 5.424-12.847L233.826 76.795c3.621-3.615 7.902-5.424 12.854-5.424 4.949 0 9.229 1.809 12.84 5.424l29.126 29.13c3.621 3.615 5.435 7.898 5.435 12.847 0 4.946-1.813 9.233-5.435 12.845L201 219.267l87.646 87.646z"/></svg>
      <span> {{ title }}  </span>
    </div>
    <div class='profile-container'>
      <div class='item-container'>
        <span> {{ descriptorName }} </span>
      </div>
      <div ref='full-name-container' class='item-container variable'>
        <span class='full-text' v-if='showFullName'> {{ fullName }} </span>
        <span ref='full-name' v-else> {{ fullName }} </span>
        <span @click='showMore("FullName")' v-if='fullNameWidth' class='additional-content'> {{ showFullName ? '(show less)' : '(show more)'}} </span>
      </div>
      <div class='item-container'>
        <span> {{ descriptorEmail }} </span>
      </div>
      <div ref='email-container' class='item-container variable'>
        <span class='full-text' v-if='showEmail'> {{ email }} </span>
        <span ref='email' v-else> {{ email }} </span>
        <span @click='showMore("Email")' v-if='emailWidth' class='additional-content'> {{ showEmail ? '(show less)' : '(show more)'}} </span>
      </div>
      <div class='item-container'>
        <span> {{ descriptorHobbies }} </span>
      </div>
      <div ref='hobbies-container' class='item-container variable'>
        <span class='full-text' v-if='showHobbies'> {{ hobbies }} </span>
        <span ref='hobbies' v-else> {{ hobbies }} </span>
        <span @click='showMore("Hobbies")' v-if='hobbiesWidth' class='additional-content'> {{ showHobbies ? '(show less)' : '(show more)'}} </span>
      </div>
    </div>
    <div class='button-group'>
        <flat-button id='button' @click='returnToMain()' text='Redirect' theme='green' :disabled='disabled' />
    </div>
  </div>
</template>

<script>
import FlatButton from '../accessories/FlatButton'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'profile-page',
  components: {
    FlatButton
  },
  computed: {
    ...mapGetters('user', ['fullName', 'email', 'hobbies']),
    fullNameWidth () {
      return !this.isMounted ? false : this.$refs['full-name'].clientWidth > this.$refs['full-name-container'].clientWidth * 0.75
    },
    emailWidth () {
      return !this.isMounted ? false : this.$refs['email'].clientWidth > this.$refs['email-container'].clientWidth * 0.75
    },
    hobbiesWidth () {
      return !this.isMounted ? false : this.$refs['hobbies'].clientWidth > this.$refs['hobbies-container'].clientWidth * 0.75
    }
  },
  mounted () {
    this.isMounted = true
    setTimeout(() => {
      document.getElementById('goBack').style.opacity = 1
    }, 750)
    setTimeout(() => {
      var elements = document.getElementsByClassName('item-container')
      for (var i = 0; i < elements.length; i += 1) {
        elements[i].style.opacity = 1
      }
    }, 1750)
    setTimeout(() => {
      document.getElementById('button').style.opacity = 1
      this.disabled = false
    }, 1750)

    var jsonObj = window.localStorage.getItem('test-project')
    if (jsonObj) {
      var user = JSON.parse(jsonObj)
      this.changeFullName(user.fullName)
      this.changeEmail(user.email)
      this.changeHobbies(user.hobbies)
    }
  },
  methods: {
    ...mapActions('user', ['changeFullName', 'changeEmail', 'changeHobbies', 'clearAll']),
    returnToMain () {
      this.clearAll()
      window.localStorage.clear()
      this.$router.push('information-page')
    },
    onGoBack () {
      this.$router.push('sign-up-page')
    },
    showMore (variable) {
      this['show' + variable] = !this['show' + variable]
    }
  },
  data () {
    return {
      title: 'Profile',
      descriptorName: 'Full Name: ',
      descriptorEmail: 'Email: ',
      descriptorHobbies: 'Hobbies: ',
      isMounted: false,
      showFullName: false,
      showEmail: false,
      showHobbies: false,
      disabled: true
    }
  }
}
</script>

<style lang="less" scoped>
.profile-page-container {
  margin: 5% 10% 0 10%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 89%;
  .title {
    display: flex;
    border-bottom: 1px solid #3db897;
    height: 40px;
    width: 100%;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      opacity: 0;
      fill: #44cfaa;
      cursor: pointer;
      animation: 1s ease-out 0.5s 1 opacityChange;
    }
    span {
      display: flex;
      padding-left: 1%;
      font-size: 32px;
      width: 100%;
      animation: 1s ease-out 0s 1 skewTitle;
    }
  }
  .profile-container {
    overflow-y: scroll;
    padding: 5% 10% 5% 5%;
    display: grid;
    grid-template-columns: 20% 80%;
    .item-container {
      display: flex;
      margin: 10px 5px;
      align-items: right;
      span {
        font-size: 22px;
        text-align: right;
        width: 100%;
      }
      animation: 1.5s ease-out 0.5s 1 pivotRight;
      opacity: 0;
      &.variable {
        align-items: left;
        animation: 1.5s ease-out 0.5s 1 pivotLeft;
        span {
          -webkit-user-select: text;
          text-align: left;
          max-width: 78%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: auto;
          &.full-text {
            white-space: normal;
            overflow: initial;
            text-overflow: inherit;
            word-break: break-word;
          }
          &.additional-content {
            width: auto;
            display: flex;
            align-items: flex-end;
            font-size: 14px;
            cursor: pointer;
            margin-left: 5px;
            &:hover {
              color: #1e5e4d;
              text-decoration: underline;
            }
          }
        }
      }
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #253442;
    }
    &::-webkit-scrollbar-thumb {
      background: #11181f;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .button-group {
    position: absolute;
    bottom: 35%;
    left: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .flat-button {
      opacity: 0;
      animation: 1.5s ease-out 1.5s 1 spinner;
      width: 80px;
      height: 30px;
    }
  }
}
</style>
=======
<template>
  <div class='profile-page-container'>
    <div class='title'>
      <svg xmlns="http://www.w3.org/2000/svg" id='goBack' @click='onGoBack()' viewBox='0 0 438.533 438.533'><path d="M409.133 109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736 9.801 259.058 0 219.273 0c-39.781 0-76.47 9.801-110.063 29.407-33.595 19.604-60.192 46.201-79.8 79.796C9.801 142.8 0 179.489 0 219.267c0 39.78 9.804 76.463 29.407 110.062 19.607 33.592 46.204 60.189 79.799 79.798 33.597 19.605 70.283 29.407 110.063 29.407s76.47-9.802 110.065-29.407c33.593-19.602 60.189-46.206 79.795-79.798 19.603-33.596 29.403-70.284 29.403-110.062.001-39.782-9.8-76.472-29.399-110.064zm-120.487 197.71c3.621 3.614 5.435 7.901 5.435 12.847 0 4.948-1.813 9.236-5.435 12.847l-29.126 29.13c-3.61 3.617-7.891 5.428-12.84 5.421-4.951 0-9.232-1.811-12.854-5.421L104.21 232.111c-3.617-3.62-5.424-7.898-5.424-12.848 0-4.949 1.807-9.233 5.424-12.847L233.826 76.795c3.621-3.615 7.902-5.424 12.854-5.424 4.949 0 9.229 1.809 12.84 5.424l29.126 29.13c3.621 3.615 5.435 7.898 5.435 12.847 0 4.946-1.813 9.233-5.435 12.845L201 219.267l87.646 87.646z"/></svg>
      <span> {{ title }}  </span>
    </div>
    <div class='profile-container'>
      <div class='item-container'>
        <span> {{ descriptorName }} </span>
      </div>
      <div class='item-container variable'>
        <span class='full-text' v-if='showFullName'> {{ fullName }} </span>
        <span v-else> {{ fullName }} </span>
        <span @click='showMore("FullName")' v-if='fullName.length > 64' class='additional-content'> {{ showFullName ? '(show less)' : '(show more)'}} </span>
      </div>
      <div class='item-container'>
        <span> {{ descriptorEmail }} </span>
      </div>
      <div class='item-container variable'>
        <span class='full-text' v-if='showEmail'> {{ email }} </span>
        <span v-else> {{ email }} </span>
        <span @click='showMore("Email")' v-if='email.length > 64' class='additional-content'> {{ showEmail ? '(show less)' : '(show more)'}} </span>
      </div>
      <div class='item-container'>
        <span> {{ descriptorHobbies }} </span>
      </div>
      <div class='item-container variable'>
        <span class='full-text' v-if='showHobbies'> {{ hobbies }} </span>
        <span v-else> {{ hobbies }} </span>
        <span @click='showMore("Hobbies")' v-if='hobbies.length > 64' class='additional-content'> {{ showHobbies ? '(show less)' : '(show more)'}} </span>
      </div>
    </div>
    <div class='button-group'>
        <flat-button id='button' @click='returnToMain()' text='Redirect' theme='green' :disabled='disabled' />
    </div>
  </div>
</template>

<script>
import FlatButton from '../accessories/FlatButton'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'profile-page',
  components: {
    FlatButton
  },
  computed: {
    ...mapGetters('user', ['fullName', 'email', 'hobbies'])
  },
  mounted () {
    setTimeout(() => {
      document.getElementById('goBack').style.opacity = 1
    }, 750)
    setTimeout(() => {
      var elements = document.getElementsByClassName('item-container')
      for (var i = 0; i < elements.length; i += 1) {
        elements[i].style.opacity = 1
      }
    }, 1750)
    setTimeout(() => {
      document.getElementById('button').style.opacity = 1
      this.disabled = false
    }, 1750)
  },
  methods: {
    ...mapActions('user', ['clearAll']),
    returnToMain () {
      this.clearAll()
      this.$router.push('information-page')
    },
    onGoBack () {
      this.$router.push('sign-up-page')
    },
    showMore (variable) {
      this['show' + variable] = !this['show' + variable]
    }
  },
  data () {
    return {
      title: 'Profile',
      descriptorName: 'Full Name:',
      descriptorEmail: 'Email:',
      descriptorHobbies: 'Hobbies',
      showFullName: false,
      showEmail: false,
      showHobbies: false,
      disabled: true
    }
  }
}
</script>

<style lang="less" scoped>
.profile-page-container {
  margin: 5% 10% 0 10%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 89%;
  .title {
    display: flex;
    border-bottom: 1px solid #3db897;
    height: 40px;
    width: 100%;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      opacity: 0;
      fill: #44cfaa;
      cursor: pointer;
      animation: 1s ease-out 0.5s 1 opacityChange;
    }
    span {
      display: flex;
      padding-left: 1%;
      font-size: 32px;
      width: 100%;
      animation: 1s ease-out 0s 1 skewTitle;
    }
  }
  .profile-container {
    overflow-y: scroll;
    padding: 5% 10% 5% 5%;
    display: grid;
    grid-template-columns: 20% 80%;
    .item-container {
      display: flex;
      margin: 10px 5px;
      align-items: right;
      span {
        font-size: 22px;
        text-align: right;
        width: 100%;
      }
      animation: 1.5s ease-out 0.5s 1 pivotRight;
      opacity: 0;
      &.variable {
        align-items: left;
        animation: 1.5s ease-out 0.5s 1 pivotLeft;
        span {
          -webkit-user-select: text;
          text-align: left;
          max-width: 78%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: auto;
          &.full-text {
            white-space: normal;
            overflow: initial;
            text-overflow: inherit;
            word-break: break-word;
          }
          &.additional-content {
            width: auto;
            display: flex;
            align-items: flex-end;
            font-size: 14px;
            cursor: pointer;
            margin-left: 5px;
            &:hover {
              color: #1e5e4d;
              text-decoration: underline;
            }
          }
        }
      }
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #253442;
    }
    &::-webkit-scrollbar-thumb {
      background: #11181f;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .button-group {
    position: absolute;
    bottom: 35%;
    left: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .flat-button {
      opacity: 0;
      animation: 1.5s ease-out 1.5s 1 spinner;
      width: 80px;
      height: 30px;
    }
  }
}
</style>
>>>>>>> dc57ad0f1776b5cd8d3704caed4c4ce23c6aa953
