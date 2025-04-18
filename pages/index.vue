<template>
<div>
<BannerIndex id="home" />
  <div id="about" class="w-full flex justify-center items-center">
      <h2 class="text-3xl font-bold m-4 text-white mb-16 uppercase">Quelques mots
          <span href="" target="_blank"
              class="bg-gradient-to-r from-rose-400 via-[#f5b2bc] to-[#FF7387] bg-[length:100%_4px] bg-no-repeat bg-bottom">
              à propos</span> de moi !
      </h2>  
    </div>
      <div class="flex flex-col mx-80"><h3 class="text-white text-lg">
          <b>Bonjour, je me présente Marine. Je suis... <span class="typewrite">{{ currentText }}</span></b>
      </h3>
    <div class="flex w-full">
        <div id="paragraphe-bio" class="pr-32 w-48">
        <p class="text-[#8f9093] text-xs italic mt-3.5">(っ◕‿◕)っ - Sur les réseaux, je me fais connaître sous le pseudonyme <b>Ibey</b>. ⸻ </p>
         <p class="text-white text-sm mt-3.5"><b class="text-[#FF5064]">—</b> Je suis infographiste indépendante, spécialisée dans l'utilisation de logiciels tels que <b class="text-[#FF7387]">Photoshop</b>, <b class="text-[#FF7387]">Illustrator</b> et <b class="text-[#FF7387]">InDesign</b>. En plus de mes compétences en graphisme, j'ai des connaissances en développement web : j'ai travaillé avec des langages comme <b class="text-[#FF7387]">HTML</b>, <b class="text-[#FF7387]">CSS</b>, <b class="text-[#FF7387]">JavaScript</b> et même <b class="text-[#FF7387]">TypeScript</b>.</p>
        <p class="text-white text-sm mt-3.5"><b class="text-[#FF5064]">—</b> J'apprécie particulièrement le travail en équipe et le contact avec la clientèle. Enthousiaste, créative et dotée d'un excellent relationnel, je suis convaincue que chaque membre d'une équipe contribue à renforcer l'image positive d'une entreprise auprès de ses partenaires et clients.</p>
        <p class="text-white text-sm mt-3.5"><b class="text-[#FF5064]">—</b> Passionnée d'animation japonaise, de mangas, de jeux vidéo et de cosplay, ces univers nourrissent ma créativité et inspirent mes projets artistiques. <b class="text-[#FF7387]">✧٩(•́⌄•́๑)و ✧</b></p>
        <p class="text-white text-sm mt-3.5"><b class="text-[#FF5064]">—</b> En parallèle, je suis bénévole en tant que <b class="text-[#FF7387]">graphiste</b> et <b class="text-[#FF7387]">rédactrice</b> pour <a href="https://www.draftbot.fr/" class="font-bold tracking-wider hover:text-[#CD6E57] transition duration-300 ease-in-out ">DraftBot</a>, le plus gros bot francophone sur Discord, je participe à un projet multifonction et personnalisable qui compte aujourd'hui plus de <b class="text-[#FF7387]">37 085 429 utilisateurs</b> répartis sur plus de <b class="text-[#FF7387]">700 000 communautés et serveurs</b>.</p>
        <div class="flex mt-6">
        <!-- GitHub-->
        <a href="https://github.com/IIbey"><svg class="mr-6 size-7" width="64px" height="64px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>GitHub - IIbey</title> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg></a>
        <!-- Discord-->
        <a href="https://discord.com/users/771331836596453396"><svg class="mr-6 size-7" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Discord - Ibey_</title> <path d="M20.992 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.050 0.005 0.109 0.005 0.168 0 1.523-1.191 2.768-2.693 2.854l-0.008 0zM11.026 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.048 0.005 0.104 0.005 0.161 0 1.525-1.19 2.771-2.692 2.862l-0.008 0zM26.393 6.465c-1.763-0.832-3.811-1.49-5.955-1.871l-0.149-0.022c-0.005-0.001-0.011-0.002-0.017-0.002-0.035 0-0.065 0.019-0.081 0.047l-0 0c-0.234 0.411-0.488 0.924-0.717 1.45l-0.043 0.111c-1.030-0.165-2.218-0.259-3.428-0.259s-2.398 0.094-3.557 0.275l0.129-0.017c-0.27-0.63-0.528-1.142-0.813-1.638l0.041 0.077c-0.017-0.029-0.048-0.047-0.083-0.047-0.005 0-0.011 0-0.016 0.001l0.001-0c-2.293 0.403-4.342 1.060-6.256 1.957l0.151-0.064c-0.017 0.007-0.031 0.019-0.040 0.034l-0 0c-2.854 4.041-4.562 9.069-4.562 14.496 0 0.907 0.048 1.802 0.141 2.684l-0.009-0.11c0.003 0.029 0.018 0.053 0.039 0.070l0 0c2.14 1.601 4.628 2.891 7.313 3.738l0.176 0.048c0.008 0.003 0.018 0.004 0.028 0.004 0.032 0 0.060-0.015 0.077-0.038l0-0c0.535-0.72 1.044-1.536 1.485-2.392l0.047-0.1c0.006-0.012 0.010-0.027 0.010-0.043 0-0.041-0.026-0.075-0.062-0.089l-0.001-0c-0.912-0.352-1.683-0.727-2.417-1.157l0.077 0.042c-0.029-0.017-0.048-0.048-0.048-0.083 0-0.031 0.015-0.059 0.038-0.076l0-0c0.157-0.118 0.315-0.24 0.465-0.364 0.016-0.013 0.037-0.021 0.059-0.021 0.014 0 0.027 0.003 0.038 0.008l-0.001-0c2.208 1.061 4.8 1.681 7.536 1.681s5.329-0.62 7.643-1.727l-0.107 0.046c0.012-0.006 0.025-0.009 0.040-0.009 0.022 0 0.043 0.008 0.059 0.021l-0-0c0.15 0.124 0.307 0.248 0.466 0.365 0.023 0.018 0.038 0.046 0.038 0.077 0 0.035-0.019 0.065-0.046 0.082l-0 0c-0.661 0.395-1.432 0.769-2.235 1.078l-0.105 0.036c-0.036 0.014-0.062 0.049-0.062 0.089 0 0.016 0.004 0.031 0.011 0.044l-0-0.001c0.501 0.96 1.009 1.775 1.571 2.548l-0.040-0.057c0.017 0.024 0.046 0.040 0.077 0.040 0.010 0 0.020-0.002 0.029-0.004l-0.001 0c2.865-0.892 5.358-2.182 7.566-3.832l-0.065 0.047c0.022-0.016 0.036-0.041 0.039-0.069l0-0c0.087-0.784 0.136-1.694 0.136-2.615 0-5.415-1.712-10.43-4.623-14.534l0.052 0.078c-0.008-0.016-0.022-0.029-0.038-0.036l-0-0z"></path> </g></svg></a>
        <!-- Tweeter-->
        <a href="https://x.com/LittleIbeey"><svg class="mr-6 size-7" fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><title>Twitter (X) - @LittleIbeey</title><g id="SVGRepo_iconCarrier"> <g id="XMLID_826_"> <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"></path> </g> </g></svg></a>
        <!-- LinkedIn-->
        <a href="www.linkedin.com/in/marine-derose"><svg class="mr-6 size-7" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>LinkedIn - Marine Derose</title> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#ffffff]"> </path> </g> </g> </g> </g></svg></a>
        </div>
        </div>
        <img src="../public/img/Photo Marine.jpg" class="h-96 rounded-full drop-shadow-xl brightness-50 transition duration-300 ease-in-out shadow-lg hover:shadow-lg hover:shadow-[#FF7387] hover:brightness-100"  alt="Photo" />
    </div>
    </div>

    <div class="w-full flex justify-center items-center">
      <h2 class="text-3xl font-bold m-4 text-white mb-16 mt-16 uppercase">Mon arsenal de 
          <span href="" target="_blank"
              class="bg-gradient-to-r from-rose-400 via-[#f5b2bc] to-[#FF7387] bg-[length:100%_4px] bg-no-repeat bg-bottom">
              talents</span> !
      </h2>
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
    }
    .text-3xl {
        font-size: 1.5rem;
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
  </style>