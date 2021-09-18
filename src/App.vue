<template>
  <div id="app">
    <nav-bar />
    <router-view v-slot="{ Component }">
      <transition name="rout" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import NavBar from "@/components/Header/NavBar";
export default {
  components: { NavBar },
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
