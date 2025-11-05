interface Props {
    title?: string
    description?: string
    icon?: React.ReactNode
}

export default function EmptyState({
    title = 'No data found',
    description = 'Try adjusting your search or filters',
    icon
}: Props) {
    return (
        <div className="text-center py-12">
            {icon && <div className="flex justify-center mb-4">{icon}</div>}
            <div className="text-gray-400">
                <p className="text-lg font-medium">{title}</p>
                <p className="text-sm mt-1">{description}</p>
            </div>
        </div>
    )
}