

function ListItem(props) {
    const {item,selectActiveItem, activeItem} = props

  return (
    <div>
        <li className={`${activeItem.id === item.id ? "active" : ""}`}  onClick={selectActiveItem}>{item.item}</li>
    </div>
  )
}

export default ListItem