import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _request: NextRequest
) {
  try {
    return NextResponse.json({ message: 'Copa Aluminio endpoint' })
  } catch (err) {
    console.error('Error:', err)
    return NextResponse.json(
      { error: 'Error en Copa Aluminio' },
      { status: 500 }
    )
  }
}