<script setup>
// Dato CMS Query
const QUERY = /* GraphQL */ `
  query {
    global {
      globalCta {
        title
        url
        target
      }
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
const ctas = toRaw(data.value).global.globalCta;
</script>

<template>
  <nav>
    <ul class="cta-nav">
      <li v-for="item in ctas">
        <CtaBtn :href="item.url" theme="lt" size="sm" :target="item.target">{{
          item.title
        }}</CtaBtn>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.cta-nav {
  position: absolute;
  right: 0px;
  top: 30px;
  li {
    display: inline-block;
    + li {
      margin-left: 12px;
    }
  }
}
</style>
