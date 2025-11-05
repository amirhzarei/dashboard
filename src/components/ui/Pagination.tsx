'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    itemsPerPage: number
    totalItems: number
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    totalItems
}: Props) {
    const startItem = (currentPage - 1) * itemsPerPage + 1
    const endItem = Math.min(currentPage * itemsPerPage, totalItems)

    return (
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-600">
                Showing data {startItem} to {endItem} of {totalItems} entries
            </p>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const page = i + 1
                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === page
                                ? 'bg-violet-600 text-white shadow-lg'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {page}
                        </button>
                    )
                })}

                {totalPages > 5 && <span className="text-gray-400">...</span>}
                {totalPages > 5 && (
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className="w-10 h-10 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        {totalPages}
                    </button>
                )}

                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </div>
    )
}