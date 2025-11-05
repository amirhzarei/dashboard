'use client'

import { InputHTMLAttributes } from 'react'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string
}

export default function Checkbox({ label, className = '', ...props }: Props) {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                className={`w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 ${className}`}
                {...props}
            />
            {label && <span className="text-sm text-gray-600">{label}</span>}
        </label>
    )
}