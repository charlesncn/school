// Centralized data store for the school management system
export interface Student {
  id: string
  name: string
  email: string
  phone: string
  class: string
  dateOfBirth: string
  address: string
  parentName: string
  parentPhone: string
  parentEmail: string
  admissionDate: string
  status: "Active" | "Inactive" | "Graduated"
  gpa: number
  attendance: number
  subjects: string[]
  fees: {
    totalFees: number
    paidAmount: number
    balance: number
    dueDate: string
    payments: Array<{
      id: string
      amount: number
      date: string
      method: string
      receipt: string
    }>
  }
  grades: Array<{
    subjectId: string
    assignments: Array<{
      id: string
      name: string
      grade: string
      percentage: number
      submittedDate: string
      feedback: string
    }>
    exams: Array<{
      id: string
      name: string
      grade: string
      percentage: number
      date: string
    }>
    overallGrade: string
    overallPercentage: number
  }>
  attendance: Array<{
    date: string
    subjectId: string
    status: "Present" | "Absent" | "Late"
  }>
}

export interface Teacher {
  id: string
  name: string
  email: string
  phone: string
  department: string
  subjects: string[]
  classes: string[]
  dateOfJoining: string
  qualification: string
  experience: number
  status: "Active" | "Inactive"
  salary: number
  address: string
}

export interface Subject {
  id: string
  name: string
  code: string
  description: string
  teacherId: string
  classes: string[]
  syllabus: Array<{
    topic: string
    completed: boolean
    date?: string
  }>
  assignments: Array<{
    id: string
    title: string
    description: string
    dueDate: string
    totalMarks: number
    submissions: Array<{
      studentId: string
      submittedDate: string
      grade: string
      percentage: number
      feedback: string
      file?: string
    }>
  }>
  studyMaterials: Array<{
    id: string
    title: string
    type: "PDF" | "Video" | "Link" | "Document"
    url: string
    uploadDate: string
  }>
}

export interface Exam {
  id: string
  title: string
  subjectId: string
  teacherId: string
  class: string
  type: "Quiz" | "Mid-term" | "Final" | "Assignment"
  duration: number
  totalMarks: number
  date: string
  time: string
  status: "Draft" | "Scheduled" | "Active" | "Completed"
  instructions: string
  questions: Array<{
    id: string
    question: string
    type: "MCQ" | "Short Answer" | "Essay"
    options?: string[]
    correctAnswer?: string
    marks: number
  }>
  results: Array<{
    studentId: string
    answers: Array<{
      questionId: string
      answer: string
    }>
    score: number
    percentage: number
    submittedAt: string
    timeSpent: number
  }>
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: "Academic" | "Sports" | "Cultural" | "Meeting" | "Holiday"
  attendees: string[]
  organizer: string
  status: "Upcoming" | "Ongoing" | "Completed" | "Cancelled"
}

export interface Announcement {
  id: string
  title: string
  content: string
  author: string
  date: string
  priority: "Low" | "Medium" | "High"
  audience: string[]
  deliveryMethod: string[]
  status: "Draft" | "Scheduled" | "Sent"
  recipients: number
}

// Sample data
export const studentsData: Student[] = [
  {
    id: "STU001",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1234567890",
    class: "Form 3A",
    dateOfBirth: "2008-05-15",
    address: "123 Main St, City, State 12345",
    parentName: "Robert Smith",
    parentPhone: "+1234567891",
    parentEmail: "robert.smith@email.com",
    admissionDate: "2022-09-01",
    status: "Active",
    gpa: 3.8,
    attendance: 94,
    subjects: ["MATH101", "PHY101", "CHEM101", "ENG101", "BIO101"],
    fees: {
      totalFees: 2500,
      paidAmount: 2000,
      balance: 500,
      dueDate: "2024-12-31",
      payments: [
        {
          id: "PAY001",
          amount: 1000,
          date: "2024-01-15",
          method: "Bank Transfer",
          receipt: "REC001",
        },
        {
          id: "PAY002",
          amount: 1000,
          date: "2024-06-15",
          method: "Credit Card",
          receipt: "REC002",
        },
      ],
    },
    grades: [
      {
        subjectId: "MATH101",
        assignments: [
          {
            id: "ASG001",
            name: "Algebra Quiz",
            grade: "A",
            percentage: 92,
            submittedDate: "2024-11-15",
            feedback: "Excellent work on quadratic equations",
          },
        ],
        exams: [
          {
            id: "EXM001",
            name: "Mid-term Exam",
            grade: "A-",
            percentage: 88,
            date: "2024-10-15",
          },
        ],
        overallGrade: "A",
        overallPercentage: 90,
      },
    ],
    attendance: [
      {
        date: "2024-12-11",
        subjectId: "MATH101",
        status: "Present",
      },
    ],
  },
  {
    id: "STU002",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1234567892",
    class: "Form 3A",
    dateOfBirth: "2008-03-22",
    address: "456 Oak Ave, City, State 12345",
    parentName: "Michael Johnson",
    parentPhone: "+1234567893",
    parentEmail: "michael.johnson@email.com",
    admissionDate: "2022-09-01",
    status: "Active",
    gpa: 3.9,
    attendance: 96,
    subjects: ["MATH101", "PHY101", "CHEM101", "ENG101", "BIO101"],
    fees: {
      totalFees: 2500,
      paidAmount: 2500,
      balance: 0,
      dueDate: "2024-12-31",
      payments: [
        {
          id: "PAY003",
          amount: 2500,
          date: "2024-01-10",
          method: "Bank Transfer",
          receipt: "REC003",
        },
      ],
    },
    grades: [
      {
        subjectId: "MATH101",
        assignments: [
          {
            id: "ASG001",
            name: "Algebra Quiz",
            grade: "A+",
            percentage: 98,
            submittedDate: "2024-11-14",
            feedback: "Outstanding performance",
          },
        ],
        exams: [
          {
            id: "EXM001",
            name: "Mid-term Exam",
            grade: "A+",
            percentage: 95,
            date: "2024-10-15",
          },
        ],
        overallGrade: "A+",
        overallPercentage: 96,
      },
    ],
    attendance: [
      {
        date: "2024-12-11",
        subjectId: "MATH101",
        status: "Present",
      },
    ],
  },
  // Add more students...
  {
    id: "STU003",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+1234567894",
    class: "Form 2B",
    dateOfBirth: "2009-07-10",
    address: "789 Pine St, City, State 12345",
    parentName: "David Brown",
    parentPhone: "+1234567895",
    parentEmail: "david.brown@email.com",
    admissionDate: "2023-09-01",
    status: "Active",
    gpa: 3.5,
    attendance: 88,
    subjects: ["MATH102", "PHY102", "CHEM102", "ENG102", "BIO102"],
    fees: {
      totalFees: 2300,
      paidAmount: 1500,
      balance: 800,
      dueDate: "2024-12-31",
      payments: [
        {
          id: "PAY004",
          amount: 1500,
          date: "2024-02-01",
          method: "Cash",
          receipt: "REC004",
        },
      ],
    },
    grades: [],
    attendance: [],
  },
]

export const teachersData: Teacher[] = [
  {
    id: "TCH001",
    name: "Mr. John Smith",
    email: "john.smith@school.edu",
    phone: "+1234567800",
    department: "Mathematics",
    subjects: ["MATH101", "MATH102"],
    classes: ["Form 3A", "Form 2B"],
    dateOfJoining: "2020-08-15",
    qualification: "M.Sc Mathematics",
    experience: 8,
    status: "Active",
    salary: 55000,
    address: "123 Teacher Lane, City, State",
  },
  {
    id: "TCH002",
    name: "Ms. Sarah Davis",
    email: "sarah.davis@school.edu",
    phone: "+1234567801",
    department: "Physics",
    subjects: ["PHY101", "PHY102"],
    classes: ["Form 4B", "Form 3A"],
    dateOfJoining: "2019-09-01",
    qualification: "M.Sc Physics",
    experience: 10,
    status: "Active",
    salary: 58000,
    address: "456 Faculty St, City, State",
  },
  {
    id: "TCH003",
    name: "Dr. Michael Wilson",
    email: "michael.wilson@school.edu",
    phone: "+1234567802",
    department: "Chemistry",
    subjects: ["CHEM101", "CHEM102"],
    classes: ["Form 3B", "Form 2A"],
    dateOfJoining: "2018-01-10",
    qualification: "Ph.D Chemistry",
    experience: 12,
    status: "Active",
    salary: 65000,
    address: "789 Academic Ave, City, State",
  },
]

export const subjectsData: Subject[] = [
  {
    id: "MATH101",
    name: "Mathematics",
    code: "MATH101",
    description: "Advanced Mathematics for Form 3",
    teacherId: "TCH001",
    classes: ["Form 3A"],
    syllabus: [
      { topic: "Algebra Fundamentals", completed: true, date: "2024-09-15" },
      { topic: "Quadratic Equations", completed: true, date: "2024-10-01" },
      { topic: "Graphing Functions", completed: true, date: "2024-10-15" },
      { topic: "Trigonometry", completed: false },
      { topic: "Statistics", completed: false },
      { topic: "Probability", completed: false },
    ],
    assignments: [
      {
        id: "ASG001",
        title: "Algebra Quiz",
        description: "Complete the algebra problems covering chapters 1-3",
        dueDate: "2024-12-15",
        totalMarks: 25,
        submissions: [
          {
            studentId: "STU001",
            submittedDate: "2024-11-15",
            grade: "A",
            percentage: 92,
            feedback: "Excellent work on quadratic equations",
            file: "john_algebra_quiz.pdf",
          },
          {
            studentId: "STU002",
            submittedDate: "2024-11-14",
            grade: "A+",
            percentage: 98,
            feedback: "Outstanding performance",
            file: "sarah_algebra_quiz.pdf",
          },
        ],
      },
    ],
    studyMaterials: [
      {
        id: "MAT001",
        title: "Algebra Fundamentals Guide",
        type: "PDF",
        url: "/materials/algebra_guide.pdf",
        uploadDate: "2024-09-01",
      },
      {
        id: "MAT002",
        title: "Quadratic Equations Video Tutorial",
        type: "Video",
        url: "/materials/quadratic_tutorial.mp4",
        uploadDate: "2024-09-15",
      },
    ],
  },
]

export const examsData: Exam[] = [
  {
    id: "EXM001",
    title: "Mathematics Mid-term Exam",
    subjectId: "MATH101",
    teacherId: "TCH001",
    class: "Form 3A",
    type: "Mid-term",
    duration: 120,
    totalMarks: 100,
    date: "2024-12-20",
    time: "09:00",
    status: "Scheduled",
    instructions: "Answer all questions. Show your working clearly.",
    questions: [
      {
        id: "Q001",
        question: "Solve the quadratic equation: x² + 5x + 6 = 0",
        type: "Short Answer",
        marks: 10,
      },
      {
        id: "Q002",
        question: "What is the derivative of x³?",
        type: "MCQ",
        options: ["3x²", "x²", "3x", "x³"],
        correctAnswer: "3x²",
        marks: 5,
      },
    ],
    results: [],
  },
]

export const eventsData: Event[] = [
  {
    id: "EVT001",
    title: "Annual Science Fair",
    description: "Students showcase their science projects",
    date: "2024-12-20",
    time: "10:00",
    location: "School Auditorium",
    type: "Academic",
    attendees: ["STU001", "STU002", "STU003"],
    organizer: "TCH002",
    status: "Upcoming",
  },
  {
    id: "EVT002",
    title: "Parent-Teacher Conference",
    description: "Meet with teachers to discuss student progress",
    date: "2024-12-15",
    time: "14:00",
    location: "Classrooms",
    type: "Meeting",
    attendees: [],
    organizer: "TCH001",
    status: "Upcoming",
  },
]

export const announcementsData: Announcement[] = [
  {
    id: "ANN001",
    title: "Winter Break Schedule",
    content: "School will be closed from December 22 to January 6",
    author: "Principal Johnson",
    date: "2024-12-01",
    priority: "High",
    audience: ["Students", "Parents", "Teachers"],
    deliveryMethod: ["Email", "SMS", "Portal"],
    status: "Sent",
    recipients: 1247,
  },
]

// Helper functions
export const getStudentsByClass = (className: string) => {
  return studentsData.filter((student) => student.class === className)
}

export const getTeacherSubjects = (teacherId: string) => {
  return subjectsData.filter((subject) => subject.teacherId === teacherId)
}

export const getStudentGrades = (studentId: string) => {
  const student = studentsData.find((s) => s.id === studentId)
  return student?.grades || []
}

export const getSubjectStudents = (subjectId: string) => {
  const subject = subjectsData.find((s) => s.id === subjectId)
  if (!subject) return []

  return studentsData.filter((student) => subject.classes.some((className) => student.class === className))
}
