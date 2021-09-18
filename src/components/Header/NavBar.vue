<template>
  <nav class="navbar navbar-expand-lg py-4 mb-2 border-bottom border-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <i class="bi bi-camera-reels"></i> Mories Hunter
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <i class="bi bi-list"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/TV">TV Shows</router-link>
          </li>
          <li class="nav-item" v-if="this.$store.state.isLoging == true">
            <router-link class="nav-link" to="/Profile">Profile</router-link>
          </li>
        </ul>
        <form class="d-flex" @submit.prevent>
          <div class="input me-2">
            <input
              class="form-control btn-dark rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
              @input="debounceSearch"
              v-model="searchTerm"
            />
            <ul
              class="
                rounded-3
                search-results
                position-absolute
                top-10
                mt-1
                list-unstyled
              "
              v-if="searchTerm"
            >
              <router-link
                :to="'/MoviePage/' + movie.id"
                class="text-muted text-decoration-none movie-link"
                v-for="movie in searchResults"
                :key="movie.id"
              >
                <li class="d-flex px-2 pt-2 border-bottom border-dark">
                  <div class="image">
                    <img
                      :src="`${pic}${movie.poster_path}`"
                      :alt="movie.original_title"
                      width="35"
                      class="img-fluid rounded-3 me-1"
                    />
                  </div>
                  <div class="details">
                    <h6 class="text-capitalize">{{ movie.original_title }}</h6>
                    <p>
                      <span class="rounded">
                        {{ movie.vote_average.toFixed(1) }}
                        <i class="bi-star-fill"></i>
                      </span>
                    </p>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
          <div class="profile" v-if="this.$store.state.isLoging == true">
            <img
              src="@/assets/profilePic.jpg"
              alt="profile picture"
              width="30"
              class="rounded-circle"
            />
          </div>
          <div
            v-else
            class="
              not-member
              d-flex
              justify-content-center
              align-items-center
              border border-dark
              px-2
              rounded-circle
            "
          >
            <i
              class="bi bi-person-circle"
              style="font-size: 15px; cursor: pointer"
            ></i>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchResults: [],
      searchTerm: "",
      searchData:
        "https://api.themoviedb.org/3/search/movie?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963&language=en-US&query=",
    };
  },
  computed: {
    pic() {
      return "https://image.tmdb.org/t/p/w500";
    },
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 0) {
          this.fetchSearch(event.target.value);
        }
      }, 200);
    },
    async fetchSearch(term) {
      try {
        const res = await axios(this.searchData + term);
        this.searchResults = res.data.results;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  a {
    color: #fff !important;
    opacity: 0.8 !important;

    &:hover {
      opacity: 1 !important;
    }
  }
  .navbar-brand,
  .router-link-active {
    opacity: 1 !important;
  }
  .navbar-brand {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }

  form {
    .input {
      input {
        height: 30px;
      }
      ul {
        z-index: 9999;
        background-color: #111;
        right: 1%;
        left: auto;
        max-height: 500px;
        max-width: 280px;
        overflow-y: scroll;

        li {
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
          }

          p {
            font-size: 0.75rem;

            span {
              padding: 2px;
              background-color: #db902e;
              color: #111;

              i {
                font-size: 0.6rem;
              }
            }
          }
        }
      }
    }
    .profile {
      img {
        cursor: pointer;
      }
    }
  }

  .navbar-toggler {
    &:focus {
      box-shadow: none;
    }
    .navbar-toggler-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 768px) {
  nav {
    form {
      .input {
        ul {
          right: auto;
          left: 1%;
        }
      }
    }
  }
}
</style>
