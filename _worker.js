export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  if (url.pathname === '/index.wasm') {
    return await fetch('https://match3-game-assets.s3.amazonaws.com/index.wasm', request);
  }
  
  return await context.next();
}