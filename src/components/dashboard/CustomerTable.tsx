'use client'

import { useState, useMemo } from 'react'
import { RefreshCcw } from 'lucide-react'
import { getCustomersData, type Customer } from '@/lib/mock-data'
import SearchInput from '@/components/ui/SearchInput'
import SortDropdown from '@/components/ui/SortDropdown'
import TableHeader from '@/components/ui/TableHeader'
import StatusBadge from '@/components/ui/StatusBadge'
import Pagination from '@/components/ui/Pagination'
import TableSkeleton from '@/components/ui/TableSkeleton'
import EmptyState from '@/components/ui/EmptyState'
import { TableColumn } from '@/types/Table'

interface Props {
    role: string
}

type SortField = 'name' | 'company' | 'phone' | 'email' | 'country' | 'status'
type SortOrder = 'asc' | 'desc'

const columns: TableColumn[] = [
    { key: 'name', label: 'Customer Name', sortable: true },
    { key: 'company', label: 'Company', sortable: true },
    { key: 'phone', label: 'Phone Number', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'country', label: 'Country', sortable: true },
    { key: 'status', label: 'Status', sortable: true }
]

export default function CustomerTable({ role }: Props) {
    const itemsPerPage = role === 'owner' ? 10 : 5

    const [loading, setLoading] = useState(true)
    const [customers, setCustomers] = useState<Customer[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [sortField, setSortField] = useState<SortField>('name')
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState('Newest')

    // Initial data load
    useState(() => {
        setTimeout(() => {
            setCustomers(getCustomersData())
            setLoading(false)
        }, 1000)
    })

    // Filter customers
    const filteredCustomers = useMemo(() => {
        return customers.filter(customer =>
            customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.country.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [customers, searchQuery])

    // Sort customers
    const sortedCustomers = useMemo(() => {
        const sorted = [...filteredCustomers].sort((a, b) => {
            const aValue = a[sortField].toLowerCase()
            const bValue = b[sortField].toLowerCase()
            return sortOrder === 'asc'
                ? (aValue > bValue ? 1 : -1)
                : (aValue < bValue ? 1 : -1)
        })
        return sorted
    }, [filteredCustomers, sortField, sortOrder])

    // Paginate
    const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage)
    const paginatedCustomers = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return sortedCustomers.slice(start, start + itemsPerPage)
    }, [sortedCustomers, currentPage, itemsPerPage])

    const handleSort = (field: string) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field as SortField)
            setSortOrder('asc')
        }
    }

    const handleRefresh = () => {
        setLoading(true)
        setTimeout(() => {
            setCustomers(getCustomersData())
            setLoading(false)
        }, 1000)
    }

    const handleSearch = (value: string) => {
        setSearchQuery(value)
        setCurrentPage(1)
    }

    if (loading) {
        return <TableSkeleton rows={itemsPerPage} />
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">All Customers</h2>
                        <p className="text-sm text-green-500 font-medium mt-1">Active Members</p>
                    </div>
                    <button
                        onClick={handleRefresh}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Refresh"
                    >
                        <RefreshCcw className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <SearchInput
                        value={searchQuery}
                        onChange={handleSearch}
                        className="flex-1"
                    />
                    <SortDropdown
                        value={sortBy}
                        onChange={setSortBy}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <TableHeader
                        columns={columns}
                        sortField={sortField}
                        sortOrder={sortOrder}
                        onSort={handleSort}
                    />
                    <tbody>
                        {paginatedCustomers.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length}>
                                    <EmptyState
                                        title="No customers found"
                                        description="Try adjusting your search"
                                    />
                                </td>
                            </tr>
                        ) : (
                            paginatedCustomers.map((customer) => (
                                <tr
                                    key={customer.id}
                                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">{customer.name}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-600">{customer.company}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-600">{customer.phone}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-600">{customer.email}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-gray-600">{customer.country}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={customer.status} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                totalItems={sortedCustomers.length}
            />
        </div>
    )
}