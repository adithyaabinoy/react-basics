import React, { useState, useEffect } from "react";

function Users() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setName(data.users));
  }, []);

  return (
    <div>
      <h1>Displaying User List</h1>
      {name && name.length > 0
        ? name.map((e, i) => {
            return (
              <li key={i}>
                {`${e.firstName} ${e.lastName}`}
               
              </li>
            );
          })
        : ""}
    </div>
  );
}

export default Users;
