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

  <form method="post" action="#">n
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="name"
        >Votre nom</label
      >
      <input
        class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white"
        type="text"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="email"
        >Votre adresse e-mail</label
      >
      <input
        class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white"
        name="email"
        id="email"
        type="email"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="message"
        >Votre Message</label
      >
      <textarea
        class="mt-1 p-2 w-full bg-[#181818] border border-[#313131] rounded-md text-white"
        rows="3"
        name="message"
        id="message"
      ></textarea>
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
</div>
</div>
</template>

<style scoped>
#background-contact {
 width: 38rem;
}
</style>