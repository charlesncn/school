"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/layout/sidebar"
import { BarChart3, TrendingUp, Users, Award, Target, BookOpen, Clock, CheckCircle } from "lucide-react"

export default function TeacherPerformancePage() {
  const performanceData = {
    overall: {
      rating: 4.2,
      totalStudents: 90,
      averageGrade: 82,
      attendanceRate: 94,
      completionRate: 88,
    },
    subjects: [
      {
        name: "Mathematics",
        class: "Form 3A",
        students: 32,
        averageGrade: 85,
        passRate: 94,
        attendance: 96,
        improvement: "+5%",
        topicsCovered: 18,
        totalTopics: 24,
      },
      {
        name: "Physics",
        class: "Form 4B",
        students: 28,
        averageGrade: 78,
        passRate: 86,
        attendance: 92,
        improvement: "+2%",
        topicsCovered: 22,
        totalTopics: 30,
      },
      {
        name: "Chemistry",
        class: "Form 3B",
        students: 30,
        averageGrade: 82,
        passRate: 90,
        attendance: 94,
        improvement: "+7%",
        topicsCovered: 16,
        totalTopics: 26,
      },
    ],
    achievements: [
      {
        title: "Excellence in Teaching",
        description: "Achieved 95%+ student satisfaction rating",
        date: "December 2024",
        type: "award",
      },
      {
        title: "Best Attendance Rate",
        description: "Highest class attendance in the department",
        date: "November 2024",
        type: "achievement",
      },
      {
        title: "Innovation in Education",
        description: "Implemented new teaching methodology",
        date: "October 2024",
        type: "innovation",
      },
    ],
    feedback: [
      {
        category: "Student Engagement",
        score: 4.5,
        feedback: "Students are highly engaged and participate actively in class discussions.",
      },
      {
        category: "Curriculum Delivery",
        score: 4.3,
        feedback: "Excellent coverage of syllabus with clear explanations and examples.",
      },
      {
        category: "Assessment Methods",
        score: 4.1,
        feedback: "Fair and comprehensive assessment techniques that help student learning.",
      },
      {
        category: "Communication",
        score: 4.4,
        feedback: "Clear communication with students and parents about progress and expectations.",
      },
    ],
  }

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600"
    if (grade >= 80) return "text-blue-600"
    if (grade >= 70) return "text-orange-600"
    return "text-red-600"
  }

  const getScoreColor = (score: number) => {
    if (score >= 4.5) return "bg-green-500"
    if (score >= 4.0) return "bg-blue-500"
    if (score >= 3.5) return "bg-orange-500"
    return "bg-red-500"
  }

  const getBadgeType = (type: string) => {
    switch (type) {
      case "award":
        return "bg-yellow-100 text-yellow-700"
      case "achievement":
        return "bg-green-100 text-green-700"
      case "innovation":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="teacher" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8" />
              My Performance
            </h1>
            <p className="text-slate-600">Track your teaching performance and student outcomes.</p>
          </div>

          {/* Overall Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Overall Rating</p>
                    <p className="text-2xl font-bold text-slate-900">{performanceData.overall.rating}/5</p>
                  </div>
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Students</p>
                    <p className="text-2xl font-bold text-slate-900">{performanceData.overall.totalStudents}</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Average Grade</p>
                    <p className={`text-2xl font-bold ${getGradeColor(performanceData.overall.averageGrade)}`}>
                      {performanceData.overall.averageGrade}%
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Attendance Rate</p>
                    <p className="text-2xl font-bold text-slate-900">{performanceData.overall.attendanceRate}%</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Completion Rate</p>
                    <p className="text-2xl font-bold text-slate-900">{performanceData.overall.completionRate}%</p>
                  </div>
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subject Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Subject Performance
                </CardTitle>
                <CardDescription>Performance metrics for each subject you teach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {performanceData.subjects.map((subject, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="font-semibold text-slate-900">{subject.name}</h3>
                          <p className="text-sm text-slate-600">
                            {subject.class} • {subject.students} students
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {subject.improvement}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className={`text-lg font-bold ${getGradeColor(subject.averageGrade)}`}>
                            {subject.averageGrade}%
                          </div>
                          <div className="text-xs text-slate-600">Avg Grade</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{subject.passRate}%</div>
                          <div className="text-xs text-slate-600">Pass Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{subject.attendance}%</div>
                          <div className="text-xs text-slate-600">Attendance</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Syllabus Progress</span>
                          <span>
                            {subject.topicsCovered}/{subject.totalTopics} topics
                          </span>
                        </div>
                        <Progress value={(subject.topicsCovered / subject.totalTopics) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Achievements & Recognition
                </CardTitle>
                <CardDescription>Your recent achievements and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {performanceData.achievements.map((achievement, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{achievement.title}</h3>
                        <Badge variant="secondary" className={getBadgeType(achievement.type)}>
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{achievement.description}</p>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {achievement.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Feedback */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Performance Feedback
              </CardTitle>
              <CardDescription>Detailed feedback from students, parents, and administration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {performanceData.feedback.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-slate-900">{item.category}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-4 h-4 rounded-full ${
                                star <= item.score ? getScoreColor(item.score) : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{item.score}/5</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{item.feedback}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Areas for Improvement</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Consider incorporating more interactive learning activities</li>
                  <li>• Provide more frequent feedback on student assignments</li>
                  <li>• Explore technology integration for enhanced learning experiences</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
