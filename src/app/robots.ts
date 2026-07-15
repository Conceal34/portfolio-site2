import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Replace with your actual domain when you deploy!
  const baseUrl = 'https://vinner.dev'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
