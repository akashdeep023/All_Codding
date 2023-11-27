import { useState } from "react";

// single input ---------------
// export default function Form() {
//     let [fullName, setFullName] = useState("akash")
//     let handleNameChange = (event) => {
//         console.log(event.target.value)
//         setFullName(event.target.value)
//     }
//     return (
//         <form>
//             <label htmlFor="fullname">Full Name</label>&nbsp;&nbsp;
//             <input type="text"id="fullname" placeholder="Enter your name" value={fullName} onChange={handleNameChange} /><br /><br />
//             <button>Submit</button>
//         </form>
//     )
// }

// Multiple input --------------
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>&nbsp;&nbsp;
      <input
        type="text"
        id="fullname"
        placeholder="Enter your name"
        value={formData.fullName}
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">User Name</label>&nbsp;&nbsp;
      <input
        type="text"
        id="username"
        placeholder="Enter user name"
        value={formData.userName}
        name="userName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>&nbsp;&nbsp;
      <input
        type="password"
        id="password"
        placeholder="Enter password"
        value={formData.password}
        name="password"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
