import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {

  const router = useRouter();

  const addMeetUpHandler = async(enteredMeetupData) => {
    console.log(enteredMeetupData);
    // here we are not specifying the domain i.e. starting of the URL => 
    // because both the frontend and the backend will be executed by the same server. 
    // so we can directly provide the absolute path while calling the API.
    // the absolute path to its file
    const response = await fetch("/api/new-meetup" , {
      method:"POST",
      body:JSON.stringify(enteredMeetupData),
      headers:{
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return(
    <NewMeetupForm onAddMeetup={addMeetUpHandler} />
  );
}

export default NewMeetUpPage;