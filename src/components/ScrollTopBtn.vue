<template>
  <Transition name="fade-up">
    <v-btn
      v-if="visible"
      icon
      color="primary"
      size="44"
      variant="flat"
      class="scroll-top-btn"
      @click="scrollTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  box-shadow: 0 6px 20px rgba(21,101,192,0.4);
  border-radius: 14px !important;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.35s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
