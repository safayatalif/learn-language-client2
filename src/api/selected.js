export const statusEnroll = (id, transactionId) => {
    const enroll = {
        transactionId: transactionId
    }

    return fetch(`http://localhost:5000/selected/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(enroll),
    }).then(res => res.json())
}