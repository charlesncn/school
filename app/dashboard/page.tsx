"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AdminDashboard from "@/components/dashboards/admin-dashboard"
import TeacherDashboard from "@/components/dashboards/teacher-dashboard"
import StudentDashboard from "@/components/dashboards/student-dashboard"
import ParentDashboard from "@/components/dashboards/parent-dashboard"

export default function Dashboard() {
  const [userType, setUserType] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const type = localStorage.getItem("userType")
    if (!type) {
      router.push("/")
    } else {
      setUserType(type)
    }
  }, [router])

  if (!userType) {
    return <div>Loading...</div>
  }

  switch (userType) {
    case "admin":
      return <AdminDashboard />
    case "teacher":
      return <TeacherDashboard />
    case "student":
      return <StudentDashboard />
    case "parent":
      return <ParentDashboard />
    default:
      return <div>Invalid user type</div>
  }
}
