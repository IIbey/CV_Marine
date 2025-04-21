<template>
  <header class="bg-[#0f0f0f]/90 backdrop-blur-md fixed w-full z-50 shadow-lg shadow-black/30 transition-all duration-300" :class="{ 'py-2': scrolled, 'py-4': !scrolled }">
    <nav class="border-b border-[#1f1f1f] px-4 py-2">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <!-- Logo avec animation -->
        <a href="/" class="flex items-center space-x-2 group">
          <div class="w-9 h-9 relative overflow-hidden rounded-lg">
            <div class="absolute inset-0 bg-gradient-to-br from-[#FF7387] to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">M</span>
          </div>
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            <span class="text-[#FF7387] group-hover:text-white transition-colors duration-300">Marine</span><span class="text-white group-hover:text-[#FF7387] transition-colors duration-300">.Derose</span>
          </span>
        </a>

        <!-- Bouton mobile -->
        <button 
          @click="toggleMenu" 
          data-collapse-toggle="navbar-default" 
          type="button" 
          class="inline-flex items-center p-2 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-[#FF7387]/10 focus:outline-none"
          aria-controls="navbar-default" 
          :aria-expanded="mobileMenuOpen"
        >
          <span class="sr-only">Ouvrir le menu</span>
          <div class="w-6 h-6 relative">
            <span 
              class="absolute h-0.5 bg-white rounded-full transform transition-all duration-300 ease-in-out"
              :class="{
                'rotate-45 top-3 w-6': mobileMenuOpen,
                'top-1 w-5': !mobileMenuOpen
              }"
            ></span>
            <span 
              class="absolute h-0.5 bg-white rounded-full transform transition-all duration-300 ease-in-out"
              :class="{
                'opacity-0 w-6': mobileMenuOpen,
                'top-3 w-4': !mobileMenuOpen
              }"
            ></span>
            <span 
              class="absolute h-0.5 bg-white rounded-full transform transition-all duration-300 ease-in-out"
              :class="{
                '-rotate-45 top-3 w-6': mobileMenuOpen,
                'top-5 w-5': !mobileMenuOpen
              }"
            ></span>
          </div>
        </button>

        <!-- Menu de navigation -->
        <div 
          class="md:block transition-all duration-300 ease-in-out" 
          :class="{'hidden': !mobileMenuOpen, 'w-full': mobileMenuOpen, 'w-auto': !mobileMenuOpen}" 
          id="navbar-default"
        >
          <ul 
            class="font-medium flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0"
            :class="{'p-6 bg-[#161616] rounded-lg border border-[#252525] shadow-lg md:bg-transparent md:border-0 md:shadow-none md:p-0': mobileMenuOpen}"
          >
            <!-- Liens de navigation -->
            <li v-for="(item, index) in navItems" :key="index">
              <a 
                :href="item.href" 
                class="group relative block py-2 text-gray-200 hover:text-white md:p-0 transition-all duration-300 ease-in-out"
                :class="{'px-3 rounded hover:bg-[#FF7387]/10 md:px-0 md:bg-transparent': mobileMenuOpen}"
                :aria-current="item.active ? 'page' : undefined"
              >
                <span class="relative z-10 flex items-center">
                  <component :is="item.icon" class="w-4 h-4 mr-2 md:hidden" />
                  {{ item.label }}
                </span>
                <!-- Indicateur animé sous le lien sur desktop -->
                <span 
                  class="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#FF7387] to-pink-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 hidden md:block"
                ></span>
                <!-- Indicateur actif sur desktop (toujours visible) -->
                <span 
                  v-if="item.active" 
                  class="absolute inset-x-0 -bottom-1 h-0.5 bg-[#FF7387] hidden md:block"
                ></span>
              </a>
            </li>
            <!-- Bouton Contact -->
            <li>
              <a 
                href="#contact" 
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[#FF7387] to-pink-500 hover:from-[#FF7387] hover:to-[#FF7387] transition-all duration-300 hover:shadow-md hover:shadow-[#FF7387]/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      scrolled: false,
      navItems: [
        { 
          label: 'Accueil', 
          href: '#home', 
          active: true,
          icon: {
            template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>`
          }
        },
        { 
          label: 'À propos', 
          href: '#about', 
          active: false,
          icon: {
            template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
            </svg>`
          }
        },
        { 
          label: 'Formations', 
          href: '#formations', 
          active: false,
          icon: {
            template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>`
          }
        },
        { 
          label: 'Expériences', 
          href: '#experiences', 
          active: false,
          icon: {
            template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>`
          }
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Vérifie la position initiale
    
    // Détecte la section active lors du défilement pour mettre à jour la navigation
    this.setupScrollSpy();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      
      // Empêche le défilement du body lorsque le menu mobile est ouvert
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    handleScroll() {
      // Réduit la taille de l'en-tête lors du défilement
      this.scrolled = window.scrollY > 20;
    },
    setupScrollSpy() {
      // Cette fonction détecte la section visible dans la fenêtre pour mettre à jour la navigation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Récupère l'ID de la section visible
            const id = entry.target.getAttribute('id');
            
            // Met à jour l'état actif des liens de navigation
            this.navItems.forEach(item => {
              // Extrait l'ID du lien (supprime le # du href)
              const itemId = item.href.replace('#', '');
              item.active = (itemId === id);
            });
          }
        });
      }, { threshold: 0.5 });
      
      // Observe toutes les sections qui correspondent aux liens de navigation
      document.querySelectorAll('section[id], div[id]').forEach(section => {
        observer.observe(section);
      });
    }
  }
}
</script>

<style scoped>
/* Animation de transition pour le menu mobile */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

#navbar-default {
  animation: slideDown 0.3s ease-out;
}

/* Style pour le menu mobile lorsqu'il est ouvert */
@media (max-width: 768px) {
  #navbar-default:not(.hidden) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 0.5rem;
    padding: 0 1rem;
  }
  
  /* Animation pour les éléments du menu */
  #navbar-default:not(.hidden) li {
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
  }
  
  #navbar-default:not(.hidden) li:nth-child(1) { animation-delay: 0.1s; }
  #navbar-default:not(.hidden) li:nth-child(2) { animation-delay: 0.2s; }
  #navbar-default:not(.hidden) li:nth-child(3) { animation-delay: 0.3s; }
  #navbar-default:not(.hidden) li:nth-child(4) { animation-delay: 0.4s; }
  #navbar-default:not(.hidden) li:nth-child(5) { animation-delay: 0.5s; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Effet de focus des liens */
a:focus-visible {
  outline: 2px solid #FF7387;
  outline-offset: 4px;
  border-radius: 4px;
}
</style>