import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import { transformData, urlSearchUsers, urlUsers } from './users.lib'
import Loading from '../shared/Loading'
import UserCard from './UserCard'


function Users() {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)


    const getUsers = async () => {
        const urlApi = search.trim() ? `${urlSearchUsers}?q=${search}` : urlUsers

        setLoading(true)
        const res = await fetch(urlApi)
        const response = await res.json()

        setTimeout(() => {
            setLoading(false)
        }, 2000)
        setUsers(transformData(search.trim() ? response.items : response))
    }

    // const getAllUser = () => {
        
    //     getUsers()
    // }

    const deleteOne = (id) => {


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

    const loadingComponent = (<Loading>
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </Loading>)

    const listOfUsers = (
        users.map(user => (
            <div key={user.id} className="col-md-3 my-2">
                <UserCard user={user} deleteUser={ (e) => deleteOne(e)}/>
            </div>
        ))
    )

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
        { loading ? (loadingComponent) : listOfUsers}
    </div>

    </>
  )
}

export default Users