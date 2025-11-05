'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    loading?: boolean
    children: ReactNode
}

export default function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    children,
    className = '',
    disabled,
    ...props
}: Props) {
    const baseStyles = 'rounded-xl font-semibold transition-all flex items-center justify-center gap-2'

    const variants = {
        primary: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border-2 border-gray-200 text-gray-900 hover:border-violet-500',
        ghost: 'text-gray-600 hover:bg-gray-100'
    }

    const sizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3',
        lg: 'px-6 py-4 text-lg'
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${(disabled || loading) ? 'opacity-50 cursor-not-allowed' : ''
                } ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            {children}
        </button>
    )
}