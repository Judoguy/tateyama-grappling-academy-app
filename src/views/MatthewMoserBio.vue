<template>
  <div class="matthew-moser-bio container my-5">
    <h1 class="text-center mb-4">{{ $t('matthew_moser_bio.title') }}</h1>

    <section class="intro mb-4">
      <p>
        {{ $t('matthew_moser_bio.intro_paragraph') }}
      </p>
    </section>

    <section class="journey mb-4">
      <h2>{{ $t('matthew_moser_bio.journey_title') }}</h2>
      <p>
        {{ $t('matthew_moser_bio.journey_paragraph_1') }}
      </p>
      <p>
        {{ $t('matthew_moser_bio.journey_paragraph_2') }}
      </p>
    </section>

    <section class="why-train mb-4">
      <h2>{{ $t('matthew_moser_bio.why_train_title') }}</h2>
      <ul>
        <li>
          <strong>{{ $t('matthew_moser_bio.holistic_approach_title') }}</strong> {{ $t('matthew_moser_bio.holistic_approach_text') }}
        </li>
        <li>
          <strong>{{ $t('matthew_moser_bio.scientifically_informed_title') }}</strong> {{ $t('matthew_moser_bio.scientifically_informed_text') }}
        </li>
        <li>
          <strong>{{ $t('matthew_moser_bio.conditioning_performance_title') }}</strong> {{ $t('matthew_moser_bio.conditioning_performance_text') }}
        </li>
        <li>
          <strong>{{ $t('matthew_moser_bio.experienced_educator_title') }}</strong> {{ $t('matthew_moser_bio.experienced_educator_text') }}
        </li>
      </ul>
    </section>

    <section class="conclusion mb-4">
      <p>
        {{ $t('matthew_moser_bio.conclusion_paragraph') }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MatthewMoserBio',
};
</script>

<style scoped>
.matthew-moser-bio {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #343a40;
  font-size: 2.5rem;
  font-weight: bold;
}

h2 {
  color: #495057;
  font-size: 1.8rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #6c757d;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  background-color: #e2e6ea;
  margin-bottom: 0.8rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

ul li strong {
  color: #007bff;
}
</style>