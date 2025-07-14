<template>
  <div class="facilities-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('facilities.title') }}</h1>
    <p class="lead text-secondary mb-5">{{ $t('facilities.tagline') }}</p>

    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <img src="https://via.placeholder.com/800x600?text=Spacious+Grappling+Mat+Area" :alt="$t('facilities.mats_title')" class="img-fluid rounded shadow-sm mb-3">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('facilities.mats_title') }}</h2>
          <p class="text-muted">{{ $t('facilities.mats_text') }}</p>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-5 flex-row-reverse">
      <div class="col-md-6">
        <img src="https://via.placeholder.com/800x600?text=Weightlifting+Equipment+Area" :alt="$t('facilities.weightlifting_title')" class="img-fluid rounded shadow-sm mb-3">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-end border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('facilities.weightlifting_title') }}</h2>
          <p class="text-muted">{{ $t('facilities.weightlifting_text') }}</p>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <img src="/images/image (1).png" :alt="$t('facilities.personal_training_title')" class="img-fluid rounded shadow-sm mb-3">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('facilities.personal_training_title') }}</h2>
          <p class="text-muted">{{ $t('facilities.personal_training_text') }}</p>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-5 flex-row-reverse">
      <div class="col-md-6">
        <img src="https://via.placeholder.com/800x600?text=Yoga+and+Mobility+Studio" :alt="$t('facilities.yoga_title')" class="img-fluid rounded shadow-sm mb-3">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-end border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('facilities.yoga_title') }}</h2>
          <p class="text-muted">{{ $t('facilities.yoga_text') }}</p>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <img src="https://via.placeholder.com/800x600?text=Computer+Workstations" :alt="$t('facilities.computers_title')" class="img-fluid rounded shadow-sm mb-3">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('facilities.computers_title') }}</h2>
          <p class="text-muted">{{ $t('facilities.computers_text') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FacilitiesPage',
}
</script>
