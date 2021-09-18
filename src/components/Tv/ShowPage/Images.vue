<template>
  <div class="images my-2">
    <div class="container-fluid">
      <div class="image">
        <img
          :src="`${img}${pic.file_path}`"
          alt="Image From The Movie"
          class="img-fluid rounded-3"
          width="300"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pic"],
  data() {
    return {
      baseImg: "https://image.tmdb.org/t/p/w500",
    };
  },
  computed: {
    img() {
      return this.baseImg;
    },
  },
};
</script>

<style lang="scss" scoped>
.images {
  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 10px 10px 10px rgba(17, 17, 17, 0.25),
        -10px -10px 10px rgba(17, 17, 17, 0.25);
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: none;
      }
    }
  }
}
</style>
