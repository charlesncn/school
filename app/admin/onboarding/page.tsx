"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "@/components/layout/sidebar"
import { UserPlus, GraduationCap, BookOpen, Users, Upload, Mail, Phone, MapPin } from "lucide-react"

export default function AdminOnboardingPage() {
  const [activeTab, setActiveTab] = useState("students")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  const handleSubjectChange = (subjectId: string, checked: boolean) => {
    if (checked) {
      setSelectedSubjects([...selectedSubjects, subjectId])
    } else {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId))
    }
  }

  const subjects = [
    { id: "MATH101", name: "Mathematics", code: "MATH101" },
    { id: "PHY101", name: "Physics", code: "PHY101" },
    { id: "CHEM101", name: "Chemistry", code: "CHEM101" },
    { id: "BIO101", name: "Biology", code: "BIO101" },
    { id: "ENG101", name: "English", code: "ENG101" },
    { id: "HIST101", name: "History", code: "HIST101" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userType="admin" />

      <div className="flex-1 lg:ml-4">
        <div className="p-4 lg:p-6">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <UserPlus className="w-6 h-6 lg:w-8 lg:h-8" />
              Onboarding Center
            </h1>
            <p className="text-slate-600">Onboard new students and teachers to the school system.</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Students This Month</p>
                    <p className="text-2xl font-bold text-slate-900">24</p>
                  </div>
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Teachers This Month</p>
                    <p className="text-2xl font-bold text-slate-900">3</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pending Applications</p>
                    <p className="text-2xl font-bold text-slate-900">8</p>
                  </div>
                  <UserPlus className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Completion Rate</p>
                    <p className="text-2xl font-bold text-slate-900">94%</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Onboarding Forms */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Onboarding Forms</CardTitle>
              <CardDescription>Add new students and teachers to the school system</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="students">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Students
                  </TabsTrigger>
                  <TabsTrigger value="teachers">
                    <Users className="w-4 h-4 mr-2" />
                    Teachers
                  </TabsTrigger>
                  <TabsTrigger value="assignments">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Subject Assignments
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="students" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter first name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter last name" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="studentEmail">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="studentEmail" type="email" placeholder="student@email.com" className="pl-10" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="studentPhone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="studentPhone" placeholder="+1234567890" className="pl-10" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input id="dateOfBirth" type="date" />
                      </div>

                      <div>
                        <Label htmlFor="studentClass">Assign to Class</Label>
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
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Parent/Guardian Information</h3>

                      <div>
                        <Label htmlFor="parentName">Parent/Guardian Name</Label>
                        <Input id="parentName" placeholder="Enter parent name" />
                      </div>

                      <div>
                        <Label htmlFor="parentEmail">Parent Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="parentEmail" type="email" placeholder="parent@email.com" className="pl-10" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="parentPhone">Parent Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="parentPhone" placeholder="+1234567890" className="pl-10" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Textarea id="address" placeholder="Enter full address" className="pl-10" rows={3} />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="documents">Upload Documents</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                          <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600">Upload birth certificate, previous records, etc.</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Choose Files
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-4 border-t">
                    <Button variant="outline">Save as Draft</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Onboard Student
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="teachers" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="teacherFirstName">First Name</Label>
                          <Input id="teacherFirstName" placeholder="Enter first name" />
                        </div>
                        <div>
                          <Label htmlFor="teacherLastName">Last Name</Label>
                          <Input id="teacherLastName" placeholder="Enter last name" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="teacherEmail">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="teacherEmail" type="email" placeholder="teacher@school.edu" className="pl-10" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="teacherPhone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="teacherPhone" placeholder="+1234567890" className="pl-10" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Mathematics">Mathematics</SelectItem>
                            <SelectItem value="Science">Science</SelectItem>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Social Studies">Social Studies</SelectItem>
                            <SelectItem value="Physical Education">Physical Education</SelectItem>
                            <SelectItem value="Arts">Arts</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="qualification">Qualification</Label>
                        <Input id="qualification" placeholder="e.g., M.Sc Mathematics" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Professional Information</h3>

                      <div>
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input id="experience" type="number" placeholder="Enter years of experience" />
                      </div>

                      <div>
                        <Label htmlFor="salary">Salary</Label>
                        <Input id="salary" type="number" placeholder="Enter annual salary" />
                      </div>

                      <div>
                        <Label htmlFor="joiningDate">Date of Joining</Label>
                        <Input id="joiningDate" type="date" />
                      </div>

                      <div>
                        <Label htmlFor="teacherAddress">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Textarea id="teacherAddress" placeholder="Enter full address" className="pl-10" rows={3} />
                        </div>
                      </div>

                      <div>
                        <Label>Assign Subjects</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {subjects.map((subject) => (
                            <div key={subject.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={subject.id}
                                checked={selectedSubjects.includes(subject.id)}
                                onCheckedChange={(checked) => handleSubjectChange(subject.id, checked as boolean)}
                              />
                              <Label htmlFor={subject.id} className="text-sm">
                                {subject.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-4 border-t">
                    <Button variant="outline">Save as Draft</Button>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Users className="w-4 h-4 mr-2" />
                      Onboard Teacher
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="assignments" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Subject Assignments</h3>
                    <p className="text-slate-600">Assign teachers to subjects and classes</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="assignTeacher">Select Teacher</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select teacher" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TCH001">Mr. John Smith</SelectItem>
                            <SelectItem value="TCH002">Ms. Sarah Davis</SelectItem>
                            <SelectItem value="TCH003">Dr. Michael Wilson</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="assignSubject">Select Subject</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject.id} value={subject.id}>
                                {subject.name} ({subject.code})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="assignClass">Select Class</Label>
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
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Assign Subject
                      </Button>
                    </div>

                    {/* Current Assignments */}
                    <div className="mt-8">
                      <h4 className="text-md font-semibold text-slate-900 mb-4">Current Assignments</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <span className="font-medium">Mr. John Smith</span>
                            <span className="mx-2">→</span>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              Mathematics
                            </Badge>
                            <span className="mx-2">→</span>
                            <span className="text-slate-600">Form 3A</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            Remove
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <span className="font-medium">Ms. Sarah Davis</span>
                            <span className="mx-2">→</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              Physics
                            </Badge>
                            <span className="mx-2">→</span>
                            <span className="text-slate-600">Form 4B</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
