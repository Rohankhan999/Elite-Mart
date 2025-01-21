// lib/sanityClient.js

import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Your dataset (e.g. "production")
  apiVersion: '2024-01-01', // Use the current UTC date (YYYY-MM-DD)
  useCdn: true, // `false` if you want to ensure fresh data
})
