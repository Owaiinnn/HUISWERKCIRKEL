<template>
  <section id="contact" class="contact-section">
    <v-container style="max-width: 1280px;">
      <v-row align="center">
        <!-- Left: info -->
        <v-col cols="12" md="5" class="mb-8 mb-md-0">
          <div class="section-label mb-3">Contact</div>
          <h2 class="section-title mb-5">
            Start vandaag nog met<br>
            <span class="text-primary">jouw gratis proefles</span>
          </h2>
          <p class="contact-text mb-8">
            Vul het formulier in en wij koppelen jou binnen 24 uur aan de perfecte tutor.
            De eerste les is altijd gratis — zonder verplichtingen.
          </p>

          <div class="contact-info-items">
            <div v-for="info in contactInfo" :key="info.label" class="contact-info-item">
              <div class="info-icon-wrap">
                <v-icon color="primary" size="20">{{ info.icon }}</v-icon>
              </div>
              <div>
                <div class="info-label">{{ info.label }}</div>
                <div class="info-value">{{ info.value }}</div>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="social-row mt-8">
            <div class="social-label mb-3">Volg ons</div>
            <div class="d-flex gap-3">
              <v-btn
                v-for="social in socials"
                :key="social.name"
                :color="social.color"
                icon
                size="42"
                variant="flat"
                class="social-btn"
              >
                <v-icon size="20">{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>

        <!-- Right: form -->
        <v-col cols="12" md="7">
          <div class="contact-form-card">
            <div class="form-header mb-6">
              <h3 class="form-title">Gratis Proefles Aanvragen</h3>
              <p class="form-subtitle">Wij reageren binnen 24 uur op je aanvraag</p>
            </div>

            <v-form ref="formRef" @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.firstName"
                    label="Voornaam"
                    variant="outlined"
                    rounded="lg"
                    density="comfortable"
                    :rules="[rules.required]"
                    prepend-inner-icon="mdi-account-outline"
                    class="form-field"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.lastName"
                    label="Achternaam"
                    variant="outlined"
                    rounded="lg"
                    density="comfortable"
                    :rules="[rules.required]"
                    prepend-inner-icon="mdi-account-outline"
                    class="form-field"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    label="E-mailadres"
                    type="email"
                    variant="outlined"
                    rounded="lg"
                    density="comfortable"
                    :rules="[rules.required, rules.email]"
                    prepend-inner-icon="mdi-email-outline"
                    class="form-field"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.phone"
                    label="Telefoonnummer"
                    variant="outlined"
                    rounded="lg"
                    density="comfortable"
                    prepend-inner-icon="mdi-phone-outline"
                    class="form-field"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="form.level"
                    label="Schoolniveau"
                    :items="levels"
                    variant="outlined"
                    rounded="lg"
                    density="comfortable"
                    :rules="[rules.required]"
                    prepend-inner-icon="mdi-school-outline"
                    class="form-field"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="form.subject"
                    label="Vak"
                    :items="subjects"
                    variant="outlined"
                    rounded="lg"
                    density="comfortable"
                    :rules="[rules.required]"
                    prepend-inner-icon="mdi-book-outline"
                    class="form-field"
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    label="Vertel ons meer (optioneel)"
                    variant="outlined"
                    rounded="lg"
                    density="comfortable"
                    rows="3"
                    prepend-inner-icon="mdi-message-outline"
                    class="form-field"
                    placeholder="Wat zijn de specifieke moeilijkheden? Welke toets of tentamen staat er aan te komen?"
                  />
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                    v-model="form.agree"
                    :rules="[rules.required]"
                    color="primary"
                  >
                    <template #label>
                      <span class="checkbox-label">
                        Ik ga akkoord met de
                        <a href="#" class="text-primary">privacyverklaring</a>
                        en
                        <a href="#" class="text-primary">algemene voorwaarden</a>
                      </span>
                    </template>
                  </v-checkbox>
                </v-col>
              </v-row>

              <v-btn
                type="submit"
                color="primary"
                size="x-large"
                block
                rounded="pill"
                variant="flat"
                :loading="loading"
                class="submit-btn"
              >
                <v-icon start>mdi-rocket-launch</v-icon>
                Gratis Proefles Aanvragen
              </v-btn>
            </v-form>

            <!-- Success message -->
            <v-alert
              v-if="submitted"
              type="success"
              variant="tonal"
              rounded="xl"
              class="mt-6"
              prominent
            >
              <strong>Aanvraag ontvangen!</strong> Wij nemen binnen 24 uur contact met je op om de gratis proefles in te plannen.
            </v-alert>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formRef = ref(null)
const loading = ref(false)
const submitted = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  level: null,
  subject: null,
  message: '',
  agree: false,
})

const rules = {
  required: (v) => !!v || 'Dit veld is verplicht',
  email: (v) => /.+@.+\..+/.test(v) || 'Voer een geldig e-mailadres in',
}

const levels = ['Basisschool', 'VMBO', 'HAVO', 'VWO', 'Gymnasium', 'MBO', 'HBO', 'Universiteit']
const subjects = ['Wiskunde', 'Nederlands', 'Engels', 'Duits', 'Frans', 'Natuurkunde', 'Scheikunde', 'Biologie', 'Economie', 'Geschiedenis', 'Aardrijkskunde', 'Anders']

const contactInfo = [
  { icon: 'mdi-phone', label: 'Telefoon', value: '+31 (0)20 123 4567' },
  { icon: 'mdi-email', label: 'E-mail', value: 'info@huiswerkcirkel.nl' },
  { icon: 'mdi-map-marker', label: 'Adres', value: 'Herengracht 182, 1016 BR Amsterdam' },
  { icon: 'mdi-clock-outline', label: 'Bereikbaar', value: 'Ma-Vr: 09:00 – 20:00 | Za: 10:00 – 17:00' },
]

const socials = [
  { name: 'Instagram', icon: 'mdi-instagram', color: '#E1306C' },
  { name: 'Facebook', icon: 'mdi-facebook', color: '#1877F2' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', color: '#0A66C2' },
  { name: 'TikTok', icon: 'mdi-music-note', color: '#000000' },
]

async function submitForm() {
  const { valid } = await formRef.value.validate()
  if (!valid) return
  loading.value = true
  await new Promise((r) => setTimeout(r, 1500))
  loading.value = false
  submitted.value = true
  formRef.value.reset()
}
</script>

<style scoped>
.contact-section {
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
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 700;
  color: #1A237E;
  line-height: 1.3;
}

.contact-text {
  font-size: 16px;
  color: #546E7A;
  line-height: 1.8;
}

.contact-info-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.info-icon-wrap {
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  flex-shrink: 0;
}

.info-label {
  font-size: 11px;
  color: #90A4AE;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 2px;
}

.info-value {
  font-size: 14px;
  font-weight: 600;
  color: #37474F;
}

.social-label {
  font-size: 12px;
  font-weight: 600;
  color: #78909C;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.social-btn {
  border-radius: 12px !important;
}

/* Form card */
.contact-form-card {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.08);
  border: 1px solid #E8EAF6;
}

.form-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #1A237E;
  margin-bottom: 4px;
}

.form-subtitle {
  font-size: 14px;
  color: #78909C;
}

.form-field :deep(.v-field) {
  border-radius: 14px !important;
}

.checkbox-label {
  font-size: 13px;
  color: #546E7A;
}

.submit-btn {
  font-weight: 700;
  font-size: 16px;
  text-transform: none;
  height: 56px;
  box-shadow: 0 8px 24px rgba(21,101,192,0.35);
}
</style>
