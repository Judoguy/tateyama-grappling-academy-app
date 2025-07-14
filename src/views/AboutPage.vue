<template>
  <div class="about-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('about.title') }}</h1>
    <p class="lead text-secondary mb-5">{{ $t('about.tagline') }}</p>

    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('about.philosophy_title') }}</h2>
          <p class="text-muted mb-3">{{ $t('about.philosophy_text_1') }}</p>
          <p class="text-muted">{{ $t('about.philosophy_text_2') }}</p>
        </div>
      </div>
      <div class="col-md-6">
        <img src="@/assets/images/image (1).png" alt="Our Philosophy" class="img-fluid rounded shadow-sm">
      </div>
    </div>

    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <img src="https://via.placeholder.com/800x600?text=Instructor+Teaching+Class" alt="Our Instructors" class="img-fluid rounded shadow-sm">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-end border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('about.instructors_title') }}</h2>
          <p class="text-muted mb-3">{{ $t('about.instructors_text_1') }}</p>
          <p class="text-muted">{{ $t('about.instructors_text_2') }}</p>
        </div>
      </div>
    </div>

    <div class="p-4 bg-light rounded shadow-sm border-top border-bottom border-4 border-warning text-start">
      <h2 class="h3 fw-bold mb-3 text-dark">{{ $t('about.history_title') }}</h2>
      <p class="text-muted mb-3">{{ $t('about.history_text_1') }}</p>
      <p class="text-muted">{{ $t('about.history_text_2') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>
