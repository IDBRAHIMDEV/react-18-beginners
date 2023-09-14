export const urlUsers = "https://api.github.com/users"
export const urlSearchUsers = "https://api.github.com/search/users"

export const transformData = (response) => {
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

        return newListUsers
}