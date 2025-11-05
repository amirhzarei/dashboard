'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div>
                {label && (
                    <label
                        htmlFor={props.id}
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`w-full px-4 py-3 text-black rounded-xl border-2 ${error
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:border-violet-500 focus:ring-violet-100'
                        } focus:ring-4 outline-none transition-all ${className}`}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-600 mt-1">{error}</p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input