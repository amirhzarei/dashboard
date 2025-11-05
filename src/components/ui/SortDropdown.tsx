'use client'

import { ChevronDown } from 'lucide-react'

interface Props {
    value: string
    onChange: (value: string) => void
    options?: string[]
}

export default function SortDropdown({
    value,
    onChange,
    options = ['Newest', 'Oldest', 'A-Z', 'Z-A']
}: Props) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <button className="px-4 py-2.5 rounded-xl text-black border-2 border-gray-200 hover:border-violet-500 transition-colors flex items-center gap-2 text-sm font-medium">
                {value}
                <ChevronDown className="w-4 h-4" />
            </button>
        </div>
    )
}