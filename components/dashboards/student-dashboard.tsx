"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/layout/sidebar"
import { BookOpen, FileText, TrendingUp, Clock, Award, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const subjects = [
    { name: "Mathematics", grade: "A", progress: 92, nextClass: "Today 10:00 AM" },
    { name: "Physics", grade: "B+", progress: 85, nextClass: "Tomorrow 2:00 PM" },
    { name: "Chemistry", grade: "A-", progress: 88, nextClass: "Friday 9:00 AM" },
    { name: "Biology", grade: "B", progress: 78, nextClass: "Monday 11:00 AM" },
  ]

  const upcomingExams = [
    { subject: "Mathematics", date: "Dec 15, 2024", type: "Main Exam", time: "9:00 AM" },
    { subject: "Physics", date: "Dec 18, 2024", type: "Quiz", time: "2:00 PM" },
  ]

  const recentGrades = [
    { subject: "Chemistry", assignment: "Lab Report", grade: "A", date: "Dec 10" },
    { subject: "Mathematics", assignment: "Algebra Test", grade: "A-", date: "Dec 8" },
    { subject: "Physics", assignment: "Motion Quiz", grade: "B+", date: "Dec 5" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="student" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Student Dashboard</h1>
            <p className="text-slate-600">Track your academic progress and upcoming activities.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Overall GPA</p>
                    <p className="text-2xl font-bold text-slate-900">3.7</p>
                  </div>
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Subjects</p>
                    <p className="text-2xl font-bold text-slate-900">6</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Upcoming Exams</p>
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
                    <p className="text-sm font-medium text-slate-600">Attendance</p>
                    <p className="text-2xl font-bold text-slate-900">94%</p>
                  </div>
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subject Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Subject Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-slate-900">{subject.name}</h3>
                        <span className="text-lg font-bold text-blue-600">{subject.grade}</span>
                      </div>
                      <Progress value={subject.progress} className="mb-2" />
                      <p className="text-sm text-slate-600">Next class: {subject.nextClass}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Upcoming Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingExams.map((exam, index) => (
                    <div key={index} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{exam.subject}</h3>
                        <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">{exam.type}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">
                        {exam.date} at {exam.time}
                      </p>
                      <Link href="/student/exams">
                        <Button size="sm" variant="outline" className="mt-2">
                          Prepare
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Grades */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recent Grades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-slate-900">{grade.subject}</h3>
                      <p className="text-sm text-slate-600">{grade.assignment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">{grade.grade}</p>
                      <p className="text-sm text-slate-500">{grade.date}</p>
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
