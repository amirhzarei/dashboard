'use client'

import { useLogin } from '@/hooks/useLogin'
import Input from '@/components/ui/Input'
import PasswordInput from '@/components/ui/PasswordInput'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import Checkbox from '@/components/ui/Checkbox'
import Logo from '@/components/ui/Logo'
import Card from '@/components/ui/Card'
import DemoCredentials from '@/components/auth/DemoCredentials'
import { useEffect, useState } from 'react'

export default function LoginPage() {
    const [name, setName] = useState()
    const [userPass, setPass] = useState()
    const {
        username,
        password,
        loading,
        error,
        setUsername,
        setPassword,
        handleLogin
    } = useLogin()

    const handleSelectUser = (userData: any) => {
        setPass(userData.password)
        setName(userData.username)

        setPassword(userData.password)
        setUsername(userData.username)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 p-4">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <Logo size="md" />
                    <p className="text-gray-600 text-center mt-2">
                        Welcome back! Please login to your account.
                    </p>
                </div>

                <Card>
                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && <Alert variant="error">{error}</Alert>}

                        <Input
                            id="username"
                            label="Username"
                            type="text"
                            value={username || name}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                            disabled={loading}
                        />

                        <PasswordInput
                            id="password"
                            label="Password"
                            value={password || userPass}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            disabled={loading}
                        />

                        <div className="flex items-center justify-between">
                            <Checkbox label="Remember me" />
                            <button
                                type="button"
                                className="text-sm font-semibold text-violet-600 hover:text-violet-700"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            loading={loading}
                            className="w-full"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>

                    <DemoCredentials handleClickUserData={(userData) => handleSelectUser(userData)} />
                </Card>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{' '}
                    <button className="font-semibold text-violet-600 hover:text-violet-700">
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    )
}