export function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('You signed up!');
    }}>
      <input type="text" placeholder="Enter your email" />
      <button type="submit">Sign Up</button>
    </form>
  )
}
