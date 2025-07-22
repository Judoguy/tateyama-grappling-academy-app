<template>
  <div class="about-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('about.title') }}</h1>
    <p class="lead text-secondary" style="margin-bottom: var(--spacing-xxl);">{{ $t('about.tagline') }}</p>

    <div class="row g-4" style="margin-bottom: var(--spacing-xxl);">
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('about.philosophy_title') }}</h2>
          <p class="text-muted mb-3">{{ $t('about.philosophy_text_1') }}</p>
          <p class="text-muted">{{ $t('about.philosophy_text_2') }}</p>
        </div>
      </div>
      <div class="col-md-6">
        <img :src="philosophyImage" alt="Our Philosophy" class="img-fluid rounded shadow-sm" loading="lazy">
      </div>
    </div>

    <div class="row g-4" style="margin-bottom: var(--spacing-xxl);">
      <div class="col-md-6">
        <img :src="instructorImage" alt="Our Instructors" class="img-fluid rounded shadow-sm" loading="lazy">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-end border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('about.instructors_title') }}</h2>
          <p class="text-muted mb-3">{{ $t('about.instructors_text_1') }}</p>
          <p class="text-muted mb-3">{{ $t('about.instructors_text_2') }}</p>
          <router-link to="/about/matthew-moser" class="btn btn-primary">Meet Matthew Moser</router-link>
        </div>
      </div>
    </div>

    <div class="p-4 bg-light rounded shadow-sm border-top border-bottom border-4 border-warning text-start" style="margin-top: var(--spacing-xxl);">
      <h2 class="h3 fw-bold mb-3 text-dark">{{ $t('about.history_title') }}</h2>
      <p class="text-muted mb-3">{{ $t('about.history_text_1') }}</p>
      <p class="text-muted">{{ $t('about.history_text_2') }}</p>
    </div>
  </div>
</template>

<script>
import philosophyImage from '@/assets/images/image(1).png';
import instructorImage from '@/assets/images/image(2).png';

export default {
  name: 'AboutPage',
  data() {
    return {
      philosophyImage: philosophyImage,
      instructorImage: instructorImage,
    };
  },
};
</script>
