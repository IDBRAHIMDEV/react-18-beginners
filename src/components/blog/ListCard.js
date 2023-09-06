import Card from "./Card"

function ListCard() {

    return (
        <>
            <h3 className="my-4">List of Products</h3>
            <div className="row">
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <Card></Card>
                </div>
            </div>
        </>
    )
}

export default ListCard