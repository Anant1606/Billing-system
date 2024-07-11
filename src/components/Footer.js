import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  const { name, email, website, phone, bankAccount, bankName } =
    useContext(State);

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">TERMS & CONDITION
 SALE TAX : GST@18%
 PAYMENT: ADVANCE / AGAINST PI
 FREIGHT : EXTRA AS APPLICABLE
 DELIVERY : 7-10 DAYS AFTER PO CONFIRMATION
WE HOPE THAT YOU WILL FIND OUR OFFER IN LINE WITH YOUR REQUIREMENT, IF YOU REQUIRE ANY
FURTHERASSISTANCE,
PLEASE FEEL FREE TO CALL US.
NOW WE LOOK FORWARD TO RECEIVE YOUR VALUED PURCHASE ORDER SOON
THANKS
WITH WARM REGARDS
ADITYA SHARMA 
+91 7703901391</span> {name}
          </li>
        </ul>
        <div className="flex justify-center mt-5">
          <img 
            src="path/to/your/footer-image.jpg" 
            alt="Footer Image" 
            className="w-full h-auto"
          />
        </div>
      </footer>

      <p className="text-center px-5 mt-8 text-xs">
        Invoicer is built by{" "}
        <a
          href="https://tsbsankara.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Thomas Sankara
        </a>
      </p>
    </>
  );
}
