import { client } from '../../../sanity/lib/client';

export async function POST(req: Request) {
    const orderData = await req.json();
    
    const result = await client.create(orderData);
    
    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}
