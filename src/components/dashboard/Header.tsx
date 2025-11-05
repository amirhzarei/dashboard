'use client'

import { Search } from 'lucide-react'

interface Props {
    username: string
}

export default function Header({ username }: Props) {
    return (
        <header className="h-20 bg-inherit flex items-center justify-between px-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <h2 className="text-lg text-gray-700">
                    Hello <span className="font-semibold capitalize">{username}</span> 👋
                </h2>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-80 pl-12 pr-4 py-2.5 text-black rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all"
                    />
                </div>
            </div>
        </header>
    )
}