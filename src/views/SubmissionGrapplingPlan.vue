<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t('submission_grappling_plan.title') }}</h1>
    <p class="lead text-center">{{ $t('submission_grappling_plan.tagline') }}</p>

    <div class="row mt-5">
      <div class="col-md-12">
        <!-- Course Structure Overview -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.course_structure_overview_title') }}</h3>
            <ul>
              <li>{{ $t('submission_grappling_plan.course_structure_overview_duration') }}</li>
              <li>{{ $t('submission_grappling_plan.course_structure_overview_training_frequency') }}</li>
              <li>{{ $t('submission_grappling_plan.course_structure_overview_session_length') }}</li>
              <li>{{ $t('submission_grappling_plan.course_structure_overview_format') }}</li>
              <li>{{ $t('submission_grappling_plan.course_structure_overview_philosophy') }}</li>
            </ul>
          </div>
        </div>

        <!-- Month 1 to Month 12 -->
        <div v-for="monthNum in 12" :key="monthNum" class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t(`submission_grappling_plan.month_${monthNum}_title`) }}</h3>
            
            <h5>{{ $t(`submission_grappling_plan.month_${monthNum}_mandatory_objectives_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`submission_grappling_plan.month_${monthNum}_mandatory_objective_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`submission_grappling_plan.month_${monthNum}_key_learning_points_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`submission_grappling_plan.month_${monthNum}_key_learning_point_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`submission_grappling_plan.month_${monthNum}_weekly_breakdown_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`submission_grappling_plan.month_${monthNum}_weekly_breakdown_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`submission_grappling_plan.month_${monthNum}_assessment_criteria_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`submission_grappling_plan.month_${monthNum}_assessment_criteria_${i}`) }}</li>
            </ul>
          </div>
        </div>

        <!-- Competition Rule Sets -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.competition_rule_sets_title') }}</h3>
            <h4>{{ $t('submission_grappling_plan.submission_only_format_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.submission_only_format_objective') }}</li>
              <li>{{ $t('submission_grappling_plan.submission_only_format_time_limits') }}</li>
              <li>{{ $t('submission_grappling_plan.submission_only_format_overtime') }}</li>
              <li>{{ $t('submission_grappling_plan.submission_only_format_illegal_techniques') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.adcc_rules_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.adcc_rules_scoring') }}</li>
              <li>{{ $t('submission_grappling_plan.adcc_rules_submissions') }}</li>
              <li>{{ $t('submission_grappling_plan.adcc_rules_overtime') }}</li>
              <li>{{ $t('submission_grappling_plan.adcc_rules_negative_points') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.ebi_rules_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.ebi_rules_regulation') }}</li>
              <li>{{ $t('submission_grappling_plan.ebi_rules_overtime') }}</li>
              <li>{{ $t('submission_grappling_plan.ebi_rules_scoring') }}</li>
              <li>{{ $t('submission_grappling_plan.ebi_rules_time_limits') }}</li>
            </ul>
          </div>
        </div>

        <!-- Assessment Methods -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.assessment_methods_title') }}</h3>
            <h4>{{ $t('submission_grappling_plan.monthly_evaluations_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.monthly_evaluations_technical_demonstration') }}</li>
              <li>{{ $t('submission_grappling_plan.monthly_evaluations_live_application') }}</li>
              <li>{{ $t('submission_grappling_plan.monthly_evaluations_strategy_assessment') }}</li>
              <li>{{ $t('submission_grappling_plan.monthly_evaluations_safety_evaluation') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.skill_benchmarks_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.skill_benchmarks_submission_rate') }}</li>
              <li>{{ $t('submission_grappling_plan.skill_benchmarks_defense_rate') }}</li>
              <li>{{ $t('submission_grappling_plan.skill_benchmarks_position_control') }}</li>
              <li>{{ $t('submission_grappling_plan.skill_benchmarks_escape_ability') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.competition_preparation_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.competition_preparation_mock_tournaments') }}</li>
              <li>{{ $t('submission_grappling_plan.competition_preparation_video_analysis') }}</li>
              <li>{{ $t('submission_grappling_plan.competition_preparation_mental_training') }}</li>
              <li>{{ $t('submission_grappling_plan.competition_preparation_physical_conditioning') }}</li>
            </ul>
          </div>
        </div>

        <!-- Safety Protocols -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.safety_protocols_title') }}</h3>
            <h4>{{ $t('submission_grappling_plan.submission_safety_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.submission_safety_controlled_application') }}</li>
              <li>{{ $t('submission_grappling_plan.submission_safety_immediate_release') }}</li>
              <li>{{ $t('submission_grappling_plan.submission_safety_tap_early_philosophy') }}</li>
              <li>{{ $t('submission_grappling_plan.submission_safety_technique_modification') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.training_safety_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.training_safety_proper_warm_up') }}</li>
              <li>{{ $t('submission_grappling_plan.training_safety_progressive_intensity') }}</li>
              <li>{{ $t('submission_grappling_plan.training_safety_partner_matching') }}</li>
              <li>{{ $t('submission_grappling_plan.training_safety_rest_and_recovery') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.injury_prevention_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.injury_prevention_technique_over_strength') }}</li>
              <li>{{ $t('submission_grappling_plan.injury_prevention_flexibility_training') }}</li>
              <li>{{ $t('submission_grappling_plan.injury_prevention_strength_training') }}</li>
              <li>{{ $t('submission_grappling_plan.injury_prevention_medical_screening') }}</li>
            </ul>
          </div>
        </div>

        <!-- Physical Conditioning -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.physical_conditioning_title') }}</h3>
            <h4>{{ $t('submission_grappling_plan.strength_training_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.strength_training_functional_strength') }}</li>
              <li>{{ $t('submission_grappling_plan.strength_training_grip_strength') }}</li>
              <li>{{ $t('submission_grappling_plan.strength_training_posterior_chain') }}</li>
              <li>{{ $t('submission_grappling_plan.strength_training_injury_prevention') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.endurance_training_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.endurance_training_aerobic_base') }}</li>
              <li>{{ $t('submission_grappling_plan.endurance_training_anaerobic_power') }}</li>
              <li>{{ $t('submission_grappling_plan.endurance_training_muscular_endurance') }}</li>
              <li>{{ $t('submission_grappling_plan.endurance_training_recovery') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.flexibility_mobility_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.flexibility_mobility_dynamic_warm_up') }}</li>
              <li>{{ $t('submission_grappling_plan.flexibility_mobility_static_stretching') }}</li>
              <li>{{ $t('submission_grappling_plan.flexibility_mobility_joint_mobility') }}</li>
              <li>{{ $t('submission_grappling_plan.flexibility_mobility_injury_prevention') }}</li>
            </ul>
          </div>
        </div>

        <!-- Mental Training -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.mental_training_title') }}</h3>
            <h4>{{ $t('submission_grappling_plan.competition_psychology_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.competition_psychology_visualization') }}</li>
              <li>{{ $t('submission_grappling_plan.competition_psychology_breathing') }}</li>
              <li>{{ $t('submission_grappling_plan.competition_psychology_focus') }}</li>
              <li>{{ $t('submission_grappling_plan.competition_psychology_confidence') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.stress_management_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.stress_management_pressure_training') }}</li>
              <li>{{ $t('submission_grappling_plan.stress_management_relaxation') }}</li>
              <li>{{ $t('submission_grappling_plan.stress_management_goal_setting') }}</li>
              <li>{{ $t('submission_grappling_plan.stress_management_positive_self_talk') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.learning_mindset_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.learning_mindset_growth_mindset') }}</li>
              <li>{{ $t('submission_grappling_plan.learning_mindset_patience') }}</li>
              <li>{{ $t('submission_grappling_plan.learning_mindset_adaptability') }}</li>
              <li>{{ $t('submission_grappling_plan.learning_mindset_continuous_learning') }}</li>
            </ul>
          </div>
        </div>

        <!-- Equipment and Facilities -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.equipment_and_facilities_title') }}</h3>
            <h4>{{ $t('submission_grappling_plan.required_equipment_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.required_equipment_training_clothes') }}</li>
              <li>{{ $t('submission_grappling_plan.required_equipment_protective_gear') }}</li>
              <li>{{ $t('submission_grappling_plan.required_equipment_hygiene') }}</li>
              <li>{{ $t('submission_grappling_plan.required_equipment_first_aid') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.facility_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.facility_requirements_mat_space') }}</li>
              <li>{{ $t('submission_grappling_plan.facility_requirements_ventilation') }}</li>
              <li>{{ $t('submission_grappling_plan.facility_requirements_hygiene') }}</li>
              <li>{{ $t('submission_grappling_plan.facility_requirements_safety') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.optional_equipment_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.optional_equipment_gi') }}</li>
              <li>{{ $t('submission_grappling_plan.optional_equipment_knee_pads') }}</li>
              <li>{{ $t('submission_grappling_plan.optional_equipment_tape') }}</li>
              <li>{{ $t('submission_grappling_plan.optional_equipment_video_equipment') }}</li>
            </ul>
          </div>
        </div>

        <!-- Instructor Qualifications -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('submission_grappling_plan.instructor_qualifications_title') }}</h3>
            <h4>{{ $t('submission_grappling_plan.minimum_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.minimum_requirements_competition_experience') }}</li>
              <li>{{ $t('submission_grappling_plan.minimum_requirements_teaching_experience') }}</li>
              <li>{{ $t('submission_grappling_plan.minimum_requirements_certification') }}</li>
              <li>{{ $t('submission_grappling_plan.minimum_requirements_safety_training') }}</li>
            </ul>
            <h4>{{ $t('submission_grappling_plan.continuing_education_title') }}</h4>
            <ul>
              <li>{{ $t('submission_grappling_plan.continuing_education_technique_updates') }}</li>
              <li>{{ $t('submission_grappling_plan.continuing_education_competition_exposure') }}</li>
              <li>{{ $t('submission_grappling_plan.continuing_education_coaching_development') }}</li>
              <li>{{ $t('submission_grappling_plan.continuing_education_safety_updates') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmissionGrapplingPlan',
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
}
.card-title {
  color: #0056b3;
  font-weight: bold;
}
</style>
