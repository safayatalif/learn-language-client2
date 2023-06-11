// get classes data by email 
export const getClasses = async email => {
    const response = await fetch(`http://localhost:5000/classes/instructor/${email}`)
    const data = await response.json()
    return data
}

export const statusApproved = id => {
    const currentUser = {
        status: 'approved',
    }

    return fetch(`http://localhost:5000/classes/${id}`, {
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

    return fetch(`http://localhost:5000/classes/${id}`, {
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

    return fetch(`http://localhost:5000/classes/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}

