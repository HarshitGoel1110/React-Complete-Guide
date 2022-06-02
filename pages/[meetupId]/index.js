import { MongoClient, ObjectId } from "mongodb";
import Image from "next/image";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  // here we can also call the Api
  // this is the function ,where we need to define what are all the different Path Parameters
  // on which this page depends.
  // And on which predefined values of those path variables, this page should be shown to the user
  // otherwise nextjs will show a 404 page to them.

  const client = await MongoClient.connect(
    "mongodb+srv://Harshit:Qwerty123@cluster0.sao3lsz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    // if we pass "fallback:false" => we are saying that, we have passed all the predefined values
    // and if the user loading this page for some value other than predefined value, then
    // show them 404 page.

    // if "fallback:true" => then next js will try to dynamically generate this page for the
    // parameters that are passed if they doesn't exists in the predefined one's.

    fallback: false,
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // meetupId because we are using meetupId as Path Parameter

  const client = await MongoClient.connect(
    "mongodb+srv://Harshit:Qwerty123@cluster0.sao3lsz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        address: meetups.address,
        description: meetups.description,
        title: meetups.title,
      }
    },
  };
}

export default MeetupDetails;
