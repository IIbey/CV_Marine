<template>
  <div>
  <BannerIndex id="home" />
    <div id="about" class="w-full flex justify-center items-center my-16 relative">
        <h2 class="text-4xl font-bold text-white uppercase tracking-wider relative z-10">
            Quelques mots
            <span class="bg-gradient-to-r from-rose-400 via-[#f5b2bc] to-[#FF7387] bg-[length:100%_4px] bg-no-repeat bg-bottom inline-block transform transition-all duration-300 hover:bg-[length:100%_100%] hover:text-gray-900">
                à propos
            </span> de moi !
        </h2>
        <!-- Élément décoratif d'arrière-plan -->
        <div class="absolute opacity-10 -z-0 w-64 h-64 rounded-full bg-gradient-to-br from-rose-400 to-[#FF7387] blur-xl"></div>
    </div>
    
    <div class="flex flex-col max-w-6xl mx-auto px-6 lg:px-8">
        <h3 class="text-white text-xl font-medium mb-6">
            <b>Bonjour, je me présente Marine. Je suis... 
                <span class="typewrite text-[#FF7387] relative">{{ currentText }}
                    <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF7387] opacity-75"></span>
                </span>
            </b>
        </h3>
        
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div id="paragraphe-bio" class="w-full lg:w-2/3">
                <p class="text-[#a0a1a7] text-sm italic mb-6 transform transition-all duration-500 hover:text-white">
                    (っ◕‿◕)っ - Sur les réseaux, je me fais connaître sous le pseudonyme <b class="text-white">Ibey</b>. ⸻
                </p>
                
                <div class="space-y-6">
                    <p class="text-white text-base relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-0.5 before:bg-[#FF5064] transform hover:translate-x-1 transition-transform duration-300">
                        Je suis infographiste indépendante, spécialisée dans l'utilisation de logiciels tels que 
                        <span class="text-[#FF7387] font-medium">Photoshop</span>, 
                        <span class="text-[#FF7387] font-medium">Illustrator</span> et 
                        <span class="text-[#FF7387] font-medium">InDesign</span>. 
                        En plus de mes compétences en graphisme, j'ai des connaissances en développement web : j'ai travaillé avec des langages comme 
                        <span class="text-[#FF7387] font-medium">HTML</span>, 
                        <span class="text-[#FF7387] font-medium">CSS</span>, 
                        <span class="text-[#FF7387] font-medium">JavaScript</span> et même 
                        <span class="text-[#FF7387] font-medium">TypeScript</span>.
                    </p>
                    
                    <p class="text-white text-base relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-0.5 before:bg-[#FF5064] transform hover:translate-x-1 transition-transform duration-300">
                        J'apprécie particulièrement le travail en équipe et le contact avec la clientèle. Enthousiaste, créative et dotée d'un excellent relationnel, je suis convaincue que chaque membre d'une équipe contribue à renforcer l'image positive d'une entreprise auprès de ses partenaires et clients.
                    </p>
                    
                    <p class="text-white text-base relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-0.5 before:bg-[#FF5064] transform hover:translate-x-1 transition-transform duration-300">
                        Passionnée d'animation japonaise, de mangas, de jeux vidéo et de cosplay, ces univers nourrissent ma créativité et inspirent mes projets artistiques. 
                        <span class="text-[#FF7387] font-bold animate-pulse">✧٩(•́⌄•́๑)و ✧</span>
                    </p>
                    
                    <p class="text-white text-base relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-0.5 before:bg-[#FF5064] transform hover:translate-x-1 transition-transform duration-300">
                        En parallèle, je suis bénévole en tant que 
                        <span class="text-[#FF7387] font-medium">graphiste</span> et 
                        <span class="text-[#FF7387] font-medium">rédactrice</span> pour 
                        <a href="https://www.draftbot.fr/" class="font-bold tracking-wider text-white border-b border-[#FF7387] hover:text-[#FF7387] transition duration-300 ease-in-out">DraftBot</a>, 
                        le plus gros bot francophone sur Discord, je participe à un projet multifonction et personnalisable qui compte aujourd'hui plus de 
                        <span class="text-[#FF7387] font-medium">37 085 429 utilisateurs</span> répartis sur plus de 
                        <span class="text-[#FF7387] font-medium">700 000 communautés et serveurs</span>.
                    </p>
                </div>
                
                <!-- Icônes sociales avec animations améliorées -->
                <div class="social-container mt-8 flex items-center space-x-4">
                    <!-- GitHub -->
                    <a href="https://github.com/IIbey" class="social-icon-container group">
                        <div class="absolute inset-0 bg-[#FF7387] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                        <svg class="social-icon relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="#ffffff" class="group-hover:fill-gray-900 transition-colors duration-300"/>
                        </svg>
                    </a>
                    
                    <!-- Discord -->
                    <a href="https://discord.com/users/771331836596453396" class="social-icon-container group">
                        <div class="absolute inset-0 bg-[#FF7387] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                        <svg class="social-icon relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.6869-.2762-5.4742 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="#ffffff" class="group-hover:fill-gray-900 transition-colors duration-300"/>
                        </svg>
                    </a>
                    
                    <!-- Twitter/X -->
                    <a href="https://x.com/LittleIbeey" class="social-icon-container group">
                        <div class="absolute inset-0 bg-[#FF7387] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                        <svg class="social-icon relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#ffffff" class="group-hover:fill-gray-900 transition-colors duration-300"/>
                        </svg>
                    </a>
                    
                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/in/marine-derose" class="social-icon-container group">
                        <div class="absolute inset-0 bg-[#FF7387] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                        <svg class="social-icon relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="#ffffff" class="group-hover:fill-gray-900 transition-colors duration-300"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <!-- Image de profil avec animations et effets améliorés -->
            <div class="w-full lg:w-1/3 flex justify-center">
                <div class="relative group">
                    <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-[#FF7387] rounded-full blur-xl opacity-50 group-hover:opacity-75 transform group-hover:scale-110 transition-all duration-500"></div>
                    <img 
                         src="../public/img/Photo Marine.jpg" 
                         class="relative z-10 h-64 w-64 lg:h-80 lg:w-80 rounded-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-500 ease-in-out border-2 border-[#FF7387] shadow-lg group-hover:shadow-xl group-hover:shadow-[#FF7387]/40"  
                         alt="Photo de Marine" />
                    <div class="absolute inset-0 bg-gradient-to-tr from-[#FF7387]/20 to-transparent rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          this.type();
          // Animation d'entrée pour les éléments principaux
          this.animateOnScroll();
          window.addEventListener('scroll', this.animateOnScroll);
      },
      beforeUnmount() {
          window.removeEventListener('scroll', this.animateOnScroll);
      },
      methods: {
          type() {
              const i = this.loopNum % this.texts.length;
              const fullText = this.texts[i];
              
              if (this.isDeleting) {
                  this.currentText = fullText.substring(0, this.currentText.length - 1);
              } else {
                  this.currentText = fullText.substring(0, this.currentText.length + 1);
              }
              
              let delta = this.typingSpeed;
              
              if (!this.isDeleting && this.currentText === fullText) {
                  delta = 2000; // period
                  this.isDeleting = true;
              } else if (this.isDeleting && this.currentText === '') {
                  this.isDeleting = false;
                  this.loopNum++;
                  delta = 500;
              }
              
              setTimeout(() => {
                  this.type();
              }, delta);
          },
          animateOnScroll() {
              const elements = document.querySelectorAll('.social-container, #paragraphe-bio p');
              elements.forEach((element, index) => {
                  const position = element.getBoundingClientRect();
                  // Si l'élément est visible dans la fenêtre
                  if (position.top < window.innerHeight - 100) {
                      setTimeout(() => {
                          element.classList.add('animate-fade-in');
                      }, index * 150); // Décalage pour effet cascade
                  }
              });
          }
      }
  }
  </script>
  
  <style scoped>
  /* Base responsives */
  #paragraphe-bio {
      width: 100%;
  }
  
  /* Animation d'entrée */
  @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
      animation: fadeIn 0.8s ease forwards;
  }
  
  /* Animation bouton type */
  .typewrite {
      color: #FF7387;
      font-weight: bold;
      position: relative;
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
  .social-icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #333;
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      position: relative;
      overflow: hidden;
  }
  
  .social-icon-container:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(255, 115, 135, 0.4);
  }
  
  .social-icon {
      width: 22px;
      height: 22px;
      transition: transform 0.3s ease;
  }
  
  .social-icon-container:hover .social-icon {
      transform: scale(1.15);
  }
  
  /* Media queries */
  @media (max-width: 1024px) {
      .social-container {
          justify-content: center;
          margin-bottom: 2rem;
      }
      
      #about h2 {
          font-size: 1.75rem;
      }
  }
  
  @media (max-width: 768px) {
      .flex-col, .flex-row {
          width: 100%;
      }
      
      .social-icon-container {
          width: 40px;
          height: 40px;
      }
      
      .social-icon {
          width: 18px;
          height: 18px;
      }
  }
  
  /* Marges entre les sections */
  .CompetencesCard,
  .PassionsMarine,
  #formations,
  #experiences {
      margin-top: 4rem;
      margin-bottom: 4rem;
      opacity: 0;
      animation: fadeIn 1s ease forwards;
      animation-delay: 0.3s;
  }
  </style>