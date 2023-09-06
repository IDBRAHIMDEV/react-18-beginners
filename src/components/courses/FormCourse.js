import { useState } from 'react'
const FormCourse = ({saveCourse}) => {

    const [label, setLabel] = useState("")
    const [image, setImage] = useState("")

    const labelField = (event) => {
        setLabel(event.target.value)
        
    }

    const imageField = (event) => {
        setImage(event.target.value)
        
    }

    const transfert = () => {
        saveCourse({label, image})
        setLabel('')
        setImage('')
    }

    return ( 
        <>
             <div className="form-group">
                        <label htmlFor="course">Course</label>
                        <input value={label} onChange={labelField} type="text" id="course" placeholder="add a label" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input value={image} onChange={imageField} type="url" id="image" placeholder="add a picture" className="form-control" />
                    </div>
                    <div className="d-grid my-2">
                        <button onClick={transfert} className="btn btn-primary">Add Course</button>
                    </div>
        </>
     );
}
 
export default FormCourse;