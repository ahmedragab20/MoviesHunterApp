<template>
  <div class="popular-shows">
    <div class="container-fluid">
      <div class="show position-relative overflow-hidden">
        <div class="show-container rounded-3 overflow-hidden">
          <div class="rate position-absolute top-0 p-2">
            {{ show.vote_average.toFixed(1) }} <i class="bi-star-fill"></i>
          </div>
          <router-link :to="'/showPage/' + show.id">
            <div class="poster">
              <img
                :src="showPoster"
                width="300"
                class="img-fluid rounded-3"
                :alt="show.original_name"
              />
              <div class="gen position-absolute bottom-0 p-2">
                <!-- <span>Drama, Crime, Comedy</span> -->
                <span>{{ show.original_language }}</span>
              </div>
            </div>
          </router-link>
          <div class="details p-2 position-absolute bottom-0">
            <h5 class="text-capitalize my-2">{{ show.original_name }}</h5>
            <p class="text-muted">
              {{ show.overview.substring(1, 200) }}...
              <span
                class="text-muted text-decoration-underline"
                @click="readmore"
                >readmore</span
              >
            </p>
            <figure
              class="
                d-flex
                justify-content-between
                align-items-center
                text-muted text-muted
                px-1
              "
            >
              <!-- <span>Drama, Crime, Comedy</span> -->
              <span>[{{ show.first_air_date }}]</span>
              <div class="play">
                <router-link
                  :to="'/showPage/' + show.id"
                  class="text-muted text-decoration-none"
                >
                  <i
                    class="bi-play-circle d-flex flex-column align-items-center"
                  >
                    <span class="play-now">View show</span>
                  </i>
                </router-link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      required: true,
    },
  },
  computed: {
    showPoster() {
      return "https://image.tmdb.org/t/p/w500" + this.show.poster_path;
    },
  },
};
</script>

<style lang="scss" scoped>
.popular-shows {
  .rate {
    background-color: #db902e;
    box-shadow: 3px 3px #111;
    color: #111;
    left: 0;
    border-radius: 5px 0 0 0;
  }
  .show-container {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.178);
    &:hover {
      .details {
        transform: translateY(0%);
      }
    }

    .poster {
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 10px 10px 10px rgba(17, 17, 17, 0.25),
          -10px -10px 10px rgba(17, 17, 17, 0.25);
      }
      .gen {
        background-color: #db902e;
        box-shadow: -3px -3px #111;
        color: #111;
        writing-mode: vertical-lr;
        right: 0;
        border-radius: 0 0 5px 0;
      }
    }
    .details {
      background-color: #111;
      box-shadow: 0 -10px 10px rgba(17, 17, 17, 0.25);
      border-radius: 0 0 3px 3px;
      transform: translateY(100%);
      transition: all 0.5s ease-in-out;
      width: 100%;
      left: 0;
      p {
        font-size: 0.75rem;

        span {
          cursor: pointer;
        }
      }
      span {
        font-size: 0.6rem;
      }
      figure {
        .play {
          i {
            font-size: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
              transform: translateY(-5px);
            }

            span {
              font-style: normal;
            }
          }
        }
      }
    }
  }
}
</style>
