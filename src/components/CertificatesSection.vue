<template>
  <section id="certificaten" class="certificates-section">
    <v-container style="max-width: 1280px;">
      <div class="text-center mb-12">
        <div class="section-label mb-3">Erkenning & Kwaliteit</div>
        <h2 class="section-title mb-4">Onze Certificaten & Accreditaties</h2>
        <p class="section-desc">
          De Huiswerk Cirkel voldoet aan de hoogste kwaliteitseisen. Wij zijn trots op onze
          erkenningen en certificeringen die onze toewijding aan excellentie bevestigen.
        </p>
      </div>

      <!-- Main certificates -->
      <v-row class="mb-12">
        <v-col
          v-for="cert in mainCertificates"
          :key="cert.title"
          cols="12"
          md="6"
          class="mb-4"
        >
          <div class="cert-card" :style="{ borderLeftColor: cert.accentColor }">
            <div class="cert-ribbon" :style="{ background: cert.accentColor }">
              <v-icon color="white" size="16">{{ cert.ribbonIcon }}</v-icon>
            </div>
            <!-- Certificate design -->
            <div class="cert-inner">
              <div class="cert-header">
                <div class="cert-logo-wrap" :style="{ background: cert.bgColor }">
                  <v-icon :color="cert.accentColor" size="36">{{ cert.icon }}</v-icon>
                </div>
                <div class="cert-org-info">
                  <div class="cert-org">{{ cert.organization }}</div>
                  <div class="cert-type">{{ cert.type }}</div>
                </div>
                <div class="cert-year-badge" :style="{ background: cert.bgColor, color: cert.accentColor }">
                  {{ cert.year }}
                </div>
              </div>

              <div class="cert-divider">
                <div class="cert-divider-line" />
                <div class="cert-seal">
                  <v-icon :color="cert.accentColor" size="20">mdi-seal</v-icon>
                </div>
                <div class="cert-divider-line" />
              </div>

              <div class="cert-body">
                <div class="cert-awarded-to">Dit certificaat wordt verleend aan</div>
                <div class="cert-recipient">De Huiswerk Cirkel</div>
                <div class="cert-title-main">{{ cert.title }}</div>
                <p class="cert-description">{{ cert.description }}</p>
              </div>

              <div class="cert-footer">
                <div class="cert-footer-left">
                  <div class="cert-nr">Certificaatnummer</div>
                  <div class="cert-nr-value">{{ cert.number }}</div>
                </div>
                <div class="cert-stars">
                  <v-icon v-for="i in cert.stars" :key="i" :color="cert.accentColor" size="14">mdi-star</v-icon>
                </div>
                <div class="cert-valid">
                  <div class="cert-nr">Geldig t/m</div>
                  <div class="cert-nr-value">{{ cert.validUntil }}</div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Partner logos -->
      <div class="partners-banner">
        <h3 class="partners-title mb-6">Erkend door & partner van</h3>
        <div class="partners-grid">
          <div v-for="partner in partners" :key="partner.name" class="partner-item">
            <div class="partner-icon-wrap">
              <v-icon :color="partner.color" size="28">{{ partner.icon }}</v-icon>
            </div>
            <div class="partner-name">{{ partner.name }}</div>
          </div>
        </div>
      </div>

      <!-- Tutor certificates -->
      <div class="mt-14">
        <h3 class="text-center section-subtitle mb-8">Onze Tutors zijn Gecertificeerd in</h3>
        <v-row>
          <v-col v-for="tc in tutorCerts" :key="tc.label" cols="6" sm="4" md="2" class="text-center">
            <div class="tutor-cert-item">
              <div class="tutor-cert-icon" :style="{ background: tc.bg }">
                <v-icon :color="tc.color" size="24">{{ tc.icon }}</v-icon>
              </div>
              <div class="tutor-cert-label">{{ tc.label }}</div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const mainCertificates = [
  {
    organization: 'Stichting Kwaliteitszorg Onderwijs',
    type: 'Kwaliteitscertificaat Bijles',
    title: 'Erkend Bijlesinstituut 2024',
    description: 'Erkend als hoogwaardig bijlesinstituut dat voldoet aan alle gestelde kwaliteitsnormen voor effectieve leerlingbegeleiding in Nederland.',
    icon: 'mdi-school',
    ribbonIcon: 'mdi-check-decagram',
    accentColor: '#1565C0',
    bgColor: '#E3F2FD',
    year: '2024',
    number: 'SKO-2024-0847',
    validUntil: 'Dec 2026',
    stars: 5,
  },
  {
    organization: 'ISO Onderwijscertificering',
    type: 'ISO 9001:2015 — Onderwijsdiensten',
    title: 'ISO Gecertificeerd Platform',
    description: 'Ons platform en onze dienstverlening voldoen aan internationale ISO-normen voor kwaliteitsmanagement in onderwijs en e-learning diensten.',
    icon: 'mdi-certificate',
    ribbonIcon: 'mdi-medal',
    accentColor: '#2E7D32',
    bgColor: '#E8F5E9',
    year: '2023',
    number: 'ISO-9001-NL-44219',
    validUntil: 'Mrt 2025',
    stars: 5,
  },
  {
    organization: 'Nationaal Onderwijsinstituut',
    type: 'Veilig Online Leren — Keurmerk',
    title: 'Veilig Online Leeromgeving',
    description: 'Gecertificeerd voor het aanbieden van een veilige, privacybescherming en pedagogisch verantwoorde online leeromgeving voor minderjarigen.',
    icon: 'mdi-shield-check',
    ribbonIcon: 'mdi-lock-check',
    accentColor: '#6A1B9A',
    bgColor: '#F3E5F5',
    year: '2024',
    number: 'NOI-VIOL-2024-1193',
    validUntil: 'Jun 2026',
    stars: 5,
  },
  {
    organization: 'Thuisonderwijs Nederland',
    type: 'Beste Online Bijlesplatform',
    title: 'Award — Platform van het Jaar',
    description: 'Winnaar van de jaarlijkse onderscheiding voor beste online bijlesplatform in Nederland, gekozen door ouders en leerlingen.',
    icon: 'mdi-trophy',
    ribbonIcon: 'mdi-star-circle',
    accentColor: '#E65100',
    bgColor: '#FFF3E0',
    year: '2024',
    number: 'TN-AWARD-2024',
    validUntil: 'Dec 2025',
    stars: 5,
  },
]

const partners = [
  { name: 'Ministerie van Onderwijs', icon: 'mdi-domain', color: '#1565C0' },
  { name: 'HBO Kennisnet', icon: 'mdi-school-outline', color: '#2E7D32' },
  { name: 'Google for Education', icon: 'mdi-google', color: '#E53935' },
  { name: 'Stichting Leerplan', icon: 'mdi-book-open-variant', color: '#F57C00' },
  { name: 'NRTO', icon: 'mdi-certificate-outline', color: '#6A1B9A' },
  { name: 'VO-raad', icon: 'mdi-account-group', color: '#0277BD' },
]

const tutorCerts = [
  { label: 'Didactisch Bekwaam', icon: 'mdi-head-check', color: '#1565C0', bg: '#E3F2FD' },
  { label: 'Pedagogisch Getraind', icon: 'mdi-heart-outline', color: '#2E7D32', bg: '#E8F5E9' },
  { label: 'VOG Gescreend', icon: 'mdi-shield-account', color: '#6A1B9A', bg: '#F3E5F5' },
  { label: 'Vak Specialist', icon: 'mdi-star-circle', color: '#E65100', bg: '#FFF3E0' },
  { label: 'Online Gecertificeerd', icon: 'mdi-monitor-check', color: '#0277BD', bg: '#E1F5FE' },
  { label: 'Continu Bijgeschoold', icon: 'mdi-refresh-circle', color: '#C62828', bg: '#FFEBEE' },
]
</script>

<style scoped>
.certificates-section {
  background: #FAFAFA;
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

.section-subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: #1A237E;
}

.section-desc {
  font-size: 17px;
  color: #546E7A;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

/* Certificate card */
.cert-card {
  background: white;
  border-radius: 20px;
  border: 1px solid #E0E0E0;
  border-left: 5px solid;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
}

.cert-ribbon {
  position: absolute;
  top: 20px;
  right: -24px;
  width: 80px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
  transform-origin: center;
}

.cert-inner {
  padding: 28px;
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.cert-logo-wrap {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cert-org-info {
  flex: 1;
}

.cert-org {
  font-size: 13px;
  font-weight: 700;
  color: #37474F;
}

.cert-type {
  font-size: 11px;
  color: #78909C;
  font-weight: 500;
  margin-top: 2px;
}

.cert-year-badge {
  font-size: 13px;
  font-weight: 800;
  padding: 6px 14px;
  border-radius: 20px;
}

.cert-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px 0;
}

.cert-divider-line {
  flex: 1;
  height: 1px;
  background: repeating-linear-gradient(90deg, #E0E0E0 0, #E0E0E0 4px, transparent 4px, transparent 8px);
}

.cert-seal {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-body {
  text-align: center;
  margin-bottom: 16px;
}

.cert-awarded-to {
  font-size: 11px;
  color: #90A4AE;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-bottom: 4px;
}

.cert-recipient {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #1A237E;
  margin-bottom: 6px;
}

.cert-title-main {
  font-size: 14px;
  font-weight: 700;
  color: #37474F;
  margin-bottom: 10px;
}

.cert-description {
  font-size: 12px;
  color: #78909C;
  line-height: 1.65;
}

.cert-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid #F5F5F5;
}

.cert-nr {
  font-size: 9px;
  color: #90A4AE;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.cert-nr-value {
  font-size: 12px;
  font-weight: 700;
  color: #546E7A;
  font-family: 'Courier New', monospace;
}

.cert-stars {
  display: flex;
  gap: 2px;
}

/* Partners */
.partners-banner {
  background: white;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid #E8EAF6;
  text-align: center;
}

.partners-title {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: #1A237E;
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.partner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid #E8EAF6;
  min-width: 140px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.partner-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.partner-icon-wrap {
  width: 52px;
  height: 52px;
  background: #F3F4F8;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-name {
  font-size: 12px;
  font-weight: 600;
  color: #546E7A;
  text-align: center;
  line-height: 1.4;
}

/* Tutor certs */
.tutor-cert-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 10px;
}

.tutor-cert-icon {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tutor-cert-label {
  font-size: 12px;
  font-weight: 600;
  color: #37474F;
  line-height: 1.4;
}
</style>
