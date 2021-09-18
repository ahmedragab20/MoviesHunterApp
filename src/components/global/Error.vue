<template>
  <div class="error">
    <div class="container">
      <div
        class="
          error-container
          d-flex
          justify-content-center
          align-items-center
          flex-column
          text-center
          gap-3
        "
      >
        <div class="d-none d-sm-block">
          <h2 class="h1 text-uppercase">Error404</h2>
          <p>Seems Like This Page Have Been Deleted Or Not Found</p>
        </div>

        <div class="d-block d-sm-none">
          <h3 class="text-uppercase">Error404</h3>
          <p>Seems Like This Page Have Been Deleted Or Not Found</p>
        </div>

        <div class="btn d-flex justify-content-center align-items-center gap-2">
          <button class="btn btn-light" @click="redirect">Home Page?</button>
          <button class="btn btn-danger" @click="back">Back?</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.error-container {
  height: 70vh;

  .h1 {
    font-size: 8rem;
  }
  .d-sm-none {
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
}
</style>
