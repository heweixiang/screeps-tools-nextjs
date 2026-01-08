export interface Tool {
  id: string
  name: string
  description: string
  status: string
  statusColor: 'blue' | 'green' | 'gray'
  href: string
}

export const tools: Tool[] = [
  {
    id: 'test',
    name: '测试工具',
    description: '占位的测试工具，用于展示工具的基本结构。',
    status: '开发中',
    statusColor: 'blue',
    href: '/tools/test'
  },
  {
    id: 'another',
    name: '另一个工具',
    description: '占位测试工具，展示不同状态的工具卡片。',
    status: '即将上线',
    statusColor: 'green',
    href: '#'
  },
  {
    id: 'planned',
    name: '计划中的工具',
    description: '计划中的工具，尚未开始开发。',
    status: '规划中',
    statusColor: 'gray',
    href: '#'
  }
]