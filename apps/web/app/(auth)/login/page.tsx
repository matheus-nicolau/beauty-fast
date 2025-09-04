export default async function Login() {
  const data = await fetch("http://127.0.0.1:3004/user/list");
  const users = await data.json();

  return (
    <div>
      <ul>{users[0]}</ul>
    </div>
  );
}
