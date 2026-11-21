const courses = [
    {
        id: 1,
        name: "Akshat",
        email: "akshat@gmail.com",
        course_enrolled: "Development",
        fees_paid: "Y",
        duration: "20_days"
    },
    {
        id: 2,
        name: "Akash",
        email: "akash@gmail.com",
        course_enrolled: "DevOps",
        fees_paid: "N",
        duration: "20_days"
    }
];

const createCourse = (name , email , courseName , duration, fees_paid = "N") => {
    const course = courses.find(c => c.email === email && c.course_enrolled === courseName);

    if(course){
        throw new Error("Student is already enrolled in this course");
    }

    const newCourse = {
        id: courses.length + 1,
        name,
        email,
        course_enrolled: courseName,
        fees_paid: fees_paid,
        duration
    };

    courses.push(newCourse);
    return newCourse;
}

const getAllCourses = () => {
    return courses
}

const updateFees = (id,fees_paid) => {
    const course = courses.find(c => c.id === Number(id));

    if(!course){
        throw new Error("The Course with this id doesnt exist");
    }

    course.fees_paid = fees_paid;
    return course;
}

const deleteCourse = (id) => {
    const course = courses.filter(c => c.id !== Number(id));

    return course;
}

module.exports = {
    createCourse,
    getAllCourses,
    updateFees,
    deleteCourse
}