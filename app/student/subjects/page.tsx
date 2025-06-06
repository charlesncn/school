"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/layout/sidebar"
import { BookOpen, Clock, FileText, TrendingUp, User, Calendar, Download } from "lucide-react"

export default function StudentSubjectsPage() {
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      code: "MATH101",
      teacher: "Mr. John Smith",
      room: "Room 201",
      schedule: "Mon, Wed, Fri - 10:00 AM",
      currentGrade: "A",
      percentage: 92,
      attendance: 96,
      nextClass: "Today 10:00 AM",
      recentTopics: ["Quadratic Equations", "Graphing Functions", "Word Problems"],
      assignments: [
        { name: "Algebra Quiz", dueDate: "Dec 15", status: "pending", points: 25 },
        { name: "Chapter 5 Homework", dueDate: "Dec 12", status: "submitted", points: 20, grade: "A-" },
        { name: "Mid-term Project", dueDate: "Dec 20", status: "in-progress", points: 50 },
      ],
      syllabus: {
        completed: 18,
        total: 24,
        topics: ["Algebra", "Geometry", "Statistics", "Trigonometry"],
      },
    },
    {
      id: 2,
      name: "Physics",
      code: "PHY101",
      teacher: "Ms. Sarah Davis",
      room: "Lab 1",
      schedule: "Tue, Thu - 2:00 PM",
      currentGrade: "B+",
      percentage: 85,
      attendance: 92,
      nextClass: "Tomorrow 2:00 PM",
      recentTopics: ["Newton's Laws", "Motion Dynamics", "Energy Conservation"],
      assignments: [
        { name: "Lab Report #3", dueDate: "Dec 18", status: "pending", points: 30 },
        { name: "Motion Quiz", dueDate: "Dec 10", status: "graded", points: 20, grade: "B+" },
        { name: "Physics Project", dueDate: "Dec 22", status: "not-started", points: 40 },
      ],
      syllabus: {
        completed: 22,
        total: 30,
        topics: ["Mechanics", "Thermodynamics", "Waves", "Electricity"],
      },
    },
    {
      id: 3,
      name: "Chemistry",
      code: "CHEM101",
      teacher: "Dr. Michael Wilson",
      room: "Lab 2",
      schedule: "Mon, Wed - 9:00 AM",
      currentGrade: "A-",
      percentage: 88,
      attendance: 94,
      nextClass: "Friday 9:00 AM",
      recentTopics: ["Chemical Bonding", "Molecular Structure", "Reaction Types"],
      assignments: [
        { name: "Bonding Worksheet", dueDate: "Dec 16", status: "pending", points: 15 },
        { name: "Lab Safety Quiz", dueDate: "Dec 8", status: "graded", points: 10, grade: "A" },
        { name: "Research Paper", dueDate: "Dec 25", status: "in-progress", points: 35 },
      ],
      syllabus: {
        completed: 16,
        total: 26,
        topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
      },
    },
  ]

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-600"
    if (grade.startsWith("B")) return "text-blue-600"
    if (grade.startsWith("C")) return "text-orange-600"
    return "text-red-600"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-green-100 text-green-700"
      case "graded":
        return "bg-blue-100 text-blue-700"
      case "pending":
        return "bg-orange-100 text-orange-700"
      case "in-progress":
        return "bg-yellow-100 text-yellow-700"
      case "not-started":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="student" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 lg:w-8 lg:h-8" />
              My Subjects
            </h1>
            <p className="text-slate-600">Track your academic progress and manage assignments.</p>
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
                    <p className="text-sm font-medium text-slate-600">Overall GPA</p>
                    <p className="text-2xl font-bold text-slate-900">3.7</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pending Assignments</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {subjects.reduce(
                        (sum, subject) =>
                          sum +
                          subject.assignments.filter((a) => a.status === "pending" || a.status === "in-progress")
                            .length,
                        0,
                      )}
                    </p>
                  </div>
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Attendance Rate</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {Math.round(subjects.reduce((sum, subject) => sum + subject.attendance, 0) / subjects.length)}%
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-purple-600" />
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
                        <Badge variant="secondary" className={`${getGradeColor(subject.currentGrade)} bg-opacity-10`}>
                          {subject.currentGrade} ({subject.percentage}%)
                        </Badge>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {subject.teacher}
                          </span>
                          <span>{subject.room}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {subject.schedule}
                          </span>
                        </div>
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        Materials
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Progress Section */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Course Progress</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm text-slate-600 mb-1">
                              <span>Syllabus Completion</span>
                              <span>
                                {subject.syllabus.completed}/{subject.syllabus.total}
                              </span>
                            </div>
                            <Progress
                              value={(subject.syllabus.completed / subject.syllabus.total) * 100}
                              className="h-2"
                            />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm text-slate-600 mb-1">
                              <span>Attendance</span>
                              <span>{subject.attendance}%</span>
                            </div>
                            <Progress value={subject.attendance} className="h-2" />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Next Class</span>
                        </div>
                        <p className="text-sm text-blue-700">{subject.nextClass}</p>
                      </div>
                    </div>

                    {/* Assignments Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900">Recent Assignments</h4>
                      <div className="space-y-3">
                        {subject.assignments.map((assignment, index) => (
                          <div key={index} className="p-3 bg-slate-50 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="text-sm font-medium text-slate-900">{assignment.name}</h5>
                              <Badge variant="secondary" className={getStatusColor(assignment.status)}>
                                {assignment.status.replace("-", " ")}
                              </Badge>
                            </div>
                            <div className="flex justify-between items-center text-xs text-slate-600">
                              <span>Due: {assignment.dueDate}</span>
                              <span>{assignment.points} pts</span>
                            </div>
                            {assignment.grade && (
                              <div className="mt-1">
                                <span className={`text-sm font-medium ${getGradeColor(assignment.grade)}`}>
                                  Grade: {assignment.grade}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Topics Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900">Recent Topics</h4>
                      <div className="space-y-2">
                        {subject.recentTopics.map((topic, index) => (
                          <div key={index} className="p-2 bg-green-50 rounded text-sm text-green-700">
                            {topic}
                          </div>
                        ))}
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-slate-700 mb-2">Course Topics</h5>
                        <div className="flex flex-wrap gap-1">
                          {subject.syllabus.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-1" />
                        Submit Assignment
                      </Button>
                      <Button size="sm" variant="outline">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        View Grades
                      </Button>
                      <Button size="sm" variant="outline">
                        <Clock className="w-4 h-4 mr-1" />
                        Attendance
                      </Button>
                      <Button size="sm" variant="outline">
                        <BookOpen className="w-4 h-4 mr-1" />
                        Study Materials
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
