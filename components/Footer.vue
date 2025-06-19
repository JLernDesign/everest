<script setup>
const props = defineProps(["menu", "data"]);
const investors = useState("investors", () => props.data.investors);
</script>

<template>
  <footer class="main relative">
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
            <p
              v-if="data.description"
              v-html="formatText(data.description)"
            ></p>
            <div class="mt-side flex items-center justify-between">
              <CtaGroup
                v-if="data.footerCta"
                :data="data.footerCta.buttons"
                :align="left"
                theme="dark"
              />
              <ul
                v-if="data.socialMedia"
                class="social flex items-end space-x-[2.5rem]"
              >
                <li v-for="item in data.socialMedia">
                  <a :href="item.url" target="_blank">
                    <SocialLinkedin
                      v-if="item.platform == 'linkedin'"
                      class="fill-red"
                    />
                    <SocialYoutube
                      v-if="item.platform == 'youtube'"
                      class="fill-red"
                    />
                  </a>
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
              Explore Everest
            </h3>

            <!-- menu -->
            <FooterMenu :data="menu.main" />
          </div>
        </div>

        <!-- contact -->
        <div class="col w-[45.5%] pl-[5rem]">
          <h3 class="font-barlow-cond text-[2.1rem] uppercase text-red">
            Contact
          </h3>
          <div
            v-if="data.locations"
            class="relative mt-side columns-2 space-y-[3rem]"
          >
            <div v-for="item in data.locations">
              <span class="font-helvh">{{ item.location }}</span
              ><br />
              <span v-html="formatText(item.address)"></span>
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
        <div
          v-if="data.badges"
          class="absolute -top-1/2 right-0 flex space-x-[2rem]"
        >
          <img
            v-for="item in data.badges"
            :src="item.url"
            alt=""
            class="h-[6.8rem] w-auto"
          />
        </div>
      </div>

      <!-- close footer details -->
    </div>
  </footer>
</template>

<style scoped></style>
