import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ findOneAppointment }) => {
  const { price, name, email, phone, _id } = findOneAppointment;
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/payments/create-payments-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.clientSecret) {
          setClientSecret(result.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      return toast.error(error?.message);
    }

    /* Confirm Payment */
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
            phone: phone,
          },
        },
      });

    if (intentError) {
      return toast.error(intentError?.message);
    } else {
      toast.success(
        `Congrats!! Payment successfully done. Here is your TransactionID ${paymentIntent?.id}`
      );
      if (paymentIntent?.status === "succeeded") {
        //   for bookings
        fetch(`http://localhost:5000/booking`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            transactionId: paymentIntent?.id,
            status: paymentIntent?.status,
            appointmentId: _id,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate(`/my-appointments`);
            setProcessing(true);
          });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {!processing ? (
        <button
          className="btn btn-success mt-6"
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
        >
          Pay {price}$
        </button>
      ) : (
        <button className="btn btn-success mt-6" type="button" disabled>
          Loading....
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
