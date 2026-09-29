import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'
import { ObjectId } from 'mongodb'

// Force dynamic so Next.js doesn't cache the API permanently
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('portfolio')
    const projects = await db.collection('projects').find({}).sort({ order: 1, createdAt: -1 }).toArray()
    
    // Map _id to id for frontend compatibility
    const formattedProjects = projects.map(p => ({
      ...p,
      id: p._id.toString(),
      _id: undefined
    }))
    
    return NextResponse.json(formattedProjects)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const client = await clientPromise
    const db = client.db('portfolio')
    
    // Validate required fields
    if (!data.proj_name || !data.description || !data.project_link || !data.category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const newProject = {
      ...data,
      createdAt: new Date(),
    }

    const result = await db.collection('projects').insertOne(newProject)
    
    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
