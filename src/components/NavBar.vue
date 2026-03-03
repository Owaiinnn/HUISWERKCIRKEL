<template>
  <v-app-bar
    :elevation="scrolled ? 4 : 0"
    :color="scrolled ? 'white' : 'transparent'"
    :style="scrolled ? '' : 'backdrop-filter: none;'"
    class="nav-bar"
    height="72"
    :class="{ 'nav-scrolled': scrolled }"
  >
    <v-container class="d-flex align-center pa-0" style="max-width: 1280px;">
      <div class="d-flex align-center logo-wrap" @click="scrollTo('home')" style="cursor: pointer;">
        <div class="logo-icon mr-3">
          <v-icon color="white" size="26">mdi-book-open-variant</v-icon>
        </div>
        <div>
          <div class="logo-text" :style="{ color: scrolled ? '#1565C0' : 'white' }">De Huiswerk Cirkel</div>
          <div class="logo-sub" :style="{ color: scrolled ? '#546E7A' : 'rgba(255,255,255,0.8)' }">Online Begeleiding</div>
        </div>
      </div>

      <v-spacer />

      <div class="nav-links d-none d-md-flex align-center">
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          variant="text"
          class="nav-btn mx-1"
          :style="{ color: scrolled ? '#37474F' : 'white' }"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </v-btn>
        <v-btn
          class="ml-3 cta-btn"
          color="secondary"
          variant="flat"
          rounded="pill"
          elevation="0"
          @click="scrollTo('contact')"
        >
          Gratis Proefles
        </v-btn>
      </div>

      <v-app-bar-nav-icon
        class="d-md-none"
        :color="scrolled ? 'primary' : 'white'"
        @click="drawer = true"
      />
    </v-container>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right" width="280">
    <div class="pa-6">
      <div class="d-flex align-center mb-8">
        <div class="logo-icon mr-3">
          <v-icon color="white" size="22">mdi-book-open-variant</v-icon>
        </div>
        <div>
          <div class="logo-text" style="color: #1565C0; font-size: 14px;">De Huiswerk Cirkel</div>
        </div>
      </div>
      <v-list nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          :title="item.label"
          :prepend-icon="item.icon"
          rounded="lg"
          class="mb-1"
          @click="scrollTo(item.id); drawer = false"
        />
      </v-list>
      <v-btn
        block
        color="secondary"
        variant="flat"
        rounded="pill"
        class="mt-6"
        @click="scrollTo('contact'); drawer = false"
      >
        Gratis Proefles Aanvragen
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const drawer = ref(false)

const navItems = [
  { id: 'over-ons', label: 'Over Ons', icon: 'mdi-information-outline' },
  { id: 'vakken', label: 'Vakken', icon: 'mdi-book-multiple-outline' },
  { id: 'werkwijze', label: 'Werkwijze', icon: 'mdi-clipboard-list-outline' },
  { id: 'certificaten', label: 'Certificaten', icon: 'mdi-certificate-outline' },
  { id: 'prijzen', label: 'Prijzen', icon: 'mdi-tag-outline' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav-bar {
  transition: all 0.35s ease;
}

.nav-scrolled {
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.logo-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, #1565C0, #0D47A1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(21,101,192,0.35);
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  transition: color 0.3s;
}

.logo-sub {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  transition: color 0.3s;
}

.nav-btn {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
  transition: color 0.3s;
}

.nav-btn:hover {
  opacity: 0.8;
}

.cta-btn {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: none;
}
</style>
