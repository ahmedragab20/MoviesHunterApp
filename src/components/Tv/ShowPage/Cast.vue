<template>
  <div class="cast my-2">
    <div class="container-fluid">
      <div
        class="
          artist-container
          d-flex
          justify-content-center
          align-items-center
          flex-column
          rounded-3
        "
        v-if="artist.profile_path != null"
      >
        <div class="image">
          <img
            :src="`${artistPic}${artist.profile_path}`"
            :alt="artist.name"
            class="img-fluid rounded-3"
          />
        </div>
        <div class="details text-center">
          <h6 class="text-uppercase">{{ artist.name }}</h6>
        </div>
      </div>
      <div v-else class="not-found">
        <img
          src="https://via.placeholder.com/900/111"
          alt="image not found"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["artist"],
  computed: {
    artistPic() {
      return "https://image.tmdb.org/t/p/w500";
    },
  },
};
</script>

<style lang="scss" scoped>
.cast {
  .artist-container {
    background-color: rgba(255, 255, 255, 0.178);
    padding: 10px;

    .image {
      box-shadow: 10px 10px 10px rgba(17, 17, 17, 0.25),
        -10px -10px 10px rgba(17, 17, 17, 0.25);
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: none;
      }
    }

    .details {
      h6 {
        padding: 5px 0;
      }
    }
  }
}
</style>
