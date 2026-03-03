<template>
  <footer class="site-footer">
    <div class="footer-top">
      <v-container style="max-width: 1280px;">
        <v-row>
          <!-- Brand column -->
          <v-col cols="12" md="4" class="mb-8 mb-md-0">
            <div class="d-flex align-center mb-5">
              <div class="footer-logo-icon mr-3">
                <v-icon color="white" size="24">mdi-book-open-variant</v-icon>
              </div>
              <div>
                <div class="footer-brand">De Huiswerk Cirkel</div>
                <div class="footer-sub">Online Bijles Begeleiding</div>
              </div>
            </div>
            <p class="footer-desc">
              Wij geloven dat elk kind recht heeft op kwalitatieve begeleiding.
              Professioneel, persoonlijk en betaalbaar — altijd en overal.
            </p>
            <div class="d-flex gap-3 mt-6">
              <div v-for="social in socials" :key="social.name">
                <v-btn
                  :icon="social.icon"
                  size="36"
                  variant="outlined"
                  style="border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);"
                  :title="social.name"
                />
              </div>
            </div>
          </v-col>

          <!-- Links columns -->
          <v-col cols="6" md="2" offset-md="1" class="mb-6 mb-md-0">
            <div class="footer-link-title">Platform</div>
            <div v-for="link in platformLinks" :key="link" class="footer-link">{{ link }}</div>
          </v-col>

          <v-col cols="6" md="2" class="mb-6 mb-md-0">
            <div class="footer-link-title">Vakken</div>
            <div v-for="link in subjectLinks" :key="link" class="footer-link">{{ link }}</div>
          </v-col>

          <v-col cols="12" md="3">
            <div class="footer-link-title">Nieuwsbrief</div>
            <p class="footer-desc mb-4">Ontvang gratis studietips en aanbiedingen.</p>
            <div class="newsletter-form">
              <v-text-field
                v-model="email"
                placeholder="jouw@email.nl"
                variant="outlined"
                density="compact"
                hide-details
                rounded="pill"
                style="background: rgba(255,255,255,0.08);"
                class="newsletter-input"
              >
                <template #append-inner>
                  <v-btn
                    color="secondary"
                    size="small"
                    variant="flat"
                    rounded="pill"
                    icon
                    @click="subscribe"
                  >
                    <v-icon size="16">mdi-send</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </div>
            <div v-if="subscribed" class="newsletter-success mt-2">
              <v-icon size="16" color="success">mdi-check-circle</v-icon>
              Bedankt voor je aanmelding!
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="footer-bottom">
      <v-container style="max-width: 1280px;">
        <div class="d-flex flex-wrap align-center justify-space-between gap-4">
          <div class="footer-copy">
            © {{ new Date().getFullYear() }} De Huiswerk Cirkel. Alle rechten voorbehouden.
          </div>
          <div class="d-flex gap-4 flex-wrap">
            <span class="footer-legal">Privacybeleid</span>
            <span class="footer-legal">Algemene Voorwaarden</span>
            <span class="footer-legal">Cookiebeleid</span>
          </div>
          <div class="d-flex align-center gap-2">
            <v-icon size="14" color="success">mdi-circle</v-icon>
            <span class="footer-status">Alle systemen operationeel</span>
          </div>
        </div>
      </v-container>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

function subscribe() {
  if (email.value.includes('@')) {
    subscribed.value = true
    email.value = ''
  }
}

const socials = [
  { name: 'Instagram', icon: 'mdi-instagram' },
  { name: 'Facebook', icon: 'mdi-facebook' },
  { name: 'LinkedIn', icon: 'mdi-linkedin' },
]

const platformLinks = ['Over Ons', 'Hoe Het Werkt', 'Prijzen', 'Tutors Worden', 'Blog', 'FAQ']
const subjectLinks = ['Wiskunde', 'Nederlands', 'Engels', 'Natuurkunde', 'Scheikunde', 'Biologie']
</script>

<style scoped>
.site-footer {
  background: #0D1B40;
}

.footer-top {
  padding: 72px 0 48px;
}

.footer-logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #1565C0, #0D47A1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-brand {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.footer-sub {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
}

.footer-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
}

.footer-link-title {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
}

.footer-link {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.2s;
}

.footer-link:hover {
  color: rgba(255,255,255,0.85);
}

.newsletter-input :deep(.v-field) {
  color: white;
}

.newsletter-input :deep(input::placeholder) {
  color: rgba(255,255,255,0.4);
}

.newsletter-input :deep(.v-field__outline) {
  color: rgba(255,255,255,0.2);
}

.newsletter-success {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #81C784;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 20px 0;
}

.footer-copy {
  font-size: 13px;
  color: rgba(255,255,255,0.4);
}

.footer-legal {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  cursor: pointer;
  transition: color 0.2s;
}

.footer-legal:hover {
  color: rgba(255,255,255,0.75);
}

.footer-status {
  font-size: 12px;
  color: rgba(255,255,255,0.4);
}
</style>
