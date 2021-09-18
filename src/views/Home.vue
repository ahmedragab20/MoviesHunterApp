<template>
  <div class="home">
    <transition appear name="home">
      <section class="popular">
        <!-- <div class="slider">
          <slider />
        </div> -->
        <Title :msg="msg" />
        <div class="row">
          <div
            class="col-md-4 col-lg-3 my-2"
            v-for="movie in movies"
            :key="movie.id"
          >
            <popular-movies :movie="movie" />
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Title from "@/components/global/Title";
import PopularMovies from "@/components/PopularMovie/PopularMovies";
// import Slider from "@/components/global/slider.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { PopularMovies, Title },
  data() {
    return {
      msg: "popular movies",
      movies: [],
    };
  },
  mounted() {
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963&language=en-US&page=1"
    )
      .then((res) => {
        this.movies = res.data.results;
      })
      .catch((err) => console.error(err));
  },
};
</script>
<style lang="scss" scoped>
.home-enter-from,
.home-leave-to {
  opacity: 0;
}
.home-enter-active,
.home-leave-active {
  transition: all 1s ease-in-out;
}
</style>
