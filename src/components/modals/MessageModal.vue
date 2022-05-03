<template>
  <div class="modal">
    <div class="modal-content">
      <label class="block">{{ this.modalMessage }}</label>
      <div class="flex items-baseline justify-center">
        <button @click="closeModal" class="px-6 py-2 mt-4 text-white bg-zinc-600 rounded-lg hover:bg-zinc-900">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],
  name: "messageModal",
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;
    p {
      text-align: center;
    }
    button {
      align-self: center;
    }
  }
}
</style>