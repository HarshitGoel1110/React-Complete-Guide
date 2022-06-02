import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Main React Page</title>
        <meta name="description" content="My first Next js application" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context){
//   const request = context.req;
//   const response = context.res;
//   // fetch data from API
//   return{
//     props:{
//       meetups: DUMMY
//     }
//   };
// }

export async function getStaticProps() {
  // as this code is executed in the server side, not on the client side.
  // it is also okk, to write the code here.

  const client = await MongoClient.connect(
    "mongodb+srv://Harshit:Qwerty123@cluster0.sao3lsz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  // we can also make a Http request here
  // this is the code which will never execute on the client machine.
  // and we are returning here the props, so this will be send to this component as props.
  // And this getStaticProps function is only available in "pages" folder.
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 1,
    // generating the static page in every 10 seconds, for not letting user
    // to see old data.
  };
}

export default HomePage;
