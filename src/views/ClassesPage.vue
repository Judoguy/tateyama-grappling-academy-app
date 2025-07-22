<template>
  <div class="classes-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('classes.title') }}</h1>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <!-- Kids Wrestling -->
      <div class="col">
        <div class="card h-100 shadow-sm border-top border-4 border-warning text-center">
          <video class="card-img-top" controls loop muted autoplay :poster="kidsWrestlingPoster" alt="Kids Wrestling Class Video" loading="lazy">
            <source :src="kidsWrestlingVideo" type="video/mp4">
            Your browser does not support the video tag.
          </video>
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
          <video class="card-img-top" controls loop muted autoplay :poster="bjjPoster" alt="Brazilian Jiu-Jitsu Sparring Video" loading="lazy">
            <source :src="bjjVideo" type="video/mp4">
            Your browser does not support the video tag.
          </video>
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
          <video class="card-img-top" controls loop muted autoplay :poster="judoPoster" alt="Judo Throw Technique Video" loading="lazy">
            <source :src="judoVideo" type="video/mp4">
            Your browser does not support the video tag.
          </video>
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
          <video class="card-img-top" controls loop muted autoplay :poster="submissionGrapplingPoster" alt="Submission Grappling Drill Video" loading="lazy">
            <source :src="submissionGrapplingVideo" type="video/mp4">
            Your browser does not support the video tag.
          </video>
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
import kidsWrestlingVideo from '@/assets/videos/kids_wrestling.mp4';
import bjjVideo from '@/assets/videos/bjj.mp4';
import judoVideo from '@/assets/videos/judo.mp4';
import submissionGrapplingVideo from '@/assets/videos/submission_grappling.mp4';

export default {
  name: 'ClassesPage',
  data() {
    return {
      kidsWrestlingVideo: kidsWrestlingVideo,
      bjjVideo: bjjVideo,
      judoVideo: judoVideo,
      submissionGrapplingVideo: submissionGrapplingVideo,
      kidsWrestlingPoster: 'https://via.placeholder.com/400x300?text=Kids+Wrestling+Class',
      bjjPoster: 'https://via.placeholder.com/400x300?text=Brazilian+Jiu-Jitsu+Sparring',
      judoPoster: 'https://via.placeholder.com/400x300?text=Judo+Throw+Technique',
      submissionGrapplingPoster: 'https://via.placeholder.com/400x300?text=Submission+Grappling+Drill',
    };
  },
};
</script>
