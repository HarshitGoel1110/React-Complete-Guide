import { useRouteMatch } from "react-router-dom";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY = [
  { id: "q1", author: "Harshit", text: "Text here" },
  { id: "q2", author: "Goel", text: "There text" },
];

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match);

  const quote = DUMMY.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetails;
