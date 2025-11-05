import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    className?: string
    padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Card({
    children,
    className = '',
    padding = 'lg'
}: Props) {
    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    }

    return (
        <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 ${paddings[padding]} ${className}`}>
            {children}
        </div>
    )
}