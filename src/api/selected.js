export const statusEnroll = (id, transactionId, date) => {
    const enroll = {
        transactionId: transactionId,
        date: date
    }

    return fetch(`https://learn-language-server-roan.vercel.app/selected/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(enroll),
    }).then(res => res.json())
}


