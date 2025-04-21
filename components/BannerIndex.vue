<template>
<div>
<div class="relative bg-black pt-24 pb-16 font-[sans-serif] h-auto min-h-screen">
      <div class="absolute inset-0">
        <img src="/img/Banner.jpg" alt="Background Image" class="w-full h-full object-cover opacity-50" />
      </div>

      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-wider text-shadow-lg animate-pulse-slow">Marine DEROSE</h1>
        <p class="text-lg md:text-xl mb-12">Infographiste et Développeuse Web - Réinventons ensemble votre univers digital !</p>
        <a href="#about" type="button" class="bg-[#FF7387] hover:bg-[#FFAFC3] text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">En savoir plus</a>
      </div>
    </div>

<figure class="bg-[#1F1F1F] p-16 rounded-md max-w-screen-md mx-auto text-center mt-12 mb-14 w-full border-solid border-2 border-[#38393b]">
    <svg class="w-10 h-10 mx-auto mb-3 text-[#FF7387]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
     <p class="text-2xl italic font-medium text-white">"Le développeur crée les outils, l'infographiste leur donne une âme. Ensemble, ils transforment le fonctionnel en exceptionnel."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img class="w-6 h-6 rounded-full" src="/img/oleander-icon.svg" alt="profile picture">
        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-[#FF7387]">Marine Derose</cite>
            <cite class="ps-3 text-sm text-gray-500">Développeuse Web & Infographiste</cite>
        </div>
    </figcaption>
</figure>
</div>
</template>

<style scoped>
.text-shadow-lg {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 115, 135, 0.4);
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>