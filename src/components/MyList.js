

function MyList (props) {

  const listHeader = (
      <h1>{props.header}</h1>
    
  )
  const itemsInList = props.items.map((item)=>
    
      <li key={item.id}>
        {item.text}
      </li>
  )
  return (
    <div>
      {listHeader}
      <ol>
        {itemsInList}
      </ol>
    </div>
  )

}


export default MyList