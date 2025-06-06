"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/layout/sidebar"
import { Calendar, Clock, Plus, Edit, BookOpen } from "lucide-react"

export default function TimetablePage() {
  const [selectedClass, setSelectedClass] = useState("Form 3A")
  const [selectedTerm, setSelectedTerm] = useState("Term 1")

  const timeSlots = [
    "8:00 - 8:45",
    "8:45 - 9:30",
    "9:30 - 10:15",
    "10:15 - 10:30", // Break
    "10:30 - 11:15",
    "11:15 - 12:00",
    "12:00 - 12:45",
    "12:45 - 1:30", // Lunch
    "1:30 - 2:15",
    "2:15 - 3:00",
  ]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  const timetableData = {
    "Form 3A": {
      Monday: ["Mathematics", "Physics", "Chemistry", "Break", "English", "Biology", "History", "Lunch", "PE", "Study"],
      Tuesday: [
        "Physics",
        "Mathematics",
        "English",
        "Break",
        "Chemistry",
        "Biology",
        "Geography",
        "Lunch",
        "Art",
        "Study",
      ],
      Wednesday: [
        "Chemistry",
        "English",
        "Mathematics",
        "Break",
        "Physics",
        "History",
        "Biology",
        "Lunch",
        "Music",
        "Study",
      ],
      Thursday: ["English", "Chemistry", "Physics", "Break", "Mathematics", "Geography", "Art", "Lunch", "PE", "Study"],
      Friday: [
        "Biology",
        "History",
        "English",
        "Break",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Lunch",
        "Assembly",
        "Study",
      ],
    },
  }

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      Mathematics: "bg-blue-100 text-blue-700",
      Physics: "bg-green-100 text-green-700",
      Chemistry: "bg-purple-100 text-purple-700",
      Biology: "bg-orange-100 text-orange-700",
      English: "bg-red-100 text-red-700",
      History: "bg-yellow-100 text-yellow-700",
      Geography: "bg-indigo-100 text-indigo-700",
      PE: "bg-pink-100 text-pink-700",
      Art: "bg-cyan-100 text-cyan-700",
      Music: "bg-teal-100 text-teal-700",
      Break: "bg-gray-100 text-gray-700",
      Lunch: "bg-gray-100 text-gray-700",
      Assembly: "bg-slate-100 text-slate-700",
      Study: "bg-gray-50 text-gray-600",
    }
    return colors[subject] || "bg-gray-100 text-gray-700"
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="admin" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 lg:w-8 lg:h-8" />
                Timetable Management
              </h1>
              <p className="text-slate-600">Create and manage class schedules for the academic year.</p>
            </div>

            <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create New Term
            </Button>
          </div>

          {/* Filters */}
          <Card className="border-0 shadow-md mb-6">
            <CardContent className="p-4 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Class</label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Term</label>
                  <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Term 1">Term 1 (Jan - Apr)</SelectItem>
                      <SelectItem value="Term 2">Term 2 (May - Aug)</SelectItem>
                      <SelectItem value="Term 3">Term 3 (Sep - Dec)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Timetable
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timetable Grid */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {selectedClass} - {selectedTerm} Timetable
              </CardTitle>
              <CardDescription>Weekly schedule for the selected class and term</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-6 gap-2">
                  {/* Header */}
                  <div className="font-semibold text-center p-3 bg-slate-100 rounded-lg">Time</div>
                  {days.map((day) => (
                    <div key={day} className="font-semibold text-center p-3 bg-slate-100 rounded-lg">
                      {day}
                    </div>
                  ))}

                  {/* Time slots and subjects */}
                  {timeSlots.map((time, timeIndex) => (
                    <div key={timeIndex} className="contents">
                      <div className="text-sm font-medium text-center p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                        {time}
                      </div>
                      {days.map((day) => {
                        const subject =
                          timetableData[selectedClass as keyof typeof timetableData]?.[day]?.[timeIndex] || "Free"
                        return (
                          <div key={`${day}-${timeIndex}`} className="p-2">
                            <Badge
                              variant="secondary"
                              className={`w-full justify-center py-2 px-3 text-xs font-medium ${getSubjectColor(subject)}`}
                            >
                              <BookOpen className="w-3 h-3 mr-1" />
                              {subject}
                            </Badge>
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Term Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Term 1 (2024)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Start Date:</strong> January 8, 2024
                  </p>
                  <p>
                    <strong>End Date:</strong> April 12, 2024
                  </p>
                  <p>
                    <strong>Duration:</strong> 14 weeks
                  </p>
                  <p>
                    <strong>Status:</strong> <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Term 2 (2024)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Start Date:</strong> May 6, 2024
                  </p>
                  <p>
                    <strong>End Date:</strong> August 16, 2024
                  </p>
                  <p>
                    <strong>Duration:</strong> 14 weeks
                  </p>
                  <p>
                    <strong>Status:</strong> <Badge className="bg-orange-100 text-orange-700">Upcoming</Badge>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Term 3 (2024)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Start Date:</strong> September 2, 2024
                  </p>
                  <p>
                    <strong>End Date:</strong> December 13, 2024
                  </p>
                  <p>
                    <strong>Duration:</strong> 15 weeks
                  </p>
                  <p>
                    <strong>Status:</strong> <Badge className="bg-gray-100 text-gray-700">Planned</Badge>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
