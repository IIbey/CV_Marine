<template>
<div class="relative pb-16">
    <!-- Fond étoilé -->
    <div class="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-50">
      <div class="stars-container absolute inset-0">
        <div class="stars stars-1"></div>
        <div class="stars stars-2"></div>
        <div class="stars stars-3"></div>
      </div>
    </div>

    <div class="w-full flex justify-center items-center">
      <h2 class="text-4xl font-bold m-4 text-white mb-16 mt-16 text-center">
        Un regard sur mon parcours 
        <span class="bg-gradient-to-r from-rose-400 to-[#FF7387] bg-clip-text text-transparent">
          formateur
        </span>
        !
      </h2>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4">
        <div class="timeline-container">
            <ol class="formation-timeline">
                <li class="timeline-item">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-10 h-10 rounded-full border border-[#38393b] bg-[#1F1F1F] text-white shadow-lg shadow-[#ff73875e] shrink-0 transition-all duration-300 hover:bg-[#FF7387]">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gradient-to-r from-[#FF7387] via-[#38393b] to-[#38393b] h-0.5"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <div class="formation-card bg-[#1F1F1F] bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-[#38393b] shadow-xl transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-[#ff73875e]">
                            <h3 class="text-lg font-bold text-white tracking-wide uppercase mb-2">LYCÉE J.F CHAMPOLLION</h3>
                            <time class="block mb-3 text-sm leading-none text-[#FF7387]"><i>Réalisée à Montpellier, 2009-2012</i></time>
                            <p class="text-base text-gray-300"><span class="font-semibold text-[#FF7387]">BAC PRO.</span> - Production Graphique</p>
                        </div>
                    </div>
                </li>
                
                <li class="timeline-item">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-10 h-10 rounded-full border border-[#38393b] bg-[#1F1F1F] text-white shadow-lg shadow-[#ff73875e] shrink-0 transition-all duration-300 hover:bg-[#FF7387]">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gradient-to-r from-[#FF7387] via-[#38393b] to-[#38393b] h-0.5"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <div class="formation-card bg-[#1F1F1F] bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-[#38393b] shadow-xl transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-[#ff73875e]">
                            <h3 class="text-lg font-bold text-white tracking-wide uppercase mb-2">UNIVERSITÉ PAUL VALÉRY</h3>
                            <time class="block mb-3 text-sm leading-none text-[#FF7387]"><i>Réalisée à Montpellier, 2013-2015</i></time>
                            <p class="text-base text-gray-300"><span class="font-semibold text-[#FF7387]">LICENCE</span> - Art du spectacle : Cinéma</p>
                        </div>
                    </div>
                </li>
                
                <li class="timeline-item">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-10 h-10 rounded-full border border-[#38393b] bg-[#1F1F1F] text-white shadow-lg shadow-[#ff73875e] shrink-0 transition-all duration-300 hover:bg-[#FF7387]">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gradient-to-r from-[#FF7387] via-[#38393b] to-[#38393b] h-0.5"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <div class="formation-card bg-[#1F1F1F] bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-[#38393b] shadow-xl transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-[#ff73875e]">
                            <h3 class="text-lg font-bold text-white tracking-wide uppercase mb-2">CFI OLYMPE</h3>
                            <time class="block mb-3 text-sm leading-none text-[#FF7387]"><i>Réalisée à Montpellier, 2016-2017</i></time>
                            <p class="text-base text-gray-300"><span class="font-semibold text-[#FF7387]">LICENCE</span> - Web Marketing</p>
                        </div>
                    </div>
                </li>
                
                <li class="timeline-item">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-10 h-10 rounded-full border border-[#38393b] bg-[#1F1F1F] text-white shadow-lg shadow-[#ff73875e] shrink-0 transition-all duration-300 hover:bg-[#FF7387]">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gradient-to-r from-[#FF7387] via-[#38393b] to-[#38393b] h-0.5"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <div class="formation-card bg-[#1F1F1F] bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-[#38393b] shadow-xl transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-[#ff73875e]">
                            <h3 class="text-lg font-bold text-white tracking-wide uppercase mb-2">GRETA MÉDITERRANÉE</h3>
                            <time class="block mb-3 text-sm leading-none text-[#FF7387]"><i>Réalisée à Montpellier, 2020-2021</i></time>
                            <p class="text-base text-gray-300"><span class="font-semibold text-[#FF7387]">LICENCE</span> - Community Manager</p>
                        </div>
                    </div>
                </li>
                
                <li class="timeline-item">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-10 h-10 rounded-full border border-[#38393b] bg-[#1F1F1F] text-white shadow-lg shadow-[#ff73875e] shrink-0 transition-all duration-300 hover:bg-[#FF7387]">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gradient-to-r from-[#FF7387] via-[#38393b] to-[#38393b] h-0.5"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <div class="formation-card bg-[#1F1F1F] bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-[#38393b] shadow-xl transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-[#ff73875e]">
                            <h3 class="text-lg font-bold text-white tracking-wide uppercase mb-2">LIGUE DE L'ENSEIGNEMENT</h3>
                            <time class="block mb-3 text-sm leading-none text-[#FF7387]"><i>Réalisée à Sète, 2023-2024</i></time>
                            <p class="text-base text-gray-300"><span class="font-semibold text-[#FF7387]">CQP & PSC1</span> - Web Developper</p>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</div>

<style scoped>
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

.stars-1 {
  animation: animStar 80s linear infinite;
  background-image: radial-gradient(1px 1px at 25px 5px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(2.5px 2.5px at 110px 80px, #fff, rgba(255, 255, 255, 0));
  background-size: 200px 200px;
}

.stars-2 {
  animation: animStar 50s linear infinite;
  background-image: radial-gradient(1px 1px at 75px 15px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1px 1px at 100px 125px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1.5px 1.5px at 199px 40px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(2px 2px at 120px 10px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));
  background-size: 300px 300px;
}

.stars-3 {
  animation: animStar 30s linear infinite;
  background-image: radial-gradient(1px 1px at 10px 10px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),
                    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));
  background-size: 400px 400px;
}

.timeline-container {
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
}

.formation-timeline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
}

.timeline-item {
  position: relative;
  margin-bottom: 0;
  flex: 1;
}

.formation-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-400px);
  }
}

/* Media queries pour la responsivité */
@media (max-width: 1200px) {
  .formation-timeline {
    max-width: 100%;
    padding: 0 1rem;
  }
}

@media (max-width: 992px) {
  .formation-timeline {
    overflow-x: auto;
    padding-bottom: 1rem;
    justify-content: flex-start;
  }
  
  .timeline-item {
    min-width: 240px;
    margin-right: 1.5rem;
  }
}

@media (max-width: 768px) {
  .formation-timeline {
    flex-direction: column;
  }
  
  .timeline-item {
    width: 100%;
    margin-bottom: 2rem;
    margin-right: 0;
  }
  
  .timeline-item:last-child {
    margin-bottom: 0;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  .timeline-item h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
  
  .timeline-item {
    margin-bottom: 1.5rem;
  }
}
</style>
</template>