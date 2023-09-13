import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import UserCard from './UserCard'
import Header from '../shared/Header'

import { getApiUrl, transformUsers, loadingSection } from "./user.lib"

function Users() {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    const runApi = async (apiUrl, search = false) => {

        console.log('search', search)
        
        setLoading(true)

        const res = await fetch(apiUrl)
        const response = await res.json()
        
        const data = search ? response.items : response

        console.log("data", data)

        setTimeout(() => {
            setLoading(false)
        }, 1000)
        
        return transformUsers(data)
       

    }

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

    const loadUsers = async () => {

        let apiUrl = getApiUrl(search)

        const data = await runApi(apiUrl, !!search)
        setUsers(data)
    }


    const listUsers = (
        users.map(user => (
                <div key={user.id} className="col-sm-6 col-md-6 col-lg-3 my-2">
                    <UserCard user={user} deleteUser={ (e) => deleteOne(e)}></UserCard>
                </div>
            ))
    )

    useEffect(() => {
        console.log('loading...')
        loadUsers()
    }, [])

  return (
    
    <>

    <div className="row my-5">
        <Header>
            <div className="input-group">
                <input 
                    type="search" 
                    className="form-control" 
                    placeholder="Search" 
                    onChange={ (e) => setSearch(e.target.value) }
                    aria-describedby="button-addon2" 
                />
                    
                <button 
                    onClick={loadUsers} 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2">
                         Search
                </button>
            </div>
        </Header>
    </div>

    <div className="row my-4">
        { loading ?  loadingSection : listUsers }
    </div>

    </>
  )
}

export default Users