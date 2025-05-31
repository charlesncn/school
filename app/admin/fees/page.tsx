"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/layout/sidebar"
import { CreditCard, DollarSign, TrendingUp, Users, Plus, Search, Download } from "lucide-react"

export default function AdminFeesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("all")
  const [showCreateForm, setShowCreateForm] = useState(false)

  const feeStructure = [
    { class: "Form 1", tuition: 1200, books: 150, activities: 100, total: 1450 },
    { class: "Form 2", tuition: 1300, books: 160, activities: 110, total: 1570 },
    { class: "Form 3", tuition: 1400, books: 170, activities: 120, total: 1690 },
    { class: "Form 4", tuition: 1500, books: 180, activities: 130, total: 1810 },
  ]

  const feePayments = [
    {
      id: "PAY001",
      studentName: "John Smith",
      studentId: "STU001",
      class: "Form 3A",
      totalFees: 1690,
      paidAmount: 1690,
      balance: 0,
      status: "Paid",
      dueDate: "2024-12-31",
      lastPayment: "2024-01-15",
    },
    {
      id: "PAY002",
      studentName: "Sarah Johnson",
      studentId: "STU002",
      class: "Form 3A",
      totalFees: 1690,
      paidAmount: 1200,
      balance: 490,
      status: "Partial",
      dueDate: "2024-12-31",
      lastPayment: "2024-01-10",
    },
    {
      id: "PAY003",
      studentName: "Michael Brown",
      studentId: "STU003",
      class: "Form 2B",
      totalFees: 1570,
      paidAmount: 0,
      balance: 1570,
      status: "Pending",
      dueDate: "2024-12-31",
      lastPayment: "N/A",
    },
  ]

  const stats = {
    totalRevenue: 125000,
    collectionRate: 87,
    pendingAmount: 15000,
    totalStudents: 225,
  }

  const filteredPayments = feePayments.filter((payment) => {
    const matchesSearch =
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === "all" || payment.class.includes(selectedClass)
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
                <CreditCard className="w-6 h-6 lg:w-8 lg:h-8" />
                Fee Management
              </h1>
              <p className="text-slate-600">Manage school fees, payments, and financial records.</p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Fee Structure
              </Button>
            </div>
          </div>

          {/* Fee Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-slate-900">${stats.totalRevenue.toLocaleString()}</p>
                    <p className="text-sm text-green-600">+12% from last term</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Collection Rate</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.collectionRate}%</p>
                    <Progress value={stats.collectionRate} className="mt-2" />
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Pending Amount</p>
                    <p className="text-2xl font-bold text-slate-900">${stats.pendingAmount.toLocaleString()}</p>
                    <p className="text-sm text-orange-600">Requires follow-up</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Students</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.totalStudents}</p>
                    <p className="text-sm text-slate-600">Enrolled this term</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fee Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Fee Structure by Class</CardTitle>
                <CardDescription>Annual fee breakdown for each form</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feeStructure.map((fee, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-slate-900">{fee.class}</h3>
                        <span className="text-lg font-bold text-blue-600">${fee.total}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <p className="text-slate-600">Tuition</p>
                          <p className="font-medium">${fee.tuition}</p>
                        </div>
                        <div>
                          <p className="text-slate-600">Books</p>
                          <p className="font-medium">${fee.books}</p>
                        </div>
                        <div>
                          <p className="text-slate-600">Activities</p>
                          <p className="font-medium">${fee.activities}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Payment Status Overview</CardTitle>
                <CardDescription>Current payment status distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">156</div>
                    <div className="text-sm text-green-700">Fully Paid Students</div>
                    <div className="text-xs text-green-600">69% of total</div>
                  </div>

                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">45</div>
                    <div className="text-sm text-orange-700">Partial Payment</div>
                    <div className="text-xs text-orange-600">20% of total</div>
                  </div>

                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">24</div>
                    <div className="text-sm text-red-700">Pending Payment</div>
                    <div className="text-xs text-red-600">11% of total</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Records */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Payment Records</CardTitle>
                  <CardDescription>Track individual student fee payments</CardDescription>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Form 1">Form 1</SelectItem>
                      <SelectItem value="Form 2">Form 2</SelectItem>
                      <SelectItem value="Form 3">Form 3</SelectItem>
                      <SelectItem value="Form 4">Form 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Total Fees</TableHead>
                    <TableHead>Paid Amount</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{payment.studentName}</div>
                          <div className="text-sm text-slate-500">{payment.studentId}</div>
                        </div>
                      </TableCell>
                      <TableCell>{payment.class}</TableCell>
                      <TableCell>${payment.totalFees}</TableCell>
                      <TableCell>${payment.paidAmount}</TableCell>
                      <TableCell className={payment.balance > 0 ? "text-red-600 font-medium" : "text-green-600"}>
                        ${payment.balance}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={
                            payment.status === "Paid"
                              ? "bg-green-100 text-green-700"
                              : payment.status === "Partial"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-red-100 text-red-700"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          {payment.balance > 0 && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Collect
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
