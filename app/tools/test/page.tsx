import Link from 'next/link'

export default function TestToolPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          href="/tools" 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
        >
          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回工具列表
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">测试工具</h1>
            <p className="text-gray-600">占位的测试工具页面，用于展示工具的基本结构。</p>
          </div>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            开发中
          </span>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <div className="text-gray-400 text-6xl mb-4">🔧</div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">工具开发中</h3>
          <p className="text-gray-500">
            这个测试工具的功能正在开发中，敬请期待。
          </p>
        </div>
      </div>
    </div>
  )
}