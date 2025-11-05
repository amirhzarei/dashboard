import { NextRequest, NextResponse } from "next/server";

const USERS = {
  admin: { email: "admin@test.com", password: "admin123", role: "admin" },
  owner: { email: "owner@test.com", password: "owner123", role: "owner" },
};

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const user = USERS[username as keyof typeof USERS];

  if (!user || user.password !== password) {
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );
  }

  const fakeToken = `${username}-token-${Date.now()}`;

  const response = NextResponse.json({
    success: true,
    user: { username, role: user.role },
  });

  response.cookies.set("auth_token", fakeToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  response.cookies.set("user_role", user.role, {
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
