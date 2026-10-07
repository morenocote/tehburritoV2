const UberEatsIcon = () => (
  <div className="flex flex-col items-center justify-center leading-none select-none">
    <span className="text-[7.5px] sm:text-[8px] md:text-[9px] font-black tracking-tight text-white leading-tight">
      Uber
    </span>
    <span className="text-[7.5px] sm:text-[8px] md:text-[9px] font-black tracking-tight text-[#06C167] leading-tight">
      Eats
    </span>
  </div>
);

const DoorDashIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF3008" className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5">
    <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413" />
  </svg>
);

const PhoneCallIcon = () => (
  <svg viewBox="0 0 24 24" fill="#D32F2F" className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 -rotate-12">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
  </svg>
);

const WhatsAppOfficialIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-white">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.64 13.43 14.48 13.39 14.31 13.64C14.15 13.88 13.67 14.45 13.52 14.62C13.38 14.78 13.23 14.8 12.99 14.68C12.74 14.55 11.95 14.3 11.01 13.46C10.28 12.81 9.78 12 9.64 11.76C9.5 11.51 9.62 11.38 9.75 11.25C9.86 11.14 10 10.97 10.12 10.83C10.24 10.69 10.28 10.59 10.36 10.42C10.44 10.26 10.4 10.12 10.34 9.99C10.28 9.87 9.79 8.66 9.58 8.16C9.38 7.68 9.18 7.74 9.03 7.73C8.89 7.72 8.72 7.72 8.56 7.72C8.39 7.72 8.12 7.78 7.89 8.03C7.67 8.27 7.03 8.87 7.03 10.09C7.03 11.31 7.92 12.48 8.04 12.65C8.17 12.81 9.78 15.3 12.26 16.37C12.85 16.62 13.31 16.77 13.67 16.89C14.26 17.08 14.8 17.05 15.23 16.99C15.7 16.92 16.68 16.4 16.89 15.82C17.09 15.25 17.09 14.76 17.03 14.65C16.97 14.55 16.82 14.46 16.57 14.33Z" />
  </svg>
);

const FloatingActions = () => {
  const uberEatsUrl =
    "https://www.ubereats.com/store/the-burrito-mexican-food-authentic-restaurant-%26-catering/zWpPhz77WVKTS4buR_J6JA";
  const doorDashUrl =
    "https://www.doordash.com/store/the-burrito-mexican-food-calgary-41484241/101533748/?rwg_token=AFd1xnGBKyr6Ah_4YcZjpSJf1NaYxNx0Arnq4tVWAhi2nA0WkwWLql12t6-U_DUH8RZsbE89rKD4r_1CsuyKvYOlXaobM1-xbA==&utm_campaign=gpa";
  const phoneUrl = "tel:+14032482888";
  const whatsappUrl =
    "https://wa.me/14034019412?text=Hi%20I%E2%80%99m%20interested%20in%20The%20Burrito%20services";

  return (
    <div
      className="fixed bottom-4 right-3 sm:right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-2 sm:gap-2.5"
      role="region"
      aria-label="Acciones rápidas flotantes"
    >
      {/* 1. Uber Eats */}
      <a
        href={uberEatsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#121212] flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/10"
        aria-label="Order on Uber Eats"
        title="Order on Uber Eats"
      >
        <UberEatsIcon />
      </a>

      {/* 2. DoorDash */}
      <a
        href={doorDashUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-black/10"
        aria-label="Order on DoorDash"
        title="Order on DoorDash"
      >
        <DoorDashIcon />
      </a>

      {/* 3. Llamar (Teléfono) */}
      <a
        href={phoneUrl}
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#F5B800] flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Call The Burrito at (403) 248-2888"
        title="Call us: (403) 248-2888"
      >
        <PhoneCallIcon />
      </a>

      {/* 4. WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppOfficialIcon />
      </a>
    </div>
  );
};

export default FloatingActions;
