import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

function Users() {

    const [users, setUsers] = useState([])

    const getAllUser = () => {
        
        fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(response => {
            let newListUsers = []

            newListUsers = response.map(user => {
                let myUser = {
                    id: user.id,
                    avatar: user.avatar_url,
                    login: user.login,
                    url: user.html_url
                }
                return myUser
            })

            setUsers(newListUsers)
            console.log(newListUsers)
        })
        .catch(err => console.log(err))
    }

    const deleteUser = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {

                let newUsers = users.filter(user => user.id !== id)
                setUsers(newUsers)

              Swal.fire(
                {
                    title: "Deleted",
                    text: "User has been deleted",
                    icon: "success",
                    timerProgressBar: true,
                    timer: 5000
                }
              )
            }
          })
        
    }

    useEffect(() => {
        console.log('loading...')
        getAllUser()
    }, [])

  return (
    
    <>

    <div className="row my-5">
        <div className="col-md-6"><h1>List of Users</h1></div>
        <div className="col-md-6 text-end">
            <input type="search" name="" id="" className="form-control" placeholder="Search" />
        </div>
    </div>

    <div className="row my-4">
        {users.map(user => (
            <div key={user.id} className="col-md-3 my-2">
                <div class="card">
                    <img className="card-img-top" src={user.avatar} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{user.login}</h4>
                        <p className="card-text">
                            <a className='btn btn-info' href={user.url} target="_blank" rel="noreferrer">Read more...</a>
                            <button onClick={ () => deleteUser(user.id)} className="btn btn-danger ms-2">Delete</button>
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>

    </>
  )
}

export default Users