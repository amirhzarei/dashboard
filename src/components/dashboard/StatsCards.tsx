'use client'

import { Users, UserCheck, Monitor, TrendingUp, TrendingDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimatedNumber from './AnimatedNumber'
import { getStatsData } from '@/lib/mock-data'
import Image from 'next/image'

export default function StatsCards() {
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState(getStatsData())

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="animate-pulse space-y-4">
                            <div className="h-12 w-12 bg-gray-200 rounded-xl"></div>
                            <div className="h-8 bg-gray-200 rounded w-24"></div>
                            <div className="h-4 bg-gray-200 rounded w-32"></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const cards = [
        {
            title: 'Total Customers',
            value: stats.totalCustomers.count,
            growth: stats.totalCustomers.growth,
            growthText: stats.totalCustomers.growthText,
            icon: Users,
            color: 'green',
            avatars: null
        },
        {
            title: 'Members',
            value: stats.members.count,
            growth: stats.members.growth,
            growthText: stats.members.growthText,
            icon: UserCheck,
            color: 'green',
            avatars: null
        },
        {
            title: 'Active Now',
            value: stats.activeNow.count,
            growth: null,
            growthText: null,
            icon: Monitor,
            color: 'green',
            avatars: stats.activeNow.avatars
        }
    ]

    return (
        <div className="grid grid-cols-3 gap-6">
            {cards.map((card, idx) => {
                const Icon = card.icon
                const isPositive = card.growth ? card.growth > 0 : null

                return (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 bg-${card.color}-50 rounded-xl flex items-center justify-center`}>
                                <Icon className={`w-6 h-6 text-${card.color}-500`} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                <AnimatedNumber value={card.value} />
                            </h3>
                            {card.avatars ? (
                                <div className="flex items-center -space-x-2">
                                    {card.avatars.map(({ avatar, idx }: any) => (
                                        <div
                                            key={idx}
                                            className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                                        >
                                            <Image
                                                src={avatar || "/images/profile.png"}
                                                alt={`User ${idx + 1}`}
                                                width={32}
                                                height={32}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center gap-1">
                                    {isPositive ? (
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <TrendingDown className="w-4 h-4 text-red-500" />
                                    )}
                                    <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                        {card.growthText}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}