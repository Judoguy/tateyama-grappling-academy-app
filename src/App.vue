<template>
  <div id="app" class="d-flex flex-column min-vh-100 bg-light text-dark">
    <header class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand text-warning fw-bold fs-3">Tateyama Grappling Academy</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-light" active-class="router-link-exact-active" aria-current="page">{{ $t('navbar.home') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-light" active-class="router-link-exact-active" aria-current="page">{{ $t('navbar.about') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/classes" class="nav-link text-light" active-class="router-link-exact-active" aria-current="page">{{ $t('navbar.classes') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/facilities" class="nav-link text-light" active-class="router-link-exact-active" aria-current="page">{{ $t('navbar.facilities') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/curriculum" class="nav-link text-light" active-class="router-link-exact-active" aria-current="page">{{ $t('navbar.curriculum') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/schedule" class="nav-link text-light" active-class="router-link-exact-active" aria-current="page">{{ $t('navbar.schedule') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link text-light" active-class="router-link-exact-active" aria-current="page">{{ $t('navbar.contact') }}</router-link>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-warning me-2" @click="changeLocale('en')" aria-label="Switch to English language">{{ $t('language_switcher.english') }}</button>
            <button class="btn btn-outline-warning" @click="changeLocale('ja')" aria-label="Switch to Japanese language">{{ $t('language_switcher.japanese') }}</button>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow-1 container mt-4 p-3">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-dark text-light p-3 text-center shadow-inner">
      <p class="mb-0">{{ $t('footer.copyright') }}</p>
      <p class="mb-0 text-muted">{{ $t('footer.design_credit') }}</p>
    </footer>
    <ScrollToTopButton />
  </div>
</template>

<script>
import ScrollToTopButton from './components/ScrollToTopButton.vue';

export default {
  name: 'App',
  components: {
    ScrollToTopButton,
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
}
</script>

<style>
/* Global styles or overrides can go here if necessary */
</style>
