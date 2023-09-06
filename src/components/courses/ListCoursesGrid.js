import Grid from "./Grid"

const ListCoursesGrid = ({title, courseList}) => {
    return ( 
        <>
            <h4>{title}</h4>
            <div className="row my-3">
                { courseList.map(course => (
                        <div className="col-md-6 my-2">
                            <Grid course={course}></Grid>
                        </div>
                    )
                )}
            </div>
        </>
     );
}
 
export default ListCoursesGrid;