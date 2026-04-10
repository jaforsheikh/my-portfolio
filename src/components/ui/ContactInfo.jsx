import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {/* Email */}
      <div className="group flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110">
          <Mail size={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Email</h3>
          <a
            href="mailto:jaforsheikh258@gmail.com"
            className="text-slate-600 hover:text-orange-500"
          >
            jaforsheikh258@gmail.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="group flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110">
          <Phone size={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Phone</h3>
          <a
            href="tel:+8801716506412"
            className="text-slate-600 hover:text-orange-500"
          >
            +880 1716-506412
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="group flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110">
          <MapPin size={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Location</h3>
          <p className="text-slate-600">Bangladesh</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-900">
          Social Links
        </h3>

        <div className="flex gap-3">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/Jafor.sheikh12"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-slate-100 p-3 text-slate-700 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-110"
          >
            <FaFacebookF size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jafar-sheikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-slate-100 p-3 text-slate-700 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-110"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801716506412?text=Hello%20I%20am%20interested%20in%20your%20web%20development%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-500 p-3 text-white transition-all duration-300 hover:bg-green-600 hover:scale-110"
          >
            <MessageCircle size={18} />
          </a>

        </div>
      </div>

    </div>
  );
}