import type { MaybeRefOrGetter } from "vue";
import type { AsyncData, NuxtError } from "nuxt/app";

type GraphqlQueryOptions = {
  query: string;
  variables?: MaybeRefOrGetter<Record<string, unknown>>;
};

type GraphqlResponse<T> = {
  data: T;
  errors?: unknown;
};

export default function useGraphqlQuery<T>(
  options: GraphqlQueryOptions,
): AsyncData<T | null, NuxtError<unknown> | null> {
  const { query, variables = {} } = options;
  const runtimeConfig = useRuntimeConfig();

  const key = computed(() => {
    const vars = toValue(variables);
    return JSON.stringify({
      query,
      variables: vars,
    });
  });

  return useFetch<GraphqlResponse<T>>("https://graphql.datocms.com", {
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
    watch: [key],
    transform: (response): T => {
      if (response.errors) throw response.errors;

      return response.data;
    },
  }) as AsyncData<T | null, NuxtError<unknown> | null>;
}
