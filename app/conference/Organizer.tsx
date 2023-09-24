import ListCard from "@/components/ListCard/ListCard";
import React from "react";

interface Organizer {
  name: string;
  about: string;
  image: {
    url: string;
  };
}

interface Props {
  organizers: Organizer[];
}
const Organizer: React.FC<Props> = ({ organizers }) => {
  return (
    <>{organizers && organizers.map((item) => <ListCard item={item} />)}</>
  );
};

export default Organizer;
