<template>
  <div class="relative bg-gradient-to-b from-gray-900 to-gray-800 pb-16">
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
        <span class="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          aventures professionnelles
        </span>
        !
      </h2>
    </div>
    
    <section class="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div class="w-full max-w-4xl mx-auto px-4">
        <!-- Timeline verticale -->
        <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-red-500 before:to-transparent">

          <!-- Expérience #1 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icône -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800 group-[.is-active]:bg-red-600 text-gray-400 group-[.is-active]:text-white shadow-lg shadow-red-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
              </svg>
            </div>
            
            <!-- Carte -->
            <div class="timeline-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-lg border-solid border border-gray-700 shadow-xl transition duration-300 ease-in-out hover:border-red-500 hover:shadow-red-500/20">
              <div>
                <div class="flex items-center justify-between space-x-2 mb-3">
                  <div class="font-bold text-white tracking-wide uppercase text-lg">Clem Prevention</div>
                  <span class="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded-full">Stage</span>
                </div>
                <p class="text-red-400 text-sm font-medium mb-3">Développeuse</p>
                <div class="text-gray-300 text-sm leading-relaxed">
                  Développement de sites web sur <span class="text-red-400 font-semibold">WordPress</span> pour un fabricant de matériel médical.
                </div>
              </div>
              
              <div class="flex mt-5 flex-wrap gap-2">
                <!-- Compétences (icônes) -->
                <div class="flex items-center gap-2 bg-gray-700 bg-opacity-50 px-3 py-1 rounded-full">
                  <svg class="size-5" fill="#37ABFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M426.333.5H85.667C38.825.5.5 38.825.5 85.667v340.667c0 46.842 38.325 85.167 85.167 85.167h340.667c46.842 0 85.167-38.325 85.167-85.167V85.667C511.5 38.825 473.175.5 426.333.5z"/>
                  </svg>
                  <span class="text-xs text-gray-300">Photoshop</span>
                </div>
                
                <div class="flex items-center gap-2 bg-gray-700 bg-opacity-50 px-3 py-1 rounded-full">
                  <svg class="size-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/>
                  </svg>
                  <span class="text-xs text-gray-300">Figma</span>
                </div>
                
                <div class="flex items-center gap-2 bg-gray-700 bg-opacity-50 px-3 py-1 rounded-full">
                  <svg class="size-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M400,783.99925 C400,793.499047 405.520173,801.708803 413.525923,805.598425 L402.077565,774.232445 C400.747023,777.216038 400,780.519141 400,783.99925 Z" fill="#00759D" transform="translate(-384 -760)"/>
                  </svg>
                  <span class="text-xs text-gray-300">WordPress</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Expérience #2 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icône -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800 group-[.is-active]:bg-red-600 text-gray-400 group-[.is-active]:text-white shadow-lg shadow-red-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
              </svg>
            </div>
            
            <!-- Carte -->
            <div class="timeline-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-lg border-solid border border-gray-700 shadow-xl transition duration-300 ease-in-out hover:border-red-500 hover:shadow-red-500/20">
              <div>
                <div class="flex items-center justify-between space-x-2 mb-3">
                  <div class="font-bold text-white tracking-wide uppercase text-lg">Cap Arco</div>
                  <span class="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded-full">Stage</span>
                </div>
                <p class="text-red-400 text-sm font-medium mb-3">Développeuse</p>
                <div class="text-gray-300 text-sm leading-relaxed">
                  Développement de sites web sur <span class="text-red-400 font-semibold">WordPress</span> pour un courtier d'assurance.
                </div>
              </div>
              
              <div class="flex mt-5 flex-wrap gap-2">
                <!-- Compétences (icônes) -->
                <div class="flex items-center gap-2 bg-gray-700 bg-opacity-50 px-3 py-1 rounded-full">
                  <svg class="size-5" fill="#37ABFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M426.333.5H85.667C38.825.5.5 38.825.5 85.667v340.667c0 46.842 38.325 85.167 85.167 85.167h340.667c46.842 0 85.167-38.325 85.167-85.167V85.667C511.5 38.825 473.175.5 426.333.5z"/>
                  </svg>
                  <span class="text-xs text-gray-300">Photoshop</span>
                </div>
                
                <div class="flex items-center gap-2 bg-gray-700 bg-opacity-50 px-3 py-1 rounded-full">
                  <svg class="size-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/>
                  </svg>
                  <span class="text-xs text-gray-300">Figma</span>
                </div>
                
                <div class="flex items-center gap-2 bg-gray-700 bg-opacity-50 px-3 py-1 rounded-full">
                  <svg class="size-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M400,783.99925 C400,793.499047 405.520173,801.708803 413.525923,805.598425 L402.077565,774.232445 C400.747023,777.216038 400,780.519141 400,783.99925 Z" fill="#00759D" transform="translate(-384 -760)"/>
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

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-400px);
  }
}
</style>
