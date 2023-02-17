import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
  const body = await request.formData();

  const secretKey = import.meta.env.TURNSTILE_KEY;
  const token = body.get('cf-turnstile-response');
	const ip = request.headers.get('CF-Connecting-IP');

	let formData = new FormData();
	formData.append('secret', String(secretKey));
	formData.append('response', String(token));
	formData.append('remoteip', String(ip));

	const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(url, {
		body: formData,
		method: 'POST',
	});

	const json = await result.json();
	return new Response(json)
}