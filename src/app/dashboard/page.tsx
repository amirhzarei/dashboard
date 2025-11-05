import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import StatsCards from '@/components/dashboard/StatsCards'
import CustomerTable from '@/components/dashboard/CustomerTable'

export default async function DashboardPage() {
    const cookieStore = await cookies()
    const username = cookieStore.get('username')?.value || 'User'
    const role = cookieStore.get('user_role')?.value || 'admin'

    if (!username) {
        redirect('/login')
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar username={role} role={role} />

            <div className="flex-1 ml-64">
                <Header username={role} />

                <main className="p-8">
                    <div className="max-w-[1400px] mx-auto space-y-8">
                        <StatsCards />

                        <CustomerTable role={role} />
                    </div>
                </main>
            </div>
        </div>
    )
}