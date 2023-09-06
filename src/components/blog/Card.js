

function Card() {

    return (
       <div className="card my-2">
        <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
        <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
        </div>
       </div>
    )
}

export default Card