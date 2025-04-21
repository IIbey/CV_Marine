<template>
<div>
<BannerIndex id="home" />
  <div id="about" class="w-full flex justify-center items-center">
      <h2 class="text-3xl font-bold m-4 text-white mb-16 uppercase">Quelques mots
          <span
              class="bg-gradient-to-r from-rose-400 via-[#f5b2bc] to-[#FF7387] bg-[length:100%_4px] bg-no-repeat bg-bottom">
              à propos</span> de moi !
      </h2>  
    </div>
      <div class="flex flex-col mx-auto max-w-5xl px-6">
          <h3 class="text-white text-xl font-bold mb-6">
              Bonjour, je me présente Marine. Je suis... <span class="typewrite text-[#FF7387]">{{ currentText }}</span>
          </h3>
        <div class="flex flex-col md:flex-row w-full items-center md:items-start gap-12">
            <div id="paragraphe-bio" class="w-full md:w-2/3">
                <p class="text-[#9fa3a9] text-sm italic mb-6">(っ◕‿◕)っ - Sur les réseaux, je me fais connaître sous le pseudonyme <b>Ibey</b>. ⸻ </p>
                
                <div class="space-y-6">
                    <div class="bio-item">
                        <div class="flex items-start">
                            <span class="text-[#FF7387] text-2xl font-bold leading-none mr-3">—</span>
                            <p class="text-white text-sm leading-relaxed">
                                Je suis infographiste indépendante, spécialisée dans l'utilisation de logiciels tels que 
                                <span class="text-[#FF7387] font-semibold">Photoshop</span>, 
                                <span class="text-[#FF7387] font-semibold">Illustrator</span> et 
                                <span class="text-[#FF7387] font-semibold">InDesign</span>. 
                                En plus de mes compétences en graphisme, j'ai des connaissances en développement web : 
                                j'ai travaillé avec des langages comme 
                                <span class="text-[#FF7387] font-semibold">HTML</span>, 
                                <span class="text-[#FF7387] font-semibold">CSS</span>, 
                                <span class="text-[#FF7387] font-semibold">JavaScript</span> et même 
                                <span class="text-[#FF7387] font-semibold">TypeScript</span>.
                            </p>
                        </div>
                    </div>
                    
                    <div class="bio-item">
                        <div class="flex items-start">
                            <span class="text-[#FF7387] text-2xl font-bold leading-none mr-3">—</span>
                            <p class="text-white text-sm leading-relaxed">
                                J'apprécie particulièrement le travail en équipe et le contact avec la clientèle. 
                                Enthousiaste, créative et dotée d'un excellent relationnel, je suis convaincue 
                                que chaque membre d'une équipe contribue à renforcer l'image positive d'une 
                                entreprise auprès de ses partenaires et clients.
                            </p>
                        </div>
                    </div>
                    
                    <div class="bio-item">
                        <div class="flex items-start">
                            <span class="text-[#FF7387] text-2xl font-bold leading-none mr-3">—</span>
                            <p class="text-white text-sm leading-relaxed">
                                Passionnée d'animation japonaise, de mangas, de jeux vidéo et de cosplay, 
                                ces univers nourrissent ma créativité et inspirent mes projets artistiques. 
                                <span class="text-[#FF7387] font-semibold">✧٩(•́⌄•́๑)و ✧</span>
                            </p>
                        </div>
                    </div>
                    
                    <div class="bio-item">
                        <div class="flex items-start">
                            <span class="text-[#FF7387] text-2xl font-bold leading-none mr-3">—</span>
                            <p class="text-white text-sm leading-relaxed">
                                En parallèle, je suis bénévole en tant que 
                                <span class="text-[#FF7387] font-semibold">graphiste</span> et 
                                <span class="text-[#FF7387] font-semibold">rédactrice</span> pour 
                                <a href="https://www.draftbot.fr/" class="font-bold tracking-wider hover:text-[#FF7387] underline decoration-[#FF7387] decoration-2 underline-offset-2 transition duration-300 ease-in-out">DraftBot</a>, 
                                le plus gros bot francophone sur Discord, je participe à un projet multifonction 
                                et personnalisable qui compte aujourd'hui plus de 
                                <span class="text-[#FF7387] font-semibold">37 085 429 utilisateurs</span> répartis sur plus de 
                                <span class="text-[#FF7387] font-semibold">700 000 communautés et serveurs</span>.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="social-container mt-10 flex justify-start">
                    <!-- GitHub-->
                    <a href="https://github.com/IIbey" class="social-icon-container group">
                        <svg class="social-icon group-hover:fill-[#FF7387]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="#ffffff"/>
                        </svg>
                    </a>
                    <!-- Discord-->
                    <a href="https://discord.com/users/771331836596453396" class="social-icon-container group">
                        <svg class="social-icon group-hover:fill-[#FF7387]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.6869-.2762-5.4742 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="#ffffff"/>
                        </svg>
                    </a>
                    <!-- Twitter/X-->
                    <a href="https://x.com/LittleIbeey" class="social-icon-container group">
                        <svg class="social-icon group-hover:fill-[#FF7387]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#ffffff"/>
                        </svg>
                    </a>
                    <!-- LinkedIn-->
                    <a href="https://www.linkedin.com/in/marine-derose" class="social-icon-container group">
                        <svg class="social-icon group-hover:fill-[#FF7387]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="#ffffff"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="w-full md:w-1/3 flex justify-center">
                <div class="relative w-64 h-64 overflow-hidden rounded-full border-4 border-[#FF7387] shadow-xl shadow-[#ff738740] transition-all duration-500 hover:shadow-[#ff738780] group">
                    <img src="/img/Photo Marine.jpg" class="w-full h-full object-cover brightness-75 transition-all duration-500 group-hover:brightness-100"  alt="Photo de Marine" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#FF7387]/50 to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                </div>
            </div>
        </div>
    </div>
    <CompetencesCard />
    <PassionsMarine />
    <div id="formations">
    <FormationsTimeline />
  </div>
    <div id="experiences">
    <ExperiencesTimeline />
  </div>
  <div>
    <BannerPortoflio />
  </div>
  <div id="contact">
    <AppContact />
  </div>
</div>
</template>

  <script>
  export default {
      name: 'TypewriteComponent',
      data() {
          return {
              currentText: '',
              texts: ["Créative.", "Passionnée.", "Curieuse.", "à l'écoute.", "Polyvalente.", "Compétente.", "Persévérante.", "Développeuse et Infographiste !"],
              loopNum: 0,
              isDeleting: false,
              typingSpeed: 150
          }
      },
      mounted() {
          this.type()
      },
      methods: {
          type() {
              const i = this.loopNum % this.texts.length
              const fullText = this.texts[i]
              
              if (this.isDeleting) {
                  this.currentText = fullText.substring(0, this.currentText.length - 1)
              } else {
                  this.currentText = fullText.substring(0, this.currentText.length + 1)
              }
              
              let delta = this.typingSpeed
              
              if (!this.isDeleting && this.currentText === fullText) {
                  delta = 2000 // period
                  this.isDeleting = true
              } else if (this.isDeleting && this.currentText === '') {
                  this.isDeleting = false
                  this.loopNum++
                  delta = 500
              }
              
              setTimeout(() => {
                  this.type()
              }, delta)
          }
      }
  }
  </script>
  
  <style scoped>
#paragraphe-bio {
    width: 100%;
    max-width: 52rem;
    margin: auto;
}

@media (max-width: 768px) {
    .flex {
        flex-direction: column;
        align-items: center;
    }
    .pr-32 {
        padding-right: 0;
    }
    .w-48 {
        width: 100%;
    }
    .mx-80 {
        margin: 0;
        padding: 0 1.5rem;
    }
    .text-3xl {
        font-size: 1.5rem;
    }
    
    .social-container {
        width: 100%;
        justify-content: center;
        margin-bottom: 1.5rem;
    }
    
    .social-icon-container {
        margin: 0 0.5rem;
    }
    
    /* Ajout de padding pour les sections texte */
    #paragraphe-bio {
        padding: 0 1.5rem;
    }
    
    /* Assurer que les titres ont assez d'espace */
    h2 {
        padding: 0 1rem;
    }
}

  .typewrite {
      color: #FF7387;
      font-weight: bold;
  }
  .typewrite::after {
      content: '|';
      animation: blink 0.7s infinite;
  }
  @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
  }

/* Styles pour les icônes sociales */
.social-container {
  display: flex;
  align-items: center;
}

.social-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  transition: all 0.3s ease;
  margin-right: 1rem;
}

.social-icon-container:hover {
  background-color: #FF7387;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(255, 115, 135, 0.3);
}

.social-icon {
  width: 20px;
  height: 20px;
}

/* Marges entre les cartes */
.CompetencesCard,
.PassionsMarine,
#formations,
#experiences {
    margin-bottom: 2rem;
}
  </style>