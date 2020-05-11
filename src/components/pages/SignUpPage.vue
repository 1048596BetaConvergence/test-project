<template>
  <div class='sign-up-page-container'>
    <div class='title'>
      <svg xmlns="http://www.w3.org/2000/svg" @click='onGoBack()' viewBox='0 0 438.533 438.533'><path d="M409.133 109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736 9.801 259.058 0 219.273 0c-39.781 0-76.47 9.801-110.063 29.407-33.595 19.604-60.192 46.201-79.8 79.796C9.801 142.8 0 179.489 0 219.267c0 39.78 9.804 76.463 29.407 110.062 19.607 33.592 46.204 60.189 79.799 79.798 33.597 19.605 70.283 29.407 110.063 29.407s76.47-9.802 110.065-29.407c33.593-19.602 60.189-46.206 79.795-79.798 19.603-33.596 29.403-70.284 29.403-110.062.001-39.782-9.8-76.472-29.399-110.064zm-120.487 197.71c3.621 3.614 5.435 7.901 5.435 12.847 0 4.948-1.813 9.236-5.435 12.847l-29.126 29.13c-3.61 3.617-7.891 5.428-12.84 5.421-4.951 0-9.232-1.811-12.854-5.421L104.21 232.111c-3.617-3.62-5.424-7.898-5.424-12.848 0-4.949 1.807-9.233 5.424-12.847L233.826 76.795c3.621-3.615 7.902-5.424 12.854-5.424 4.949 0 9.229 1.809 12.84 5.424l29.126 29.13c3.621 3.615 5.435 7.898 5.435 12.847 0 4.946-1.813 9.233-5.435 12.845L201 219.267l87.646 87.646z"/></svg>
      <span> {{ title }} </span>
    </div>
    <div class='sign-up-container'>
      <img src='@/assets/sign_up.jpg' />
      <form class='submit-form'>
        <floating-label-input class='input-container' id='fullNameInput' name='Full Name' rule='required|max:128|alpha_spaces' :value='fullName' type='string' @input='updateFullName' />
        <floating-label-input class='input-container' id='emailInput' name='Email' rule='required|email|max:128' :value='email' type='email' @input='updateEmail' />
        <floating-label-input class='input-container' id='hobbiesInput' name='Hobbies' rule='required|max:128' :value='hobbies' type='string' @input='updateHobbies' />
      </form>
    </div>
    <div class='button-group'>
      <flat-button id='button' text='Submit' theme='green' @click='onSubmit()' :disabled='!disableInvalidInput || disabled'/>
    </div>
  </div>
</template>

<script>
import FloatingLabelInput from '../accessories/FloatingLabelInput'
import FlatButton from '../accessories/FlatButton'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    FloatingLabelInput,
    FlatButton
  },
  mounted () {
    var button = document.getElementById('button')
    var first = document.getElementById('fullNameInput')
    var second = document.getElementById('emailInput')
    var third = document.getElementById('hobbiesInput')

    setTimeout(() => {
      button.style.opacity = 1
      this.disabled = false
    }, 3500)
    setTimeout(() => {
      first.style.opacity = 1
    }, 1250)
    setTimeout(() => {
      second.style.opacity = 1
    }, 1750)
    setTimeout(() => {
      third.style.opacity = 1
    }, 2500)

    if (this.fullName !== '') {
      this.fullNameValid = true
    }
    if (/\S+@\S+\.\S+/.test(this.email)) {
      this.emailValid = true
    }
    if (this.hobbies !== '') {
      this.hobbiesValid = true
    }
  },
  data () {
    return {
      title: 'Sign Up',
      disabled: true,
      fullNameValid: false,
      emailValid: false,
      hobbiesValid: false
    }
  },
  methods: {
    ...mapActions('user', ['changeFullName', 'changeEmail', 'changeHobbies', 'storeLocally', 'clearAll']),
    updateFullName (input, value) {
      this.changeFullName(input)
      this.evaluatedFullName(value)
    },
    updateEmail (input, value) {
      this.changeEmail(input)
      this.evaluatedEmail(value)
    },
    updateHobbies (input, value) {
      this.changeHobbies(input)
      this.evaluatedHobbies(value)
    },
    evaluatedFullName (value) {
      this.fullNameValid = value
    },
    evaluatedEmail (value) {
      this.emailValid = value
    },
    evaluatedHobbies (value) {
      this.hobbiesValid = value
    },
    onGoBack () {
      window.localStorage.clear()
      this.clearAll()
      this.$router.push('/information-page')
    },
    onSubmit () {
      this.$validator.validateAll().then(valid => {
        if (!valid) {
        } else if (this.fullNameValid && this.emailValid && this.hobbiesValid) {
          this.changeFullName(this.fullName)
          this.changeEmail(this.email)
          this.changeHobbies(this.hobbies)
          this.storeLocally()
          this.$router.push('/profile-page')
        }
      })
    }
  },
  computed: {
    ...mapGetters('user', ['fullName', 'email', 'hobbies']),
    disableInvalidInput () {
      return this.fullNameValid && this.emailValid && this.hobbiesValid
    }
  }
}
</script>

<style lang="less" scoped>
.sign-up-page-container {
  padding: 5% 10% 0 10%;
  position: relative;
  height: 89%;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    border-bottom: 1px solid #3db897;
    align-items: center;
    height: 40px;
    width: 100%;
    animation: 1s ease-out 0s 1 slideDown;
    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      fill: #44cfaa;
      cursor: pointer;
    }
    span {
      display: flex;
      padding-left: 1%;
      font-size: 32px;
      width: 100%;
    }
  }
  .sign-up-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2.5%;
    width: 100%;
    img {
      z-index: 1;
      max-width: 25%;
      height: auto;
      animation: 1.5s linear 0s 1 spinnerSlideRight;
    }
    .submit-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .input-container {
        height: 52px;
        width: 80%;
        opacity: 0;
        &:first-child {
          animation: 0.75s ease-out 1s 1 slideUp;
        }
        &:nth-child(2) {
          animation: 0.75s ease-out 1.5s 1 slideUp;
        }
        &:nth-child(3) {
          animation: 0.75s ease-out 2s 1 slideUp;
        }
      }
    }
  }
  .button-group {
    position: absolute;
    z-index: 1;
    bottom: 15%;
    width: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .flat-button {
      opacity: 0;
      animation: 1s ease-out 3s 1 slideUpBounce;
      -webkit-user-select: none;
      width: 80px;
      height: 30px;
    }
  }
}
</style>
