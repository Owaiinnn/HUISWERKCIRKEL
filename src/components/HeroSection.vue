<template>
  <section id="home" class="hero-section">
    <!-- Background -->
    <div class="hero-bg">
      <div class="hero-gradient" />
      <div class="hero-pattern" />
    </div>

    <v-container style="max-width: 1280px; position: relative; z-index: 2;" class="py-0">
      <v-row align="center" justify="center" class="hero-row">
        <!-- Left content -->
        <v-col cols="12" md="6" class="hero-content">
          <div class="badge-wrap mb-5" v-motion-slide-visible-once-left>
            <v-chip
              color="secondary"
              variant="flat"
              size="small"
              class="badge-chip"
            >
              <v-icon start size="14">mdi-star</v-icon>
              #1 Online Huiswerk Begeleiding
            </v-chip>
          </div>

          <h1 class="hero-title mb-5" v-motion-slide-visible-once-left>
            Samen naar
            <span class="highlight-text"> betere cijfers</span>
          </h1>

          <p class="hero-subtitle mb-8" v-motion-slide-visible-once-left>
            Professionele online bijles voor alle vakken en niveaus. Onze gecertificeerde tutors
            helpen jouw kind stap voor stap verder — wanneer het uitkomt, vanuit huis.
          </p>

          <div class="d-flex flex-wrap gap-3 mb-10" v-motion-slide-visible-once-left>
            <v-btn
              color="secondary"
              size="large"
              variant="flat"
              rounded="pill"
              class="hero-btn-primary"
              @click="scrollTo('contact')"
            >
              <v-icon start>mdi-rocket-launch</v-icon>
              Gratis Proefles Aanvragen
            </v-btn>
            <v-btn
              color="white"
              size="large"
              variant="outlined"
              rounded="pill"
              class="hero-btn-secondary"
              @click="scrollTo('werkwijze')"
              style="border-color: rgba(255,255,255,0.6); color: white;"
            >
              <v-icon start>mdi-play-circle-outline</v-icon>
              Hoe Werkt Het?
            </v-btn>
          </div>

          <!-- Trust stats -->
          <div class="hero-stats d-flex flex-wrap gap-6">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </v-col>

        <!-- Right: floating cards -->
        <v-col cols="12" md="6" class="hero-visual d-none d-md-flex justify-end">
          <div class="visual-container">
            <!-- Main image card -->
            <div class="main-visual-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Studenten aan het werk"
                class="main-visual-img"
              />
              <div class="img-overlay" />
            </div>

            <!-- Floating card 1: Live les -->
            <div class="float-card float-card-1">
              <v-icon color="primary" class="mb-1">mdi-video-check</v-icon>
              <div class="float-title">Live Les Actief</div>
              <div class="float-sub">Wiskunde — Nu bezig</div>
              <div class="pulse-dot" />
            </div>

            <!-- Floating card 2: Rating -->
            <div class="float-card float-card-2">
              <div class="d-flex align-center gap-2 mb-1">
                <v-icon color="warning" size="18">mdi-star</v-icon>
                <span class="float-rating">4.9</span>
              </div>
              <div class="float-sub">Gemiddelde beoordeling</div>
              <div class="d-flex mt-2">
                <div v-for="i in 5" :key="i" class="star-mini">★</div>
              </div>
            </div>

            <!-- Floating card 3: Leerlingen -->
            <div class="float-card float-card-3">
              <div class="avatars-row mb-2">
                <img v-for="(img, i) in avatarImgs" :key="i" :src="img" class="mini-avatar" :style="`left: ${i * 24}px`" />
              </div>
              <div class="float-title">+2.400 Leerlingen</div>
              <div class="float-sub">actief begeleid</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Wave bottom -->
    <div class="hero-wave">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#FAFAFA"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '2.400+', label: 'Tevreden Leerlingen' },
  { value: '98%', label: 'Positieve Reviews' },
  { value: '50+', label: 'Vakken' },
  { value: '5 Jaar', label: 'Ervaring' },
]

const avatarImgs = [
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=60&q=80&fit=crop',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&q=80&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80&fit=crop',
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0D2C6E 0%, #1565C0 40%, #1976D2 70%, #1E88E5 100%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255,167,38,0.12) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%);
}

.hero-row {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 80px;
}

.hero-content {
  color: white;
}

.badge-chip {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(36px, 5vw, 62px);
  font-weight: 700;
  line-height: 1.15;
  color: white;
}

.highlight-text {
  color: #FFA726;
  position: relative;
}

.hero-subtitle {
  font-size: clamp(15px, 2vw, 18px);
  line-height: 1.75;
  color: rgba(255,255,255,0.82);
  font-weight: 400;
  max-width: 500px;
}

.hero-btn-primary {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.2px;
  text-transform: none;
  height: 52px;
  padding: 0 28px;
  box-shadow: 0 8px 24px rgba(255,167,38,0.4);
}

.hero-btn-secondary {
  font-weight: 600;
  font-size: 15px;
  text-transform: none;
  height: 52px;
  padding: 0 28px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 26px;
  font-weight: 800;
  color: #FFA726;
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: rgba(255,255,255,0.7);
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* Visual / floating cards */
.hero-visual {
  position: relative;
  height: 540px;
}

.visual-container {
  position: relative;
  width: 480px;
  height: 500px;
}

.main-visual-card {
  position: absolute;
  top: 40px;
  right: 0;
  width: 380px;
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.4);
}

.main-visual-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(13,44,110,0.6));
}

/* Floating cards */
.float-card {
  position: absolute;
  background: white;
  border-radius: 16px;
  padding: 14px 18px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  z-index: 10;
  min-width: 170px;
}

.float-card-1 {
  top: 30px;
  left: 0;
  animation: float1 4s ease-in-out infinite;
}

.float-card-2 {
  bottom: 80px;
  right: 10px;
  animation: float2 5s ease-in-out infinite;
}

.float-card-3 {
  bottom: 20px;
  left: 30px;
  animation: float3 4.5s ease-in-out infinite;
}

.float-title {
  font-weight: 700;
  font-size: 13px;
  color: #1A237E;
}

.float-sub {
  font-size: 11px;
  color: #78909C;
  font-weight: 500;
}

.float-rating {
  font-weight: 800;
  font-size: 18px;
  color: #1A237E;
}

.star-mini {
  color: #FFA726;
  font-size: 12px;
}

.pulse-dot {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 10px;
  height: 10px;
  background: #4CAF50;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.avatars-row {
  position: relative;
  height: 32px;
  width: 110px;
}

.mini-avatar {
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}

.hero-wave {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  z-index: 1;
  line-height: 0;
}

.hero-wave svg {
  display: block;
  width: 100%;
  height: 80px;
}

@keyframes float1 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(8px); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(76,175,80,0.6); }
  50% { box-shadow: 0 0 0 6px rgba(76,175,80,0); }
}
</style>
