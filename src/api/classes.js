// get classes data by email 
export const getClasses = async email => {
    const response = await fetch(`https://learn-language-server-roan.vercel.app/classes/instructor/${email}`)
    const data = await response.json()
    return data
}
export const getSixClasses = async () => {
    const response = await fetch("https://learn-language-server-roan.vercel.app/classes/six")
    const data = await response.json()
    return data
}

export const statusApproved = id => {
    const currentUser = {
        status: 'approved',
    }

    return fetch(`https://learn-language-server-roan.vercel.app/classes/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}
export const statusPending = id => {
    const currentUser = {
        status: 'pending',
    }

    return fetch(`https://learn-language-server-roan.vercel.app/classes/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}
export const enrolled = (id, available) => {
    const currentUser = {
        available_seats: available - 1,
    }

    return fetch(`https://learn-language-server-roan.vercel.app/classes/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}
export const statusDenied = (id, feedback) => {
    const currentUser = {
        status: 'denied',
        feedback: feedback
    }

    return fetch(`https://learn-language-server-roan.vercel.app/classes/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}

