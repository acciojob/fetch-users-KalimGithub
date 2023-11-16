
import React, {useState, useEffect} from "react";
import './../styles/App.css';
import "regenerator-runtime/runtime";

const App = () => {

 const getUser = async() => {
  const res = await(fetch('https://reqres.in/api/users'))
  const data = await res.json();
  console.log(data.data)
  setPeople(data.data)
}
  const [people, setPeople] = useState([])

  // useEffect(() => {
  //   getUser();
  // }, [])



  return (
    <div>
        {/* Do not remove the main div */}
        <header className="nav">
          <h1>Blue Whales</h1>
          <button className="btn" onClick={getUser}>Get User List</button>
        </header>
        <table>
          <thead>
            <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email
            </th>
            <th>
              Avatar
            </th>
            </tr>
          </thead>
          <tbody>
            {people.length === 0 
            ? (<tr>
              <td>
              No data found to display
              </td>
            </tr> )
            :  people.map((person, index) => {
              return <tr key={index}>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
              <td><img src={person.avatar} alt="img"/></td>
              </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default App
