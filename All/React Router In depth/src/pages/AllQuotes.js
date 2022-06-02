import QuoteList from "../components/quotes/QuoteList";

const DUMMY = [
  { id: "q1", author: "Harshit", text: "Text here" },
  { id: "q2", author: "Goel", text: "There text" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY} />;
};

export default AllQuotes;
