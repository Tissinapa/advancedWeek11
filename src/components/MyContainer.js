import MyList from "./MyList"
import {useState} from "react"


const MyContainer = () => {
  const [items,setItems] = useState([
    {id:"1", text: "This is an item"},
    {id:"2", text: "Return of item"}
  ])
  

  return (
    <div>
      <MyList
        header = {"Nice, list of components"}
        items={[
          {id:"1", text: "This is an item"},
          {id:"2", text: "Return of item"}
        ]}/>
        
    </div>
  )
}

export default MyContainer
