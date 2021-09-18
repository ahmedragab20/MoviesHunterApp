<template>
  <div class="tv">
    <transition appear name="tv">
      <section class="popular">
        <Title :msg="msg" />
        <div class="row">
          <div
            class="col-md-4 col-lg-3 my-2"
            v-for="show in shows"
            :key="show.id"
          >
            <popular-shows :show="show" />
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Title from "@/components/global/Title";
import PopularShows from "@/components/Tv/PopularShows";
import axios from "axios";

export default {
  name: "TV",
  components: { PopularShows, Title },
  data() {
    return {
      msg: "popular TV Shows",
      shows: [],
      baseURL:
        "https://api.themoviedb.org/3/tv/popular?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963&language=en-US&page=1",
    };
  },
  mounted() {
    axios(this.baseURL)
      .then((res) => {
        this.shows = res.data.results;
        console.log(this.shows);
      })
      .catch((err) => console.error(err));
  },
};
</script>
<style lang="scss" scoped>
.tv-enter-from,
.tv-leave-to {
  opacity: 0;
}
.tv-enter-active,
.tv-leave-active {
  transition: all 1s ease-in-out;
}
</style>
