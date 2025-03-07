async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}
export default async function Users() {
  const users = await userList();
  console.log(users);
  return (
    <div>
      <h2>User Name List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>user name: {user.firstName + user.lastName}</h3>
        </div>
      ))}
    </div>
  );
}
