export default (data) => {
  const runtimeConfig = useRuntimeConfig();
  if (!data.publishDate || !data.intro) {
    if (data.media?.video?.external?.provider == "vimeo") {
      const videoId = data.media.video.external?.providerUid;
      const accessToken = runtimeConfig.public.vimeoAccessToken;
      const fields = "name,link,description,created_time";
      const url = `https://api.vimeo.com/videos/${videoId}?fields=${fields}`;

      const { data: result } = useFetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return result.value;
    }
  }
  return null;
};
