<template>
  <div class="home-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('home.welcome') }}</h1>
    <p class="lead text-secondary mb-5">{{ $t('home.tagline') }}</p>
    
    <div class="jumbotron jumbotron-fluid bg-cover bg-center rounded mb-5" :style="heroImageStyle">
      <div class="d-flex align-items-center justify-content-center h-100 bg-dark bg-opacity-75 rounded">
        <h2 class="text-white display-3 fw-bold text-center">{{ $t('home.hero_slogan') }}</h2>
      </div>
    </div>

    <div class="row g-4 text-start">
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning">
          <h3 class="h4 fw-bold mb-3 text-dark">{{ $t('home.philosophy_title') }}</h3>
          <p class="text-muted">{{ $t('home.philosophy_text') }}</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning">
          <h3 class="h4 fw-bold mb-3 text-dark">{{ $t('home.community_title') }}</h3>
          <p class="text-muted">{{ $t('home.community_text') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dojoHero from '../assets/dojo-hero.png';

export default {
  name: 'HomePage',
  data() {
    return {
      dojoHero: dojoHero
    }
  },
  computed: {
    heroImageStyle() {
      return {
        'background-image': `url(${this.dojoHero})`,
        height: '400px'
      };
    }
  }
}
</script>
