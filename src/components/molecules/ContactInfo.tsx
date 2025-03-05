import React from "react";
import ContactItem from "../atoms/ContactItem";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-4 w-full">
      <ContactItem
        icon={<FaEnvelope />}
        title="Email Kami"
        detail="tkalirsyadjakarta@gmail.com"
        href="mailto:tkalirsyadjakarta@gmail.com"
      />
      <ContactItem
        icon={<FaPhoneAlt />}
        title="Telfon Kami"
        detail="+62 858-8307-9508"
        href="tel:+628588307908"
      />
      <ContactItem
        icon={<FaMapMarkerAlt />}
        title="Location"
        detail="Jl. KH. Hasyim Ashari No.27, RT.7/RW.7, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130"
        href="https://www.google.com/maps/search/6231+S+Washington+St,+Iowa,+Indianapolis,+46241+United+States"
      />
    </div>
  );
};

export default ContactInfo;
