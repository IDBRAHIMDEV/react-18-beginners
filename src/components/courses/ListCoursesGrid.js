import Grid from "./Grid"

const ListCoursesGrid = ({title, courseList}) => {
    return ( 
        <>
            <h4>{title}</h4>
            <div className="row my-3">
                { courseList.map((course, index) => (
                        <div key={index} className="col-md-6 my-2">
                            <Grid id={course.id} label={course.label} image={course.image}></Grid>
                        </div>
                    )
                )}
            </div>
        </>
     );
}
 
export default ListCoursesGrid;