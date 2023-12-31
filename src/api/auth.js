// save a user to database
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        image: user.photoURL,
        name: user.displayName,
    }

    fetch(`https://learn-language-server-roan.vercel.app/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// become a admin
export const becomeAdmin = email => {
    const currentUser = {
        role: 'admin',
    }

    return fetch(`https://learn-language-server-roan.vercel.app/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}
// become a admin
export const becomeInstructor = email => {
    const currentUser = {
        role: 'instructor',
    }

    return fetch(`https://learn-language-server-roan.vercel.app/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}

// Get role
export const getRole = async email => {
    const response = await fetch(`https://learn-language-server-roan.vercel.app/users/role/${email}`)
    const user = await response.json()
    return user?.role
}