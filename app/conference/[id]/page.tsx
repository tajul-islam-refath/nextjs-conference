import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import Conference from "../Conference";

export const revalidate = 5;
const query = gql`
  query GetConference($conferenceId: ID!) {
    conference(id: $conferenceId) {
      id
      name
      slogan
      organizers {
        name
        about
        image {
          url
        }
      }
      speakers {
        name
        about
        image {
          url
        }
        social {
          twitter
          linkedin
          github
          dribble
        }
      }
      schedules {
        day
        intervals {
          sessions {
            type
            begin
            end
          }
        }
      }
      sponsors {
        name
        about
        image {
          url
        }
      }
    }
  }
`;

const Page = async ({ params }: { params: { id: string } }) => {
  const client = getClient();

  const { loading, error, data } = await client.query({
    query,
    variables: { conferenceId: params.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const conference = data.conference;

  return <>{conference && <Conference conference={conference} />}</>;
};

export default Page;
