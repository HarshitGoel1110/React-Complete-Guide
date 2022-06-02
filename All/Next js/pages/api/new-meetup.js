import { MongoClient } from "mongodb";

// "/api/new-meetup" => url for the API

const handler = async(req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { title, address, description, image } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://Harshit:Qwerty123@cluster0.sao3lsz.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({message:"Object Inserted"});

  }
};

export default handler;
