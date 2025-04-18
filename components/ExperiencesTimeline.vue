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
        À la découverte de mes 
        <span class="bg-gradient-to-r from-rose-400 to-[#FF7387] bg-clip-text text-transparent">
          aventures professionnelles
        </span>
        !
      </h2>
    </div>
    
    <section class="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
                <!-- Compétences (icônes) -->
                <div class="skill-pill bg-[#131b2f] px-3 py-1 rounded-full">
                  <svg class="size-6 inline-block mr-1" fill="#37ABFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M426.333.5H85.667C38.825.5.5 38.825.5 85.667v340.667c0 46.842 38.325 85.167 85.167 85.167h340.667c46.842 0 85.167-38.325 85.167-85.167V85.667C511.5 38.825 473.175.5 426.333.5z"/>
                  </svg>
                  <span class="text-xs text-gray-300">Photoshop</span>
                </div>
                
                <div class="skill-pill bg-[#131b2f] px-3 py-1 rounded-full">
                  <svg class="size-6 inline-block mr-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"/>
                  </svg>
                  <span class="text-xs text-gray-300">Figma</span>
                </div>
                
                <div class="skill-pill bg-[#131b2f] px-3 py-1 rounded-full">
                  <svg class="size-6 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM24 8C32.85 8 40 15.15 40 24C40 32.85 32.85 40 24 40C15.15 40 8 32.85 8 24C8 15.15 15.15 8 24 8Z" fill="#00759D"/>
                  </svg>
                  <span class="text-xs text-gray-300">WordPress</span>
                </div>
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
                <!-- Compétences (icônes) -->
                <div class="skill-pill bg-[#131b2f] px-3 py-1 rounded-full">
                  <svg class="size-6 inline-block mr-1" fill="#37ABFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M426.333.5H85.667C38.825.5.5 38.825.5 85.667v340.667c0 46.842 38.325 85.167 85.167 85.167h340.667c46.842 0 85.167-38.325 85.167-85.167V85.667C511.5 38.825 473.175.5 426.333.5z"/>
                  </svg>
                  <span class="text-xs text-gray-300">Photoshop</span>
                </div>
                
                <div class="skill-pill bg-[#131b2f] px-3 py-1 rounded-full">
                  <svg class="size-6 inline-block mr-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"/>
                  </svg>
                  <span class="text-xs text-gray-300">Figma</span>
                </div>
                
                <div class="skill-pill bg-[#131b2f] px-3 py-1 rounded-full">
                  <svg class="size-6 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM24 8C32.85 8 40 15.15 40 24C40 32.85 32.85 40 24 40C15.15 40 8 32.85 8 24C8 15.15 15.15 8 24 8Z" fill="#00759D"/>
                  </svg>
                  <span class="text-xs text-gray-300">WordPress</span>
                </div>
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
</style>
