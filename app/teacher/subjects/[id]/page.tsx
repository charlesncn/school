"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Sidebar from "@/components/layout/sidebar"
import {
  ArrowLeft,
  BookOpen,
  Users,
  FileText,
  TrendingUp,
  Upload,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { subjectsData, studentsData } from "@/lib/data"

export default function SubjectDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [showCreateAssignment, setShowCreateAssignment] = useState(false)
  const [showGradeBook, setShowGradeBook] = useState(false)

  // Mock data - in real app, fetch based on params.id
  const subject = subjectsData[0]
  const students = studentsData.filter((s) => s.class === "Form 3A")

  const assignments = [
    {
      id: "ASG001",
      title: "Algebra Quiz",
      dueDate: "2024-12-15",
      totalMarks: 25,
      submissions: 28,
      totalStudents: 32,
      status: "Active",
    },
    {
      id: "ASG002",
      title: "Geometry Project",
      dueDate: "2024-12-20",
      totalMarks: 50,
      submissions: 15,
      totalStudents: 32,
      status: "Active",
    },
  ]

  const attendanceData = [
    { date: "2024-12-11", present: 30, absent: 2, late: 0 },
    { date: "2024-12-10", present: 28, absent: 3, late: 1 },
    { date: "2024-12-09", present: 31, absent: 1, late: 0 },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="teacher" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/teacher/subjects">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Subjects
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 lg:w-8 lg:h-8" />
                {subject.name}
              </h1>
              <p className="text-slate-600">{subject.code} • Form 3A • 32 students</p>
            </div>
          </div>

          {/* Subject Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Students</p>
                    <p className="text-2xl font-bold text-slate-900">32</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Assignments</p>
                    <p className="text-2xl font-bold text-slate-900">{assignments.length}</p>
                  </div>
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Avg Attendance</p>
                    <p className="text-2xl font-bold text-slate-900">94%</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Class Average</p>
                    <p className="text-2xl font-bold text-slate-900">85%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="gradebook">Grade Book</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Syllabus Progress</h3>
                      <div className="space-y-3">
                        {subject.syllabus.map((topic, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <span className="text-sm font-medium">{topic.topic}</span>
                            <Badge
                              variant={topic.completed ? "default" : "secondary"}
                              className={topic.completed ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}
                            >
                              {topic.completed ? "Completed" : "Pending"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium">Assignment graded</p>
                            <p className="text-xs text-slate-500">2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <Upload className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-sm font-medium">Study material uploaded</p>
                            <p className="text-xs text-slate-500">1 day ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                          <Clock className="w-5 h-5 text-orange-600" />
                          <div>
                            <p className="text-sm font-medium">Attendance marked</p>
                            <p className="text-xs text-slate-500">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="assignments" className="space-y-6 mt-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Assignments</h3>
                    <Button onClick={() => setShowCreateAssignment(true)} className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Assignment
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {assignments.map((assignment) => (
                      <Card key={assignment.id} className="border border-slate-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-slate-900">{assignment.title}</h4>
                              <p className="text-sm text-slate-600">Due: {assignment.dueDate}</p>
                            </div>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {assignment.status}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center p-2 bg-slate-50 rounded">
                              <div className="text-lg font-bold text-blue-600">{assignment.totalMarks}</div>
                              <div className="text-xs text-slate-600">Total Marks</div>
                            </div>
                            <div className="text-center p-2 bg-slate-50 rounded">
                              <div className="text-lg font-bold text-green-600">{assignment.submissions}</div>
                              <div className="text-xs text-slate-600">Submissions</div>
                            </div>
                            <div className="text-center p-2 bg-slate-50 rounded">
                              <div className="text-lg font-bold text-orange-600">
                                {Math.round((assignment.submissions / assignment.totalStudents) * 100)}%
                              </div>
                              <div className="text-xs text-slate-600">Completion</div>
                            </div>
                          </div>

                          <Progress
                            value={(assignment.submissions / assignment.totalStudents) * 100}
                            className="mb-4"
                          />

                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              <Upload className="w-4 h-4 mr-1" />
                              Grade
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 className="w-4 h-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="students" className="space-y-6 mt-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Class Students</h3>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export List
                    </Button>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Attendance</TableHead>
                        <TableHead>Current Grade</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="text-xs">
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{student.name}</div>
                                <div className="text-sm text-slate-500">{student.id}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {student.attendance}%
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              A
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <FileText className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="gradebook" className="space-y-6 mt-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Grade Book</h3>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Grades
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student</TableHead>
                          <TableHead>Assignment 1</TableHead>
                          <TableHead>Assignment 2</TableHead>
                          <TableHead>Mid-term</TableHead>
                          <TableHead>Overall</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {students.slice(0, 10).map((student) => (
                          <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                A
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                B+
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                A-
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                A
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="attendance" className="space-y-6 mt-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Attendance History</h3>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Mark Attendance
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {attendanceData.map((record, index) => (
                      <Card key={index} className="border border-slate-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold">{record.date}</h4>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              {Math.round((record.present / (record.present + record.absent + record.late)) * 100)}%
                            </Badge>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-2 bg-green-50 rounded">
                              <div className="text-lg font-bold text-green-600">{record.present}</div>
                              <div className="text-xs text-green-700">Present</div>
                            </div>
                            <div className="text-center p-2 bg-red-50 rounded">
                              <div className="text-lg font-bold text-red-600">{record.absent}</div>
                              <div className="text-xs text-red-700">Absent</div>
                            </div>
                            <div className="text-center p-2 bg-orange-50 rounded">
                              <div className="text-lg font-bold text-orange-600">{record.late}</div>
                              <div className="text-xs text-orange-700">Late</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Create Assignment Modal */}
          {showCreateAssignment && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <CardHeader>
                  <CardTitle>Create New Assignment</CardTitle>
                  <CardDescription>Create a new assignment for your students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="assignmentTitle">Assignment Title</Label>
                    <Input id="assignmentTitle" placeholder="Enter assignment title" />
                  </div>

                  <div>
                    <Label htmlFor="assignmentDescription">Description</Label>
                    <Textarea id="assignmentDescription" placeholder="Enter assignment description..." rows={3} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input id="dueDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="totalMarks">Total Marks</Label>
                      <Input id="totalMarks" type="number" placeholder="100" />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button onClick={() => setShowCreateAssignment(false)} variant="outline" className="flex-1">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setShowCreateAssignment(false)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      Create Assignment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
