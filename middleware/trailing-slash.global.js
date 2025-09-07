export default defineNuxtRouteMiddleware((to, from) => {
  // Exclude the root path "/" and paths already ending with a slash
  if (to.path === "/" || to.path.endsWith("/") || to.query.q) {
    //console.log("no redirect");
    return;
  }

  // Construct the new path with a trailing slash
  const nextPath = to.path + "/";

  // Redirect using navigateTo with a 308 Permanent Redirect status code
  return navigateTo(
    { path: nextPath, query: to.query, hash: to.hash },
    { redirectCode: 308 },
  );
});
