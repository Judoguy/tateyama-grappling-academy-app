<template>
  <div class="facilities-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('facilities.title') }}</h1>
    <p class="lead text-secondary mb-5">{{ $t('facilities.tagline') }}</p>

    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <img :src="spaciousMatAreas" :alt="$t('facilities.mats_title')" class="img-fluid rounded shadow-sm mb-3" loading="lazy" @click="openModal(spaciousMatAreas)" style="cursor: pointer;">
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
        <img :src="dedicatedWeightliftingArea" :alt="$t('facilities.weightlifting_title')" class="img-fluid rounded shadow-sm mb-3" loading="lazy" @click="openModal(dedicatedWeightliftingArea)" style="cursor: pointer;">
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
        <img :src="personalTrainingSessions" :alt="$t('facilities.personal_training_title')" class="img-fluid rounded shadow-sm mb-3" loading="lazy" @click="openModal(personalTrainingSessions)" style="cursor: pointer;">
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
        <img :src="yogaAndMobilityStudio" :alt="$t('facilities.yoga_title')" class="img-fluid rounded shadow-sm mb-3" loading="lazy" @click="openModal(yogaAndMobilityStudio)" style="cursor: pointer;">
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
        <img :src="computerWorkstations" :alt="$t('facilities.computers_title')" class="img-fluid rounded shadow-sm mb-3" loading="lazy" @click="openModal(computerWorkstations)" style="cursor: pointer;">
      </div>
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning h-100">
          <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('facilities.computers_title') }}</h2>
          <p class="text-muted">{{ $t('facilities.computers_text') }}</p>
        </div>
      </div>
    </div>
    <ImageModal :visible="isModalVisible" :image-url="currentImageUrl" @close="closeModal" />
  </div>
</template>

<script>
import spaciousMatAreas from '@/assets/images/Spacious Mat Areas.png';
import dedicatedWeightliftingArea from '@/assets/images/Dedicated Weightlifting Area.png';
import personalTrainingSessions from '@/assets/images/Personal Training Sessions.png';
import yogaAndMobilityStudio from '@/assets/images/image(3).png';
import computerWorkstations from '@/assets/images/computerAccessForMembers.png';
import ImageModal from '@/components/ImageModal.vue';

export default {
  name: 'FacilitiesPage',
  components: {
    ImageModal,
  },
  data() {
    return {
      spaciousMatAreas: spaciousMatAreas,
      dedicatedWeightliftingArea: dedicatedWeightliftingArea,
      personalTrainingSessions: personalTrainingSessions,
      yogaAndMobilityStudio: yogaAndMobilityStudio,
      computerWorkstations: computerWorkstations,
      isModalVisible: false,
      currentImageUrl: '',
    };
  },
  methods: {
    openModal(imageUrl) {
      this.currentImageUrl = imageUrl;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.currentImageUrl = '';
    },
  },
};
</script>
