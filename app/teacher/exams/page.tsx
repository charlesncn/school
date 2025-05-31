"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/layout/sidebar"
import { FileText, Plus, Clock, Users, Calendar, Play, Edit, Trash2 } from "lucide-react"

export default function TeacherExamsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [examType, setExamType] = useState("")

  const exams = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      subject: "Mathematics",
      class: "Form 3A",
      type: "Random Assessment",
      duration: 45,
      questions: 20,
      status: "Active",
      students: 32,
      completed: 28,
      date: "Dec 15, 2024",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Physics Motion Quiz",
      subject: "Physics",
      class: "Form 4B",
      type: "Continuous Assessment",
      duration: 30,
      questions: 15,
      status: "Scheduled",
      students: 28,
      completed: 0,
      date: "Dec 18, 2024",
      time: "2:00 PM",
    },
    {
      id: 3,
      title: "Chemistry Final Exam",
      subject: "Chemistry",
      class: "Form 3B",
      type: "Main Exam",
      duration: 120,
      questions: 50,
      status: "Completed",
      students: 30,
      completed: 30,
      date: "Dec 10, 2024",
      time: "9:00 AM",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="teacher" />

      <div className="flex-1 lg:ml-56">
        <div className="p-4 lg:p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-8 h-8" />
                Exam Management
              </h1>
              <p className="text-slate-600">Create and manage timed exams for your students.</p>
            </div>

            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Exam
            </Button>
          </div>

          {/* Exam Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Exams</p>
                    <p className="text-2xl font-bold text-slate-900">{exams.length}</p>
                  </div>
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Exams</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {exams.filter((e) => e.status === "Active").length}
                    </p>
                  </div>
                  <Play className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Scheduled</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {exams.filter((e) => e.status === "Scheduled").length}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Completed</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {exams.filter((e) => e.status === "Completed").length}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exams List */}
          <div className="space-y-6">
            {exams.map((exam) => (
              <Card key={exam.id} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{exam.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {exam.subject} • {exam.class}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={exam.type === "Main Exam" ? "default" : "secondary"}
                        className={
                          exam.type === "Main Exam"
                            ? "bg-red-100 text-red-700"
                            : exam.type === "Continuous Assessment"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }
                      >
                        {exam.type}
                      </Badge>
                      <Badge
                        variant={exam.status === "Active" ? "default" : "secondary"}
                        className={
                          exam.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : exam.status === "Scheduled"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                        }
                      >
                        {exam.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{exam.duration} minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{exam.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">
                        {exam.completed}/{exam.students} completed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">
                        {exam.date} at {exam.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      View Results
                    </Button>
                    {exam.status === "Scheduled" && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Play className="w-4 h-4 mr-1" />
                        Start Exam
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create Exam Form Modal */}
          {showCreateForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <CardHeader>
                  <CardTitle>Create New Exam</CardTitle>
                  <CardDescription>Set up a timed exam for your students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="examTitle">Exam Title</Label>
                      <Input id="examTitle" placeholder="Enter exam title" />
                    </div>
                    <div>
                      <Label htmlFor="examSubject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="examClass">Class</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Form 1A">Form 1A</SelectItem>
                          <SelectItem value="Form 1B">Form 1B</SelectItem>
                          <SelectItem value="Form 2A">Form 2A</SelectItem>
                          <SelectItem value="Form 2B">Form 2B</SelectItem>
                          <SelectItem value="Form 3A">Form 3A</SelectItem>
                          <SelectItem value="Form 3B">Form 3B</SelectItem>
                          <SelectItem value="Form 4A">Form 4A</SelectItem>
                          <SelectItem value="Form 4B">Form 4B</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="examType">Exam Type</Label>
                      <Select value={examType} onValueChange={setExamType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select exam type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="random">Random Assessment</SelectItem>
                          <SelectItem value="continuous">Continuous Assessment</SelectItem>
                          <SelectItem value="main">Main Exam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="duration">Duration (minutes)</Label>
                      <Input id="duration" type="number" placeholder="45" />
                    </div>
                    <div>
                      <Label htmlFor="questions">Number of Questions</Label>
                      <Input id="questions" type="number" placeholder="20" />
                    </div>
                    <div>
                      <Label htmlFor="totalMarks">Total Marks</Label>
                      <Input id="totalMarks" type="number" placeholder="100" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="examDate">Exam Date</Label>
                      <Input id="examDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="examTime">Exam Time</Label>
                      <Input id="examTime" type="time" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="instructions">Instructions</Label>
                    <Textarea id="instructions" placeholder="Enter exam instructions for students..." rows={3} />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button onClick={() => setShowCreateForm(false)} variant="outline" className="flex-1">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setShowCreateForm(false)}
                      className="flex-1 bg-gradient-to-r from-blue-900 to-blue-700"
                    >
                      Create Exam
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
