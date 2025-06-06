"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Sidebar from "@/components/layout/sidebar"
import { Users, BookOpen, TrendingUp, Clock, UserCheck, UserX, Award, AlertCircle } from "lucide-react"

export default function TeacherClassesPage() {
  const classes = [
    {
      id: 1,
      name: "Form 3A",
      subject: "Mathematics",
      students: 32,
      present: 28,
      absent: 4,
      averageGrade: 85,
      nextClass: "Today 10:00 AM",
      room: "Room 201",
      recentTopics: ["Quadratic Equations", "Graphing Functions", "Word Problems"],
      topPerformers: [
        { name: "Sarah Johnson", grade: 95 },
        { name: "Michael Chen", grade: 92 },
        { name: "Emma Davis", grade: 90 },
      ],
      needsAttention: [
        { name: "John Smith", issue: "Low attendance", grade: 65 },
        { name: "Lisa Brown", issue: "Struggling with concepts", grade: 58 },
      ],
    },
    {
      id: 2,
      name: "Form 4B",
      subject: "Physics",
      students: 28,
      present: 26,
      absent: 2,
      averageGrade: 78,
      nextClass: "Tomorrow 2:00 PM",
      room: "Lab 1",
      recentTopics: ["Newton's Laws", "Motion Dynamics", "Energy Conservation"],
      topPerformers: [
        { name: "David Wilson", grade: 88 },
        { name: "Anna Martinez", grade: 85 },
        { name: "James Lee", grade: 83 },
      ],
      needsAttention: [
        { name: "Robert Taylor", issue: "Missing assignments", grade: 62 },
        { name: "Maria Garcia", issue: "Lab participation", grade: 68 },
      ],
    },
    {
      id: 3,
      name: "Form 3B",
      subject: "Chemistry",
      students: 30,
      present: 29,
      absent: 1,
      averageGrade: 82,
      nextClass: "Friday 9:00 AM",
      room: "Lab 2",
      recentTopics: ["Chemical Bonding", "Molecular Structure", "Reaction Types"],
      topPerformers: [
        { name: "Sophie Anderson", grade: 94 },
        { name: "Alex Thompson", grade: 91 },
        { name: "Rachel Kim", grade: 89 },
      ],
      needsAttention: [{ name: "Kevin Johnson", issue: "Lab safety concerns", grade: 72 }],
    },
  ]

  const getAttendanceColor = (present: number, total: number) => {
    const percentage = (present / total) * 100
    if (percentage >= 95) return "text-green-600"
    if (percentage >= 85) return "text-blue-600"
    if (percentage >= 75) return "text-orange-600"
    return "text-red-600"
  }

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600"
    if (grade >= 80) return "text-blue-600"
    if (grade >= 70) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="teacher" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-6 h-6 lg:w-8 lg:h-8" />
              My Classes
            </h1>
            <p className="text-slate-600">Monitor class performance, attendance, and student progress.</p>
          </div>

          {/* Class Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Classes</p>
                    <p className="text-2xl font-bold text-slate-900">{classes.length}</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Students</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {classes.reduce((sum, cls) => sum + cls.students, 0)}
                    </p>
                  </div>
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Average Attendance</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {Math.round(
                        (classes.reduce((sum, cls) => sum + cls.present, 0) /
                          classes.reduce((sum, cls) => sum + cls.students, 0)) *
                          100,
                      )}
                      %
                    </p>
                  </div>
                  <UserCheck className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Students Need Help</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {classes.reduce((sum, cls) => sum + cls.needsAttention.length, 0)}
                    </p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Classes List */}
          <div className="space-y-6">
            {classes.map((classData) => (
              <Card key={classData.id} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                        {classData.name}
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {classData.subject}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {classData.students} students • {classData.room} • Next: {classData.nextClass}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Take Attendance
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Attendance Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900">Today's Attendance</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-800">Present</span>
                          </div>
                          <span className={`font-bold ${getAttendanceColor(classData.present, classData.students)}`}>
                            {classData.present}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <UserX className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">Absent</span>
                          </div>
                          <span className="font-bold text-red-600">{classData.absent}</span>
                        </div>
                        <div className="mt-2">
                          <Progress value={(classData.present / classData.students) * 100} className="h-2" />
                          <p className="text-xs text-slate-500 mt-1">
                            {Math.round((classData.present / classData.students) * 100)}% attendance rate
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Performance Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900">Class Performance</h4>
                      <div className="text-center p-4 bg-slate-50 rounded-lg">
                        <div className={`text-3xl font-bold ${getGradeColor(classData.averageGrade)} mb-1`}>
                          {classData.averageGrade}%
                        </div>
                        <div className="text-sm text-slate-600">Class Average</div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-slate-700">Recent Topics</h5>
                        {classData.recentTopics.slice(0, 3).map((topic, index) => (
                          <div key={index} className="text-xs p-2 bg-blue-50 rounded text-blue-700">
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Performers Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-600" />
                        Top Performers
                      </h4>
                      <div className="space-y-3">
                        {classData.topPerformers.map((student, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="text-xs">
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium text-slate-900">{student.name}</span>
                            </div>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {student.grade}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Needs Attention Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-600" />
                        Needs Attention
                      </h4>
                      <div className="space-y-3">
                        {classData.needsAttention.map((student, index) => (
                          <div key={index} className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarFallback className="text-xs">
                                    {student.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium text-slate-900">{student.name}</span>
                              </div>
                              <Badge variant="secondary" className="bg-red-100 text-red-700">
                                {student.grade}%
                              </Badge>
                            </div>
                            <p className="text-xs text-orange-700">{student.issue}</p>
                          </div>
                        ))}
                        {classData.needsAttention.length === 0 && (
                          <div className="p-3 bg-green-50 rounded-lg text-center">
                            <p className="text-sm text-green-700">All students performing well!</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Grade Book
                      </Button>
                      <Button size="sm" variant="outline">
                        <Clock className="w-4 h-4 mr-1" />
                        Attendance History
                      </Button>
                      <Button size="sm" variant="outline">
                        <BookOpen className="w-4 h-4 mr-1" />
                        Lesson Plans
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="w-4 h-4 mr-1" />
                        Student Reports
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
