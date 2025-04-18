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
      <h2 class="text-4xl font-bold m-4 text-white mb-4 mt-16 text-center">
        À la découverte de mes 
        <span class="bg-gradient-to-r from-rose-400 to-[#FF7387] bg-clip-text text-transparent">
          aventures professionnelles
        </span>
        !
      </h2>
    </div>
    
    <section class="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      <div class="w-full max-w-4xl mx-auto px-4">
        <!-- Timeline verticale -->
        <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#FF7387] before:to-transparent">

          <!-- Expérience #1 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icône -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-[#38393b] bg-[#1F1F1F] group-[.is-active]:bg-[#FF7387] text-[#8a8a8a] group-[.is-active]:text-white shadow-lg shadow-[#ff73875e] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
              </svg>
            </div>
            
            <!-- Carte -->
            <div class="timeline-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1F1F1F] bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border-solid border border-[#38393b] shadow-xl transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-[#ff73875e]">
              <div>
                <div class="flex items-center justify-between space-x-2 mb-3">
                  <div class="font-bold text-white tracking-wide uppercase text-lg">CLEM PREVENTION</div>
                  <span class="px-3 py-1 text-xs font-medium bg-[#FF7387] text-white rounded-full">Stage</span>
                </div>
                <p class="text-[#FF7387] text-sm font-medium mb-3">Développeuse</p>
                <div class="text-gray-300 text-sm leading-relaxed">
                  Développement de sites web sur <span class="text-[#FF7387] font-semibold">WordPress</span> pour un fabricant de matériel médical.
                </div>
              </div>
              
              <div class="flex mt-5 flex-wrap gap-2">
                <!-- Compétences (noms seulement) -->
                <span class="text-xs text-gray-300">Photoshop</span>
                <span class="text-xs text-gray-300">Figma</span>
                <span class="text-xs text-gray-300">WordPress</span>
              </div>
            </div>
          </div>
          
          <!-- Expérience #2 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icône -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-[#38393b] bg-[#1F1F1F] group-[.is-active]:bg-[#FF7387] text-[#8a8a8a] group-[.is-active]:text-white shadow-lg shadow-[#ff73875e] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
              </svg>
            </div>
            
            <!-- Carte -->
            <div class="timeline-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1F1F1F] bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border-solid border border-[#38393b] shadow-xl transition duration-300 ease-in-out hover:border-[#FF7387] hover:shadow-[#ff73875e]">
              <div>
                <div class="flex items-center justify-between space-x-2 mb-3">
                  <div class="font-bold text-white tracking-wide uppercase text-lg">CAP ARCO</div>
                  <span class="px-3 py-1 text-xs font-medium bg-[#FF7387] text-white rounded-full">Stage</span>
                </div>
                <p class="text-[#FF7387] text-sm font-medium mb-3">Développeuse</p>
                <div class="text-gray-300 text-sm leading-relaxed">
                  Développement de sites web sur <span class="text-[#FF7387] font-semibold">WordPress</span> pour un courtier d'assurance.
                </div>
              </div>
              
              <div class="flex mt-5 flex-wrap gap-2">
                <!-- Compétences (noms seulement) -->
                <span class="text-xs text-gray-300">Photoshop</span>
                <span class="text-xs text-gray-300">Figma</span>
                <span class="text-xs text-gray-300">WordPress</span>
              </div>
            </div>
          </div>
          
          <!-- Les autres expériences peuvent être ajoutées de la même manière -->
          
        </div>
      </div>
    </section>
  </div>
</template>

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

.skill-pill {
  display: inline-flex;
  align-items: center;
  border: 1px solid #38393b;
  transition: all 0.2s ease-in-out;
}

.skill-pill:hover {
  border-color: #FF7387;
  box-shadow: 0 0 8px rgba(255, 115, 135, 0.3);
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-400px);
  }
}

/* Améliorations de design */
.timeline-card {
  background-color: #1A1A1A;
  border-color: #575757;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(255, 115, 135, 0.5);
}

.timeline-card .text-gray-300 {
  color: #e5e7eb;
}

.timeline-card .font-bold {
  color: #FF7387;
}

.timeline-card .text-sm {
  color: #d1d5db;
}

.timeline-card .text-xs {
  color: #ffffff;
}
</style>
