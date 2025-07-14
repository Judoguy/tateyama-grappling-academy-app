<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t('judo_plan.title') }}</h1>
    <p class="lead text-center">{{ $t('judo_plan.tagline') }}</p>

    <div class="row mt-5">
      <div class="col-md-12">
        <!-- Course Structure Overview -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('judo_plan.course_structure_overview_title') }}</h3>
            <ul>
              <li>{{ $t('judo_plan.course_structure_overview_duration') }}</li>
              <li>{{ $t('judo_plan.course_structure_overview_training_frequency') }}</li>
              <li>{{ $t('judo_plan.course_structure_overview_session_length') }}</li>
              <li>{{ $t('judo_plan.course_structure_overview_assessment') }}</li>
              <li>{{ $t('judo_plan.course_structure_overview_philosophy') }}</li>
            </ul>
          </div>
        </div>

        <!-- Month 1 to Month 12 -->
        <div v-for="monthNum in 12" :key="monthNum" class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t(`judo_plan.month_${monthNum}_title`) }}</h3>
            
            <h5>{{ $t(`judo_plan.month_${monthNum}_mandatory_objectives_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`judo_plan.month_${monthNum}_mandatory_objective_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`judo_plan.month_${monthNum}_key_learning_points_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`judo_plan.month_${monthNum}_key_learning_point_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`judo_plan.month_${monthNum}_weekly_breakdown_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`judo_plan.month_${monthNum}_weekly_breakdown_${i}`) }}</li>
            </ul>

            <h5>{{ $t(`judo_plan.month_${monthNum}_assessment_criteria_title`) }}</h5>
            <ul>
              <li v-for="i in 4" :key="i">{{ $t(`judo_plan.month_${monthNum}_assessment_criteria_${i}`) }}</li>
            </ul>
          </div>
        </div>

        <!-- Belt Progression System -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('judo_plan.belt_progression_system_title') }}</h3>
            <h4>{{ $t('judo_plan.kyu_grades_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.kyu_grades_6th_kyu') }}</li>
              <li>{{ $t('judo_plan.kyu_grades_5th_kyu') }}</li>
              <li>{{ $t('judo_plan.kyu_grades_4th_kyu') }}</li>
              <li>{{ $t('judo_plan.kyu_grades_3rd_kyu') }}</li>
              <li>{{ $t('judo_plan.kyu_grades_2nd_kyu') }}</li>
              <li>{{ $t('judo_plan.kyu_grades_1st_kyu') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.grading_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.grading_requirements_technical_proficiency') }}</li>
              <li>{{ $t('judo_plan.grading_requirements_ukemi') }}</li>
              <li>{{ $t('judo_plan.grading_requirements_randori') }}</li>
              <li>{{ $t('judo_plan.grading_requirements_knowledge') }}</li>
              <li>{{ $t('judo_plan.grading_requirements_attitude') }}</li>
            </ul>
          </div>
        </div>

        <!-- Assessment Methods -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('judo_plan.assessment_methods_title') }}</h3>
            <h4>{{ $t('judo_plan.monthly_evaluations_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.monthly_evaluations_technical_demonstration') }}</li>
              <li>{{ $t('judo_plan.monthly_evaluations_ukemi_assessment') }}</li>
              <li>{{ $t('judo_plan.monthly_evaluations_randori_evaluation') }}</li>
              <li>{{ $t('judo_plan.monthly_evaluations_knowledge_test') }}</li>
              <li>{{ $t('judo_plan.monthly_evaluations_attitude_assessment') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.progression_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.progression_requirements_attendance') }}</li>
              <li>{{ $t('judo_plan.progression_requirements_technical_standard') }}</li>
              <li>{{ $t('judo_plan.progression_requirements_sparring_competency') }}</li>
              <li>{{ $t('judo_plan.progression_requirements_safety_record') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.remediation_protocol_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.remediation_protocol_additional_instruction') }}</li>
              <li>{{ $t('judo_plan.remediation_protocol_catch_up_sessions') }}</li>
              <li>{{ $t('judo_plan.remediation_protocol_peer_tutoring') }}</li>
              <li>{{ $t('judo_plan.remediation_protocol_no_progression') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.grading_preparation_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.grading_preparation_mock_examinations') }}</li>
              <li>{{ $t('judo_plan.grading_preparation_technique_refinement') }}</li>
              <li>{{ $t('judo_plan.grading_preparation_randori_preparation') }}</li>
              <li>{{ $t('judo_plan.grading_preparation_mental_preparation') }}</li>
            </ul>
          </div>
        </div>

        <!-- Safety Protocols -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('judo_plan.safety_protocols_title') }}</h3>
            <h4>{{ $t('judo_plan.injury_prevention_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.injury_prevention_proper_warm_up') }}</li>
              <li>{{ $t('judo_plan.injury_prevention_ukemi_excellence') }}</li>
              <li>{{ $t('judo_plan.injury_prevention_controlled_practice') }}</li>
              <li>{{ $t('judo_plan.injury_prevention_equipment_checks') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.emergency_procedures_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.emergency_procedures_first_aid') }}</li>
              <li>{{ $t('judo_plan.emergency_procedures_injury_assessment') }}</li>
              <li>{{ $t('judo_plan.emergency_procedures_medical_referral') }}</li>
              <li>{{ $t('judo_plan.emergency_procedures_incident_reporting') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.risk_management_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.risk_management_partner_matching') }}</li>
              <li>{{ $t('judo_plan.risk_management_technique_modification') }}</li>
              <li>{{ $t('judo_plan.risk_management_progressive_loading') }}</li>
              <li>{{ $t('judo_plan.risk_management_supervision') }}</li>
            </ul>
          </div>
        </div>

        <!-- Equipment and Facilities -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('judo_plan.equipment_and_facilities_title') }}</h3>
            <h4>{{ $t('judo_plan.required_equipment_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.required_equipment_judogi') }}</li>
              <li>{{ $t('judo_plan.required_equipment_obi') }}</li>
              <li>{{ $t('judo_plan.required_equipment_zori') }}</li>
              <li>{{ $t('judo_plan.required_equipment_medical') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.facility_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.facility_requirements_tatami') }}</li>
              <li>{{ $t('judo_plan.facility_requirements_safety_zone') }}</li>
              <li>{{ $t('judo_plan.facility_requirements_ventilation') }}</li>
              <li>{{ $t('judo_plan.facility_requirements_storage') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.maintenance_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.maintenance_mat_cleaning') }}</li>
              <li>{{ $t('judo_plan.maintenance_equipment_inspection') }}</li>
              <li>{{ $t('judo_plan.maintenance_facility_maintenance') }}</li>
              <li>{{ $t('judo_plan.maintenance_hygiene_standards') }}</li>
            </ul>
          </div>
        </div>

        <!-- Philosophical Elements -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('judo_plan.philosophical_elements_title') }}</h3>
            <h4>{{ $t('judo_plan.judo_principles_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.judo_principles_seiryoku_zenyo') }}</li>
              <li>{{ $t('judo_plan.judo_principles_jita_kyoei') }}</li>
              <li>{{ $t('judo_plan.judo_principles_ju') }}</li>
              <li>{{ $t('judo_plan.judo_principles_do') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.character_development_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.character_development_respect') }}</li>
              <li>{{ $t('judo_plan.character_development_discipline') }}</li>
              <li>{{ $t('judo_plan.character_development_perseverance') }}</li>
              <li>{{ $t('judo_plan.character_development_humility') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.traditional_values_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.traditional_values_rei') }}</li>
              <li>{{ $t('judo_plan.traditional_values_kata') }}</li>
              <li>{{ $t('judo_plan.traditional_values_dojo') }}</li>
              <li>{{ $t('judo_plan.traditional_values_sensei') }}</li>
            </ul>
          </div>
        </div>

        <!-- Instructor Qualifications -->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ $t('judo_plan.instructor_qualifications_title') }}</h3>
            <h4>{{ $t('judo_plan.minimum_requirements_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.minimum_requirements_dan_grade') }}</li>
              <li>{{ $t('judo_plan.minimum_requirements_coaching_certification') }}</li>
              <li>{{ $t('judo_plan.minimum_requirements_first_aid') }}</li>
              <li>{{ $t('judo_plan.minimum_requirements_experience') }}</li>
            </ul>
            <h4>{{ $t('judo_plan.continuing_education_title') }}</h4>
            <ul>
              <li>{{ $t('judo_plan.continuing_education_technical_updates') }}</li>
              <li>{{ $t('judo_plan.continuing_education_competition_exposure') }}</li>
              <li>{{ $t('judo_plan.continuing_education_coaching_development') }}</li>
              <li>{{ $t('judo_plan.continuing_education_safety_updates') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
