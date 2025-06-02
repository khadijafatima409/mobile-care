import Image from "next/image";
import React from "react";

const PaymentIcons = () => {
  return (
    <div className="flex gap-2">
      {paymentIcons.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`payment-${index}`}
          height={32}
          width={46}
        />
      ))}
    </div>
  );
};

export default PaymentIcons;

const paymentIcons = [
  "/basket/payment-icons/visa.svg",
  "/basket/payment-icons/mastercard.svg",
  "/basket/payment-icons/maestro.svg",
  "/basket/payment-icons/amex.svg",
  "/basket/payment-icons/google-pay.svg",
  "/basket/payment-icons/apple-pay.svg",
  "/basket/payment-icons/pay-pal.svg",
];
