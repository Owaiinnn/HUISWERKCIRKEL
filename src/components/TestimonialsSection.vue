<template>
  <section class="testimonials-section">
    <!-- Background gradient -->
    <div class="testimonials-bg" />

    <v-container style="max-width: 1280px; position: relative; z-index: 2;">
      <div class="text-center mb-12">
        <div class="section-label mb-3">Ervaringen</div>
        <h2 class="section-title mb-4">Wat ouders & leerlingen zeggen</h2>
        <p class="section-desc">
          Meer dan 2.400 leerlingen gingen je voor. Lees hun verhalen.
        </p>
      </div>

      <!-- Featured testimonial -->
      <div class="featured-testimonial mb-10">
        <div class="quote-mark">"</div>
        <p class="featured-quote">
          Mijn dochter haalde een 4 voor wiskunde en stond op het punt te zakken.
          Na 8 weken begeleiding bij De Huiswerk Cirkel scoorde ze een 8 op haar toets.
          De tutor was geduldig, enthousiast en wist precies hoe hij haar moest motiveren.
          Dit platform heeft haar schooljaar gered!
        </p>
        <div class="featured-author">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&fit=crop"
            class="featured-avatar"
            alt="Marieke"
          />
          <div>
            <div class="featured-name">Marieke van den Berg</div>
            <div class="featured-role">Moeder van Emma (VWO-4)</div>
            <div class="stars-row mt-1">
              <v-icon v-for="i in 5" :key="i" color="warning" size="16">mdi-star</v-icon>
            </div>
          </div>
        </div>
      </div>

      <!-- Review cards -->
      <v-row>
        <v-col
          v-for="review in reviews"
          :key="review.name"
          cols="12"
          sm="6"
          md="4"
          class="mb-4"
        >
          <div class="review-card">
            <div class="d-flex align-center justify-space-between mb-3">
              <div class="stars-row">
                <v-icon v-for="i in review.stars" :key="i" color="warning" size="14">mdi-star</v-icon>
              </div>
              <div class="review-date">{{ review.date }}</div>
            </div>
            <p class="review-text mb-4">{{ review.text }}</p>
            <div class="d-flex align-center gap-3">
              <img :src="review.avatar" :alt="review.name" class="review-avatar" />
              <div>
                <div class="review-name">{{ review.name }}</div>
                <div class="review-role">{{ review.role }}</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Stats -->
      <div class="trust-stats mt-12">
        <div v-for="stat in trustStats" :key="stat.label" class="trust-stat-item">
          <div class="trust-stat-icon">
            <v-icon color="white" size="22">{{ stat.icon }}</v-icon>
          </div>
          <div class="trust-stat-value">{{ stat.value }}</div>
          <div class="trust-stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Pieter Jansen',
    role: 'Vader van Sven (HAVO-3)',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop',
    text: 'Sven had moeite met Engels maar na een paar sessies begon hij echt te stralen. De tutor weet precies hoe hij tieners moet aanspreken.',
    stars: 5,
    date: 'Jan 2025',
  },
  {
    name: 'Fatima El Amrani',
    role: 'Leerling VMBO-TL',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80&fit=crop',
    text: 'Ik was bang voor wiskunde maar mijn tutor legde alles zo rustig uit. Nu snap ik het echt! Mijn cijfer ging van een 5 naar een 7.',
    stars: 5,
    date: 'Feb 2025',
  },
  {
    name: 'Thomas de Vries',
    role: 'Vader van Lisa (VWO-5)',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80&fit=crop',
    text: 'Heel tevreden over de begeleiding. Lisa heeft eindexamen gehad en is geslaagd mede dankzij de geweldige ondersteuning.',
    stars: 5,
    date: 'Jun 2024',
  },
  {
    name: 'Sophie Bakker',
    role: 'Leerling VWO-4',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&q=80&fit=crop',
    text: 'Super fijn platform. Ik kon zelf mijn tijden kiezen en mijn tutor was altijd goed voorbereid. Echt aanrader!',
    stars: 5,
    date: 'Mrt 2025',
  },
  {
    name: 'Ahmed Khalil',
    role: 'Leerling Gymnasium-6',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop',
    text: 'Voor mijn eindexamen heb ik intensieve bijles gehad voor scheikunde en wiskunde. Met beide vakken een ruime voldoende gehaald.',
    stars: 5,
    date: 'Mei 2024',
  },
  {
    name: 'Linda Smits',
    role: 'Moeder van Daan (Basis)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&fit=crop',
    text: 'Daan had moeite met lezen op de basisschool. Nu leest hij met plezier! De tutors hebben echt geduld en zijn kindgericht.',
    stars: 4,
    date: 'Dec 2024',
  },
]

const trustStats = [
  { icon: 'mdi-account-group', value: '2.400+', label: 'Tevreden Leerlingen' },
  { icon: 'mdi-star', value: '4.9/5', label: 'Gemiddelde Score' },
  { icon: 'mdi-account-tie', value: '120+', label: 'Gecertificeerde Tutors' },
  { icon: 'mdi-book-check', value: '15.000+', label: 'Lessen Gegeven' },
]
</script>

<style scoped>
.testimonials-section {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
}

.testimonials-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #1A237E 0%, #1565C0 50%, #0D47A1 100%);
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
  color: white;
}

.section-desc {
  font-size: 17px;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
}

/* Featured testimonial */
.featured-testimonial {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 24px;
  padding: 48px;
  position: relative;
}

.quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 120px;
  line-height: 0.5;
  color: #FFA726;
  opacity: 0.4;
  position: absolute;
  top: 30px;
  left: 40px;
}

.featured-quote {
  font-size: 20px;
  color: white;
  line-height: 1.75;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 28px;
  padding-left: 20px;
}

.featured-author {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 20px;
}

.featured-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255,255,255,0.3);
}

.featured-name {
  font-size: 16px;
  font-weight: 700;
  color: white;
}

.featured-role {
  font-size: 13px;
  color: rgba(255,255,255,0.7);
}

.stars-row {
  display: flex;
  gap: 2px;
}

/* Review cards */
.review-card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  height: 100%;
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-4px);
}

.review-date {
  font-size: 11px;
  color: #90A4AE;
  font-weight: 500;
}

.review-text {
  font-size: 14px;
  color: #37474F;
  line-height: 1.7;
}

.review-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.review-name {
  font-size: 14px;
  font-weight: 700;
  color: #1A237E;
}

.review-role {
  font-size: 12px;
  color: #78909C;
}

/* Trust stats */
.trust-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.trust-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 36px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px;
  min-width: 180px;
  backdrop-filter: blur(10px);
}

.trust-stat-icon {
  width: 48px;
  height: 48px;
  background: rgba(255,167,38,0.25);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-stat-value {
  font-size: 28px;
  font-weight: 800;
  color: #FFA726;
  line-height: 1;
}

.trust-stat-label {
  font-size: 12px;
  color: rgba(255,255,255,0.75);
  font-weight: 500;
  text-align: center;
}
</style>
