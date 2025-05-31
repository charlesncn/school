"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/layout/sidebar"
import { BookOpen, Users, FileText, Clock, TrendingUp, Plus } from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  const mySubjects = [
    { name: "Mathematics", class: "Form 3A", students: 32, nextClass: "Today 10:00 AM" },
    { name: "Physics", class: "Form 4B", students: 28, nextClass: "Tomorrow 2:00 PM" },
    { name: "Chemistry", class: "Form 3B", students: 30, nextClass: "Friday 9:00 AM" },
  ]

  const upcomingExams = [
    { subject: "Mathematics", class: "Form 3A", date: "Dec 15, 2024", type: "Main Exam" },
    { subject: "Physics", class: "Form 4B", date: "Dec 18, 2024", type: "Continuous Assessment" },
  ]

  const recentActivities = [
    { action: "Uploaded Form 3A Math results", time: "2 hours ago" },
    { action: "Created Physics quiz", time: "1 day ago" },
    { action: "Graded Chemistry assignments", time: "2 days ago" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="teacher" />

      <div className="flex-1 lg:ml-56">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Teacher Dashboard</h1>
            <p className="text-slate-600">Manage your classes and track student progress.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">My Subjects</p>
                    <p className="text-2xl font-bold text-slate-900">3</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Students</p>
                    <p className="text-2xl font-bold text-slate-900">90</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pending Exams</p>
                    <p className="text-2xl font-bold text-slate-900">2</p>
                  </div>
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Classes Today</p>
                    <p className="text-2xl font-bold text-slate-900">2</p>
                  </div>
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Subjects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    My Subjects
                  </span>
                  <Link href="/teacher/subjects">
                    <Button size="sm" variant="outline">
                      View All
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mySubjects.map((subject, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{subject.name}</h3>
                        <span className="text-sm text-slate-500">{subject.class}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{subject.students} students</p>
                      <p className="text-sm text-blue-600 font-medium">Next: {subject.nextClass}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Upcoming Exams
                  </span>
                  <Link href="/teacher/exams">
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-1" />
                      Create
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingExams.map((exam, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{exam.subject}</h3>
                        <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">{exam.type}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">{exam.class}</p>
                      <p className="text-sm text-orange-600 font-medium">{exam.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
