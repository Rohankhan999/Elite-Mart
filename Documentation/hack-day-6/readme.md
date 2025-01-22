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

## Git Commands:
```bash
git init
```
```bash
git add .
```
```bash
git commit -m "Initial commit"
```
```bash
git branch -M main
```
```bash
git remote add origin https://github.com/yourusername/your-repo.git
```
```bash
git push -u origin main
```

## Vercel Deployment Commands:
```bash
vercel login
```
```bash
vercel
```

## For production deployment:
```bash
vercel --prod
```

## Performance Testing Result

- GTmetrix Score: 
![Screenshot](../../public/test-report.png)

![Screenshot](../../public/test-report1.png)

