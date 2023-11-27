function handleClick() {
  console.log("Hello!");
}
function handleMouseOver() {
  console.log("Bye!");
}
function handleDblClick() {
  console.log("Double Click!");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut
        molestiae asperiores nihil laudantium repellat, fugit hic consequuntur?
        Rerum quidem, ullam ut sit quasi eveniet modi ab possimus error magnam?
      </p>
      <button onDoubleClick={handleDblClick}>Double Click me!</button>
    </div>
  );
}
