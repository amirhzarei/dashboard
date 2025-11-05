interface Props {
    size?: 'sm' | 'md' | 'lg'
    showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: Props) {
    const sizes = {
        sm: { box: 'w-10 h-10', icon: 'w-5 h-5', text: 'text-xl' },
        md: { box: 'w-16 h-16', icon: 'w-8 h-8', text: 'text-3xl' },
        lg: { box: 'w-20 h-20', icon: 'w-10 h-10', text: 'text-4xl' }
    }

    const sizeConfig = sizes[size]

    return (
        <div className="text-center">
            <div className={`${sizeConfig.box} bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto ${showText ? 'mb-4' : ''} shadow-lg`}>
                <svg className={`${sizeConfig.icon} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
            {showText && (
                <h1 className={`${sizeConfig.text} font-bold text-gray-900`}>DesignFlow</h1>
            )}
        </div>
    )
}