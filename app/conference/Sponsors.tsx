import ListCard from "@/components/ListCard/ListCard";
import React from "react";

interface Sponsor {
  name: string;
  about: string;
  image: {
    url: string;
  };
}

interface Props {
  sponsors: Sponsor[];
}
const Sponsors: React.FC<Props> = ({ sponsors }) => {
  return (
    <>
      {sponsors && sponsors.map((item, i) => <ListCard key={i} item={item} />)}
    </>
  );
};

export default Sponsors;
