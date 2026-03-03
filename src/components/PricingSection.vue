<template>
  <section id="prijzen" class="pricing-section">
    <v-container style="max-width: 1280px;">
      <div class="text-center mb-12">
        <div class="section-label mb-3">Transparante Prijzen</div>
        <h2 class="section-title mb-4">Kies jouw pakket</h2>
        <p class="section-desc">
          Geen verborgen kosten. Kies het pakket dat bij jouw behoeften past.
          Altijd mogelijk om later te upgraden of te wijzigen.
        </p>

        <!-- Toggle -->
        <div class="billing-toggle mt-6">
          <span :class="{ 'toggle-active': !yearly }">Maandelijks</span>
          <v-switch
            v-model="yearly"
            color="primary"
            hide-details
            class="mx-3"
            style="display: inline-flex;"
          />
          <span :class="{ 'toggle-active': yearly }">
            Jaarlijks
            <v-chip color="success" size="x-small" variant="flat" class="ml-2">-20%</v-chip>
          </span>
        </div>
      </div>

      <v-row justify="center">
        <v-col
          v-for="plan in plans"
          :key="plan.name"
          cols="12"
          sm="10"
          md="4"
          class="mb-4"
        >
          <div
            class="plan-card"
            :class="{ 'plan-featured': plan.featured }"
          >
            <div v-if="plan.featured" class="plan-popular-badge">Meest Populair</div>

            <div class="plan-header">
              <div class="plan-icon-wrap" :style="{ background: plan.featured ? 'rgba(255,255,255,0.15)' : plan.bg }">
                <v-icon :color="plan.featured ? 'white' : plan.color" size="28">{{ plan.icon }}</v-icon>
              </div>
              <div class="plan-name">{{ plan.name }}</div>
              <div class="plan-tagline">{{ plan.tagline }}</div>
              <div class="plan-price-wrap">
                <span class="plan-currency">€</span>
                <span class="plan-price">{{ yearly ? plan.priceYearly : plan.priceMonthly }}</span>
                <span class="plan-per">/maand</span>
              </div>
              <div v-if="yearly" class="plan-save">
                Bespaar € {{ (plan.priceMonthly - plan.priceYearly) * 12 }} per jaar
              </div>
            </div>

            <div class="plan-body">
              <div v-for="feature in plan.features" :key="feature.text" class="plan-feature">
                <v-icon
                  :color="feature.included ? (plan.featured ? 'white' : 'success') : (plan.featured ? 'rgba(255,255,255,0.4)' : 'grey-lighten-1')"
                  size="18"
                >
                  {{ feature.included ? 'mdi-check-circle' : 'mdi-close-circle' }}
                </v-icon>
                <span
                  :style="{ color: feature.included ? (plan.featured ? 'white' : '#37474F') : (plan.featured ? 'rgba(255,255,255,0.5)' : '#BDBDBD') }"
                  class="feature-text"
                >
                  {{ feature.text }}
                </span>
              </div>
            </div>

            <v-btn
              :color="plan.featured ? 'secondary' : 'primary'"
              :variant="plan.featured ? 'flat' : 'outlined'"
              block
              rounded="pill"
              size="large"
              class="plan-cta"
              @click="scrollTo('contact')"
            >
              {{ plan.cta }}
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Guarantee -->
      <div class="guarantee-banner mt-12">
        <div class="d-flex align-center gap-4 flex-wrap justify-center">
          <v-icon color="success" size="36">mdi-shield-check</v-icon>
          <div>
            <div class="guarantee-title">30 Dagen Niet-Goed-Geld-Terug Garantie</div>
            <div class="guarantee-text">
              Niet tevreden? Wij geven je geld terug, geen vragen gesteld. Wij zijn zo zeker van onze kwaliteit.
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const yearly = ref(false)

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect voor incidentele hulp',
    icon: 'mdi-seedling',
    color: '#2E7D32',
    bg: '#E8F5E9',
    featured: false,
    priceMonthly: 39,
    priceYearly: 31,
    cta: 'Begin Gratis',
    features: [
      { text: '4 lessen per maand', included: true },
      { text: 'Keuze uit 1 vak', included: true },
      { text: 'Video & chat', included: true },
      { text: 'Digitaal whiteboard', included: true },
      { text: 'Voortgangsrapport', included: false },
      { text: 'Prioriteit koppeling', included: false },
      { text: 'Onbeperkte vakken', included: false },
    ],
  },
  {
    name: 'Basis',
    tagline: 'Ideaal voor regelmatige begeleiding',
    icon: 'mdi-school',
    color: 'white',
    bg: 'rgba(255,255,255,0.1)',
    featured: true,
    priceMonthly: 79,
    priceYearly: 63,
    cta: 'Kies Basis',
    features: [
      { text: '8 lessen per maand', included: true },
      { text: 'Tot 3 vakken', included: true },
      { text: 'Video & chat', included: true },
      { text: 'Digitaal whiteboard', included: true },
      { text: 'Maandelijks voortgangsrapport', included: true },
      { text: 'Prioriteit koppeling', included: true },
      { text: 'Onbeperkte vakken', included: false },
    ],
  },
  {
    name: 'Intensief',
    tagline: 'Voor wie serieus aan de slag wil',
    icon: 'mdi-rocket-launch',
    color: '#1565C0',
    bg: '#E3F2FD',
    featured: false,
    priceMonthly: 139,
    priceYearly: 111,
    cta: 'Kies Intensief',
    features: [
      { text: 'Onbeperkte lessen', included: true },
      { text: 'Alle vakken onbeperkt', included: true },
      { text: 'Video & chat', included: true },
      { text: 'Digitaal whiteboard', included: true },
      { text: 'Wekelijks voortgangsrapport', included: true },
      { text: 'Prioriteit koppeling', included: true },
      { text: 'Persoonlijk leerplan', included: true },
    ],
  },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.pricing-section {
  background: white;
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
  max-width: 600px;
  margin: 0 auto;
}

.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  color: #78909C;
}

.toggle-active {
  color: #1A237E;
  font-weight: 700;
}

/* Plan cards */
.plan-card {
  background: #FAFAFA;
  border: 2px solid #E8EAF6;
  border-radius: 24px;
  padding: 32px 28px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.plan-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
}

.plan-featured {
  background: linear-gradient(160deg, #1565C0 0%, #0D47A1 100%);
  border-color: transparent;
  box-shadow: 0 20px 60px rgba(21,101,192,0.4);
}

.plan-popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #FFA726;
  color: white;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 18px;
  border-radius: 20px;
}

.plan-header {
  text-align: center;
  margin-bottom: 28px;
}

.plan-icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
}

.plan-name {
  font-size: 22px;
  font-weight: 800;
  color: #1A237E;
  margin-bottom: 4px;
}

.plan-featured .plan-name {
  color: white;
}

.plan-tagline {
  font-size: 13px;
  color: #78909C;
  margin-bottom: 20px;
}

.plan-featured .plan-tagline {
  color: rgba(255,255,255,0.7);
}

.plan-price-wrap {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2px;
  margin-bottom: 4px;
}

.plan-currency {
  font-size: 20px;
  font-weight: 700;
  color: #1A237E;
  line-height: 1.8;
}

.plan-featured .plan-currency {
  color: white;
}

.plan-price {
  font-size: 52px;
  font-weight: 800;
  color: #1A237E;
  line-height: 1;
}

.plan-featured .plan-price {
  color: white;
}

.plan-per {
  font-size: 14px;
  color: #78909C;
  margin-bottom: 8px;
  margin-left: 4px;
}

.plan-featured .plan-per {
  color: rgba(255,255,255,0.6);
}

.plan-save {
  font-size: 12px;
  font-weight: 600;
  color: #4CAF50;
  background: #E8F5E9;
  border-radius: 10px;
  padding: 4px 12px;
  display: inline-block;
  margin-top: 4px;
}

.plan-featured .plan-save {
  background: rgba(255,255,255,0.15);
  color: #81C784;
}

.plan-body {
  flex: 1;
  margin-bottom: 24px;
}

.plan-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.plan-featured .plan-feature {
  border-bottom-color: rgba(255,255,255,0.08);
}

.feature-text {
  font-size: 14px;
  font-weight: 500;
}

.plan-cta {
  font-weight: 700;
  text-transform: none;
  font-size: 15px;
  height: 52px;
}

/* Guarantee */
.guarantee-banner {
  background: #F1F8E9;
  border: 2px solid #A5D6A7;
  border-radius: 20px;
  padding: 32px 40px;
  max-width: 700px;
  margin: 0 auto;
}

.guarantee-title {
  font-size: 18px;
  font-weight: 700;
  color: #2E7D32;
  margin-bottom: 6px;
}

.guarantee-text {
  font-size: 14px;
  color: #546E7A;
  line-height: 1.6;
}
</style>
