import {useState} from 'react'

export default function Playerform () {
  const [password, setPassword] = useState()
const [username, setUsername] = useState()
const handleChange = (e) => {
  const {value, name} = e.target
  if (name === "password"){
    setPassword(value)
  } else{
    setUsername(value)
  }

}
  return (
  <form>
    <label htmlFor="username">Username</label>
    <input
    name="username"
    value={username}
    type="text"
    onChange={(e)=>{handleChange(e)}}
    />
    <label htmlFor="password">Password</label>
    <input
    name="password"
    value={password}
    type="password"
    onChange={(e)=>{handleChange(e)}}
    />
  </form>
)
}
