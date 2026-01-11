import { RESOURCE_CATEGORIES } from '@/lib/screeps-api'

interface ResourceCategoryDisplayProps {
  shardResources: {
    energy: number
    power: number
    ops: number
    resources: Record<string, number>
  }
}

export default function ResourceCategoryDisplay({ shardResources }: ResourceCategoryDisplayProps) {
  const renderResourceList = (resources: Record<string, number>) => {
    const entries = Object.entries(resources)
      .filter(([_, amount]) => amount > 0)
      .sort((a, b) => b[1] - a[1])

    if (entries.length === 0) return null

    return (
      <div className="space-y-1">
        {entries.map(([resourceType, amount]) => (
          <div key={resourceType} className="flex justify-between items-center text-sm">
            <span className="text-[#e5e7eb]">{resourceType}</span>
            <span className="text-white font-medium">{amount.toLocaleString()}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-[#0b0d0f]/60 rounded-lg p-4 border border-[#5973ff]/10">
        <div className="text-xs text-[#909fc4] mb-2">总资源</div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-[#909fc4]/60 mb-1">Energy</div>
            <div className="text-lg font-bold text-yellow-400">{shardResources.energy.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-[#909fc4]/60 mb-1">Power</div>
            <div className="text-lg font-bold text-[#a459ff]">{shardResources.power.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-[#909fc4]/60 mb-1">Ops</div>
            <div className="text-lg font-bold text-[#5973ff]">{shardResources.ops.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {Object.entries(RESOURCE_CATEGORIES).map(([categoryKey, category]) => {
        const categoryResources: Record<string, number> = {}
        for (const resourceType of category.resources) {
          const amount = shardResources.resources[resourceType] || 0
          if (amount > 0) {
            categoryResources[resourceType] = amount
          }
        }

        if (Object.keys(categoryResources).length === 0) return null

        return (
          <div key={categoryKey} className="bg-[#0b0d0f]/60 rounded-lg p-4 border border-[#5973ff]/10">
            <div className="text-xs text-[#909fc4] mb-2">{category.name}</div>
            {renderResourceList(categoryResources)}
          </div>
        )
      })}
    </div>
  )
}
