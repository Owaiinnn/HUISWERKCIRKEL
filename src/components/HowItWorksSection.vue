<template>
  <section id="werkwijze" class="how-section">
    <v-container style="max-width: 1280px;">
      <div class="text-center mb-14">
        <div class="section-label mb-3">In 4 Stappen</div>
        <h2 class="section-title mb-4">Hoe werkt De Huiswerk Cirkel?</h2>
        <p class="section-desc">
          Binnen enkele minuten ben je gekoppeld aan de perfecte tutor.
        </p>
      </div>

      <!-- Steps -->
      <v-row justify="center" class="steps-row mb-16">
        <v-col
          v-for="(step, i) in steps"
          :key="step.title"
          cols="12"
          sm="6"
          md="3"
          class="step-col"
        >
          <div class="step-card">
            <div class="step-connector" v-if="i < steps.length - 1" />
            <div class="step-number-wrap">
              <div class="step-number">{{ i + 1 }}</div>
            </div>
            <div class="step-icon-wrap">
              <v-icon size="30" color="primary">{{ step.icon }}</v-icon>
            </div>
            <h3 class="step-title mt-4 mb-2">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </v-col>
      </v-row>

      <!-- Session preview banner -->
      <div class="session-banner">
        <v-row align="center">
          <v-col cols="12" md="7">
            <h3 class="banner-title mb-3">Hoe ziet een sessie eruit?</h3>
            <p class="banner-text mb-5">
              Onze leeromgeving is volledig online en uitgerust met een interactief whiteboard,
              videoverbinding en chatfunctie. Jouw tutor deelt zijn scherm en werkt stap voor stap
              samen met jouw kind door de leerstof.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <div v-for="feat in sessionFeatures" :key="feat" class="session-feat">
                <v-icon size="16" color="primary" class="mr-2">mdi-check-circle</v-icon>
                {{ feat }}
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5">
            <div class="session-visual">
              <img
                src="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=500&q=80"
                alt="Online les sessie"
                class="session-img"
              />
              <div class="session-overlay">
                <div class="play-btn">
                  <v-icon color="white" size="30">mdi-play</v-icon>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: 'mdi-account-plus-outline',
    title: 'Registreer Gratis',
    desc: 'Maak een gratis account aan en vertel ons over jouw leerwensen en het niveau.',
  },
  {
    icon: 'mdi-account-search',
    title: 'Kies een Tutor',
    desc: 'Bekijk profielen en kies de tutor die het best past bij jouw vak en leerstijl.',
  },
  {
    icon: 'mdi-calendar-check',
    title: 'Plan een Les',
    desc: 'Kies een tijdstip dat bij jou past en boek direct jouw eerste sessie.',
  },
  {
    icon: 'mdi-rocket-launch',
    title: 'Start met Leren',
    desc: 'Log in op ons platform en begin met leren. Eenvoudig, effectief en leuk!',
  },
]

const sessionFeatures = [
  'HD Videobellen',
  'Interactief Whiteboard',
  'Scherm Delen',
  'Opname Beschikbaar',
  'Notities & Bestanden',
]
</script>

<style scoped>
.how-section {
  background: #F3F4F8;
  padding: 100px 0;
}

.section-label {
  font-size: 12px;
  font-weight: 700;
  color: #FFA726;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 700;
  color: #1A237E;
}

.section-desc {
  font-size: 17px;
  color: #546E7A;
  line-height: 1.7;
}

.steps-row {
  position: relative;
}

.step-col {
  position: relative;
}

.step-card {
  text-align: center;
  padding: 32px 20px;
  background: white;
  border-radius: 20px;
  border: 1px solid #E8EAF6;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.step-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(21,101,192,0.12);
}

.step-number-wrap {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
}

.step-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1565C0, #0D47A1);
  color: white;
  font-size: 14px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(21,101,192,0.4);
}

.step-icon-wrap {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 4px;
}

.step-title {
  font-size: 16px;
  font-weight: 700;
  color: #1A237E;
}

.step-desc {
  font-size: 13px;
  color: #546E7A;
  line-height: 1.65;
}

/* Session banner */
.session-banner {
  background: white;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.08);
  border: 1px solid #E8EAF6;
}

.banner-title {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #1A237E;
}

.banner-text {
  font-size: 15px;
  color: #546E7A;
  line-height: 1.8;
}

.session-feat {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #37474F;
  background: #F3F4F8;
  border-radius: 20px;
  padding: 6px 14px;
}

.session-visual {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 260px;
}

.session-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.session-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13,44,110,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-btn {
  width: 64px;
  height: 64px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.play-btn:hover {
  transform: scale(1.1);
}
</style>
