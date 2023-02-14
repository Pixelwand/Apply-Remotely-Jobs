// import {PAYPAL_CLIENT_ID} from './config.env';
import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { checkout } from "../../Assets/index";


const Checkout = () => {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Remote Job Posting",
                    amount: {
                        currency_code: "USD",
                        value: 39,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);

    return (
        <PayPalScriptProvider options={{ "client-id": "AZjcJQksbfCQlt4f2k6zEBG0_UrhGM66JHydhItFexeJlLJKPAqSeHWyRshbIXNaXieS5VEvAVOtKweF" }}>
            <div>
                <div className="wrapper">
                    <div className="product-img">
                        <img
                            src={checkout}
                            alt="Remote Job Posting"
                            height="320"
                            width="300" 
                            />
                    </div>
                    <div className="product-info">
                        <div className="product-text">
                            <h1>Remote Job Posting</h1>
                        </div>
                        <div className="product-price-btn">
                            <p>$39</p>
                            <br></br>
                            <button className='buy-btn' type="submit" onClick={() => setShow(true)}>
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
                <br></br>
                {show ? (
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                ) : null}
            </div>
        </PayPalScriptProvider>
    );
}

export default Checkout