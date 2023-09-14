import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import { transformData, urlSearchUsers, urlUsers } from './users.lib'


function Users() {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")


    const getUsers = async () => {
        const urlApi = search.trim() ? `${urlSearchUsers}?q=${search}` : urlUsers
        const res = await fetch(urlApi)
        const response = await res.json()
        setUsers(transformData(search.trim() ? response.items : response))
    }

    // const getAllUser = () => {
        
    //     getUsers()
    // }

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

    // const chearchUsers = () => {
    //     getUsers()
    // }
  
    // load a data from the Api first for loading from a 'api.github.com/users' and a second fron 'api.github.com/search/users' 
    // const loadUsers = () => {

    //     if(search.trim()) {
    //         chearchUsers()
    //     }
    //     else {
    //         getAllUser()
    //     }
    // }

    useEffect(() => {
        console.log('loading...')
        getUsers()
    }, [])

  return (
    
    <>

    <div className="row my-5">
        <div className="col-md-6"><h1>List of Users</h1></div>
        <div className="col-md-6 text-end">

        <div class="input-group mb-3">
        <input 
                aria-describedby="button-addon2"
                type="search" 
                name="" 
                id="" 
                className="form-control" 
                placeholder="Search" 
                onChange={ (e) => setSearch(e.target.value) }
            />

  <button 
        class="btn btn-outline-info" 
        type="button" 
        id="button-addon2"
        onClick={getUsers}
    >
        Button
    </button>
</div>

           
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