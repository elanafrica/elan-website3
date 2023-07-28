import React from "react";
import Whatsapp from "../public/whatsapp.svg";
import Image from "next/image";

const WhatsAppWidget = () => {
  const handleClick = () => {
    const phoneNumber = "+2348023033175";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className="fixed bottom-6 right-6 p-3 bg-green-500 rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform"
      onClick={handleClick}
    >
      <Image alt="WhatsApp" className="w-6 h-6" src={Whatsapp} priority />

      {/* <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.132 19.071c-1.486-1.487-1.616-3.713-.425-5.304L5 12l-.293-.768c-1.19-1.589-1.06-3.815.426-5.303 1.486-1.488 3.714-1.617 5.303-.426l1.884 1.885c.705-.309 1.453-.571 2.215-.787-.59-1.295-.976-2.702-1.143-4.137-.2-1.988.759-3.857 2.446-5.007 1.812-1.242 4.13-1.271 6.037-.065 1.567 1.006 2.526 2.705 2.622 4.544.09 1.715-.46 3.427-1.486 4.806-.721 1.011-1.738 1.807-2.95 2.377-.587.291-1.153.615-1.683.965-.316.209-.635.41-.96.6l-1.84 1.845c-.639.637-1.334 1.23-2.07 1.772-.946.73-1.957 1.387-3.012 1.957-.062.04-.122.081-.184.122-.568.376-1.157.71-1.756 1.002-.365.182-.737.351-1.118.498-.152.06-.303.118-.457.176-1.257.476-2.546.853-3.856 1.127-1.38.283-2.782.453-4.192.488-1.319.034-2.64-.11-3.94-.423-.394-.078-.786-.178-1.173-.29z"
        ></path>
      </svg> */}
    </div>
  );
};

export default WhatsAppWidget;
