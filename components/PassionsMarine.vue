<template>
  <div class="relative bg-gradient-to-b from-[#131b2f] to-[#0b111e] pb-16">
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
        Voyage au cœur de mes 
        <span class="bg-gradient-to-r from-rose-400 to-[#FF7387] bg-clip-text text-transparent">
          passions
        </span>
        !
      </h2>
    </div>

    <div class="w-full max-w-6xl mx-auto px-4">
      <div class="passions-container">
        <!-- Jeux Vidéos -->
        <div class="passion-card group">
          <div class="passion-icon-container">
            <svg class="passion-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-10 7H8v3H6v-3H3v-2h3V8h2v3h3zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"/>
            </svg>
          </div>
          <h3 class="passion-title">Les Jeux Vidéos</h3>
          <p class="passion-description">Les mécaniques et univers immersifs m'inspirent pour créer des expériences uniques.</p>
        </div>

        <!-- L'informatique -->
        <div class="passion-card group">
          <div class="passion-icon-container">
            <svg class="passion-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"/>
            </svg>
          </div>
          <h3 class="passion-title">L'informatique</h3>
          <p class="passion-description">J'aime apprendre, résoudre des problèmes et développer des solutions innovantes.</p>
        </div>

        <!-- Le RolePlay -->
        <div class="passion-card group">
          <div class="passion-icon-container">
            <svg class="passion-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"/>
            </svg>
          </div>
          <h3 class="passion-title">Le RolePlay</h3>
          <p class="passion-description">L'écriture interactive m'aide à construire des histoires et des concepts originaux.</p>
        </div>

        <!-- Les Mangas -->
        <div class="passion-card group">
          <div class="passion-icon-container">
            <svg class="passion-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5z"/>
              <path fill="currentColor" d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"/>
            </svg>
          </div>
          <h3 class="passion-title">Les Mangas</h3>
          <p class="passion-description">Leur richesse visuelle et narrative nourrit ma créativité au quotidien.</p>
        </div>

        <!-- Le Cosplay -->
        <div class="passion-card group">
          <div class="passion-icon-container">
            <svg class="passion-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.5 6c-1.31 0-2.37 1.01-2.48 2.3c-1.88-.5-2.84-1.8-5.02-1.8c-2.19 0-3.14 1.3-5.02 1.8C6.87 7.02 5.81 6 4.5 6A2.5 2.5 0 0 0 2 8.5V9c0 6 3.6 7.81 6.52 7.98C9.53 17.62 10.72 18 12 18s2.47-.38 3.48-1.02C18.4 16.81 22 15 22 9v-.5A2.5 2.5 0 0 0 19.5 6m-16 3v-.5c0-.55.45-1 1-1s1 .45 1 1v3c0 1.28.38 2.47 1.01 3.48C4.99 14.27 3.5 12.65 3.5 9m17 0c0 3.65-1.49 5.27-3.01 5.98c.64-1.01 1.01-2.2 1.01-3.48v-3c0-.55.45-1 1-1s1 .45 1 1zm-9.81 1.48c-.44.26-.96.56-1.69.76V10.2c.48-.17.84-.38 1.18-.58C10.72 9.3 11.23 9 12 9s1.27.3 1.8.62c.34.2.71.42 1.2.59v1.04c-.75-.21-1.26-.51-1.71-.78c-.46-.27-.8-.47-1.29-.47s-.84.2-1.31.48"/>
            </svg>
          </div>
          <h3 class="passion-title">Le Cosplay</h3>
          <p class="passion-description">Combiner création, design et performance me permet de donner vie à des personnages inspirants.</p>
        </div>
      </div>
    </div>
  </div>

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

.passions-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
}

.passion-card {
  background-color: rgba(31, 31, 31, 0.8);
  backdrop-filter: blur(5px);
  border: 1px solid #38393b;
  border-radius: 0.75rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.passion-card:hover {
  border-color: #FF7387;
  box-shadow: 0 8px 15px rgba(255, 115, 135, 0.2);
  transform: translateY(-5px);
}

.passion-icon-container {
  background-color: #131b2f;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid #38393b;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.passion-card:hover .passion-icon-container {
  background-color: #FF7387;
  border-color: #FF7387;
  box-shadow: 0 0 15px rgba(255, 115, 135, 0.5);
}

.passion-icon {
  width: 35px;
  height: 35px;
  color: #FF7387;
  transition: all 0.3s ease;
}

.passion-card:hover .passion-icon {
  color: white;
  transform: scale(1.1);
}

.passion-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.passion-card:hover .passion-title {
  color: #FF7387;
}

.passion-description {
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-400px);
  }
}

/* Media queries pour la responsivité */
@media (max-width: 1200px) {
  .passions-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .passions-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .passion-card {
    padding: 1.5rem;
  }
  
  .passion-icon-container {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .passion-icon {
    width: 30px;
    height: 30px;
  }
  
  .passion-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .passion-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.75rem;
    padding: 0 1rem;
  }
  
  .passions-container {
    grid-template-columns: 1fr;
  }
  
  .passion-card {
    padding: 1.5rem;
  }
}
</style>
</template>