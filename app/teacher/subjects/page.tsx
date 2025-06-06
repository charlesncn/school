"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/layout/sidebar"
import { BookOpen, Users, FileText, Clock, TrendingUp, Upload, Eye } from "lucide-react"

export default function TeacherSubjectsPage() {
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      code: "MATH101",
      class: "Form 3A",
      students: 32,
      completedLessons: 18,
      totalLessons: 24,
      averageGrade: 85,
      nextClass: "Today 10:00 AM",
      room: "Room 201",
      syllabus: "Algebra, Geometry, Statistics",
      recentActivity: "Uploaded Chapter 5 Quiz results",
    },
    {
      id: 2,
      name: "Physics",
      code: "PHY101",
      class: "Form 4B",
      students: 28,
      completedLessons: 22,
      totalLessons: 30,
      averageGrade: 78,
      nextClass: "Tomorrow 2:00 PM",
      room: "Lab 1",
      syllabus: "Mechanics, Thermodynamics, Waves",
      recentActivity: "Created Motion Quiz for next week",
    },
    {
      id: 3,
      name: "Chemistry",
      code: "CHEM101",
      class: "Form 3B",
      students: 30,
      completedLessons: 16,
      totalLessons: 26,
      averageGrade: 82,
      nextClass: "Friday 9:00 AM",
      room: "Lab 2",
      syllabus: "Organic Chemistry, Reactions, Bonding",
      recentActivity: "Scheduled lab session for Friday",
    },
  ]

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600"
    if (grade >= 80) return "text-blue-600"
    if (grade >= 70) return "text-orange-600"
    return "text-red-600"
  }

  const getProgressColor = (completed: number, total: number) => {
    const percentage = (completed / total) * 100
    if (percentage >= 80) return "bg-green-500"
    if (percentage >= 60) return "bg-blue-500"
    if (percentage >= 40) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="teacher" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 lg:w-8 lg:h-8" />
              My Subjects
            </h1>
            <p className="text-slate-600">Manage your assigned subjects and track class progress.</p>
          </div>

          {/* Subject Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Subjects</p>
                    <p className="text-2xl font-bold text-slate-900">{subjects.length}</p>
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
                    <p className="text-2xl font-bold text-slate-900">
                      {subjects.reduce((sum, subject) => sum + subject.students, 0)}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Average Grade</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {Math.round(subjects.reduce((sum, subject) => sum + subject.averageGrade, 0) / subjects.length)}%
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-600" />
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
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subjects List */}
          <div className="space-y-6">
            {subjects.map((subject) => (
              <Card key={subject.id} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                        {subject.name}
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {subject.code}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {subject.class} • {subject.students} students • {subject.room}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Upload className="w-4 h-4 mr-1" />
                        Upload Grades
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Progress Section */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700">Syllabus Progress</span>
                          <span className="text-sm text-slate-600">
                            {subject.completedLessons}/{subject.totalLessons} lessons
                          </span>
                        </div>
                        <Progress value={(subject.completedLessons / subject.totalLessons) * 100} className="h-2" />
                      </div>

                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-slate-500" />
                          <span className="text-sm font-medium text-slate-700">Next Class</span>
                        </div>
                        <p className="text-sm text-slate-600">{subject.nextClass}</p>
                      </div>
                    </div>

                    {/* Performance Section */}
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-slate-50 rounded-lg">
                        <div className={`text-3xl font-bold ${getGradeColor(subject.averageGrade)} mb-1`}>
                          {subject.averageGrade}%
                        </div>
                        <div className="text-sm text-slate-600">Class Average</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-center p-2 bg-green-50 rounded">
                          <div className="font-bold text-green-600">{Math.floor(subject.students * 0.7)}</div>
                          <div className="text-green-700">Passing</div>
                        </div>
                        <div className="text-center p-2 bg-orange-50 rounded">
                          <div className="font-bold text-orange-600">{Math.floor(subject.students * 0.3)}</div>
                          <div className="text-orange-700">Need Help</div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity Section */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Syllabus Topics</h4>
                        <p className="text-sm text-slate-600">{subject.syllabus}</p>
                      </div>

                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Recent Activity</span>
                        </div>
                        <p className="text-sm text-blue-700">{subject.recentActivity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-1" />
                        Create Assignment
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="w-4 h-4 mr-1" />
                        View Students
                      </Button>
                      <Button size="sm" variant="outline">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Grade Book
                      </Button>
                      <Button size="sm" variant="outline">
                        <Clock className="w-4 h-4 mr-1" />
                        Attendance
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
