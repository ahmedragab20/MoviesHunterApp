<template>
  <div class="movie border-bottom border-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <div class="left">
            <div class="poster">
              <img
                :src="moviePoster"
                width="300"
                class="img-fluid rounded-3"
                :alt="details.title"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="right">
            <div class="context">
              <div class="movie-title">
                <h3 class="d-none d-sm-block text-uppercase fw-bold">
                  {{ details.title }}
                  <span class="lang p-1 rounded-3">{{
                    details.original_language
                  }}</span>
                </h3>
                <h6 class="d-block d-sm-none text-uppercase">
                  {{ details.title }}
                  <span class="lang p-1 rounded-3">{{
                    details.original_language
                  }}</span>
                </h6>
              </div>
              <div class="tagline mb-3">{{ details.tagline }}</div>
              <div class="rate mb-3">
                <span class="me-2">
                  <i class="bi-star-fill" style="color: #db902e"></i>
                  {{ details.vote_average }}
                </span>
                <span v-for="gen in details.genres" :key="gen.id">
                  <span class="me-1 text-muted">| {{ gen.name }} </span>
                </span>
              </div>
              <div class="release_date text-muted mb-3">
                {{ details.status }}: {{ details.release_date }}
              </div>
              <div class="runtime text-muted mb-3">
                Runtime: {{ details.runtime }}min
              </div>
              <div class="describtion">
                <p>{{ details.overview }}</p>
              </div>
              <div class="btns d-flex gap-2">
                <a
                  class="btn btn-primary px-4 py-2 d-flex gap-1 text-uppercase"
                  :href="details.homepage"
                  target="_blank"
                >
                  <i class="bi-share"></i> Official Page
                </a>
                <button
                  class="btn btn-danger px-4 py-2 d-flex gap-1 text-uppercase"
                >
                  <i class="bi-heart"></i> Favourite
                </button>
              </div>
              <div class="production mt-3">
                <h3 class="d-none d-sm-block text-uppercase mt-4 fw-bold">
                  production companies
                </h3>
                <h6 class="d-block d-sm-none text-uppercase mt-4">
                  production companies
                </h6>
                <div class="images-container d-flex flex-wrap gap-3">
                  <div
                    class="
                      image
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                    v-for="poster in details.production_companies"
                    :key="poster.id"
                  >
                    <img
                      :src="`${companies_Poster}${poster.logo_path}`"
                      :alt="poster.name"
                      width="100"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      details: [],
    };
  },

  mounted() {
    this.movieDetails(this.$route.params.id);
    this.movieData();
  },
  computed: {
    moviePoster() {
      return "https://image.tmdb.org/t/p/w500" + this.details.poster_path;
    },
    companies_Poster() {
      return "https://image.tmdb.org/t/p/w500";
    },
  },
  methods: {
    async movieDetails(movieId) {
      const res = await axios(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963&language=en-US/movie/popular?language=es-ES"
      );
      this.details = res.data;
    },
    movieData() {
      this.$store.commit("movieData");
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  margin: 30px 0;
  .left,
  .right {
    padding: 20px;
  }
  .left {
    .poster {
      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
        box-shadow: 10px 10px 10px rgba(17, 17, 17, 0.25),
          -10px -10px 10px rgba(17, 17, 17, 0.25);
      }
    }
  }
  .right {
    .movie-title {
      letter-spacing: 1px;
      h3 {
        font-size: 3rem;
      }
      h6 {
        font-size: 1.5rem;
      }

      .lang {
        font-size: 0.75rem;
        background-color: #db902e;
      }
    }

    .describtion {
      p {
        width: 80%;
      }
    }
  }
}
@media (max-width: 768px) {
  .movie {
    .right {
      .describtion {
        p {
          width: 100%;
        }
      }
    }
  }
}
</style>
