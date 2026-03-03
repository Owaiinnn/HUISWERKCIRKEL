<template>
  <section id="over-ons" class="about-section">
    <v-container style="max-width: 1280px;">
      <v-row align="center" :class="['py-8', 'py-md-16']">
        <!-- Left: image collage -->
        <v-col cols="12" md="5" class="mb-8 mb-md-0">
          <div class="about-visual">
            <div class="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
                alt="Online les"
                class="about-img"
              />
            </div>
            <div class="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80"
                alt="Tutor helpt leerling"
                class="about-img"
              />
            </div>
            <div class="exp-badge">
              <div class="exp-number">5+</div>
              <div class="exp-text">Jaar<br>Ervaring</div>
            </div>
          </div>
        </v-col>

        <!-- Right: content -->
        <v-col cols="12" md="7" class="pl-md-12">
          <div class="section-label mb-3">Over Ons</div>
          <h2 class="section-title mb-5">
            Wij geloven in het<br>
            <span class="text-primary">potentieel van elk kind</span>
          </h2>
          <p class="about-text mb-5">
            De Huiswerk Cirkel is opgericht met één doel: ervoor zorgen dat elke leerling de begeleiding krijgt
            die hij of zij verdient. Of het nu gaat om een moeilijk vak, een naderende toets, of simpelweg
            het opbouwen van een gezonde studieroutine — onze tutors staan klaar.
          </p>
          <p class="about-text mb-8">
            Via ons platform koppelen wij leerlingen aan gecertificeerde tutors die niet alleen vakkennis
            bezitten, maar ook de pedagogische vaardigheden hebben om die kennis over te brengen.
            Elke sessie is persoonlijk, interactief en op maat.
          </p>

          <!-- Features -->
          <v-row class="mb-8">
            <v-col v-for="feat in features" :key="feat.title" cols="6" class="mb-4">
              <div class="feature-item">
                <div class="feature-icon-wrap">
                  <v-icon :color="feat.color" size="22">{{ feat.icon }}</v-icon>
                </div>
                <div>
                  <div class="feature-title">{{ feat.title }}</div>
                  <div class="feature-desc">{{ feat.desc }}</div>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-btn
            color="primary"
            size="large"
            variant="flat"
            rounded="pill"
            class="cta-btn"
            @click="scrollTo('contact')"
          >
            Meer Over Ons
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const features = [
  { icon: 'mdi-shield-check', color: 'success', title: 'Gecertificeerde Tutors', desc: 'Alle tutors zijn gescreend en gecertificeerd' },
  { icon: 'mdi-clock-fast', color: 'primary', title: 'Flexibele Planning', desc: 'Plan lessen wanneer het jou uitkomt' },
  { icon: 'mdi-monitor-shimmer', color: 'info', title: 'Interactief Leerplatform', desc: 'Whiteboard, chat en video in één' },
  { icon: 'mdi-chart-line', color: 'warning', title: 'Voortgang Bijhouden', desc: 'Realtime inzicht in verbetering' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.about-section {
  background: #FAFAFA;
  padding: 80px 0;
}

.about-visual {
  position: relative;
  height: 480px;
}

.about-img-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 72%;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.about-img-secondary {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 55%;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 50px rgba(0,0,0,0.12);
  border: 4px solid white;
}

.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.exp-badge {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #1565C0, #0D47A1);
  color: white;
  border-radius: 16px;
  padding: 16px 20px;
  text-align: center;
  box-shadow: 0 12px 35px rgba(21,101,192,0.45);
  z-index: 10;
}

.exp-number {
  font-size: 36px;
  font-weight: 800;
  line-height: 1;
  color: #FFA726;
}

.exp-text {
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.5px;
  color: rgba(255,255,255,0.85);
  margin-top: 4px;
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
  line-height: 1.25;
  color: #1A237E;
}

.about-text {
  font-size: 16px;
  line-height: 1.8;
  color: #546E7A;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.feature-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #F3F4F8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-title {
  font-size: 14px;
  font-weight: 700;
  color: #1A237E;
  margin-bottom: 3px;
}

.feature-desc {
  font-size: 12px;
  color: #78909C;
  line-height: 1.5;
}

.cta-btn {
  font-weight: 600;
  text-transform: none;
  height: 50px;
  padding: 0 28px;
}
</style>
