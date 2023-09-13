

function UserCard({user, deleteUser}) {
  return (
    <>
        <div className="card">
            <img className="card-img-top" src={user.avatar} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{user.login}</h4>
                <p className="card-text">
                    <a className='btn btn-info' href={user.url} target="_blank" rel="noreferrer">Read more...</a>
                    <button onClick={ () => deleteUser(user.id)} className="btn btn-danger ms-2">Delete</button>
                </p>
            </div>
        </div>
    </>
  )
}

export default UserCard