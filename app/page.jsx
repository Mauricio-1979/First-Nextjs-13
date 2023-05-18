import Users from "@/components/Users";

async function fetchData(){
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  
  const users = await fetchData();

  return (
    <div>
      <h1>User List</h1>
      <Users users={users} />
    </div>
  )
}
