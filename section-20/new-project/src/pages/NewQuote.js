const NewQuote = () => {
  return (
    <section>
        <h1>New Quote Page</h1>
      <label for="author-input">Author</label>
      <input id="author" />
      <label for="text">Text</label>
      <input id="text" />

      <button>Add Quote</button>
    </section>
  );
};

export default NewQuote;
