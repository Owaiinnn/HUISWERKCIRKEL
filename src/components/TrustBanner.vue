<template>
  <section class="trust-banner">
    <v-container style="max-width: 1280px;">
      <div class="trust-inner">
        <div class="trust-label">Vertrouwd door meer dan 2.400 leerlingen</div>
        <div class="trust-logos">
          <div v-for="item in trustItems" :key="item.text" class="trust-item">
            <v-icon :color="item.color" size="20" class="mr-2">{{ item.icon }}</v-icon>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const trustItems = [
  { icon: 'mdi-shield-check', color: '#2E7D32', text: 'ISO Gecertificeerd' },
  { icon: 'mdi-star', color: '#FFA726', text: '4.9 Beoordeling' },
  { icon: 'mdi-account-group', color: '#1565C0', text: '120+ Tutors' },
  { icon: 'mdi-clock-fast', color: '#6A1B9A', text: 'Binnen 24u Gekoppeld' },
  { icon: 'mdi-lock', color: '#C62828', text: 'AVG Compliant' },
  { icon: 'mdi-cash-refund', color: '#2E7D32', text: '30 Dagen Garantie' },
]
</script>

<style scoped>
.trust-banner {
  background: white;
  border-bottom: 1px solid #F0F0F0;
  padding: 20px 0;
}

.trust-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
}

.trust-label {
  font-size: 13px;
  font-weight: 700;
  color: #78909C;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
}

.trust-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.trust-item {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #37474F;
  background: #F3F4F8;
  border-radius: 20px;
  padding: 7px 16px;
  white-space: nowrap;
}
</style>
