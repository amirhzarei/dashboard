import { Credential } from "@/types/Demo"


interface Props {
    credentials?: Credential[]
    handleClickUserData: (userData: any) => void
}

const defaultCredentials: Credential[] = [
    {
        role: 'Admin',
        username: 'admin',
        password: 'admin123',
        bgColor: 'bg-violet-50',
        textColor: 'text-violet-900'
    },
    {
        role: 'Owner',
        username: 'owner',
        password: 'owner123',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-900'
    }
]

export default function DemoCredentials({
    credentials = defaultCredentials,
    handleClickUserData
}: Props) {


    return (
        <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-3">Demo Credentials:</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
                {credentials.map((cred, index) => (
                    <div onClick={() => handleClickUserData(cred)} key={index} className={`${cred.bgColor} rounded-lg p-3 cursor-pointer`}>
                        <p className={`font-semibold ${cred.textColor}`}>{cred.role}</p>
                        <p className="text-purple-900">
                            {cred.username} / {cred.password}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}