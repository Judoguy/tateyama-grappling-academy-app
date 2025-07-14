<template>
  <div class="contact-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('contact.title') }}</h1>
    <p class="lead text-secondary mb-5">{{ $t('contact.tagline') }}</p>

    <div class="row g-4">
      <!-- Contact Form -->
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-start border-4 border-warning text-start">
          <h2 class="h4 fw-bold mb-4 text-dark">{{ $t('contact.message_form_title') }}</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label fw-bold">{{ $t('contact.name_label') }}</label>
              <input type="text" id="name" v-model="form.name" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">{{ $t('contact.email_label') }}</label>
              <input type="email" id="email" v-model="form.email" class="form-control" required>
            </div>
            <div class="mb-4">
              <label for="message" class="form-label fw-bold">{{ $t('contact.message_label') }}</label>
              <textarea id="message" v-model="form.message" rows="6" class="form-control" required></textarea>
            </div>
            <button type="submit" class="btn btn-warning btn-lg fw-bold">{{ $t('contact.send_message_button') }}</button>
          </form>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="col-md-6">
        <div class="p-4 bg-light rounded shadow-sm border-end border-4 border-warning text-start">
          <h2 class="h4 fw-bold mb-4 text-dark">{{ $t('contact.info_title') }}</h2>
          <p class="text-muted mb-3"><strong class="text-dark">{{ $t('contact.address_label') }}</strong> 123 Grappling Way, Dojo City, GR 12345</p>
          <p class="text-muted mb-3"><strong class="text-dark">{{ $t('contact.phone_label') }}</strong> (123) 456-7890</p>
          <p class="text-muted mb-4"><strong class="text-dark">{{ $t('contact.email_info_label') }}</strong> info@tateyamagrappling.com</p>
          
          <h3 class="h5 fw-bold mt-4 mb-3 text-dark">{{ $t('contact.hours_title') }}</h3>
          <ul class="list-unstyled text-muted">
            <li>{{ $t('contact.hours_mon_fri') }}</li>
            <li>{{ $t('contact.hours_sat') }}</li>
            <li>{{ $t('contact.hours_sun') }}</li>
          </ul>

          <h3 class="h5 fw-bold mt-4 mb-3 text-dark">{{ $t('contact.follow_us_title') }}</h3>
          <div class="d-flex gap-3">
            <a href="#" class="text-primary fs-4"><i class="bi bi-facebook"></i> Facebook</a>
            <a href="#" class="text-info fs-4"><i class="bi bi-twitter"></i> Twitter</a>
            <a href="#" class="text-danger fs-4"><i class="bi bi-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      alert(this.$t('contact.message_sent_alert'));
      // In a real application, you would send this data to a backend server
      console.log('Form submitted:', this.form);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>


