<template>
  <section class="w-full lg:max-w-screen-xl lg:mx-auto relative mb-16">
    <div class="relative overflow-hidden my-6 lg:px-0">
      <div
        class="block-title flex items-center justify-between my-16 lg:px-0 lg:mx-0 mx-8"
      >
        <div
          class="title text-2xl font-semibold border-r-8 pr-4 border-orange-500"
        >
          پت دانیم
        </div>
        <a
          href=""
          class="view_more flex items-center pr-2 md:text-md"
          title="مقالات"
          >مشاهده همه<svg
            class="svg-icon"
            aria-hidden="true"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            ></path></svg
        ></a>
      </div>

      <div class="News" id="blog">
        <Splide
          :options="{
            perPage: 3,
            perMove: 1,
            type: 'loop',
            direction: 'rtl',
            gap: '2rem',

            focus: 'center',
            breakpoints: {
              400: {
                perPage: 1,
                padding: '1rem',
                gap: '3rem',
              },
              640: {
                perPage: 2,
                padding: '3rem',
                gap: '1rem',
              },
              768: {
                perPage: 3,
                gap: '1rem',
                padding: '3rem',
              },
              1280: {
                perPage: 3,
                gap: '1rem',
                padding: '8rem',
              },
            },
          }"
        >
          <SplideSlide class="splide__slide rounded-lg">
            <article
              class="splide__slide bg-white rounded-md shadow-md shadow-gray-300/40 group overflow-hidden relative h-[250px] lg:h-[450px] swiper-slide before:bg-gradient-to-t before:from-black before:to-black/10 before:absolute before:bottom-0 before:w-full before:h-44 before:z-0"
              aria-label="18 / 20"
            >
              <a href="">
                <div class="mask relative shadow-md shadow-gray-300/40 h-full">
                  <img
                    class="object-cover h-full w-full"
                    src="assets/images/petosh.webp"
                  />
                </div>
              </a>
              <div
                class="z-10 absolute w-full bg-black/20 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden lg:block"
              >
                <div
                  class="flex justify-between items-center py-2 px-4 text-sm w-full"
                >
                  <a
                    href="https://linkutag.com/mag/home/"
                    class="cursor-pointer group-hover:text-white"
                    >اطلاعات بیشتر</a
                  >
                  <span class="flex gap-3 social tops">
                    <a
                      href="https://twitter.com/intent/tweet?url=https://linkutag.com/mag/home/&amp;description=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                      class="text-sm group-hover:text-black text-white"
                      ><svg
                        class="svg-icon"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
                        ></path></svg
                    ></a>
                    <a
                      class="text-sm group-hover:text-white text-white"
                      href="https://www.facebook.com/sharer/sharer.php?u=https://linkutag.com/mag/home/&amp;t=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                      onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                      target="_blank"
                      title="Share on Facebook"
                    >
                      <svg
                        class="svg-icon"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"
                        ></path></svg
                    ></a>

                    <a
                      href="https://www.instagram.com/?url=https://linkutag.com/mag/home/"
                      target="_blank"
                      rel="noopener"
                    >
                      <svg
                        class="svg-icon"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"
                        ></path></svg
                    ></a>

                    <a
                      href="https://t.me/share/url?url=https://linkutag.com/mag/home/&amp;text=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                      class="text-sm group-hover:text-black text-white"
                      ><svg
                        class="svg-icon"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
                          fill="%23ffffff"
                        ></path></svg
                    ></a>

                    <a
                      href="https://wa.me/?text=https://linkutag.com/mag/home/&amp;description=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                      class="text-sm group-hover:text-black text-white"
                      ><svg
                        class="svg-icon"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                        ></path></svg
                    ></a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://linkutag.com/mag/home/"
                      class="text-sm group-hover:text-black text-white"
                      ><svg
                        class="svg-icon"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"
                        ></path></svg
                    ></a>
                  </span>
                </div>
              </div>

              <div
                class="absolute w-full bottom-0 opacity-100 transition-all duration-300"
              >
                <div class="caption p-6">
                  <h2 class="text-md text-white font-bold">
                    <a href="https://linkutag.com/mag/home/"
                      >راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه
                      کنید</a
                    >
                  </h2>
                  <span
                    class="items-center gap-6 pt-2 text-white hidden lg:flex"
                    ><span class="text-xs">
                      <span class="byline">
                        <span class="author vcard"
                          ><a
                            class="font-semibold text-gray-200 text-sm url fn n"
                            href="https://linkutag.com/mag/author/alish/"
                            >تیم تحریریه لینکو
                          </a></span
                        ></span
                      > </span
                    ><span class="text-xs">۴:۱۴ ب.ظ</span></span
                  >
                  <div class="text-white py-4 hidden lg:block">
                    <p>
                      در حالی که خرید مسکن یکی از بزرگترین تصمیمات مالی زندگی
                      است، هیجان انگیز و در عین حال پر ریسک است. با توجه به
                      اینکه […]
                    </p>
                  </div>
                </div>

                <div
                  class="flex justify-between items-center border-t border-gray-50/10 py-2 px-4 text-sm group-hover:bottom-0 group-hover:opacity-0 text-white hidden lg:flex w-full"
                >
                  <span class="flex">
                    <a
                      href="https://linkutag.com/mag/home/"
                      class="cursor-pointer group-hover:text-white"
                      >اطلاعات بیشتر</a
                    ></span
                  ><span>۲۴ بازدید</span>
                </div>

                <div
                  class="flex justify-between items-center mt-3 lg:hidden flex mb-0 px-4 bg-black/60 w-full py-3"
                >
                  <span
                    class="inline-flex items-center text-xs leading-none text-gray-400"
                  >
                    1 ماه پیش</span
                  >

                  <span
                    class="inline-flex lg:hidden items-center text-sm leading-none text-gray-400 cursor-pointer shared"
                    id="2222"
                    onclick="doShare4('2222' , 'راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید' , 'https://linkutag.com/mag/?p=2222')"
                  >
                    <svg
                      class="svg-icon"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path
                        d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"
                      ></path></svg
                  ></span>

                  <a
                    class="share-button hidden lg:block shared"
                    title="Share this article"
                  >
                    <svg
                      class="svg-icon"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path
                        d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"
                      ></path>
                    </svg>
                  </a>

                  <div class="share-dialog close-button hidden lg:block">
                    <div class="link">
                      <span class="flex gap-3 social">
                        <a
                          href="https://twitter.com/intent/tweet?url=https://linkutag.com/mag/home/&amp;description=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                          class="text-sm group-hover:text-black text-white"
                          ><svg
                            class="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
                            ></path></svg
                        ></a>
                        <a
                          class="text-sm group-hover:text-white text-white"
                          href="https://www.facebook.com/sharer/sharer.php?u=https://linkutag.com/mag/home/&amp;t=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                          onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                          target="_blank"
                          title="Share on Facebook"
                        >
                          <svg
                            class="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"
                            ></path></svg
                        ></a>

                        <a
                          href="https://www.instagram.com/?url=https://linkutag.com/mag/home/"
                          target="_blank"
                          rel="noopener"
                        >
                          <svg
                            class="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"
                            ></path></svg
                        ></a>

                        <a
                          href="https://t.me/share/url?url=https://linkutag.com/mag/home/&amp;text=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                          class="text-sm group-hover:text-black text-white"
                          ><svg
                            class="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
                              fill="%23ffffff"
                            ></path></svg
                        ></a>

                        <a
                          href="https://wa.me/?text=https://linkutag.com/mag/home/&amp;description=راهنمایی خرید مسکن ، نکات مهمی که باید به آنها توجه کنید"
                          class="text-sm group-hover:text-black text-white"
                          ><svg
                            class="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                            ></path></svg
                        ></a>
                        <a
                          href="https://www.linkedin.com/sharing/share-offsite/?url=https://linkutag.com/mag/home/"
                          class="text-sm group-hover:text-black text-white"
                          ><svg
                            class="svg-icon"
                            aria-hidden="true"
                            role="img"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"
                            ></path></svg
                        ></a>
                      </span>
                      <input
                        class="pen-url"
                        id="myInput"
                        value="https://linkutag.com/mag/?p=2222 "
                      />
                      <a class="copy-link pl-2" onclick="myFunction()">
                        <svg
                          class="svg-icon"
                          aria-hidden="true"
                          role="img"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="19"
                          height="19"
                        >
                          <path
                            fill="%23fff"
                            d="M7.2 6.4a.756.756 0 0 1 .8-.8h6.4V.8a.756.756 0 0 0-.8-.8h-12a.756.756 0 0 0-.8.8v14.4a.756.756 0 0 0 .8.8h5.6z"
                          ></path>
                          <path
                            d="M17.6 7.2h-8a.756.756 0 0 0-.8.8v10.4a.756.756 0 0 0 .8.8h8a.756.756 0 0 0 .8-.8V8a.756.756 0 0 0-.8-.8z"
                          ></path></svg
                      ></a>
                      <div
                        class="close-button cursor-pointer text-xs text-white"
                      >
                        بستن
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>
