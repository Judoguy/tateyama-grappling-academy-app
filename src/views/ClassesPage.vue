<template>
  <div class="classes-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('classes.title') }}</h1>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <!-- Kids Wrestling -->
      <div class="col">
        <div class="card h-100 shadow-sm border-top border-4 border-warning text-center">
          <img src="https://via.placeholder.com/400x300?text=Kids+Wrestling+Class" class="card-img-top" alt="Kids Wrestling">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title h4 fw-bold text-dark">{{ $t('classes.kids_wrestling_title') }}</h2>
            <p class="card-text text-muted flex-grow-1">{{ $t('classes.kids_wrestling_text') }}</p>
            <span class="badge bg-warning text-dark fs-6 mt-auto">{{ $t('classes.kids_wrestling_ages') }}</span>
          </div>
        </div>
      </div>

      <!-- Brazilian Jiu-Jitsu -->
      <div class="col">
        <div class="card h-100 shadow-sm border-top border-4 border-warning text-center">
          <img src="https://via.placeholder.com/400x300?text=Brazilian+Jiu-Jitsu+Sparring" class="card-img-top" alt="Brazilian Jiu-Jitsu">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title h4 fw-bold text-dark">{{ $t('classes.bjj_title') }}</h2>
            <p class="card-text text-muted flex-grow-1">{{ $t('classes.bjj_text') }}</p>
            <span class="badge bg-warning text-dark fs-6 mt-auto">{{ $t('classes.bjj_ages') }}</span>
          </div>
        </div>
      </div>

      <!-- Judo -->
      <div class="col">
        <div class="card h-100 shadow-sm border-top border-4 border-warning text-center">
          <img src="https://via.placeholder.com/400x300?text=Judo+Throw+Technique" class="card-img-top" alt="Judo">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title h4 fw-bold text-dark">{{ $t('classes.judo_title') }}</h2>
            <p class="card-text text-muted flex-grow-1">{{ $t('classes.judo_text') }}</p>
            <span class="badge bg-warning text-dark fs-6 mt-auto">{{ $t('classes.judo_ages') }}</span>
          </div>
        </div>
      </div>

      <!-- Submission Grappling -->
      <div class="col">
        <div class="card h-100 shadow-sm border-top border-4 border-warning text-center">
          <img src="https://via.placeholder.com/400x300?text=Submission+Grappling+Drill" class="card-img-top" alt="Submission Grappling">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title h4 fw-bold text-dark">{{ $t('classes.submission_grappling_title') }}</h2>
            <p class="card-text text-muted flex-grow-1">{{ $t('classes.submission_grappling_text') }}</p>
            <span class="badge bg-warning text-dark fs-6 mt-auto">{{ $t('classes.submission_grappling_ages') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassesPage',
}
</script>
