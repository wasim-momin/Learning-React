import { useContext, useState } from "react";
import { UserContext } from "../context/usercontext/UserContext";

export const Login = () => {
  const [name, setName] = useState();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({name})
  }

  return (
    <div>
      <input
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
