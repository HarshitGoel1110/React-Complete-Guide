import React from "react";

import "./Card.css";

const Card = (props) => {
  // props.className -> are the classes that are set at the time of calling this class
  const classes = "card " + props.className;
  return(
    <div className={classes}>
      {/* If we want to use our component as a wrapper component around some other elements */}
      {/* Then we have to specify that we are doing this, while defining the component */}
      {/* Down below is the syntax for specifying that. */}
      {props.children}
    </div>
  );
}

export default Card;