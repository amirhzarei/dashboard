'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    Package,
    Users,
    DollarSign,
    TrendingUp,
    HelpCircle,
    LogOut,
    ChevronRight
} from 'lucide-react'
import { useLogout } from '@/hooks/useLogout'

interface Props {
    username: string
    role: string
}

export default function Sidebar({ username, role }: Props) {
    const pathname = usePathname()

    const { handleLogout, loading } = useLogout()

    const menuItems = [
        {
            icon: LayoutDashboard,
            label: 'Dashboard',
            href: '/dashboard',
            active: pathname === '/dashboard',
            role: ["admin", "owner"]
        },
        {
            icon: Package,
            label: 'Product',
            href: '/dashboard/product',
            active: pathname.startsWith('/dashboard/product'),
            role: ["admin", "owner"]
        },
        {
            icon: Users,
            label: 'Customers',
            href: '/dashboard/customers',
            active: pathname.startsWith('/dashboard/customers'),
            role: ["admin", "owner"]
        },
        {
            icon: DollarSign,
            label: 'Income',
            href: '/dashboard/income',
            active: pathname.startsWith('/dashboard/income'),
            role: ["admin"]
        },
        {
            icon: TrendingUp,
            label: 'Promote',
            href: '/dashboard/promote',
            active: pathname.startsWith('/dashboard/promote'),
            role: ["admin"]
        },
        {
            icon: HelpCircle,
            label: 'Help',
            href: '/dashboard/help',
            active: pathname.startsWith('/dashboard/help'),
            role: ["admin"]
        }
    ]

    return (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0">
            <div className="h-20 flex items-center justify-center border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems
                    .filter(item => item.role.includes(role))
                    .map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${item.active
                                    ? 'bg-violet-600 text-white shadow-lg'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-gray-400 group-hover:text-violet-600'}`} />
                                <span className="flex-1 font-medium">{item.label}</span>
                                {!item.active && (
                                    <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                            </Link>
                        )
                    })}
            </nav>

            <div className="px-4 pb-6">
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">
                        Upgrade to PRO to get access all Features!
                    </h3>
                    <button className="w-full bg-white text-violet-600 font-semibold py-2.5 rounded-xl hover:shadow-lg transition-all mt-4">
                        Get Pro Now!
                    </button>
                </div>
            </div>

            <div className="border-t border-gray-200 p-4">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                        {username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-gray-900">{username}</p>
                        <p className="text-xs text-gray-500 capitalize">{role}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="text-gray-400 hover:text-red-600 cursor-pointer transition-colors disabled:opacity-50"
                        title="Logout"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}