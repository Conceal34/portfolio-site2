import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual domain once you buy one, e.g., 'https://vinner.dev'
  // Or your vercel domain like 'https://vinner-portfolio.vercel.app'
  const baseUrl = 'https://vinner.dev'
  
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
