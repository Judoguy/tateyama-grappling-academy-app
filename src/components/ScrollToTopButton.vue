<template>
  <button v-if="isVisible" @click="scrollToTop" class="scroll-to-top-btn btn btn-primary rounded-circle shadow-lg">
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>

<script>
export default {
  name: 'ScrollToTopButton',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Show button when user scrolls down 200px
      this.isVisible = window.pageYOffset > 200;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
}
</style>