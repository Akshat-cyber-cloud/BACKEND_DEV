const crudServices = require('../services/crud.service');

const handleCourse = (req,res) => {
    try{
        const {name , email , courseName, duration , feesPaid} = req.body;

        if(!name || !email || !courseName || !duration){
            return res.status(400).json({
                message: "All fields are must to fill..."
            });
        }

        const course = crudServices.createCourse(name, email,courseName, duration, feesPaid);

        return res.status(201).json({
            success: true,
            course,
            message: "Created successfully"
        });
    } catch(error){
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const handleAllCourses = (req,res) => {

    const courses = crudServices.getAllCourses(); 

    return res.status(200).json({
        message: "All Courses Fetched",
        data: courses
    });
}

const handleFeeUpdate = (req,res) => {
    try{
        const {id} = req.params;
        const { fees_paid } = req.body;

        const feeUpdate = crudServices.updateFees(id , fees_paid);

        return res.status(200).json({
            success: "True",
            message: "Updates Successfully",
            feeUpdate
        });
    } catch(error){
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const handleDeletion = (req,res) => {
    try{
        const {id} = req.params;

        const course = crudServices.deleteCourse(id);

        return res.status(200).json({
            message: "Course deleted Successfully",
            data: course    
        });
    } catch (error){
        return res.status(404).json({
            message: "No Content"
        });
    }
}

module.exports = {
    handleCourse,
    handleAllCourses,
    handleFeeUpdate,
    handleDeletion
}