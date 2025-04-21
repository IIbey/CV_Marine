<template>
  <header class="bg-[#0f0f0f] fixed w-full z-50 shadow-lg shadow-black/30">
    <nav class="border-b border-[#1f1f1f] px-4 py-3">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-[#FF7387]">Marine<span class="text-white">.dev</span></span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Ouvrir le menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-800 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="#home" class="menu-link relative block py-2 px-3 md:px-0 text-white rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out" aria-current="page">
                Accueil
                <span class="link-indicator"></span>
              </a>
            </li>
            <li>
              <a href="#about" class="menu-link relative block py-2 px-3 md:px-0 text-white rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out">
                À propos
                <span class="link-indicator"></span>
              </a>
            </li>
            <li>
              <a href="#formations" class="menu-link relative block py-2 px-3 md:px-0 text-white rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out">
                Formations
                <span class="link-indicator"></span>
              </a>
            </li>
            <li>
              <a href="#experiences" class="menu-link relative block py-2 px-3 md:px-0 text-white rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out">
                Expériences
                <span class="link-indicator"></span>
              </a>
            </li>
            <li>
              <a href="#contact" class="menu-link relative block py-2 px-3 md:px-0 text-white rounded md:bg-transparent md:p-0 transition-all duration-300 ease-in-out">
                Contact
                <span class="link-indicator"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.menu-link {
  position: relative;
  overflow: hidden;
}

.menu-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #FF7387;
  transition: width 0.3s ease;
}

.menu-link:hover {
  color: #FF7387;
}

.menu-link:hover::after {
  width: 100%;
}

.menu-link:focus {
  color: #FF7387;
}

@media (max-width: 768px) {
  .menu-link::after {
    display: none;
  }
  
  .menu-link:hover {
    background-color: rgba(255, 115, 135, 0.1);
    border-radius: 4px;
  }
}
</style>