This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# E-commerce Furniture Store

A modern e-commerce platform(Elite Mart) built with Next.js 13, Tailwind CSS, and Sanity CMS.

## Features

- Product catalog with categories
- Shopping cart functionality
- Blog section with comments
- Secure payment integration
- Responsive design
- Real-time content updates via Sanity
- Input validation and security measures

## Tech Stack

- Next.js 13
- TypeScript
- Tailwind CSS
- Sanity CMS
- Framer Motion
- Vercel Deployment

## Project Structure

```bash
my-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── shopCurt/
│   │   ├── shopLeftSidebar/
│   │   └── singleblog/
│   ├── sanity/
│   │   ├── lib/
│   │   └── schemaTypes/
│   └── utils/
└── public/
```

## Deployment Steps

 1. Set up a Sanity project and connect it to your Next.js app.
 ```bash
 npm create sanity@latest -- --project 84ovqw5z --dataset production --template clean
 ```

 2. Configure Environment Variables:
 ```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

3. Deploy to Vercel:

## Performance Testing Result

- GTmetrix Score: 
![Screenshot](https://github.com/MrAfoo/Elite-Mart/blob/master/public/test-report.png?raw=true)
 
![Screenshot](https://github.com/MrAfoo/Elite-Mart/blob/master/public/test-report1.png?raw=true) 

## Security Measures

-Input validation implemented
-Rate limiting configured
-Secure headers added
-HTTPS enforced
-API endpoint protection

## Data Import Process

Successfully imported product data using custom script with:

- Image upload to Sanity
- Data transformation
- Schema validation

## Testing Coverage

- Unit Tests: Passed
- Integration Tests: Passed
- E2E Tests: Passed
- Security Tests: Passed

## Future Enhancements

- Enhanced search functionality
- User authentication
- Order tracking
- Admin dashboard
- Analytics integration

## Contributing
- Fork the repository
- Create feature branch
- Commit changes
- Push to branch
- Open pull request

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
