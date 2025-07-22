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
              <router-link to="/" class="nav-link text-light">{{ $t('navbar.home') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-light">{{ $t('navbar.about') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/classes" class="nav-link text-light">{{ $t('navbar.classes') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/curriculum" class="nav-link text-light">{{ $t('navbar.curriculum') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/schedule" class="nav-link text-light">{{ $t('navbar.schedule') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/facilities" class="nav-link text-light">{{ $t('navbar.facilities') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link text-light">{{ $t('navbar.contact') }}</router-link>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-warning me-2" @click="changeLocale('en')">{{ $t('language_switcher.english') }}</button>
            <button class="btn btn-outline-warning" @click="changeLocale('ja')">{{ $t('language_switcher.japanese') }}</button>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow-1 container mt-4 p-3">
      <router-view/>
    </main>

    <footer class="bg-dark text-light p-3 text-center shadow-inner">
      <p class="mb-0">{{ $t('footer.copyright') }}</p>
      <p class="mb-0 text-muted">{{ $t('footer.design_credit') }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
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
