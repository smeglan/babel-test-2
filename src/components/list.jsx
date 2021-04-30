import React, { useState } from 'react';

const List = (props) => {
    const { items = [] } = props;
    const [itemsList, setItemsList] = useState(items);

    const swap = (index) => {
        const list = [...itemsList];
        const aux = list[0];
        list[0] = list[index]
        list[index] = aux;
        return list;
    }
    const onPress = (id) => {
        const newList = swap(id)
        setItemsList(newList);
    }

    return (
        <ul>
            {itemsList.map((value, i) => {
                return <li key={"key" + i} onClick={()=>onPress(i)}>{value}</li>
            })}
        </ul>
    )
}

export default List