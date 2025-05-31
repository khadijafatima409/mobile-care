import Image from "next/image";
import Custombtn from "./Custombtn";

const CartSummary = () => {
  return (
    <div className="border w-2/4">
      {/* Delivery Info */}
      <div className="bg-white-smoke p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/icons/delievry.svg"
              height={24}
              width={24}
              alt="delivery"
            />
            <h2 className="pl-5 text-sm font-semibold font-inter">Doručíme</h2>
          </div>
          <p className="font-inter font-medium text-sm">
            Pon, 19. 8 - Ut, 20. 8.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Payment & Voucher */}
        <div className="flex flex-col gap-6 pb-10">
          {/* Payment Methods */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium font-inter">
              Akceptujeme platby
            </h2>
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
          </div>

          {/* Voucher */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium font-inter">Voucher</h2>
            <div className="w-[272px] border-2 border-white-smoke text-grey-light px-4 py-2">
              Zľavový kód
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="border-b-2 border-white-smoke pb-2 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium font-inter">Spolu položky</h2>
            <p className="text-lg font-medium font-inter">3778 €</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium font-inter">Doprava:</h2>
            <p className="text-lg font-medium font-inter">0 €</p>
          </div>
        </div>

        {/* Total with Tax */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium font-inter">
              Spolu <span className="text-grey-light">(vrátane DPH)</span>
            </h2>
            <h1 className="text-large font-MC font-bold">3778 €</h1>
          </div>
          <div className="flex items-center py-3 px-4 gap-3">
            <input type="checkbox" className="h-6 w-6 border-2" />
            <p className="text-base font-medium font-inter">
              zobraziť cenu bez DPH
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-6 pt-8">
          <Custombtn
            label="Pokračovať v nákupe"
            className="bg-white hover:bg-purple-1 border-2 hover:text-white px-15"
          />
          <Custombtn
            label="Do pokladne"
            className="bg-black border-2 hover:bg-purple-1 text-white hover:text-white px-20"
          />
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
const paymentIcons = [
  "/basket/payment-icons/visa.svg",
  "/basket/payment-icons/mastercard.svg",
  "/basket/payment-icons/maestro.svg",
  "/basket/payment-icons/amex.svg",
  "/basket/payment-icons/google-pay.svg",
  "/basket/payment-icons/apple-pay.svg",
  "/basket/payment-icons/pay-pal.svg",
];
