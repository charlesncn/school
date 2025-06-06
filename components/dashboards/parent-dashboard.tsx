"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/layout/sidebar"
import { User, TrendingUp, CreditCard, Calendar, BookOpen, Award, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ParentDashboard() {
  const childInfo = {
    name: "Sarah Johnson",
    class: "Form 3A",
    studentId: "STU2024001",
    gpa: 3.8,
    attendance: 96,
  }

  const subjects = [
    { name: "Mathematics", grade: "A", progress: 92, teacher: "Mr. Smith" },
    { name: "Physics", grade: "B+", progress: 85, teacher: "Ms. Davis" },
    { name: "Chemistry", grade: "A-", progress: 88, teacher: "Dr. Wilson" },
    { name: "Biology", grade: "B", progress: 78, teacher: "Mrs. Brown" },
  ]

  const feeInfo = {
    totalFees: 2500,
    paidAmount: 2000,
    balance: 500,
    dueDate: "Dec 31, 2024",
  }

  const upcomingEvents = [
    { event: "Parent-Teacher Conference", date: "Dec 20, 2024", type: "meeting" },
    { event: "Mathematics Exam", date: "Dec 15, 2024", type: "exam" },
    { event: "Science Fair", date: "Jan 10, 2025", type: "event" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="parent" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Parent Dashboard</h1>
            <p className="text-slate-600">Monitor your child's academic progress and school activities.</p>
          </div>

          {/* Child Info Card */}
          <Card className="border-0 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Student Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{childInfo.name}</h3>
                  <p className="text-sm text-slate-600">{childInfo.class}</p>
                  <p className="text-xs text-slate-500">ID: {childInfo.studentId}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{childInfo.gpa}</div>
                  <p className="text-sm text-slate-600">Overall GPA</p>
                  <div className="flex items-center justify-center mt-1">
                    <Award className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-xs text-slate-500">Honor Roll</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{childInfo.attendance}%</div>
                  <p className="text-sm text-slate-600">Attendance</p>
                  <div className="flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-slate-500">Excellent</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">6</div>
                  <p className="text-sm text-slate-600">Subjects</p>
                  <div className="flex items-center justify-center mt-1">
                    <BookOpen className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-xs text-slate-500">Active</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Performance & Fees */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Academic Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h3 className="font-semibold text-slate-900">{subject.name}</h3>
                          <p className="text-sm text-slate-600">Teacher: {subject.teacher}</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">{subject.grade}</span>
                      </div>
                      <Progress value={subject.progress} className="mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Fee Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-700">Total Fees</span>
                      <span className="text-lg font-bold text-green-600">${feeInfo.totalFees}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-700">Paid Amount</span>
                      <span className="text-lg font-bold text-green-600">${feeInfo.paidAmount}</span>
                    </div>
                    <hr className="border-green-200 my-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-red-700">Outstanding Balance</span>
                      <span className="text-lg font-bold text-red-600">${feeInfo.balance}</span>
                    </div>
                  </div>

                  {feeInfo.balance > 0 && (
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-700">Payment Due</span>
                      </div>
                      <p className="text-sm text-orange-600 mb-3">Due Date: {feeInfo.dueDate}</p>
                      <Link href="/parent/fees">
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Pay Now
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          event.type === "exam"
                            ? "bg-red-500"
                            : event.type === "meeting"
                              ? "bg-blue-500"
                              : "bg-green-500"
                        }`}
                      ></div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{event.event}</h3>
                        <p className="text-sm text-slate-600">{event.date}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        event.type === "exam"
                          ? "bg-red-100 text-red-700"
                          : event.type === "meeting"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {event.type}
                    </span>
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
