<template>
    <div class="py-16 px-4 bg-black">
      <div class="max-w-7xl mx-auto">
        <!-- Titre de la section -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            MON ARSENAL DE 
            <span class="text-[#FF7387] relative">
              TALENTS<span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7387]"></span></span> !
          </h2>
        </div>
        
        <!-- Cartes de talents -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Carte Infographiste -->
          <div class="bg-[#1F1F1F] border border-[#38393b] rounded-xl p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#FF7387] hover:shadow-lg hover:shadow-[#FF7387]/20">
            <h3 class="text-2xl font-bold text-white text-center mb-4 pb-2 relative">
              Infographiste
              <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#FF7387] transition-all duration-300 group-hover:w-24"></span>
            </h3>
            <p class="text-gray-400 text-center italic mb-6">
              Chaque pixel compte, car c'est dans les détails que le design prend vie.
            </p>
            <div class="flex flex-wrap justify-center gap-2">
              <div v-for="skill in ['Design Vectoriel', 'Retouche Photo', 'Maquettes', 'Prototypage', 'Mise en Pages', 'Illustrations Web']" 
                   :key="skill"
                   class="bg-gradient-to-r from-[#252525] to-[#1F1F1F] px-4 py-2 rounded-md text-sm text-gray-300 border border-[#3a3a3a] transition duration-300 ease-in-out hover:scale-105 hover:text-[#FF7387] hover:border-[#FF7387]">
                {{ skill }}
              </div>
            </div>
          </div>
          
          <!-- Carte Développeuse Web -->
          <div class="bg-[#1F1F1F] border border-[#38393b] rounded-xl p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#FF7387] hover:shadow-lg hover:shadow-[#FF7387]/20">
            <h3 class="text-2xl font-bold text-white text-center mb-4 pb-2 relative">
              Développeuse Web
              <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#FF7387] transition-all duration-300 group-hover:w-24"></span>
            </h3>
            <p class="text-gray-400 text-center italic mb-6">
              Chaque ligne de code construit le pont entre l'idée et la réalité.
            </p>
            <div class="flex flex-wrap justify-center gap-2">
              <div v-for="skill in ['Front-End & Back-End', 'Frameworks', 'Langages', 'Bases de données', 'Responsive Design']" 
                   :key="skill"
                   class="bg-gradient-to-r from-[#252525] to-[#1F1F1F] px-4 py-2 rounded-md text-sm text-gray-300 border border-[#3a3a3a] transition duration-300 ease-in-out hover:scale-105 hover:text-[#FF7387] hover:border-[#FF7387]">
                {{ skill }}
              </div>
            </div>
          </div>
          
          <!-- Carte Rédactrice -->
          <div class="bg-[#1F1F1F] border border-[#38393b] rounded-xl p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#FF7387] hover:shadow-lg hover:shadow-[#FF7387]/20">
            <h3 class="text-2xl font-bold text-white text-center mb-4 pb-2 relative">
              Rédactrice
              <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#FF7387] transition-all duration-300 group-hover:w-24"></span>
            </h3>
            <p class="text-gray-400 text-center italic mb-6">
              Chaque phrase écrite vend une idée avant même de vendre un produit.
            </p>
            <div class="flex flex-wrap justify-center gap-2">
              <div v-for="skill in ['Rédaction Technique', 'Rédaction Web et SEO', 'Copywriting', 'Adaptation Support', 'Corrections']" 
                   :key="skill"
                   class="bg-gradient-to-r from-[#252525] to-[#1F1F1F] px-4 py-2 rounded-md text-sm text-gray-300 border border-[#3a3a3a] transition duration-300 ease-in-out hover:scale-105 hover:text-[#FF7387] hover:border-[#FF7387]">
                {{ skill }}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </template>