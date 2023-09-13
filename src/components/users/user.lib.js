
let apiUrl = `https://api.github.com/users`

let apiSearchUrl = `https://api.github.com/search/users`


export const loadingSection = <p className='text-center my-5 py-5'>Loading...</p>

export const getApiUrl = (search) => {
   return search ? `${apiSearchUrl}?q=${search}` : apiUrl
}

export const transformUsers = (usersList) => {

    console.log(usersList)
    let newListUsers = []

        newListUsers = usersList.map(user => {
            let myUser = {
                id: user.id,
                avatar: user.avatar_url,
                login: user.login,
                url: user.html_url
            }
            return myUser
        })

    return newListUsers
} 
