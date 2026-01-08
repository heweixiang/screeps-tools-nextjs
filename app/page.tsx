import Link from 'next/link'
import { tools } from '@/lib/tools'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              Screeps 工具箱
            </h1>
            <p className="text-lg text-gray-400">
              为 Screeps 玩家打造的实用工具集合
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => (
            <Link 
              key={tool.id} 
              href={tool.href === '#' ? '#' : tool.href}
              className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 ${
                tool.href === '#' 
                  ? 'cursor-not-allowed opacity-60' 
                  : 'cursor-pointer hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1'
              }`}
            >
              {/* 卡片顶部装饰条 */}
              <div className={`h-1 bg-gradient-to-r ${
                tool.statusColor === 'green' 
                  ? 'from-green-500 to-emerald-500' 
                  : tool.statusColor === 'blue'
                  ? 'from-blue-500 to-cyan-500'
                  : 'from-gray-500 to-gray-600'
              }`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-purple-300 transition-colors">
                    {tool.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    tool.statusColor === 'green' 
                      ? 'bg-green-500/20 text-green-400' 
                      : tool.statusColor === 'blue'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tool.description}
                </p>
                
                {/* 悬停时显示的箭头 */}
                {tool.href !== '#' && (
                  <div className="mt-4 flex items-center text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>开始使用</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          ))}
          </div>

          {/* 底部链接 */}
          <div className="flex justify-center gap-4">
            <Link 
              href="/tools" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              浏览全部工具
            </Link>
            <a 
              href="https://screeps.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-all duration-300"
            >
              了解 Screeps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}