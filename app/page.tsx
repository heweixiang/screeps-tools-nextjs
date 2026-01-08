import Link from 'next/link'
import { tools } from '@/lib/tools'

export default function Home() {
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.id} 
            href={tool.href === '#' ? '#' : tool.href}
            className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
              tool.href === '#' ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
            }`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(tool.statusColor)}`}>
                  {tool.status}
                </span>
              </div>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}