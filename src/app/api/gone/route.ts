import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      error: 'Gone',
      message: 'This resource has been permanently removed and is no longer available.',
      status: 410,
      timestamp: new Date().toISOString()
    }),
    {
      status: 410,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year since it's gone
      },
    }
  )
}

export async function POST() {
  return new NextResponse(
    JSON.stringify({
      error: 'Gone',
      message: 'This resource has been permanently removed and is no longer available.',
      status: 410,
      timestamp: new Date().toISOString()
    }),
    {
      status: 410,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000',
      },
    }
  )
}

export async function PUT() {
  return new NextResponse(
    JSON.stringify({
      error: 'Gone',
      message: 'This resource has been permanently removed and is no longer available.',
      status: 410,
      timestamp: new Date().toISOString()
    }),
    {
      status: 410,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000',
      },
    }
  )
}

export async function DELETE() {
  return new NextResponse(
    JSON.stringify({
      error: 'Gone',
      message: 'This resource has been permanently removed and is no longer available.',
      status: 410,
      timestamp: new Date().toISOString()
    }),
    {
      status: 410,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000',
      },
    }
  )
}