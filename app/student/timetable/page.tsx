"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/layout/sidebar"
import CalendarView from "@/components/ui/calendar-view"
import { Calendar, Clock, BookOpen, MapPin } from "lucide-react"

export default function StudentTimetablePage() {
  const timetableData = {
    Monday: [
      { time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 201" },
      { time: "8:45 - 9:30", subject: "Physics", teacher: "Ms. Davis", room: "Lab 1" },
      { time: "9:30 - 10:15", subject: "Chemistry", teacher: "Dr. Wilson", room: "Lab 2" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "", room: "" },
      { time: "10:30 - 11:15", subject: "English", teacher: "Mrs. Johnson", room: "Room 105" },
      { time: "11:15 - 12:00", subject: "Biology", teacher: "Ms. Brown", room: "Room 301" },
      { time: "12:00 - 12:45", subject: "History", teacher: "Mr. Davis", room: "Room 102" },
      { time: "12:45 - 1:30", subject: "Lunch", teacher: "", room: "" },
      { time: "1:30 - 2:15", subject: "PE", teacher: "Coach Wilson", room: "Gym" },
      { time: "2:15 - 3:00", subject: "Study Hall", teacher: "", room: "Library" },
    ],
    Tuesday: [
      { time: "8:00 - 8:45", subject: "Physics", teacher: "Ms. Davis", room: "Lab 1" },
      { time: "8:45 - 9:30", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 201" },
      { time: "9:30 - 10:15", subject: "English", teacher: "Mrs. Johnson", room: "Room 105" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "", room: "" },
      { time: "10:30 - 11:15", subject: "Chemistry", teacher: "Dr. Wilson", room: "Lab 2" },
      { time: "11:15 - 12:00", subject: "Biology", teacher: "Ms. Brown", room: "Room 301" },
      { time: "12:00 - 12:45", subject: "Geography", teacher: "Mr. Lee", room: "Room 203" },
      { time: "12:45 - 1:30", subject: "Lunch", teacher: "", room: "" },
      { time: "1:30 - 2:15", subject: "Art", teacher: "Ms. Garcia", room: "Art Room" },
      { time: "2:15 - 3:00", subject: "Study Hall", teacher: "", room: "Library" },
    ],
    Wednesday: [
      { time: "8:00 - 8:45", subject: "Chemistry", teacher: "Dr. Wilson", room: "Lab 2" },
      { time: "8:45 - 9:30", subject: "English", teacher: "Mrs. Johnson", room: "Room 105" },
      { time: "9:30 - 10:15", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 201" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "", room: "" },
      { time: "10:30 - 11:15", subject: "Physics", teacher: "Ms. Davis", room: "Lab 1" },
      { time: "11:15 - 12:00", subject: "History", teacher: "Mr. Davis", room: "Room 102" },
      { time: "12:00 - 12:45", subject: "Biology", teacher: "Ms. Brown", room: "Room 301" },
      { time: "12:45 - 1:30", subject: "Lunch", teacher: "", room: "" },
      { time: "1:30 - 2:15", subject: "Music", teacher: "Mr. Taylor", room: "Music Room" },
      { time: "2:15 - 3:00", subject: "Study Hall", teacher: "", room: "Library" },
    ],
    Thursday: [
      { time: "8:00 - 8:45", subject: "English", teacher: "Mrs. Johnson", room: "Room 105" },
      { time: "8:45 - 9:30", subject: "Chemistry", teacher: "Dr. Wilson", room: "Lab 2" },
      { time: "9:30 - 10:15", subject: "Physics", teacher: "Ms. Davis", room: "Lab 1" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "", room: "" },
      { time: "10:30 - 11:15", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 201" },
      { time: "11:15 - 12:00", subject: "Geography", teacher: "Mr. Lee", room: "Room 203" },
      { time: "12:00 - 12:45", subject: "Art", teacher: "Ms. Garcia", room: "Art Room" },
      { time: "12:45 - 1:30", subject: "Lunch", teacher: "", room: "" },
      { time: "1:30 - 2:15", subject: "PE", teacher: "Coach Wilson", room: "Gym" },
      { time: "2:15 - 3:00", subject: "Study Hall", teacher: "", room: "Library" },
    ],
    Friday: [
      { time: "8:00 - 8:45", subject: "Biology", teacher: "Ms. Brown", room: "Room 301" },
      { time: "8:45 - 9:30", subject: "History", teacher: "Mr. Davis", room: "Room 102" },
      { time: "9:30 - 10:15", subject: "English", teacher: "Mrs. Johnson", room: "Room 105" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "", room: "" },
      { time: "10:30 - 11:15", subject: "Mathematics", teacher: "Mr. Smith", room: "Room 201" },
      { time: "11:15 - 12:00", subject: "Physics", teacher: "Ms. Davis", room: "Lab 1" },
      { time: "12:00 - 12:45", subject: "Chemistry", teacher: "Dr. Wilson", room: "Lab 2" },
      { time: "12:45 - 1:30", subject: "Lunch", teacher: "", room: "" },
      { time: "1:30 - 2:15", subject: "Assembly", teacher: "", room: "Auditorium" },
      { time: "2:15 - 3:00", subject: "Study Hall", teacher: "", room: "Library" },
    ],
  }

  const calendarEvents = [
    { id: "1", title: "Mathematics", date: "2024-12-11", time: "8:00 AM", type: "class" as const, subject: "Math" },
    { id: "2", title: "Physics Lab", date: "2024-12-11", time: "8:45 AM", type: "class" as const, subject: "Physics" },
    {
      id: "3",
      title: "Chemistry Quiz",
      date: "2024-12-12",
      time: "9:30 AM",
      type: "exam" as const,
      subject: "Chemistry",
    },
    { id: "4", title: "English Essay Due", date: "2024-12-13", time: "10:30 AM", type: "event" as const },
    { id: "5", title: "Parent-Teacher Meeting", date: "2024-12-15", time: "2:00 PM", type: "meeting" as const },
  ]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

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
      "Study Hall": "bg-gray-50 text-gray-600",
    }
    return colors[subject] || "bg-gray-100 text-gray-700"
  }

  const todaySchedule = timetableData.Monday // This would be dynamic based on current day

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="student" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-6 h-6 lg:w-8 lg:h-8" />
              My Timetable
            </h1>
            <p className="text-slate-600">View your class schedule and upcoming events.</p>
          </div>

          {/* Today's Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-md lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Today's Schedule
                </CardTitle>
                <CardDescription>Monday, December 11, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {todaySchedule.map((period, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-medium text-slate-600 min-w-[100px]">{period.time}</div>
                        <Badge variant="secondary" className={getSubjectColor(period.subject)}>
                          {period.subject}
                        </Badge>
                      </div>
                      <div className="text-right text-sm text-slate-600">
                        {period.teacher && (
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {period.teacher}
                          </div>
                        )}
                        {period.room && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {period.room}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
                <CardDescription>Important details for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Next Class</h4>
                  <p className="text-sm text-blue-700">Mathematics at 8:00 AM</p>
                  <p className="text-xs text-blue-600">Room 201 with Mr. Smith</p>
                </div>

                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-1">Upcoming Exam</h4>
                  <p className="text-sm text-orange-700">Chemistry Quiz Tomorrow</p>
                  <p className="text-xs text-orange-600">9:30 AM in Lab 2</p>
                </div>

                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-1">Assignment Due</h4>
                  <p className="text-sm text-green-700">English Essay</p>
                  <p className="text-xs text-green-600">Due: December 13</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Timetable */}
          <Card className="border-0 shadow-md mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Weekly Timetable
              </CardTitle>
              <CardDescription>Your complete weekly class schedule</CardDescription>
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

                  {/* Time slots */}
                  {todaySchedule.map((timeSlot, timeIndex) => (
                    <div key={timeIndex} className="contents">
                      <div className="text-sm font-medium text-center p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                        {timeSlot.time}
                      </div>
                      {days.map((day) => {
                        const daySchedule = timetableData[day as keyof typeof timetableData]
                        const period = daySchedule[timeIndex]
                        return (
                          <div key={`${day}-${timeIndex}`} className="p-2">
                            <div className={`w-full p-2 rounded-lg text-center ${getSubjectColor(period.subject)}`}>
                              <div className="text-xs font-medium">{period.subject}</div>
                              {period.teacher && <div className="text-xs opacity-75">{period.teacher}</div>}
                              {period.room && <div className="text-xs opacity-75">{period.room}</div>}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calendar View */}
          <CalendarView events={calendarEvents} title="Academic Calendar" />
        </div>
      </div>
    </div>
  )
}
