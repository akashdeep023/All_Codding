function handleFormSubmit(event) {
    event.preventDefault();
  console.log("form was submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="read" placeholder="write something" />
      <button>Submit</button>
    </form>
  );
}
