import { NextRequest, NextResponse } from 'next/server'
import { runNexus } from '../../../../lib/nexus/runner'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()
    if (!prompt) return NextResponse.json({ error: 'prompt required' }, { status: 400 })
    const result = await runNexus(prompt)
    return NextResponse.json(result)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
