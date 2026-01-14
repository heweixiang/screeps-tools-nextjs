import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('X-Token')
    if (!token) {
      return NextResponse.json({ ok: 0, error: 'Missing API Token' }, { status: 401 })
    }

    const body = await request.json()
    const { path, shard } = body

    // 构建查询参数
    const queryParams = new URLSearchParams()
    if (path) queryParams.append('path', path)
    if (shard) queryParams.append('shard', shard)

    const url = `https://screeps.com/api/user/memory?${queryParams.toString()}`

    // 设置超时控制 (30秒)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)

    try {
      // 直接使用 fetch 而不是 screeps-simple-api
      // 原因是 screeps-simple-api 在 401 时会无限重试导致请求挂起
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Token': token,
          'X-Username': token, // 关键：Screeps API 需要 X-Username 也设置为 Token
          'Content-Type': 'application/json; charset=utf-8'
        },
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      // 明确处理 401
      if (response.status === 401) {
        return NextResponse.json({ ok: 0, error: 'Invalid API Token' }, { status: 401 })
      }

      if (!response.ok) {
        const errorText = await response.text()
        return NextResponse.json(
          { ok: 0, error: `Screeps API Error: ${response.status}`, details: errorText },
          { status: response.status }
        )
      }

      const data = await response.json()
      
      // 直接返回数据，让前端处理解压 (data 可能包含 "gz:..." 字符串)
      return NextResponse.json(data)

    } catch (fetchError: any) {
      clearTimeout(timeoutId)
      if (fetchError.name === 'AbortError') {
        return NextResponse.json({ ok: 0, error: 'Request timed out' }, { status: 504 })
      }
      throw fetchError
    }

  } catch (error: any) {
    console.error('Memory Proxy Error:', error)
    return NextResponse.json(
      { ok: 0, error: error.message || 'Internal Proxy Error' },
      { status: 500 }
    )
  }
}
