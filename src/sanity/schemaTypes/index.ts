import { type SchemaTypeDefinition } from 'sanity';
import ProductSchema from './product';
import { orderSchema } from './orderSchema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema, orderSchema],
}
