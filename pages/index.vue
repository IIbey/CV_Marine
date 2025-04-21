<template>
  <div id="about" class="bg-black py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Titre de la section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white">
          QUELQUES MOTS 
          <span class="relative">
            <span class="text-[#FF7387]">À PROPOS</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7387]"></span>
          </span>
          DE MOI !
        </h2>
      </div>
      
      <!-- Introduction avec animation typing -->
      <div class="mb-10 text-center">
        <h3 class="text-white text-xl md:text-2xl font-medium">
          Bonjour, je me présente Marine. Je suis... 
          <span class="text-[#FF7387] font-bold typewrite">{{ currentText }}</span>
        </h3>
      </div>
      
      <!-- Contenu principal avec photo et bio -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <!-- Photo avec effet -->
        <div class="w-full md:w-1/3 flex justify-center md:order-2">
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-[#FF7387] to-[#f5b2bc] rounded-full opacity-50 blur-md transition duration-500 group-hover:opacity-75"></div>
            <img 
              src="../public/img/Photo Marine.jpg" 
              class="relative rounded-full w-64 h-64 object-cover filter brightness-75 transition duration-500 ease-in-out group-hover:brightness-100"
              alt="Photo de Marine" 
            />
          </div>
        </div>
        
        <!-- Bio avec paragraphes stylisés -->
        <div class="w-full md:w-2/3 md:order-1 space-y-4">
          <p class="text-[#8f9093] text-sm italic">
            (っ◕‿◕)っ - Sur les réseaux, je me fais connaître sous le pseudonyme <span class="font-bold">Ibey</span>. ⸻
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <span class="text-[#FF5064] font-bold mr-2 text-lg">—</span>
              <p class="text-white">
                Je suis infographiste indépendante, spécialisée dans l'utilisation de logiciels tels que 
                <span class="text-[#FF7387] font-bold">Photoshop</span>, 
                <span class="text-[#FF7387] font-bold">Illustrator</span> et 
                <span class="text-[#FF7387] font-bold">InDesign</span>. 
                En plus de mes compétences en graphisme, j'ai des connaissances en développement web : j'ai travaillé avec des langages comme 
                <span class="text-[#FF7387] font-bold">HTML</span>, 
                <span class="text-[#FF7387] font-bold">CSS</span>, 
                <span class="text-[#FF7387] font-bold">JavaScript</span> et même 
                <span class="text-[#FF7387] font-bold">TypeScript</span>.
              </p>
            </div>
            
            <div class="flex items-start">
              <span class="text-[#FF5064] font-bold mr-2 text-lg">—</span>
              <p class="text-white">
                J'apprécie particulièrement le travail en équipe et le contact avec la clientèle. Enthousiaste, créative et dotée d'un excellent relationnel, je suis convaincue que chaque membre d'une équipe contribue à renforcer l'image positive d'une entreprise auprès de ses partenaires et clients.
              </p>
            </div>
            
            <div class="flex items-start">
              <span class="text-[#FF5064] font-bold mr-2 text-lg">—</span>
              <p class="text-white">
                Passionnée d'animation japonaise, de mangas, de jeux vidéo et de cosplay, ces univers nourrissent ma créativité et inspirent mes projets artistiques. <span class="text-[#FF7387] font-bold">✧٩(•́⌄•́๑)و ✧</span>
              </p>
            </div>
            
            <div class="flex items-start">
              <span class="text-[#FF5064] font-bold mr-2 text-lg">—</span>
              <p class="text-white">
                En parallèle, je suis bénévole en tant que <span class="text-[#FF7387] font-bold">graphiste</span> et <span class="text-[#FF7387] font-bold">rédactrice</span> pour 
                <a href="https://www.draftbot.fr/" class="font-bold tracking-wider hover:text-[#CD6E57] transition duration-300 ease-in-out">DraftBot</a>, 
                le plus gros bot francophone sur Discord, je participe à un projet multifonction et personnalisable qui compte aujourd'hui plus de 
                <span class="text-[#FF7387] font-bold">37 085 429 utilisateurs</span> répartis sur plus de <span class="text-[#FF7387] font-bold">700 000 communautés et serveurs</span>.
              </p>
            </div>
          </div>
          
          <!-- Icônes sociales avec animation améliorée -->
          <div class="flex flex-wrap gap-4 mt-8">
            <!-- GitHub-->
            <a href="https://github.com/IIbey" class="social-link group">
              <div class="social-icon-bg group-hover:bg-[#333333]">
                <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="#ffffff"/>
                </svg>
              </div>
            </a>
            <!-- Discord-->
            <a href="https://discord.com/users/771331836596453396" class="social-link group">
              <div class="social-icon-bg group-hover:bg-[#5865F2]">
                <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.6869-.2762-5.4742 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="#ffffff"/>
                </svg>
              </div>
            </a>
            <!-- Twitter/X -->
            <a href="https://x.com/LittleIbeey" class="social-link group">
              <div class="social-icon-bg group-hover:bg-[#1DA1F2]">
                <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#ffffff"/>
                </svg>
              </div>
            </a>
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/marine-derose" class="social-link group">
              <div class="social-icon-bg group-hover:bg-[#0077B5]">
                <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="#ffffff"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
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
        delta = 2000 // pause
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
.typewrite::after {
  content: '|';
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.social-link {
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  transition: transform 0.3s;
}

.social-link:hover {
  transform: translateY(-5px);
}

.social-icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.social-link:hover .social-icon-bg {
  box-shadow: 0 6px 12px rgba(255, 115, 135, 0.3);
}
</style>