import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm"

const NewQuote = () => {

  const history = useHistory();

  const addQuoteHandler = quoteData => {
    console.log(quoteData);
    history.replace("/quote");
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote;