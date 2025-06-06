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
import { Search, Plus, Edit, Trash2, BookOpen, Users } from "lucide-react"

export default function SubjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("all")
  const [showAddForm, setShowAddForm] = useState(false)

  const subjects = [
    {
      id: "SUB001",
      name: "Mathematics",
      code: "MATH101",
      teacher: "Mr. John Smith",
      class: "Form 3A",
      students: 32,
      status: "Active",
    },
    {
      id: "SUB002",
      name: "Physics",
      code: "PHY101",
      teacher: "Ms. Sarah Davis",
      class: "Form 4B",
      students: 28,
      status: "Active",
    },
    {
      id: "SUB003",
      name: "Chemistry",
      code: "CHEM101",
      teacher: "Dr. Michael Wilson",
      class: "Form 3B",
      students: 30,
      status: "Active",
    },
    {
      id: "SUB004",
      name: "Biology",
      code: "BIO101",
      teacher: "Mrs. Emily Brown",
      class: "Form 2A",
      students: 25,
      status: "Active",
    },
  ]

  const filteredSubjects = subjects.filter((subject) => {
    const matchesSearch =
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === "all" || subject.class === selectedClass
    return matchesSearch && matchesClass
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="admin" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 lg:w-8 lg:h-8" />
                Subject Management
              </h1>
              <p className="text-slate-600">Manage subjects and assign teachers to classes.</p>
            </div>

            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 w-full sm:w-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Subject
            </Button>
          </div>

          {/* Filters */}
          <Card className="border-0 shadow-md mb-6">
            <CardContent className="p-4 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="search">Search Subjects</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="search"
                      placeholder="Search by name, code, or teacher..."
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

          {/* Subjects Table */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Subjects ({filteredSubjects.length})</CardTitle>
              <CardDescription>Manage subject information and teacher assignments</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject Code</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubjects.map((subject) => (
                    <TableRow key={subject.id}>
                      <TableCell className="font-medium">{subject.code}</TableCell>
                      <TableCell>{subject.name}</TableCell>
                      <TableCell>{subject.teacher}</TableCell>
                      <TableCell>{subject.class}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-slate-500" />
                          {subject.students}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={subject.status === "Active" ? "default" : "secondary"}
                          className={
                            subject.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          }
                        >
                          {subject.status}
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

          {/* Add Subject Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Add New Subject</CardTitle>
                  <CardDescription>Create a new subject and assign a teacher</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="subjectName">Subject Name</Label>
                    <Input id="subjectName" placeholder="Enter subject name" />
                  </div>
                  <div>
                    <Label htmlFor="subjectCode">Subject Code</Label>
                    <Input id="subjectCode" placeholder="Enter subject code" />
                  </div>
                  <div>
                    <Label htmlFor="teacher">Assign Teacher</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select teacher" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher1">Mr. John Smith</SelectItem>
                        <SelectItem value="teacher2">Ms. Sarah Davis</SelectItem>
                        <SelectItem value="teacher3">Dr. Michael Wilson</SelectItem>
                        <SelectItem value="teacher4">Mrs. Emily Brown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="class">Assign to Class</Label>
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
                      Add Subject
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
