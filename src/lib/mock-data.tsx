export interface StatsData {
  totalCustomers: {
    count: number
    growth: number
    growthText: string
  }
  members: {
    count: number
    growth: number
    growthText: string
  }
  activeNow: {
    count: number
    avatars: string[]
  }
}

export const getStatsData = (): StatsData => {
  return {
    totalCustomers: {
      count: 5423,
      growth: 16,
      growthText: '16% this month'
    },
    members: {
      count: 1893,
      growth: -1,
      growthText: '1% this month'
    },
    activeNow: {
      count: 189,
      avatars: [
        '/images/boy.png',
        '/images/man-2.png',
        '/images/man.png',
        '/images/profile.png',
        '/images/woman.png',
      ]
    }
  }
}

export interface Customer {
  id: string
  name: string
  company: string
  phone: string
  email: string
  country: string
  status: 'Active' | 'Inactive'
}

const allCustomers: Customer[] = [
  {
    id: '1',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive'
  },
  {
    id: '3',
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive'
  },
  {
    id: '4',
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active'
  },
  {
    id: '6',
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active'
  },
  {
    id: '7',
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Active'
  },
  {
    id: '8',
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive'
  },
  {
    id: '9',
    name: 'Robert Fox',
    company: 'Amazon',
    phone: '(480) 555-0103',
    email: 'robert@amazon.com',
    country: 'Germany',
    status: 'Active'
  },
  {
    id: '10',
    name: 'Brooklyn Simmons',
    company: 'Apple',
    phone: '(629) 555-0129',
    email: 'brooklyn@apple.com',
    country: 'Canada',
    status: 'Active'
  },
  {
    id: '11',
    name: 'Sarah Johnson',
    company: 'Netflix',
    phone: '(555) 123-4567',
    email: 'sarah@netflix.com',
    country: 'Australia',
    status: 'Active'
  },
  {
    id: '12',
    name: 'Michael Brown',
    company: 'Spotify',
    phone: '(555) 987-6543',
    email: 'michael@spotify.com',
    country: 'Sweden',
    status: 'Inactive'
  },
  {
    id: '13',
    name: 'Emily Davis',
    company: 'Adobe',
    phone: '(555) 246-8135',
    email: 'emily@adobe.com',
    country: 'France',
    status: 'Active'
  },
  {
    id: '14',
    name: 'David Wilson',
    company: 'Intel',
    phone: '(555) 369-2580',
    email: 'david@intel.com',
    country: 'Japan',
    status: 'Active'
  },
  {
    id: '15',
    name: 'Lisa Anderson',
    company: 'Oracle',
    phone: '(555) 147-2589',
    email: 'lisa@oracle.com',
    country: 'Singapore',
    status: 'Inactive'
  }
]

export const getCustomersData = (limit?: number): Customer[] => {
  if (limit) {
    return allCustomers.slice(0, limit)
  }
  return allCustomers
}

export const getTotalCustomersCount = (): number => {
  return 256 // Simulating total count for pagination
}