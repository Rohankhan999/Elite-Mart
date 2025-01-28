import { client } from '../../../sanity/lib/client';

export async function POST(req: Request) {
    const orderData = await req.json();
    
    // Add _type and timestamp to the order
    const order = {
        _type: 'order',
        orderDate: new Date().toISOString(),
        ...orderData
    };
   
    const result = await client.create(order);
   
    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}
