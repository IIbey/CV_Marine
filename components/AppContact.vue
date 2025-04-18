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

  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="name"
        >Votre nom</label
      >
      <input
        v-model="name"
        class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white"
        type="text"
        name="name"
        id="name"
      />
      <span v-if="errors.name" class="text-red-500 text-xs">{{ errors.name }}</span>
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="email"
        >Votre adresse e-mail</label
      >
      <input
        v-model="email"
        class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white"
        name="email"
        id="email"
        type="email"
      />
      <span v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</span>
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="message"
        >Votre Message</label
      >
      <textarea
        v-model="message"
        class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white"
        rows="3"
        name="message"
        id="message"
      ></textarea>
      <span v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</span>
    </div>

    <div class="flex justify-end">
      <button
        class="w-32 bg-[#FF7387] hover:bg-[#FFAFC3] text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        type="submit"
      >
        Envoyez
      </button>
    </div>
  </form>
  <div v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</div>
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
      successMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      if (!this.name) this.errors.name = 'Le nom est requis.';
      if (!this.email) this.errors.email = 'L\'adresse e-mail est requise.';
      else if (!this.validEmail(this.email)) this.errors.email = 'L\'adresse e-mail n\'est pas valide.';
      if (!this.message) this.errors.message = 'Le message est requis.';

      if (Object.keys(this.errors).length === 0) {
        this.successMessage = 'Votre message a été envoyé avec succès !';
        this.name = '';
        this.email = '';
        this.message = '';
      }
    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
      return re.test(email);
    }
  }
};
</script>

<style scoped>
#background-contact {
 width: 38rem;
}
</style>