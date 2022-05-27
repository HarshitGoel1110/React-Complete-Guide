import { Component } from "react";

export class ErrorBoundary extends Component{
  constructor(){
    super();
    this.state = {
      hasError : false,
    };
  }
  componentDidCatch(error){
    console.log(error);
    this.setState({
      hasError : true,
    })
    // this is the method which when used inside a class will make any class a Error Boundary class
    // and there is no equivalent method to it, in functional components
    // this method will be triggered whenever its child component will trigger any error.
  }
  render(){
    if(this.state.hasError){
      return <p>Something went wrong</p>
    }
    return(
      this.props.children
    );
  }
}