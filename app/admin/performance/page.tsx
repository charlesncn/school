"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/layout/sidebar"
import { BarChart3, TrendingUp, Users, Award, Target, BookOpen } from "lucide-react"

export default function PerformancePage() {
  const classPerformance = [
    { class: "Form 1A", students: 30, avgGPA: 3.2, passRate: 87, attendance: 92 },
    { class: "Form 1B", students: 28, avgGPA: 3.0, passRate: 82, attendance: 89 },
    { class: "Form 2A", students: 32, avgGPA: 3.4, passRate: 91, attendance: 94 },
    { class: "Form 2B", students: 29, avgGPA: 3.1, passRate: 85, attendance: 88 },
    { class: "Form 3A", students: 31, avgGPA: 3.6, passRate: 94, attendance: 96 },
    { class: "Form 3B", students: 27, avgGPA: 3.3, passRate: 89, attendance: 91 },
    { class: "Form 4A", students: 25, avgGPA: 3.8, passRate: 96, attendance: 97 },
    { class: "Form 4B", students: 23, avgGPA: 3.5, passRate: 92, attendance: 93 },
  ]

  const subjectPerformance = [
    { subject: "Mathematics", avgGrade: 85, passRate: 92, difficulty: "High" },
    { subject: "Physics", avgGrade: 78, passRate: 87, difficulty: "High" },
    { subject: "Chemistry", avgGrade: 82, passRate: 89, difficulty: "Medium" },
    { subject: "Biology", avgGrade: 88, passRate: 94, difficulty: "Medium" },
    { subject: "English", avgGrade: 86, passRate: 91, difficulty: "Medium" },
    { subject: "History", avgGrade: 84, passRate: 90, difficulty: "Low" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="admin" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8" />
              Performance Analytics
            </h1>
            <p className="text-slate-600">Monitor school-wide and class-specific academic performance.</p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">School Average GPA</p>
                    <p className="text-2xl font-bold text-slate-900">3.4</p>
                    <p className="text-sm text-green-600">+0.2 from last term</p>
                  </div>
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Overall Pass Rate</p>
                    <p className="text-2xl font-bold text-slate-900">89%</p>
                    <p className="text-sm text-green-600">+3% from last term</p>
                  </div>
                  <Target className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Average Attendance</p>
                    <p className="text-2xl font-bold text-slate-900">92%</p>
                    <p className="text-sm text-green-600">+1% from last term</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Top Performing Class</p>
                    <p className="text-2xl font-bold text-slate-900">Form 4A</p>
                    <p className="text-sm text-blue-600">3.8 GPA Average</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Class Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Class Performance Overview
                </CardTitle>
                <CardDescription>Academic performance by class</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classPerformance.map((classData, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-slate-900">{classData.class}</h3>
                        <span className="text-sm text-slate-600">{classData.students} students</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600">GPA</p>
                          <p className="font-bold text-blue-600">{classData.avgGPA}</p>
                        </div>
                        <div>
                          <p className="text-slate-600">Pass Rate</p>
                          <p className="font-bold text-green-600">{classData.passRate}%</p>
                        </div>
                        <div>
                          <p className="text-slate-600">Attendance</p>
                          <p className="font-bold text-purple-600">{classData.attendance}%</p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Overall Performance</span>
                          <span>{classData.passRate}%</span>
                        </div>
                        <Progress value={classData.passRate} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Subject Performance Analysis
                </CardTitle>
                <CardDescription>Performance metrics by subject</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjectPerformance.map((subject, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-slate-900">{subject.subject}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            subject.difficulty === "High"
                              ? "bg-red-100 text-red-700"
                              : subject.difficulty === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {subject.difficulty} Difficulty
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <p className="text-slate-600">Average Grade</p>
                          <p className="font-bold text-blue-600">{subject.avgGrade}%</p>
                        </div>
                        <div>
                          <p className="text-slate-600">Pass Rate</p>
                          <p className="font-bold text-green-600">{subject.passRate}%</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Performance Level</span>
                          <span>{subject.avgGrade}%</span>
                        </div>
                        <Progress value={subject.avgGrade} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trends */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Performance Trends & Insights
              </CardTitle>
              <CardDescription>Key insights and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Strengths</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Form 4A showing excellent performance</li>
                    <li>• Biology has highest pass rate (94%)</li>
                    <li>• Overall attendance improved by 1%</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Areas for Improvement</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Physics needs additional support</li>
                    <li>• Form 1B attendance below average</li>
                    <li>• Mathematics difficulty level high</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Recommendations</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Extra Physics tutorials needed</li>
                    <li>• Implement attendance incentives</li>
                    <li>• Review Math curriculum difficulty</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
