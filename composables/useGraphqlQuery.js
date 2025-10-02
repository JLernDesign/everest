export default (options) => {
  const { query, variables = {} } = options;
  const runtimeConfig = useRuntimeConfig();
  console.log(runtimeConfig.public.NUXT_ENV, process.env.NODE_ENV);

  // Create a reactive key that includes the variables
  const key = computed(() => {
    const vars = toValue(variables);
    return JSON.stringify({
      query,
      variables: vars,
    });
  });

  const result = useFetch("https://graphql.datocms.com", {
    key,
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.datoCmsToken}`,
      ...(runtimeConfig.public.NUXT_ENV == "staging" && {
        "X-Environment": "staging",
      }),
      ...(runtimeConfig.public.NUXT_ENV !== "production" && {
        "X-Include-Drafts": true,
      }),
    },
    body: computed(() => {
      const vars = toValue(variables);
      return {
        query,
        variables: vars,
      };
    }),
    watch: [key], // Explicitly watch the key for changes
    transform: ({ data, errors }) => {
      if (errors) throw new errors();

      return data;
    },
  });

  return result;
};
