'use client'

import { useState, InputHTMLAttributes, forwardRef } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string
    error?: string
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(
    ({ label, error, className = '', ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false)

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
                <div className="relative">
                    <input
                        ref={ref}
                        type={showPassword ? 'text' : 'password'}
                        className={`w-full px-4 py-3 text-black rounded-xl border-2 ${error
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                            : 'border-gray-200 focus:border-violet-500 focus:ring-violet-100'
                            } focus:ring-4 outline-none transition-all pr-12 ${className}`}
                        {...props}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        disabled={props.disabled}
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
                {error && (
                    <p className="text-sm text-red-600 mt-1">{error}</p>
                )}
            </div>
        )
    }
)

PasswordInput.displayName = 'PasswordInput'

export default PasswordInput