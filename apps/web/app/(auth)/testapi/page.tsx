type Users = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export default async function testApi() {
  const data = await fetch("http://127.0.0.1:3004/user/list");
  const users: Users = await data.json();

  return (
    <div>
      <ul>
        {users?.map((user: Users) => (
          <div key={Math.random() * 100}>
            <li key={Math.random() * 100}>{user.id}</li>
            <li key={Math.random() * 100}>{user.name}</li>
            <li key={Math.random() * 100}>{user.email}</li>
            <li key={Math.random() * 100}>{user.password}</li>
            <li key={Math.random() * 100}>{user.createdAt}</li>
            <li key={Math.random() * 100}>{user.updatedAt}</li>
            <span>------------------------------------------------</span>
          </div>
        ))}
      </ul>
    </div>
  );
}
