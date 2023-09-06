const FormCourse = () => {
    return ( 
        <>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Course</label>
                    <input type="text" name="" id="course" className="form-control" />
                </div>
                <div className="d-grid my-2">
                    <button className="btn btn-primary">Add Course</button>
                </div>
            </form>
        </>
     );
}
 
export default FormCourse;