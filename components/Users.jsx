"use client"; // this only work if are in the top of file
import { useRouter } from "next/navigation";


function Users({users}) {

    const router = useRouter();

  return (
    <div>
        <ul className="list-group">
      {
      users?.map((item) => 
          <li key={item.id}
          className="list-group-item d-flex justify-content-between aligne-items-center list-group-item-action"
           onClick={() => {
            router.push(`/users/${item.id}`)
           }}
          >
            <div>
              <h3>{item.first_name} {item.last_name}</h3>
              <p>{item.email}</p>
            </div>
              <img src={item.avatar} 
              style={{borderRadius:'50%'}}
              alt={item.first_name} />
          </li>  
        )
      }
      </ul>
    </div>
  )
}

export default Users