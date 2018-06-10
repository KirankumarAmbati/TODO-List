import React from 'react'

function List(props){
    return(
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>
                    <span 
                        onClick= {() => props.toggleItem && props.toggleItem(item)}
                        style = {{textDecoration:item.completed?'line-through':'none'}}
                    >
                        {item.name}
                    </span>
                    <button onClick = {() => props.removeItem(item)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default List