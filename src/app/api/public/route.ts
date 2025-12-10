import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'FastSubmit Public API',
    version: '1.0.0',
    endpoints: {
      forms: '/api/public/forms/[formId]'
    },
    documentation: 'https://fastsubmit.hostspica.com/docs/api'
  })
}