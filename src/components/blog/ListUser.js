

function ListUser() {

    return (
        <>
            <h3 className="my-4">List of Users</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>KAMAL</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>BASMA</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>WALID</td>
                        <td>05</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>AMAL</td>
                        <td>23</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListUser