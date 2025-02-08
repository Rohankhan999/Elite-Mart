import { createClient } from '@sanity/client'

export const client = createClient({
  projectId:"6izwqnq7",
  dataset: "production",
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
  token:"skdb0PjmOOpQSlKSAFULQL2gvQ0eNFC1vbhs1gCXQTSHWXpglKf7FQBkndwINIUz5qkVYCpGZfo9jjQSBDzOkNzWLRp6VjFUB3wKICWWOHgw4LcueiQbLzKmd0pRovHIZVyU7RKRZtld378GeZfXEhSLqnNUd8sETBZU5hLRDoH7l7FhiVwV",
  perspective: 'published',
  
})
