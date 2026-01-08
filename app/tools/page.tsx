import Link from 'next/link'
import { tools } from '@/lib/tools'

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            工具列表
          </h1>
          <p className="mt-3 text-gray-400">
            共 {tools.length} 个工具可用
          </p>
        </div>
      </div>

      {/* 工具列表 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-4">
          {tools.map((tool) => (
            <Link 
              key={tool.id} 
              href={tool.href === '#' ? '#' : tool.href}
              className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 ${
                tool.href === '#' 
                  ? 'cursor-not-allowed opacity-60' 
                  : 'cursor-pointer hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <div className="flex items-center p-6">
                {/* 左侧装饰条 */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${
                  tool.statusColor === 'green' 
                    ? 'from-green-500 to-emerald-500' 
                    : tool.statusColor === 'blue'
                    ? 'from-blue-500 to-cyan-500'
                    : 'from-gray-500 to-gray-600'
                }`} />
                
                <div className="flex-1 ml-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      tool.statusColor === 'green' 
                        ? 'bg-green-500/20 text-green-400' 
                        : tool.statusColor === 'blue'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {tool.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>

                {/* 右侧箭头 */}
                {tool.href !== '#' && (
                  <div className="ml-4 text-gray-500 group-hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}