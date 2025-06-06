"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/layout/sidebar"
import { Calendar, User, Plus, Newspaper } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const [userType, setUserType] = useState<string | null>(null)

  useEffect(() => {
    setUserType(localStorage.getItem("userType"))
  }, [])

  const newsItems = [
    {
      id: 1,
      title: "Annual Science Fair 2025",
      content:
        "We are excited to announce our Annual Science Fair scheduled for January 15, 2025. Students from all forms are encouraged to participate and showcase their innovative projects.",
      author: "Principal Johnson",
      date: "Dec 10, 2024",
      category: "Events",
      priority: "high",
    },
    {
      id: 2,
      title: "New Library Hours",
      content:
        "Starting December 15, 2024, the school library will extend its hours. New timings: Monday-Friday 7:00 AM - 6:00 PM, Saturday 9:00 AM - 2:00 PM.",
      author: "Librarian Smith",
      date: "Dec 8, 2024",
      category: "Announcement",
      priority: "medium",
    },
    {
      id: 3,
      title: "Form 4 Graduation Ceremony",
      content:
        "The Form 4 graduation ceremony will be held on December 20, 2024, at 10:00 AM in the school auditorium. Parents and guardians are cordially invited.",
      author: "Admin Office",
      date: "Dec 5, 2024",
      category: "Events",
      priority: "high",
    },
    {
      id: 4,
      title: "Winter Break Schedule",
      content:
        "School will be closed for winter break from December 22, 2024, to January 6, 2025. Classes will resume on January 7, 2025.",
      author: "Principal Johnson",
      date: "Dec 3, 2024",
      category: "Schedule",
      priority: "medium",
    },
    {
      id: 5,
      title: "New Sports Equipment",
      content:
        "We have received new sports equipment for our physical education program. Students can now enjoy upgraded facilities for basketball, volleyball, and track events.",
      author: "Sports Department",
      date: "Nov 28, 2024",
      category: "Facilities",
      priority: "low",
    },
  ]

  if (!userType) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType={userType} />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                <Newspaper className="w-8 h-8" />
                School News
              </h1>
              <p className="text-slate-600">Stay updated with the latest school announcements and events.</p>
            </div>

            {userType === "admin" && (
              <Link href="/admin/news/create">
                <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Create News
                </Button>
              </Link>
            )}
          </div>

          <div className="space-y-6">
            {newsItems.map((news) => (
              <Card key={news.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 mb-2">{news.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {news.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {news.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={news.category === "Events" ? "default" : "secondary"}
                        className={
                          news.category === "Events"
                            ? "bg-blue-100 text-blue-700"
                            : news.category === "Announcement"
                              ? "bg-green-100 text-green-700"
                              : news.category === "Schedule"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-purple-100 text-purple-700"
                        }
                      >
                        {news.category}
                      </Badge>
                      {news.priority === "high" && (
                        <Badge variant="destructive" className="bg-red-100 text-red-700">
                          Important
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">{news.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              Load More News
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
