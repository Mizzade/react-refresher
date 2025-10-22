export function Button() {
  function handleClick() {
    alert('You cliecked me!');
  }

  return (
    <button onClick={handleClick}>I'm a button</button>
  )
}
