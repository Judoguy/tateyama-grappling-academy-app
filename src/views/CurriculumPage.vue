<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t('curriculum.title') }}</h1>
    <p class="lead text-center">{{ $t('curriculum.tagline') }}</p>

    <div class="row mt-5">
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title">{{ $t('curriculum.beginner_title') }}</h3>
            <p class="card-text">{{ $t('curriculum.beginner_text') }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ $t('curriculum.beginner_point_1') }}</li>
              <li class="list-group-item">{{ $t('curriculum.beginner_point_2') }}</li>
              <li class="list-group-item">{{ $t('curriculum.beginner_point_3') }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title">{{ $t('curriculum.intermediate_title') }}</h3>
            <p class="card-text">{{ $t('curriculum.intermediate_text') }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ $t('curriculum.intermediate_point_1') }}</li>
              <li class="list-group-item">{{ $t('curriculum.intermediate_point_2') }}</li>
              <li class="list-group-item">{{ $t('curriculum.intermediate_point_3') }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title">{{ $t('curriculum.advanced_title') }}</h3>
            <p class="card-text">{{ $t('curriculum.advanced_text') }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ $t('curriculum.advanced_point_1') }}</li>
              <li class="list-group-item">{{ $t('curriculum.advanced_point_2') }}</li>
              <li class="list-group-item">{{ $t('curriculum.advanced_point_3') }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title">{{ $t('curriculum.specialty_title') }}</h3>
            <p class="card-text">{{ $t('curriculum.specialty_text') }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ $t('curriculum.specialty_point_1') }}</li>
              <li class="list-group-item">{{ $t('curriculum.specialty_point_2') }}</li>
              <li class="list-group-item">{{ $t('curriculum.specialty_point_3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-5">

    <h2 class="text-center mb-4">{{ $t('plans.title') }}</h2>
    <p class="lead text-center mb-5">{{ $t('plans.tagline') }}</p>

    <div class="row justify-content-center">
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body d-flex flex-column justify-content-between">
            <h4 class="card-title">{{ $t('plans.kids_wrestling_plan_title') }}</h4>
            <p class="card-text">{{ $t('plans.kids_wrestling_plan_text') }}</p>
            <router-link to="/curriculum/kids-wrestling" class="btn btn-primary mt-3">{{ $t('plans.view_plan_button') }}</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body d-flex flex-column justify-content-between">
            <h4 class="card-title">{{ $t('plans.bjj_plan_title') }}</h4>
            <p class="card-text">{{ $t('plans.bjj_plan_text') }}</p>
            <router-link to="/curriculum/bjj" class="btn btn-primary mt-3">{{ $t('plans.view_plan_button') }}</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body d-flex flex-column justify-content-between">
            <h4 class="card-title">{{ $t('plans.judo_plan_title') }}</h4>
            <p class="card-text">{{ $t('plans.judo_plan_text') }}</p>
            <router-link to="/curriculum/judo" class="btn btn-primary mt-3">{{ $t('plans.view_plan_button') }}</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body d-flex flex-column justify-content-between">
            <h4 class="card-title">{{ $t('plans.submission_grappling_plan_title') }}</h4>
            <p class="card-text">{{ $t('plans.submission_grappling_plan_text') }}</p>
            <router-link to="/curriculum/submission-grappling" class="btn btn-primary mt-3">{{ $t('plans.view_plan_button') }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurriculumPage',
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  color: #0056b3; /* A shade of blue for titles */
  font-weight: bold;
}

.list-group-item {
  border-color: rgba(0, 0, 0, 0.05);
}
</style>
