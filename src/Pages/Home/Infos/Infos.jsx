import React from "react";
import clock from "../../../Assets/icons/clock.svg";
import marker from "../../../Assets/icons/marker.svg";
import phone from "../../../Assets/icons/phone.svg";
import InfoCard from "./InfoCard/InfoCard";
const Infos = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="info-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-20">
          <InfoCard
            title="Opening Hours"
            image={clock}
            text="Lorem Ipsum is simply dummy text of the pri"
            bgColor="bg-gradient-to-r from-primary to-secondary"
          />
          <InfoCard
            title="Visit our location"
            image={marker}
            text="Brooklyn, NY 10036, United States"
            bgColor="bg-accent"
          />
          <InfoCard
            title="Contact us now"
            image={phone}
            text="+000 123 456789"
            bgColor="bg-gradient-to-r from-primary to-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default Infos;
