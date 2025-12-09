import { useState } from "react"

const Display6 = () => {
  const [student, setStudent] = useState({
    name: "Adhil",
    gender: "Male",
    mobile: "9876543210"
  })

  function updateName() {
    setStudent((previousState) => ({
      ...previousState,
      name: "Mohamed Adhil",
      gender:"Male",
      mobile:9789181440
    }))
  }

  return (
    <>
      <h1>name: {student.name}</h1>
      <h1>gender: {student.gender}</h1>
      <h1>mobile: {student.mobile}</h1>
      <button onClick={updateName}>change name</button>
    </>
  )
}

export default Display6;