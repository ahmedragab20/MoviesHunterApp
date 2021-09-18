<template>
  <div class="slider">
    <!-- Carousel wrapper -->
    <div
      id="carouselBasicExample"
      class="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <!-- Inner -->

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
