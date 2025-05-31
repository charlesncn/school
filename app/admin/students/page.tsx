"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/layout/sidebar"
import { Search, Plus, Edit, Trash2, Users, Download } from "lucide-react"

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("all")
  const [showAddForm, setShowAddForm] = useState(false)

  const students = [
    {
      id: "STU001",
      name: "John Smith",
      class: "Form 1A",
      email: "john.smith@email.com",
      phone: "+1234567890",
      status: "Active",
      gpa: 3.8,
    },
    {
      id: "STU002",
      name: "Sarah Johnson",
      class: "Form 3A",
      email: "sarah.johnson@email.com",
      phone: "+1234567891",
      status: "Active",
      gpa: 3.9,
    },
    {
      id: "STU003",
      name: "Michael Brown",
      class: "Form 2B",
      email: "michael.brown@email.com",
      phone: "+1234567892",
      status: "Active",
      gpa: 3.5,
    },
    {
      id: "STU004",
      name: "Emily Davis",
      class: "Form 4A",
      email: "emily.davis@email.com",
      phone: "+1234567893",
      status: "Active",
      gpa: 3.7,
    },
    {
      id: "STU005",
      name: "David Wilson",
      class: "Form 1B",
      email: "david.wilson@email.com",
      phone: "+1234567894",
      status: "Inactive",
      gpa: 3.2,
    },
  ]

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === "all" || student.class === selectedClass
    return matchesSearch && matchesClass
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="admin" />

      <div className="flex-1 lg:ml-56">
        <div className="p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-6 h-6 lg:w-8 lg:h-8" />
                Student Management
              </h1>
              <p className="text-slate-600">Manage student records and information.</p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Student
              </Button>
            </div>
          </div>

          {/* Filters */}
          <Card className="border-0 shadow-md mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="search">Search Students</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="search"
                      placeholder="Search by name or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="class">Filter by Class</Label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
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

                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Students Table */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Students ({filteredStudents.length})</CardTitle>
              <CardDescription>Manage student information and academic records</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>GPA</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.class}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.phone}</TableCell>
                      <TableCell>{student.gpa}</TableCell>
                      <TableCell>
                        <Badge
                          variant={student.status === "Active" ? "default" : "secondary"}
                          className={
                            student.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          }
                        >
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Add Student Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <Card className="w-full max-w-md mx-4">
                <CardHeader>
                  <CardTitle>Add New Student</CardTitle>
                  <CardDescription>Enter student information below</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="studentName">Full Name</Label>
                    <Input id="studentName" placeholder="Enter student name" />
                  </div>
                  <div>
                    <Label htmlFor="studentEmail">Email</Label>
                    <Input id="studentEmail" type="email" placeholder="Enter email address" />
                  </div>
                  <div>
                    <Label htmlFor="studentPhone">Phone</Label>
                    <Input id="studentPhone" placeholder="Enter phone number" />
                  </div>
                  <div>
                    <Label htmlFor="studentClass">Class</Label>
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
                  <div className="flex gap-2 pt-4">
                    <Button onClick={() => setShowAddForm(false)} variant="outline" className="flex-1">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 bg-gradient-to-r from-blue-900 to-blue-700"
                    >
                      Add Student
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
