<script setup></script>

<template>
  <footer class="main relative">
    <!-- lockup -->
    <div class="footer-lockup relative">
      <UITexture />

      <!-- callout -->
      <GlobalCallout />

      <div class="relative pb-6 pt-[2.5rem]">
        <div class="p-side-mob s:p-side">
          <!-- brands -->
          <Brands
            theme="dark"
            :data="{
              title: 'Investors',
              logos: [
                '/logos/sutter-hill.svg',
                '/logos/altimeter.png',
                '/logos/redpoint.png',
                '/logos/dl.svg',
              ],
            }"
          />

          <!-- logo -->
          <NuxtLink to="/" class="mt-[15rem] block h-[8.1rem] w-[9.4rem]">
            <IconLogo color="white" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- footer details -->
    <div class="footer-details relative bg-shadowblue p-side-mob s:p-side">
      <UIJagEdge color="fill-shadowblue" />

      <!-- columns -->
      <div
        class="flex divide-x-1 divide-darkline border-r-1 border-r-darkline text-body-sm leading-sm text-white"
      >
        <!-- text -->
        <div class="col w-[32.5%] pr-[5rem]">
          <div class="max-w-[43.5rem]">
            <p>
              Everest is an intelligent, AI-powered platform that replaces
              outdated systems, streamlines operations, cuts costs, and unlocks
              real-time insights for faster, smarter growth.
            </p>
            <div class="mt-side flex items-center justify-between">
              <div class="btn-group space-x-btn">
                <CtaBtn to="#">Contact</CtaBtn>
                <TextBtn to="#" color="white">Sign In</TextBtn>
              </div>
              <ul class="social flex items-end space-x-[2.5rem]">
                <li>
                  <a href="#"><SocialLinkedin class="fill-red" /></a>
                </li>
                <li>
                  <a href="#"><SocialYoutube class="fill-red" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- links -->
        <div class="col w-[22.5%] px-[5rem]">
          <div class="group">
            <!-- title -->
            <h3 class="font-barlow-cond text-[2.1rem] uppercase text-red">
              Explore EVEREST
            </h3>

            <!-- menu -->
            <FooterMenu />
          </div>
        </div>

        <!-- contact -->
        <div class="col w-[45.5%] pl-[5rem]">
          <h3 class="font-barlow-cond text-[2.1rem] uppercase text-red">
            Contact
          </h3>
          <div class="relative mt-side columns-2 space-y-[3rem]">
            <div>
              <span class="text-red">North America</span><br />
              280 Hope Street<br />
              Mountain View, CA 94041
            </div>
            <div>
              <span class="text-red">Germany</span><br />
              Max-Jarecki-Straße 21, 69115<br />
              Heidelberg, Germany
            </div>
            <div>
              <span class="text-red">North America</span><br />
              280 Hope Street<br />
              Mountain View, CA 94041
            </div>
            <div>
              <span class="text-red">Germany</span><br />
              Max-Jarecki-Straße 21, 69115<br />
              Heidelberg, Germany
            </div>

            <div
              class="div-line absolute left-1/2 top-0 !mt-0 -ml-side h-full w-0 border-l-1 border-l-darkline"
            ></div>
          </div>
        </div>
      </div>

      <!-- legal -->
      <div class="legal relative mt-[15rem] text-body-xsm text-white">
        <ul class="flex items-center space-x-5">
          <li><NuxtLink to="/">Privacy Policy</NuxtLink></li>
          <li>•</li>
          <li>© 2025 Everest Systems, Inc</li>
        </ul>
        <div class="mt-5 text-[#6E7174]">
          Design: <a href="https://griflan.com" target="_blank">Griflan</a>
        </div>
        <div class="absolute -top-1/2 right-0 flex space-x-[2rem]">
          <img src="/public/logos/aws.png" alt="" class="w-[6.2rem]" />
          <img src="/public/logos/aicpa.png" alt="" class="w-[7.4rem]" />
        </div>
      </div>

      <!-- close footer details -->
    </div>
  </footer>
</template>

<style scoped></style>
