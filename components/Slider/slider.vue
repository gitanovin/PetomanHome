<template>
  <section id="advertising" class="mb-28" aria-label="carousel-heading">
    <Splide
      :options="{
        perPage: 1,
        perMove: 1,
        type: 'loop',
        direction: 'rtl',
        gap: '2rem',
        padding: '10rem',
        focus: 'center',
        breakpoints: {
          400: {
            perPage: 1,
            padding: '3rem',
            gap: '1rem',
          },
          640: {
            perPage: 1,
            padding: '3rem',
            gap: '1rem',
          },
        },
      }"
    >
      <SplideSlide class="splide__slide rounded-lg">
        <img src="assets/images/b1.jpg" class="w-full rounded-lg" />
      </SplideSlide>
      <SplideSlide class="splide__slide rounded-lg">
        <img src="assets/images/b2.jpg" class="w-full rounded-lg" />
      </SplideSlide>
      <SplideSlide class="splide__slide rounded-lg">
        <img src="assets/images/b3.jpg" class="w-full rounded-lg" />
      </SplideSlide>
    </Splide>
  </section>
</template>
