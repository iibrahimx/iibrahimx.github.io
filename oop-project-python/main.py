# =========================
# DEFINE STUDENT CLASS
# =========================

class Student:
    def __init__(self, name, age, roll_number):
        self.name = name
        self.age = age
        self.roll_number = roll_number
        self.grades = {}

    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Roll No: {self.roll_number}")

    def add_grade(self, course_name, grade):
        self.grades[course_name] = grade

    def calculate_gpa(self):
        if not self.grades:
            return 0
        total = sum(self.grades.values())
        return round(total / len(self.grades), 2)


# =========================
# DEFINE COURSE CLASS
# =========================

class Course:
    def __init__(self, name, instructor):
        self.name = name
        self.instructor = instructor
        self.students = []
        self.prerequisites = []

    def add_student(self, student):
        if student not in self.students:
            self.students.append(student)
            print(f"{student.name} enrolled in {self.name}")
        else:
            print(f"{student.name} is already enrolled in {self.name}")

    def drop_student(self, student):
        if student in self.students:
            self.students.remove(student)
            print(f"{student.name} has dropped {self.name}")
        else:
            print(f"{student.name} is not enrolled in {self.name}")

    def add_prerequisite(self, course_name):
        self.prerequisites.append(course_name)
        print(f"Prerequisite '{course_name}' added to {self.name}")

    def display_students(self):
        print(f"\nStudents enrolled in {self.name}:")
        if not self.students:
            print("No students enrolled.")
        for student in self.students:
            student.display_info()


# =========================
# DEFINE DEPARTMENT CLASS
# =========================

class Department:
    def __init__(self, name):
        self.name = name
        self.courses = []

    def add_course(self, course):
        self.courses.append(course)
        print(f"Course '{course.name}' added to {self.name} Department")

    def display_courses(self):
        print(f"\nCourses in {self.name} Department:")
        for course in self.courses:
            print(f"- {course.name} (Instructor: {course.instructor})")


# =========================
# TESTS
# =========================

# Create students
student1 = Student("Ibrahim", 22, "CS101")
student2 = Student("Amina", 21, "CS102")

# Create course
course1 = Course("Data Structures", "Dr. Ajayi")

# Enroll students
course1.add_student(student1)
course1.add_student(student2)

# Drop student
course1.drop_student(student1)

# Add prerequisites
course1.add_prerequisite("Introduction to Programming")

# Add grades & calculate GPA
student2.add_grade("Data Structures", 4.5)
student2.add_grade("Algorithms", 4.0)
print(f"\n{student2.name}'s GPA: {student2.calculate_gpa()}")

# Create department
cs_department = Department("Computer Science")
cs_department.add_course(course1)

# Display everything
cs_department.display_courses()
course1.display_students()
