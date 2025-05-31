"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  FileText,
  CreditCard,
  Menu,
  X,
} from "lucide-react"

interface SidebarProps {
  userType: string
}

export default function Sidebar({ userType }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const getMenuItems = () => {
    const commonItems = [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
      { icon: Bell, label: "News", href: "/news" },
    ]

    switch (userType) {
      case "admin":
        return [
          ...commonItems,
          { icon: Users, label: "Students", href: "/admin/students" },
          { icon: BookOpen, label: "Subjects", href: "/admin/subjects" },
          { icon: Calendar, label: "Timetable", href: "/admin/timetable" },
          { icon: BarChart3, label: "Performance", href: "/admin/performance" },
          { icon: CreditCard, label: "Fees", href: "/admin/fees" },
          { icon: Bell, label: "Announcements", href: "/admin/announcements" },
          { icon: Calendar, label: "Events", href: "/admin/events" },
          { icon: Users, label: "Onboarding", href: "/admin/onboarding" },
          { icon: Settings, label: "Settings", href: "/admin/settings" },
        ]
      case "teacher":
        return [
          ...commonItems,
          { icon: BookOpen, label: "My Subjects", href: "/teacher/subjects" },
          { icon: Users, label: "My Classes", href: "/teacher/classes" },
          { icon: FileText, label: "Exams", href: "/teacher/exams" },
          { icon: BarChart3, label: "Performance", href: "/teacher/performance" },
        ]
      case "student":
        return [
          ...commonItems,
          { icon: BookOpen, label: "My Subjects", href: "/student/subjects" },
          { icon: Calendar, label: "Timetable", href: "/student/timetable" },
          { icon: FileText, label: "Exams", href: "/student/exams" },
          { icon: BarChart3, label: "Performance", href: "/student/performance" },
          { icon: CreditCard, label: "Fees", href: "/student/fees" },
        ]
      case "parent":
        return [
          ...commonItems,
          { icon: BarChart3, label: "Child's Performance", href: "/parent/performance" },
          { icon: CreditCard, label: "Fees", href: "/parent/fees" },
          { icon: Calendar, label: "Timetable", href: "/parent/timetable" },
        ]
      default:
        return commonItems
    }
  }

  const menuItems = getMenuItems()

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </Button>

      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-56 bg-gradient-to-b from-slate-900 to-blue-900 text-white transform transition-transform duration-300 ease-in-out
          ${isCollapsed ? "-translate-x-full" : "translate-x-0"}
          lg:translate-x-0 lg:static lg:inset-0
        `}
      >
        <div className="flex items-center gap-3 p-6 border-b border-white/10">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">EduPortal</h1>
            <p className="text-sm text-white/70 capitalize">{userType}</p>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${isActive ? "bg-white/20 text-white" : "text-white/70 hover:text-white hover:bg-white/10"}
                    `}
                    onClick={() => setIsCollapsed(true)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {!isCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsCollapsed(true)} />
      )}
    </>
  )
}
