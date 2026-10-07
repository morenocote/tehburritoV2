import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Truck } from "lucide-react";
import logo from "@/assets/logo.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const DoorDashIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF3008" className="w-[24px] h-[24px]">
    <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413" />
  </svg>
);

const UberEatsIcon = () => (
  <div className="w-[24px] h-[24px] rounded-full bg-white flex flex-col items-center justify-center leading-none select-none">
    <span className="text-[6px] font-black tracking-tight text-black">Uber</span>
    <span className="text-[6px] font-black tracking-tight text-[#06C167]">Eats</span>
  </div>
);

const RestaurantGuruBadge = () => (
  <div
    className="relative w-[34px] h-[34px] sm:w-[36px] sm:h-[36px] flex items-center justify-center shrink-0 rounded-full hover:scale-105 transition-transform duration-200"
    title="Restaurant Guru 2026 - Recommended"
  >
    <div
      className="absolute pointer-events-auto"
      style={{
        width: "185px",
        height: "185px",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) scale(0.19)",
        transformOrigin: "center center",
      }}
    >
      <div
        id="circle_bw"
        data-length="29"
        className="circle_bw_black rg-award-lang-en_US cursor-pointer"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.nodeName.toLowerCase() !== "a") {
            const link = e.currentTarget.querySelector(".circle_bw_link") as HTMLAnchorElement | null;
            if (link?.href) {
              window.open(link.href, "_blank", "noopener,noreferrer");
            }
          }
        }}
      >
        <p className="circle_bw_year">2026</p>
        <div className="circle_bw_name f7">
          <a
            className="circle_bw_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://restaurantguru.com/The-Burrito-Mexican-Food-Authentic-Restaurant-and-Catering-Calgary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="178px"
              height="178px"
              viewBox="0 0 178 178"
            >
              <defs>
                <path id="circle_bw_name-arc" d="M 12 89 a 77 77 0 0 0 154 0" />
              </defs>
              <text className="circle_bw_name_txt" fill="#000" textAnchor="middle">
                <textPath startOffset="50%" xlinkHref="#circle_bw_name-arc">
                  The Burrito Mexican Food - Authentic Restaurant & Catering
                </textPath>
              </text>
            </svg>
          </a>
        </div>
        <div className="circle_bw_nom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="200px"
            height="200px"
            viewBox="0 0 200 200"
          >
            <defs>
              <path id="circle_bw_nom-arc1" d="M 30 100 a 70 70 0 1 1 140 0" />
            </defs>
            <text className="circle_bw_nom_txt" fill="#000" textAnchor="middle">
              <textPath startOffset="50%" xlinkHref="#circle_bw_nom-arc1">
                Recommended
              </textPath>
            </text>
          </svg>
        </div>
        <a
          className="circle_bw_home"
          style={{ fontSize: 0 }}
          href="https://restaurantguru.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Restaurant Guru
        </a>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="space-y-4">
            <img src={logo} alt="The Burrito" className="h-16 md:h-20 w-auto" />
            <p className="text-background/80 text-sm leading-relaxed">
              Authentic Mexican food made with love and the freshest ingredients.
              From our restaurant, food truck or catering service.
            </p>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-4">
              <a
                href="https://www.facebook.com/theburritomexicanfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/theburritomexicanfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://share.google/f7YmWxAMQ8sDBIlt7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <GoogleIcon />
              </a>
              <a
                href="https://tiktok.com/@theburritomexicanfood"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.ubereats.com/store/the-burrito-mexican-food-authentic-restaurant-%26-catering/zWpPhz77WVKTS4buR_J6JA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex flex-col items-center gap-0.5"
                title="Uber Eats"
              >
                <UberEatsIcon />
                <span className="text-[10px] text-background/80 font-medium">Uber Eats</span>
              </a>
              <a
                href="https://www.doordash.com/store/the-burrito-mexican-food-calgary-41484241/101533748/?rwg_token=AFd1xnGBKyr6Ah_4YcZjpSJf1NaYxNx0Arnq4tVWAhi2nA0WkwWLql12t6-U_DUH8RZsbE89rKD4r_1CsuyKvYOlXaobM1-xbA==&utm_campaign=gpa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex flex-col items-center gap-0.5"
              >
                <DoorDashIcon />
                <span className="text-[10px] text-background/80 font-medium">DoorDash</span>
              </a>
              <RestaurantGuruBadge />
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl md:text-2xl mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Restaurant", path: "/restaurant" },
                { name: "Food Truck", path: "/food-truck" },
                { name: "Catering", path: "/catering" },
                { name: "Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-secondary transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.communityfoodtruckgroup.com/the-burrito-mexican-food-truck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-secondary transition-colors text-sm md:text-base flex items-center gap-2"
                >
                  <Truck size={14} />
                  Food Truck Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl md:text-2xl mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3231+17+Ave+SE,+Calgary,+AB+T2A+0P9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-secondary text-sm md:text-base transition-colors"
                >
                  3231 17 Ave SE<br />
                  Calgary, AB T2A 0P9
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+14032482888" className="text-background/80 hover:text-secondary text-sm md:text-base">
                  (403) 248-2888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:theburritomexicanfood@gmail.com" className="text-background/80 hover:text-secondary text-sm md:text-base">
                  theburritomexicanfood@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl md:text-2xl mb-4 md:mb-6">Hours</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary mt-1 flex-shrink-0" />
                <div className="text-background/80 text-sm md:text-base">
                  <p className="font-medium text-background">Restaurant</p>
                  <p>Mon - Tue: 11am - 9pm</p>
                  <p className="text-secondary/80 font-medium">Wed: Closed</p>
                  <p>Thu: 11am - 9pm</p>
                  <p>Fri - Sat: 9am - 9pm</p>
                  <p>Sun: 9am - 8pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-custom py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-background/60 text-xs md:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} The Burrito Mexican Food. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 text-xs md:text-sm text-background/60">
            <div className="flex gap-4 md:gap-6">
              <Link to="/privacy" className="hover:text-secondary">Privacy</Link>
              <Link to="/terms" className="hover:text-secondary">Terms</Link>
            </div>
            <a
              href="https://www.rcwinnovation.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Website developed by RCW Innovation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
