import React from "react"
import { cn } from "@/lib/utils"

// Simple chart container
export function ChartContainer({ className, children, ...props }) {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  )
}

// Simple chart tooltip
export function ChartTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-white p-3 shadow-lg">
      {label && <p className="font-bold mb-2">{label}</p>}
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div 
            className="w-3 h-3 rounded" 
            style={{ backgroundColor: entry.color || '#000' }}
          />
          <span>{entry.name}:</span>
          <span className="font-bold">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

// Simple legend
export function ChartLegend({ payload }) {
  if (!payload || !payload.length) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-4">
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded" 
            style={{ backgroundColor: entry.color || '#000' }}
          />
          <span className="text-sm">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartLegend }