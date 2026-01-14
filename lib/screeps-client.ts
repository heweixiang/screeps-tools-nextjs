export class ScreepsApiClient {
  private token?: string
  private shard: string

  constructor(shard: string = 'shard0', token?: string) {
    this.token = token
    this.shard = shard
  }

  async executeConsoleCommand(command: string, shard?: string): Promise<any> {
    if (!this.token) {
      throw new Error('需要 API Token 才能执行控制台命令')
    }

    // 通过 Next.js API 代理请求
    const response = await fetch('/api/console', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': this.token
      },
      body: JSON.stringify({ 
        expression: command,
        shard: shard || this.shard
      })
    })
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `API 请求失败: ${response.status}`)
    }
    
    return response.json()
  }
}
