<template>
  <section id="vakken" class="subjects-section">
    <v-container style="max-width: 1280px;">
      <div class="text-center mb-12">
        <div class="section-label mb-3">Ons Aanbod</div>
        <h2 class="section-title mb-4">Begeleiding in alle vakken</h2>
        <p class="section-desc">
          Van basisschool tot universiteit — wij dekken alle vakken en niveaus.<br>
          Onze tutors zijn gespecialiseerd in hun vakgebied.
        </p>
      </div>

      <v-row>
        <v-col
          v-for="subject in subjects"
          :key="subject.name"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-4"
        >
          <v-card
            class="subject-card h-100"
            :elevation="0"
            rounded="xl"
            @mouseenter="hoveredCard = subject.name"
            @mouseleave="hoveredCard = null"
            :class="{ 'card-hovered': hoveredCard === subject.name }"
          >
            <div class="card-top" :style="{ background: subject.gradient }">
              <div class="card-icon-wrap">
                <v-icon size="32" color="white">{{ subject.icon }}</v-icon>
              </div>
            </div>
            <v-card-text class="pa-5">
              <h3 class="subject-name mb-2">{{ subject.name }}</h3>
              <p class="subject-desc mb-4">{{ subject.desc }}</p>
              <div class="levels-wrap">
                <v-chip
                  v-for="level in subject.levels"
                  :key="level"
                  size="x-small"
                  variant="tonal"
                  :color="subject.chipColor"
                  class="mr-1 mb-1"
                >
                  {{ level }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Bottom CTA -->
      <div class="text-center mt-10">
        <p class="other-subjects mb-4">Jouw vak er niet bij? Vraag naar de mogelijkheden!</p>
        <v-btn
          color="primary"
          size="large"
          variant="flat"
          rounded="pill"
          class="cta-btn"
          @click="scrollTo('contact')"
        >
          Neem Contact Op
          <v-icon end>mdi-message-outline</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const hoveredCard = ref(null)

const subjects = [
  {
    name: 'Wiskunde',
    icon: 'mdi-calculator-variant',
    desc: 'Van breuken tot integraalrekening. Stap voor stap naar inzicht.',
    levels: ['Basis', 'VMBO', 'HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #1565C0, #1976D2)',
    chipColor: 'primary',
  },
  {
    name: 'Nederlands',
    icon: 'mdi-book-alphabet',
    desc: 'Spelling, grammatica, begrijpend lezen en schrijfvaardigheid.',
    levels: ['Basis', 'VMBO', 'HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #C62828, #E53935)',
    chipColor: 'error',
  },
  {
    name: 'Engels',
    icon: 'mdi-translate',
    desc: 'Spreken, lezen, schrijven en grammatica in het Engels.',
    levels: ['Basis', 'VMBO', 'HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #2E7D32, #43A047)',
    chipColor: 'success',
  },
  {
    name: 'Natuurkunde',
    icon: 'mdi-atom',
    desc: 'Mechanica, elektriciteit, licht en alle andere onderwerpen.',
    levels: ['HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #6A1B9A, #8E24AA)',
    chipColor: 'deep-purple',
  },
  {
    name: 'Scheikunde',
    icon: 'mdi-flask',
    desc: 'Atoomstructuur, reactievergelijkingen en meer.',
    levels: ['HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #00695C, #00897B)',
    chipColor: 'teal',
  },
  {
    name: 'Biologie',
    icon: 'mdi-leaf',
    desc: 'Van cellen tot ecosystemen — wij maken het begrijpelijk.',
    levels: ['VMBO', 'HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #33691E, #558B2F)',
    chipColor: 'light-green-darken-3',
  },
  {
    name: 'Economie',
    icon: 'mdi-chart-line',
    desc: 'Micro- en macro-economie, bedrijfseconomie en meer.',
    levels: ['VMBO', 'HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #E65100, #F57C00)',
    chipColor: 'warning',
  },
  {
    name: 'Geschiedenis',
    icon: 'mdi-castle',
    desc: 'Van prehistorie tot heden — alles in context geplaatst.',
    levels: ['Basis', 'VMBO', 'HAVO', 'VWO'],
    gradient: 'linear-gradient(135deg, #4A148C, #6A1B9A)',
    chipColor: 'purple',
  },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.subjects-section {
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
}

.subject-card {
  border: 1px solid #E8EAF6;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.card-hovered {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(21,101,192,0.15) !important;
  border-color: #BBDEFB;
}

.card-top {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon-wrap {
  width: 60px;
  height: 60px;
  background: rgba(255,255,255,0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subject-name {
  font-size: 17px;
  font-weight: 700;
  color: #1A237E;
}

.subject-desc {
  font-size: 13px;
  color: #546E7A;
  line-height: 1.65;
}

.other-subjects {
  font-size: 16px;
  color: #546E7A;
}

.cta-btn {
  font-weight: 600;
  text-transform: none;
  height: 50px;
  padding: 0 28px;
}
</style>
