import PropTypes from 'prop-types'

const Grid = ({ id, label, image}) => {

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

Grid.defaultProps = {
    label: 'label',
    image: "https://picsum.photos/id/237/200/300"
}

Grid.prototype = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    image: PropTypes.string
}
 
export default Grid;