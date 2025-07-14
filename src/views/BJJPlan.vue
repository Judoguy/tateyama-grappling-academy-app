<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t('bjj_plan.title') }}</h1>
    <p class="lead text-center">{{ $t('bjj_plan.tagline') }}</p>

    <div class="row mt-5">
      <div class="col-md-12">
        <!-- Course Structure Overview -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('bjj_plan.course_structure_overview_title') }}</h3>
            <ul>
              <li>{{ $t('bjj_plan.course_structure_overview_duration') }}</li>
              <li>{{ $t('bjj_plan.course_structure_overview_training_frequency') }}</li>
              <li>{{ $t('bjj_plan.course_structure_overview_session_length') }}</li>
              <li>{{ $t('bjj_plan.course_structure_overview_assessment') }}</li>
            </ul>
          </div>
        </div>

        <!-- Month 1 to Month 12 -->
        <div v-for="monthNum in 12" :key="monthNum" class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t(`bjj_plan.month_${monthNum}_title`) }}</h3>
            
            <h5>{{ $t(`bjj_plan.month_${monthNum}_mandatory_objectives_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`bjj_plan.month_${monthNum}_mandatory_objective_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`bjj_plan.month_${monthNum}_key_learning_points_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`bjj_plan.month_${monthNum}_key_learning_point_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`bjj_plan.month_${monthNum}_weekly_breakdown_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`bjj_plan.month_${monthNum}_weekly_breakdown_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`bjj_plan.month_${monthNum}_assessment_criteria_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`bjj_plan.month_${monthNum}_assessment_criteria_${i}`) }}</li>
            </ul>
          </div>
        </div>

        <!-- Assessment Methods -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('bjj_plan.assessment_methods_title') }}</h3>
            <h4>{{ $t('bjj_plan.monthly_evaluations_title') }}</h4>
            <ul>
              <li>{{ $t('bjj_plan.monthly_evaluations_technical_demonstration') }}</li>
              <li>{{ $t('bjj_plan.monthly_evaluations_pressure_testing') }}</li>
              <li>{{ $t('bjj_plan.monthly_evaluations_knowledge_check') }}</li>
              <li>{{ $t('bjj_plan.monthly_evaluations_safety_assessment') }}</li>
            </ul>
            <h4>{{ $t('bjj_plan.progression_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('bjj_plan.progression_requirements_attendance') }}</li>
              <li>{{ $t('bjj_plan.progression_requirements_technical_proficiency') }}</li>
              <li>{{ $t('bjj_plan.progression_requirements_sparring_competency') }}</li>
              <li>{{ $t('bjj_plan.progression_requirements_safety_record') }}</li>
            </ul>
            <h4>{{ $t('bjj_plan.remediation_protocol_title') }}</h4>
            <ul>
              <li>{{ $t('bjj_plan.remediation_protocol_additional_instruction') }}</li>
              <li>{{ $t('bjj_plan.remediation_protocol_catch_up_sessions') }}</li>
              <li>{{ $t('bjj_plan.remediation_protocol_peer_tutoring') }}</li>
              <li>{{ $t('bjj_plan.remediation_protocol_no_progression') }}</li>
            </ul>
          </div>
        </div>

        <!-- Equipment and Space Requirements -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('bjj_plan.equipment_and_space_requirements_title') }}</h3>
            <h4>{{ $t('bjj_plan.required_equipment_title') }}</h4>
            <ul>
              <li>{{ $t('bjj_plan.required_equipment_gi') }}</li>
              <li>{{ $t('bjj_plan.required_equipment_mouth_guard') }}</li>
              <li>{{ $t('bjj_plan.required_equipment_basic_first_aid') }}</li>
              <li>{{ $t('bjj_plan.required_equipment_cleaning_supplies') }}</li>
            </ul>
            <h4>{{ $t('bjj_plan.recommended_equipment_title') }}</h4>
            <ul>
              <li>{{ $t('bjj_plan.recommended_equipment_no_gi_clothes') }}</li>
              <li>{{ $t('bjj_plan.recommended_equipment_notebook') }}</li>
              <li>{{ $t('bjj_plan.recommended_equipment_video_analysis') }}</li>
              <li>{{ $t('bjj_plan.recommended_equipment_timer') }}</li>
            </ul>
            <h4>{{ $t('bjj_plan.space_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('bjj_plan.space_requirements_mat_space') }}</li>
              <li>{{ $t('bjj_plan.space_requirements_ventilation') }}</li>
              <li>{{ $t('bjj_plan.space_requirements_first_aid_station') }}</li>
              <li>{{ $t('bjj_plan.space_requirements_separate_changing_areas') }}</li>
            </ul>
          </div>
        </div>

        <!-- Instructor Qualifications -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('bjj_plan.instructor_qualifications_title') }}</h3>
            <h4>{{ $t('bjj_plan.minimum_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('bjj_plan.minimum_requirements_minimum_purple_belt') }}</li>
              <li>{{ $t('bjj_plan.minimum_requirements_cpr_first_aid') }}</li>
              <li>{{ $t('bjj_plan.minimum_requirements_understanding_learning') }}</li>
              <li>{{ $t('bjj_plan.minimum_requirements_ability_teach') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
