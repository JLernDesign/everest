<script setup>
import { useSiteSearch } from "vue-datocms";
import { buildClient } from "@datocms/cma-client-browser";

const runtimeConfig = useRuntimeConfig();
const client = buildClient({ apiToken: runtimeConfig.public.datoCmsToken });

const { state, error, data } = useSiteSearch({
  client,
  buildTriggerId: "36758",
  // optional: by default fuzzy-search is not active
  fuzzySearch: true,
  // optional: you can omit it if you only have one locale, or you want to find results in every locale
  initialState: { locale: "en" },
  // optional: defaults to 8 search results per page
  resultsPerPage: 100,
});

const rawResults = ref(null);
/* rawResults.value = await client.searchResults.list({
  filter: { query: "benefits" },
});
console.log(rawResults.value); */
/* async function run() {
  const client = buildClient({ apiToken: runtimeConfig.public.datoCmsToken });

  // iterates over every page of results
  for await (const searchResult of client.searchResults.listPagedIterator({
    filter: { query: "benefits" },
  })) {
    // Check the 'Returned output' tab for the result ☝️
    console.log(searchResult);
  }
}
run(); */

//console.log(data.value);

async function doSearch() {
  rawResults.value = await client.searchResults.list({
    filter: { query: state.query },
  });
  console.log(rawResults.value);
}
</script>

<template>
  <div class="search absolute right-0 top-0 z-[50]">
    <input type="text" v-model="state.query" />
    <button @click="doSearch()">Search</button>
  </div>
</template>
