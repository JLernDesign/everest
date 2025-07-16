<script setup>
import gql from "graphql-tag";

const route = useRoute();
const slug = route.params.slug;

const legalQuery = gql`
  query ($slug: String!) {
    legal(filter: { slug: { eq: $slug } }) {
      title
      slug
      _updatedAt
      content
    }
  }
`;

const { data } = await useGraphqlQuery({
  query: legalQuery.loc.source.body,
  variables: {
    slug,
  },
});
const page = data.value.legal;

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";
});
</script>

<template>
  <div class="bg-jaffa">
    <!-- basic hero -->
    <BasicHero
      :data="{ headline: page.title }"
      template="legal"
      class="max-s:pb-[4rem]"
    />

    <!-- content -->
    <Section class="!pt-0 pb-section-bot-mob s:pb-section-bot">
      <div
        class="article bullets mx-auto s:min-h-[80rem] s:max-w-[865px] [&_*+*]:mt-[1.8rem] [&_*+*]:s:mt-[3.2rem] [&_*+h2]:mt-[6rem] [&_*+h2]:s:mt-[9rem] [&_a]:break-all [&_a]:underline [&_a]:underline-offset-[.25rem] [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.25rem] [&_h3+p]:s:mt-[.5rem] [&_h3]:font-helvb [&_ul]:space-y-[1rem]"
      >
        <span v-html="page.content"></span>
      </div>
    </Section>

    <!-- spacer -->
    <div class="h-[5rem] s:h-[26rem]"></div>
  </div>
</template>
