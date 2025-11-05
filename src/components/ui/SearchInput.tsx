'use client'

import { Search } from 'lucide-react'

interface Props {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
}

export default function SearchInput({
    value,
    onChange,
    placeholder = 'Search',
    className = ''
}: Props) {
    return (
        <div className={`relative ${className}`}>
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-black rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all"
            />
        </div>
    )
}