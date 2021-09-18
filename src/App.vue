<template>
  <div id="app">
    <on-load />
    <nav-bar />
    <router-view v-slot="{ Component }">
      <transition name="rout" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <main-footer />
  </div>
</template>
<script>
import onLoad from "@/components/global/onLoad.vue";
import NavBar from "@/components/Header/NavBar";
import MainFooter from "@/components/global/MainFooter";
export default {
  components: { NavBar, onLoad, MainFooter },
  mounted() {
    return setInterval(this.$store.commit("updateCartStorage"));
  },
};
</script>
<style lang="scss">
.rout-enter-from,
.rout-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.rout-enter-active,
.rout-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
