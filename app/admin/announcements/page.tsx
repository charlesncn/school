"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "@/components/layout/sidebar"
import { Bell, Plus, Send, Users, Mail, MessageSquare, Calendar, Edit, Trash2 } from "lucide-react"

export default function AdminAnnouncementsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [selectedAudience, setSelectedAudience] = useState<string[]>([])
  const [deliveryMethod, setDeliveryMethod] = useState<string[]>([])

  const announcements = [
    {
      id: 1,
      title: "Parent-Teacher Conference Scheduled",
      content:
        "We are pleased to announce that parent-teacher conferences will be held on December 20-21, 2024. Please schedule your appointments through the school portal.",
      audience: ["Parents", "Teachers"],
      deliveryMethod: ["Email", "SMS"],
      status: "Sent",
      sentDate: "2024-12-10",
      recipients: 245,
      priority: "High",
    },
    {
      id: 2,
      title: "New Library Hours",
      content:
        "Starting December 15, 2024, the school library will extend its operating hours. New timings: Monday-Friday 7:00 AM - 6:00 PM.",
      audience: ["Students", "Teachers", "Parents"],
      deliveryMethod: ["Email", "Portal"],
      status: "Scheduled",
      sentDate: "2024-12-15",
      recipients: 1247,
      priority: "Medium",
    },
    {
      id: 3,
      title: "Winter Break Reminder",
      content:
        "This is a reminder that winter break begins on December 22, 2024. Classes will resume on January 7, 2025. Have a wonderful holiday!",
      audience: ["Students", "Parents"],
      deliveryMethod: ["Email", "SMS", "Portal"],
      status: "Draft",
      sentDate: null,
      recipients: 0,
      priority: "Low",
    },
  ]

  const stats = {
    totalSent: 156,
    totalRecipients: 2847,
    deliveryRate: 98.5,
    responseRate: 23.4,
  }

  const handleAudienceChange = (audience: string, checked: boolean) => {
    if (checked) {
      setSelectedAudience([...selectedAudience, audience])
    } else {
      setSelectedAudience(selectedAudience.filter((a) => a !== audience))
    }
  }

  const handleDeliveryMethodChange = (method: string, checked: boolean) => {
    if (checked) {
      setDeliveryMethod([...deliveryMethod, method])
    } else {
      setDeliveryMethod(deliveryMethod.filter((m) => m !== method))
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="admin" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
                <Bell className="w-6 h-6 lg:w-8 lg:h-8" />
                Announcements
              </h1>
              <p className="text-slate-600">Create and manage school-wide announcements and notifications.</p>
            </div>

            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 w-full sm:w-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Announcement
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Sent</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.totalSent}</p>
                    <p className="text-sm text-green-600">This month</p>
                  </div>
                  <Send className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Recipients</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.totalRecipients.toLocaleString()}</p>
                    <p className="text-sm text-blue-600">Reached</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Delivery Rate</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.deliveryRate}%</p>
                    <p className="text-sm text-green-600">Successful</p>
                  </div>
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Response Rate</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.responseRate}%</p>
                    <p className="text-sm text-orange-600">Engagement</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Announcements List */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>Manage your school announcements and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="p-6 bg-slate-50 rounded-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">{announcement.title}</h3>
                          <Badge
                            variant="secondary"
                            className={
                              announcement.priority === "High"
                                ? "bg-red-100 text-red-700"
                                : announcement.priority === "Medium"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-green-100 text-green-700"
                            }
                          >
                            {announcement.priority}
                          </Badge>
                        </div>
                        <p className="text-slate-600 mb-3">{announcement.content}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>Audience: {announcement.audience.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Send className="w-4 h-4" />
                            <span>Via: {announcement.deliveryMethod.join(", ")}</span>
                          </div>
                          {announcement.sentDate && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>Sent: {announcement.sentDate}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>Recipients: {announcement.recipients}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant="secondary"
                          className={
                            announcement.status === "Sent"
                              ? "bg-green-100 text-green-700"
                              : announcement.status === "Scheduled"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-700"
                          }
                        >
                          {announcement.status}
                        </Badge>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          {announcement.status === "Draft" && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Send className="w-4 h-4 mr-1" />
                              Send
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Create Announcement Form Modal */}
          {showCreateForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <CardHeader>
                  <CardTitle>Create New Announcement</CardTitle>
                  <CardDescription>Send important information to your school community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="title">Announcement Title</Label>
                    <Input id="title" placeholder="Enter announcement title" />
                  </div>

                  <div>
                    <Label htmlFor="content">Message Content</Label>
                    <Textarea id="content" placeholder="Enter your announcement message..." rows={4} />
                  </div>

                  <div>
                    <Label>Target Audience</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {["Students", "Parents", "Teachers", "Staff"].map((audience) => (
                        <div key={audience} className="flex items-center space-x-2">
                          <Checkbox
                            id={audience}
                            checked={selectedAudience.includes(audience)}
                            onCheckedChange={(checked) => handleAudienceChange(audience, checked as boolean)}
                          />
                          <Label htmlFor={audience}>{audience}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Delivery Method</Label>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      {["Email", "SMS", "Portal"].map((method) => (
                        <div key={method} className="flex items-center space-x-2">
                          <Checkbox
                            id={method}
                            checked={deliveryMethod.includes(method)}
                            onCheckedChange={(checked) => handleDeliveryMethodChange(method, checked as boolean)}
                          />
                          <Label htmlFor={method}>{method}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="priority">Priority Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="scheduleDate">Schedule Date (Optional)</Label>
                      <Input id="scheduleDate" type="datetime-local" />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button onClick={() => setShowCreateForm(false)} variant="outline" className="flex-1">
                      Cancel
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Save as Draft
                    </Button>
                    <Button
                      onClick={() => setShowCreateForm(false)}
                      className="flex-1 bg-gradient-to-r from-blue-900 to-blue-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Now
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
