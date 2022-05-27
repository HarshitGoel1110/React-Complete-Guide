import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async() => {
      const response = await fetch("https://react-complete-guide-96e94-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");
      if(!response.ok){
        throw new Error("Fetching Data is Failed");
      }
      const data = await response.json();
      return data;
    }
    try{
      const result = await fetchData();
      dispatch(cartActions.replaceCart({
        items: result.items || [],
        totalQuantity: result.totalQuantity || 0
      }));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart data Successfully!",
        })
      );
    }
    catch(error){
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      )
    }
  }
}

export const sendCartData = (cart) => {

  // returing another function inside "sendCartData"
  return async (dispatch) => {
    // saying that we are sending the request
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    // defining method in which we will write the code for calling the Api
    const sendRequest = async() => {
      const response = await fetch(
        "https://react-complete-guide-96e94-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
        }
      );
      
      if (!response.ok) {
        console.log(response.status);
        throw new Error("Sending cart data failed");
        // return;
      }
    }

    // try catch block
    try{
      // calling the "sendRequest" function, inorder to send Request to API
      await sendRequest();
      // if everything works fine, like Error object is not thrown, then 
      // display notification "success".
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data Successfully!",
        })
      );
    }
    catch(error){
      // if Error object is thrown, i.e. !response.ok => error notification
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      )
    }
    
  };
};