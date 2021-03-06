import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // URLSearchParams => is a inbuilt function in React.
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  console.log(location);
  console.log(queryParams.get("sort"));

  const sortedQuotes = sortQuotes(props.quotes , isSortingAscending);

  const changeSortingHandler = () => {
    // when we push the url for same page, even then React will re-execute the entire page.
    // because we have changed the history.
    // so this is an important mechanism for chanhing the page to asc and desc easily.

    history.push({
      pathname:location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    })

    // history.push("/quote?sort=" + (isSortingAscending ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
