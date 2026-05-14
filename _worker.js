export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  if (url.pathname === '/index.wasm') {
    return await fetch('https://cdn.jsdelivr.net/gh/KimkeLee/shuaimao@master/index.wasm', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
  
  return await context.next();
}