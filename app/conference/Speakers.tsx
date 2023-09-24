import ListCard from "@/components/ListCard/ListCard";

interface Speaker {
  name: string;
  about: string;
  image: {
    url: string;
  };
  social?: {
    twitter: string | null;
    linkedin: string | null;
    github: string | null;
    dribble: string | null;
  };
}

interface Props {
  speakers: Speaker[];
}

const Speakers: React.FC<Props> = ({ speakers }) => {
  return <>{speakers && speakers.map((item, i) => <ListCard key={i} item={item} />)}</>;
};

export default Speakers;
