'use client'

import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'
import { ReactNode } from 'react'

interface Props {
    variant?: 'error' | 'success' | 'info' | 'warning'
    children: ReactNode
    className?: string
}

export default function Alert({
    variant = 'info',
    children,
    className = ''
}: Props) {
    const variants = {
        error: {
            container: 'bg-red-50 border-red-200',
            icon: AlertCircle,
            iconColor: 'text-red-600',
            textColor: 'text-red-800'
        },
        success: {
            container: 'bg-green-50 border-green-200',
            icon: CheckCircle,
            iconColor: 'text-green-600',
            textColor: 'text-green-800'
        },
        info: {
            container: 'bg-blue-50 border-blue-200',
            icon: Info,
            iconColor: 'text-blue-600',
            textColor: 'text-blue-800'
        },
        warning: {
            container: 'bg-amber-50 border-amber-200',
            icon: AlertTriangle,
            iconColor: 'text-amber-600',
            textColor: 'text-amber-800'
        }
    }

    const config = variants[variant]
    const Icon = config.icon

    return (
        <div className={`${config.container} border rounded-xl p-4 flex items-start gap-3 ${className}`}>
            <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
            <p className={`text-sm ${config.textColor}`}>{children}</p>
        </div>
    )
}