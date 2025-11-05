interface Props {
    rows?: number
}

export default function TableSkeleton({ rows = 5 }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
                {[...Array(rows)].map((_, i) => (
                    <div key={i} className="h-16 bg-gray-200 rounded"></div>
                ))}
            </div>
        </div>
    )
}