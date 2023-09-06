const Grid = ({course:{ id, label}}) => {

    const image = "https://picsum.photos/200/300"

    return ( 
        <>
            <div className="card">
                <img className="card-img-top" src={image} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{label}</h4>
                    <p className="card-text">Lorem, ipsum.</p>
                </div>
            </div>
        </>
     );
}
 
export default Grid;