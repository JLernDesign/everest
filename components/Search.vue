<script setup>
import { useSiteSearch } from "vue-datocms";
import { buildClient } from "@datocms/cma-client-browser";

const runtimeConfig = useRuntimeConfig();
const client = buildClient({ apiToken: runtimeConfig.public.datoCmsToken });

const { state, error, data } = useSiteSearch({
  client,
  query: "benefits",
  buildTriggerId: "36758",
  // optional: by default fuzzy-search is not active
  fuzzySearch: true,
  // optional: you can omit it if you only have one locale, or you want to find results in every locale
  initialState: { locale: "en" },
  // optional: defaults to 8 search results per page
  resultsPerPage: 10,
});

console.log(data.value);
</script>

<template>
  <div>
    <!-- <input type="text" v-model="state.query" />
    <button @click="state.search()">Search</button> -->
  </div>
</template>
