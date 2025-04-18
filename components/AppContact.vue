<template>
    <div class="mb-16">
      <div class="w-full flex justify-center items-center">
          <h2 class="text-3xl font-bold m-4 text-white mb-16 mt-16 uppercase drop-shadow-lg">Me
              <span href="" target="_blank"
                  class="w-[32rem] bg-gradient-to-r from-rose-400 via-[#f5b2bc] to-[#FF7387] bg-[length:100%_4px] bg-no-repeat bg-bottom">
                  Contactez</span> ?
          </h2>
      </div>
      <div id="background-contact"
        class="mx-auto relative overflow-hidden z-10 bg-[#1f1f1f] p-8 rounded-lg border-solid border border-[#38393b] shadow transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-md hover:shadow-[#ff73875e]"
      >
        <transition name="fade">
          <div v-if="formSubmitted" class="success-message">
            <div class="check-container">
              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <h3 class="text-xl text-white font-bold mb-2">Message envoyé !</h3>
            <p class="text-gray-300">Merci pour votre message. Je vous répondrai dès que possible.</p>
            <button 
              @click="resetForm" 
              class="mt-4 bg-[#FF7387] hover:bg-[#FFAFC3] text-white px-4 py-2 rounded-full transition duration-300 ease-in-out"
            >
              Envoyer un autre message
            </button>
          </div>
        </transition>

        <form v-if="!formSubmitted" @submit.prevent="handleSubmit" class="contact-form">
          <div class="mb-4 form-group" :class="{ 'has-error': errors.name }">
            <label class="block text-sm font-medium text-gray-300" for="name">
              Votre nom
              <span class="text-[#FF7387]">*</span>
            </label>
            <input
              v-model="name"
              class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white focus:border-[#FF7387] transition-all duration-300"
              :class="{ 'border-red-500': errors.name }"
              type="text"
              name="name"
              id="name"
              aria-required="true"
            />
            <transition name="slide-fade">
              <span v-if="errors.name" class="text-red-500 text-xs block mt-1">{{ errors.name }}</span>
            </transition>
          </div>

          <div class="mb-4 form-group" :class="{ 'has-error': errors.email }">
            <label class="block text-sm font-medium text-gray-300" for="email">
              Votre adresse e-mail
              <span class="text-[#FF7387]">*</span>
            </label>
            <input
              v-model="email"
              class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white focus:border-[#FF7387] transition-all duration-300"
              :class="{ 'border-red-500': errors.email }"
              name="email"
              id="email"
              type="email"
              aria-required="true"
            />
            <transition name="slide-fade">
              <span v-if="errors.email" class="text-red-500 text-xs block mt-1">{{ errors.email }}</span>
            </transition>
          </div>

          <div class="mb-4 form-group" :class="{ 'has-error': errors.message }">
            <label class="block text-sm font-medium text-gray-300" for="message">
              Votre Message
              <span class="text-[#FF7387]">*</span>
            </label>
            <textarea
              v-model="message"
              class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white focus:border-[#FF7387] transition-all duration-300"
              :class="{ 'border-red-500': errors.message }"
              rows="3"
              name="message"
              id="message"
              aria-required="true"
            ></textarea>
            <transition name="slide-fade">
              <span v-if="errors.message" class="text-red-500 text-xs block mt-1">{{ errors.message }}</span>
            </transition>
          </div>

          <div class="flex justify-end">
            <button
              class="w-32 bg-[#FF7387] hover:bg-[#FFAFC3] text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden submit-btn"
              type="submit"
            >
              <span class="relative z-10">Envoyez</span>
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {},
      formSubmitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      let isValid = true;

      if (!this.name.trim()) {
        this.errors.name = 'Le nom est requis.';
        isValid = false;
      }

      if (!this.email.trim()) {
        this.errors.email = 'L\'adresse e-mail est requise.';
        isValid = false;
      } else if (!this.validEmail(this.email)) {
        this.errors.email = 'L\'adresse e-mail n\'est pas valide.';
        isValid = false;
      }

      if (!this.message.trim()) {
        this.errors.message = 'Le message est requis.';
        isValid = false;
      }

      if (isValid) {
        // Simulation d'envoi (remplacer par un vrai appel API)
        setTimeout(() => {
          this.formSubmitted = true;
        }, 800);
      }
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.formSubmitted = false;
    }
  }
};
</script>

<style scoped>
#background-contact {
  width: 38rem;
  max-width: 90%;
}

/* Animations des erreurs */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Animation du message de succès */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
}

/* Animation de la coche de succès */
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #FF7387;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #FF7387;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #FF7387;
  }
}

/* Effet au focus des champs */
input:focus, textarea:focus {
  outline: none;
  border-color: #FF7387;
  box-shadow: 0 0 0 2px rgba(255, 115, 135, 0.2);
}

.form-group.has-error input,
.form-group.has-error textarea {
  border-color: #FF4136;
}

/* Effet de hover sur le bouton */
.submit-btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.submit-btn:hover:before {
  width: 100%;
}

@media (max-width: 768px) {
  #background-contact {
    width: 100%;
    margin: 0 1rem;
  }
}
</style>