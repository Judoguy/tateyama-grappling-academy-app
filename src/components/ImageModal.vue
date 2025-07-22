<template>
  <div v-if="visible" class="image-modal-overlay" @click.self="close">
    <div class="image-modal-content">
      <button class="close-btn" @click="close">&times;</button>
      <img :src="imageUrl" alt="Enlarged Image" class="img-fluid">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000; /* Higher than navbar */
}

.image-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.image-modal-content img {
  max-width: 100%;
  max-height: 80vh; /* Limit height to viewport height */
  display: block;
  margin: 0 auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2001;
}
</style>