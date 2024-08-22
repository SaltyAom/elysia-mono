async function handler(request: Request) {
    let path = new URL(request.url).pathname
    path = path.slice(4) ?? '/'

    return fetch(`${process.env.proxy ?? 'http://127.0.0.1:3001'}${path}`, {
        next: {
            revalidate: 0
        },
        method: request.method,
        headers: request.headers,
        body: request.method !== 'GET' ? await request.arrayBuffer() : undefined
    })
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
export const HEAD = handler
export const OPTIONS = handler
