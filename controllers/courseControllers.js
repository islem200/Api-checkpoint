const Course = require("../models/course");
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send("Something went wrong", error.message);
  }
};
const getCourseById = async (req, res) => {
  try {
    const id = req.params.id;

    const course = await Course.findById({
      _id: req.params.id,
    });

    console.log(course);
    if (!course) {
      return res.status(404).send("Course Not Found");
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send("Something went wrong", error.message);
  }
};

const createCourse = async(req, res)=>{
    try {
         const course = new Course({
            name: req.body.name,
            author: req.body.author,
            tags: req.body.tags,
            price: req.body.price,

         });
         const result = await course.save()
         res.status(201).send(result);
        
    } catch (error) {
        res.send('We couldn create course:',error.message)
        
    }
  

};

const updateCourse = async(req, res)=> {
    try {
        const id = req.params.id;
        const result = await Course.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.send(result);

    } catch (error) {
        console.log('Something went wrong', error.message)
        
    }
    
};

const deleteCourse = async(req, res)=>{
    try {
        
        
    } catch (error) {
        
    }

}

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
