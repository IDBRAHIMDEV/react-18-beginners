import FormCourse from "./FormCourse";
import ListCourses from "./ListCourses";
import ListCoursesGrid from "./ListCoursesGrid";

const Courses = () => {

    const title = "Blog of Coding Tech"

    const courses = [
        {id: 1, label: "Spring boot"},
        {id: 2, label: "ReactJS"},
        {id: 3, label: "Django"},
        {id: 4, label: "Laravel"},
    ]

    return ( 
        <>
            <div className="row my-4">
                <div className="col-md-6">
                    <h1>{title}</h1>
                </div>
                <div className="col-md-4 text-end"><button className="btn btn-success btn-sm">New</button></div>
            </div>
            <div className="row my-4">
                <div className="col-md-4 mx-auto">
                   <FormCourse></FormCourse>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-4 mx-auto">
                    <div className="div">
                        <button className="btn btn-warning me-1">List</button>
                        <button className="btn btn-warning">Grid</button>
                    </div>

                <ListCourses title="List" courseList={courses}></ListCourses>
                <ListCoursesGrid title="Grid" courseList={courses}></ListCoursesGrid>

                </div>
            </div>
        </>
     );
}
 
export default Courses;