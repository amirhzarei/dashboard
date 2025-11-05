'use client'

import { TableColumn } from "@/types/Table"

interface Props {
    columns: TableColumn[]
    sortField: string
    sortOrder: 'asc' | 'desc'
    onSort: (field: string) => void
}

export default function TableHeader({
    columns,
    sortField,
    sortOrder,
    onSort
}: Props) {
    return (
        <thead>
            <tr className="border-b border-gray-100">
                {columns.map((column) => (
                    <th
                        key={column.key}
                        onClick={() => column.sortable !== false && onSort(column.key)}
                        className={`text-left px-6 py-4 text-sm font-semibold text-gray-600 ${column.sortable !== false
                            ? 'cursor-pointer hover:text-violet-600'
                            : ''
                            }`}
                    >
                        {column.label}
                        {column.sortable !== false && sortField === column.key && (
                            <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    )
}