export default async (data) => {
  const runtimeConfig = useRuntimeConfig();
  //console.log("run check for Vimeo data");

  if (!data.publishDate || !data.intro || !data.media.image) {
    if (data.media?.video?.external?.provider == "vimeo") {
      //console.log("get Vimeo data");
      const videoId = data.media.video.external?.providerUid;
      const accessToken = runtimeConfig.public.vimeoAccessToken;
      const fields = "name,link,description,created_time,pictures.base_link";
      const url = `https://api.vimeo.com/videos/${videoId}?fields=${fields}`;

      const { data: result } = await useFetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      //console.log("Vimeo data:", result.value);
      return result.value;
    }
  }
  return null;
};
