import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import { Role } from "@prisma/client"
import { redirect } from "next/navigation"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/auth/login")
  }
  return user
}

export async function requireRole(role: Role | Role[]) {
  const user = await requireAuth()
  const allowedRoles = Array.isArray(role) ? role : [role]

  if (!allowedRoles.includes(user.role)) {
    redirect("/")
  }

  return user
}

export async function requireAdmin() {
  return requireRole("ADMIN")
}

export async function requirePremium() {
  return requireRole(["ADMIN", "PREMIUM"])
}

export function hasRole(userRole: Role, allowedRoles: Role | Role[]): boolean {
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]
  return roles.includes(userRole)
}

export function isAdmin(userRole: Role): boolean {
  return userRole === "ADMIN"
}

export function isPremium(userRole: Role): boolean {
  return userRole === "PREMIUM" || userRole === "ADMIN"
}
