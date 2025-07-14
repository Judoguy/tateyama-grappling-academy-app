<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t('kids_wrestling_plan.title') }}</h1>
    <p class="lead text-center">{{ $t('kids_wrestling_plan.tagline') }}</p>

    <div class="row mt-5">
      <div class="col-md-12">
        <!-- Course Structure Overview -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.course_structure_overview_title') }}</h3>
            <ul>
              <li>{{ $t('kids_wrestling_plan.course_structure_overview_duration') }}</li>
              <li>{{ $t('kids_wrestling_plan.course_structure_overview_frequency_in_season') }}</li>
              <li>{{ $t('kids_wrestling_plan.course_structure_overview_frequency_off_season') }}</li>
              <li>{{ $t('kids_wrestling_plan.course_structure_overview_session_length') }}</li>
              <li>{{ $t('kids_wrestling_plan.course_structure_overview_competition_season') }}</li>
              <li>{{ $t('kids_wrestling_plan.course_structure_overview_philosophy') }}</li>
            </ul>
          </div>
        </div>

        <!-- Month 1 to Month 12 -->
        <div v-for="monthNum in 12" :key="monthNum" class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t(`kids_wrestling_plan.month_${monthNum}_title`) }}</h3>
            
            <h5>{{ $t(`kids_wrestling_plan.month_${monthNum}_mandatory_objectives_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`kids_wrestling_plan.month_${monthNum}_mandatory_objective_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`kids_wrestling_plan.month_${monthNum}_key_learning_points_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`kids_wrestling_plan.month_${monthNum}_key_learning_point_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`kids_wrestling_plan.month_${monthNum}_weekly_breakdown_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`kids_wrestling_plan.month_${monthNum}_weekly_breakdown_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`kids_wrestling_plan.month_${monthNum}_assessment_criteria_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`kids_wrestling_plan.month_${monthNum}_assessment_criteria_${i}`) }}</li>
            </ul>
          </div>
        </div>

        <!-- Technical Skill Progression -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.technical_skill_progression_title') }}</h3>
            <h4>{{ $t('kids_wrestling_plan.takedown_development_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.takedown_development_fundamental') }}</li>
              <li>{{ $t('kids_wrestling_plan.takedown_development_intermediate') }}</li>
              <li>{{ $t('kids_wrestling_plan.takedown_development_advanced') }}</li>
              <li>{{ $t('kids_wrestling_plan.takedown_development_championship') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.mat_wrestling_progression_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.mat_wrestling_progression_fundamental') }}</li>
              <li>{{ $t('kids_wrestling_plan.mat_wrestling_progression_intermediate') }}</li>
              <li>{{ $t('kids_wrestling_plan.mat_wrestling_progression_advanced') }}</li>
              <li>{{ $t('kids_wrestling_plan.mat_wrestling_progression_championship') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.conditioning_progression_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.conditioning_progression_base') }}</li>
              <li>{{ $t('kids_wrestling_plan.conditioning_progression_build') }}</li>
              <li>{{ $t('kids_wrestling_plan.conditioning_progression_peak') }}</li>
              <li>{{ $t('kids_wrestling_plan.conditioning_progression_championship') }}</li>
            </ul>
          </div>
        </div>

        <!-- Competition Structure -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.competition_structure_title') }}</h3>
            <h4>{{ $t('kids_wrestling_plan.dual_meet_format_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.dual_meet_format_weight_classes') }}</li>
              <li>{{ $t('kids_wrestling_plan.dual_meet_format_scoring') }}</li>
              <li>{{ $t('kids_wrestling_plan.dual_meet_format_match_length') }}</li>
              <li>{{ $t('kids_wrestling_plan.dual_meet_format_team_scoring') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.tournament_format_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.tournament_format_bracket_system') }}</li>
              <li>{{ $t('kids_wrestling_plan.tournament_format_advancement') }}</li>
              <li>{{ $t('kids_wrestling_plan.tournament_format_placement') }}</li>
              <li>{{ $t('kids_wrestling_plan.tournament_format_team_scoring') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.championship_format_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.championship_format_qualification') }}</li>
              <li>{{ $t('kids_wrestling_plan.championship_format_format') }}</li>
              <li>{{ $t('kids_wrestling_plan.championship_format_all_american') }}</li>
              <li>{{ $t('kids_wrestling_plan.championship_format_national_champion') }}</li>
            </ul>
          </div>
        </div>

        <!-- Assessment Methods -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.assessment_methods_title') }}</h3>
            <h4>{{ $t('kids_wrestling_plan.technical_assessment_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.technical_assessment_execution') }}</li>
              <li>{{ $t('kids_wrestling_plan.technical_assessment_pressure') }}</li>
              <li>{{ $t('kids_wrestling_plan.technical_assessment_tactical') }}</li>
              <li>{{ $t('kids_wrestling_plan.technical_assessment_competition') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.physical_assessment_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.physical_assessment_strength') }}</li>
              <li>{{ $t('kids_wrestling_plan.physical_assessment_conditioning') }}</li>
              <li>{{ $t('kids_wrestling_plan.physical_assessment_flexibility') }}</li>
              <li>{{ $t('kids_wrestling_plan.physical_assessment_body_composition') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.mental_assessment_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.mental_assessment_competitive') }}</li>
              <li>{{ $t('kids_wrestling_plan.mental_assessment_learning') }}</li>
              <li>{{ $t('kids_wrestling_plan.mental_assessment_leadership') }}</li>
              <li>{{ $t('kids_wrestling_plan.mental_assessment_character') }}</li>
            </ul>
          </div>
        </div>

        <!-- Safety Protocols -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.safety_protocols_title') }}</h3>
            <h4>{{ $t('kids_wrestling_plan.injury_prevention_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.injury_prevention_warm_up') }}</li>
              <li>{{ $t('kids_wrestling_plan.injury_prevention_technique') }}</li>
              <li>{{ $t('kids_wrestling_plan.injury_prevention_loading') }}</li>
              <li>{{ $t('kids_wrestling_plan.injury_prevention_recovery') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.weight_management_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.weight_management_cutting') }}</li>
              <li>{{ $t('kids_wrestling_plan.weight_management_hydration') }}</li>
              <li>{{ $t('kids_wrestling_plan.weight_management_nutrition') }}</li>
              <li>{{ $t('kids_wrestling_plan.weight_management_medical') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.training_safety_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.training_safety_supervision') }}</li>
              <li>{{ $t('kids_wrestling_plan.training_safety_equipment') }}</li>
              <li>{{ $t('kids_wrestling_plan.training_safety_emergency') }}</li>
              <li>{{ $t('kids_wrestling_plan.training_safety_risk') }}</li>
            </ul>
          </div>
        </div>

        <!-- Physical Conditioning -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.physical_conditioning_title') }}</h3>
            <h4>{{ $t('kids_wrestling_plan.strength_training_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.strength_training_compound') }}</li>
              <li>{{ $t('kids_wrestling_plan.strength_training_wrestling_specific') }}</li>
              <li>{{ $t('kids_wrestling_plan.strength_training_periodization') }}</li>
              <li>{{ $t('kids_wrestling_plan.strength_training_recovery') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.conditioning_protocols_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.conditioning_protocols_aerobic') }}</li>
              <li>{{ $t('kids_wrestling_plan.conditioning_protocols_anaerobic') }}</li>
              <li>{{ $t('kids_wrestling_plan.conditioning_protocols_alactic') }}</li>
              <li>{{ $t('kids_wrestling_plan.conditioning_protocols_wrestling_specific') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.flexibility_mobility_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.flexibility_mobility_dynamic') }}</li>
              <li>{{ $t('kids_wrestling_plan.flexibility_mobility_static') }}</li>
              <li>{{ $t('kids_wrestling_plan.flexibility_mobility_injury') }}</li>
              <li>{{ $t('kids_wrestling_plan.flexibility_mobility_performance') }}</li>
            </ul>
          </div>
        </div>

        <!-- Mental Training -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.mental_training_title') }}</h3>
            <h4>{{ $t('kids_wrestling_plan.competitive_psychology_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.competitive_psychology_visualization') }}</li>
              <li>{{ $t('kids_wrestling_plan.competitive_psychology_goal_setting') }}</li>
              <li>{{ $t('kids_wrestling_plan.competitive_psychology_confidence') }}</li>
              <li>{{ $t('kids_wrestling_plan.competitive_psychology_pressure') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.learning_psychology_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.learning_psychology_growth_mindset') }}</li>
              <li>{{ $t('kids_wrestling_plan.learning_psychology_focus') }}</li>
              <li>{{ $t('kids_wrestling_plan.learning_psychology_motivation') }}</li>
              <li>{{ $t('kids_wrestling_plan.learning_psychology_resilience') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.team_psychology_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.team_psychology_leadership') }}</li>
              <li>{{ $t('kids_wrestling_plan.team_psychology_communication') }}</li>
              <li>{{ $t('kids_wrestling_plan.team_psychology_support') }}</li>
              <li>{{ $t('kids_wrestling_plan.team_psychology_culture') }}</li>
            </ul>
          </div>
        </div>

        <!-- Coaching Philosophy -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('kids_wrestling_plan.coaching_philosophy_title') }}</h3>
            <h4>{{ $t('kids_wrestling_plan.development_focus_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.development_focus_technical_mastery') }}</li>
              <li>{{ $t('kids_wrestling_plan.development_focus_tactical_intelligence') }}</li>
              <li>{{ $t('kids_wrestling_plan.development_focus_physical_excellence') }}</li>
              <li>{{ $t('kids_wrestling_plan.development_focus_mental_toughness') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.educational_approach_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.educational_approach_progressive_learning') }}</li>
              <li>{{ $t('kids_wrestling_plan.educational_approach_individual_development') }}</li>
              <li>{{ $t('kids_wrestling_plan.educational_approach_positive_environment') }}</li>
              <li>{{ $t('kids_wrestling_plan.educational_approach_character_development') }}</li>
            </ul>
            <h4>{{ $t('kids_wrestling_plan.competitive_excellence_title') }}</h4>
            <ul>
              <li>{{ $t('kids_wrestling_plan.competitive_excellence_championship_standards') }}</li>
              <li>{{ $t('kids_wrestling_plan.competitive_excellence_continuous_improvement') }}</li>
              <li>{{ $t('kids_wrestling_plan.competitive_excellence_team_first') }}</li>
              <li>{{ $t('kids_wrestling_plan.competitive_excellence_legacy_building') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KidsWrestlingPlan',
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
