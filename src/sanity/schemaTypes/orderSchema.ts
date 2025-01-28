export const orderSchema = {
  name: 'order',
  title: 'Orders',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'email', type: 'string', title: 'Email'},
        {name: 'address', type: 'string', title: 'Address'}
      ]
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'product', type: 'reference', to: [{type: 'product'}]},
          {name: 'quantity', type: 'number'},
          {name: 'price', type: 'number'}
        ]
      }]
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number'
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          'pending',
          'processing',
          'shipped',
          'delivered',
          'cancelled'
        ]
      }
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime'
    }
  ]
}
