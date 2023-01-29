// import React from 'react';
// // import {Paypal} from '../Paypal'
// export default function Jobs() {
//   return (
//     <div path="/jobs" Element={<Jobs />} className="pb-20">
//         <Paypal />
//     </div>
//   )
// }


import {
  PayPalScriptProvider,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
} from "@paypal/react-paypal-js";

const SubmitPayment = () => {
  // Here declare the variable containing the hostedField instance
  const hostedFields = usePayPalHostedFields();

  const submitHandler = () => {
      if (typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
      hostedFields
          .submit({
              // The full name as shown in the card and billing address
              cardholderName: "John Wick",
          })
          .then((order) => {
              fetch(
                  "/your-server-side-integration-endpoint/capture-payment-info"
              )
                  .then((response) => response.json())
                  .then((data) => {
                      // Inside the data you can find all the information related to the payment
                  })
                  .catch((err) => {
                      // Handle any error
                  });
          });
  };

  return <button onClick={submitHandler}>Pay</button>;
};

export default function Jobs() {
  return (
      <PayPalScriptProvider
          options={{
              "client-id": "AYpoYOXY95G3-yHjWjeikz3XvJ2RNOY_TPmQ6aDNrohAVVTVfbetRdsw5zG4a-ARRcIa-gHDnpv2fmSS",
              "data-client-token": "your-data-client-token",
          }}
      >
          <PayPalHostedFieldsProvider
              createOrder={() => {
                  // Here define the call to create and order
                  return fetch(
                      "/your-server-side-integration-endpoint/orders"
                  )
                      .then((response) => response.json())
                      .then((order) => order.id)
                      .catch((err) => {
                          // Handle any error
                      });
              }}
          >
              <PayPalHostedField
                  id="card-number"
                  hostedFieldType="number"
                  options={{ selector: "#card-number" }}
              />
              <PayPalHostedField
                  id="cvv"
                  hostedFieldType="cvv"
                  options={{ selector: "#cvv" }}
              />
              <PayPalHostedField
                  id="expiration-date"
                  hostedFieldType="expirationDate"
                  options={{
                      selector: "#expiration-date",
                      placeholder: "MM/YY",
                  }}
              />
              <SubmitPayment />
          </PayPalHostedFieldsProvider>
      </PayPalScriptProvider>
  );
}