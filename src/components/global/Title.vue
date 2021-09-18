<template>
  <div class="title my-4">
    <div class="container-fluid">
      <h5 class="d-none d-sm-block text-uppercase">{{ msg }}</h5>
      <h6 class="d-block d-sm-none text-uppercase">{{ msg }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style lang="scss" scoped>
.title {
  color: #db902e;
}
</style>
