<template>
  <div class="movie-page">
    <div class="movie-details">
      <movie />
    </div>

    <div class="movie-cast">
      <div class="row pb-3 border-bottom border-dark">
        <div class="title mx-4 mb-4">
          <h2 class="h1 d-none d-md-block text-uppercase">Film Cast</h2>
          <h3 class="d-block d-md-none text-uppercase">Film Cast</h3>
        </div>
        <div
          v-for="artist in credits.cast"
          :key="artist.id"
          class="col-lg-2 col-md-3 col-sm-4 col-6"
        >
          <cast :artist="artist" class="cast" />
        </div>
      </div>
    </div>

    <div class="movie-images">
      <div class="row pb-3 border-bottom border-dark">
        <div class="title mx-4 my-4">
          <h2 class="h1 d-none d-md-block text-uppercase">Film Shoots</h2>
          <h3 class="d-block d-md-none text-uppercase">Film Shoots</h3>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-6"
          v-for="pic in images.backdrops"
          :key="pic.id"
        >
          <images :pic="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cast from "../PopularMovie/MoviePage/Cast.vue";
import Images from "../PopularMovie/MoviePage/Images.vue";
import Movie from "../PopularMovie/MoviePage/Movie.vue";

export default {
  components: { Movie, Cast, Images },
  data() {
    return {
      credits: [],
      images: [],
      tmdb: "https://api.themoviedb.org/3/movie/",
      cast: "/credits?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963",
      image: "/images?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963",
    };
  },
  mounted() {
    this.movieCredits(this.$route.params.id);
    this.imagesData(this.$route.params.id);
  },
  methods: {
    async movieCredits(movieId) {
      const res = await axios(this.tmdb + movieId + this.cast);
      this.credits = res.data;
    },
    async imagesData(movieId) {
      const res = await axios(this.tmdb + movieId + this.image);
      this.images = res.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
