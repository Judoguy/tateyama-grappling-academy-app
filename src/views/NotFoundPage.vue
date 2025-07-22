<template>
  <div class="not-found-page text-center p-5">
    <h1 class="display-1 fw-bold text-primary">404</h1>
    <h2 class="display-4 text-dark mb-4">Page Not Found</h2>
    <p class="lead text-muted mb-5">
      Oops! The page you are looking for does not exist.
    </p>
    <router-link to="/" class="btn btn-primary btn-lg">
      Go to Homepage
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style scoped>
.not-found-page {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>