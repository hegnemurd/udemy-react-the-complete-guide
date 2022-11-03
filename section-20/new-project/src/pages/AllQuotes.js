import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Potato", text: "Potato potato potato, potato!" },
  { id: "q2", author: "Carrot", text: "Carrot, Carrot!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
