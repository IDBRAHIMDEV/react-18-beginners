const ListCourses = ({title, courseList}) => {
    return ( 
        <>
           <h4>{title}</h4>
            <ul className="list-group my-5">
                { courseList.map(course => (
                     <li className="list-group-item">{course.label}</li>
                    )
                )}
            </ul>
        </>
     );
}
 
export default ListCourses;