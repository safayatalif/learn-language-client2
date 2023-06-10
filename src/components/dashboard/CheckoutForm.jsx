import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useContext, useEffect, useState } from "react";
import { ImWarning } from "react-icons/im";
// import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthProvider";
import { AiOutlineTransaction } from "react-icons/ai";
import Swal from "sweetalert2";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe()
    const elements = useElements();
    const { user } = useContext(AuthContext);
    // const { axiosSecure } = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(true);
    const jwtToken = localStorage.getItem("access-token");
    const [transactionId, setTransactionId] = useState('');



    useEffect(() => {
        if (price > 0) {
            // axiosSecure.post('/create-payment-intent', { price })
            //     .then(res => {
            //         console.log(res.data.clientSecret)
            //         setClientSecret(res.data.clientSecret)
            //     })

            fetch("http://localhost:5000/create-payment-intent", {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ price })
            })
                .then((res) => res.json())
                .then((data) => {
                    setClientSecret(data.clientSecret);
                })
                .catch(err => console.error(err));
        }
    }, [price, jwtToken])




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setProcessing(true)


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            Swal.fire({
                icon: 'success',
                title: 'Your Payment Success',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-6 w-full" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay {price} $
                </button>
            </form>
            <label className="label">
                {cardError && <p className="text-red-600"><ImWarning className="inline-block"></ImWarning> {cardError}</p>}
            </label>
            <label className="label">
                {transactionId && <p className="text-green-600"><AiOutlineTransaction className="inline-block"></AiOutlineTransaction>TransactionId:{transactionId}</p>}
            </label>
        </>

    );
};

export default CheckoutForm;