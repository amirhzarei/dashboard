interface Props {
    status: 'Active' | 'Inactive'
    className?: string
}

export default function StatusBadge({ status, className = '' }: Props) {
    const isActive = status === 'Active'

    return (
        <span
            className={`inline-flex px-3 py-1 rounded-lg text-sm font-medium ${isActive
                ? 'bg-green-50 text-green-600 border border-green-200'
                : 'bg-red-50 text-red-600 border border-red-200'
                } ${className}`}
        >
            {status}
        </span>
    )
}