import Link from 'next/link'
import { tools } from '@/lib/tools'

export default function ToolsPage() {
  const getStatusColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-800'
      case 'green':
        return 'bg-green-100 text-green-800'
      case 'gray':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">工具列表</h1>

      <div className="space-y-4">
        {tools.map((tool) => (
          <Link 
            key={tool.id} 
            href={tool.href === '#' ? '#' : tool.href}
            className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow block ${
              tool.href === '#' ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(tool.statusColor)}`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}