import React from 'react';

function List(props) {
    console.log(props.List);
    let k = 0;
    return (
        <>
            {
                props.List.map(e => {
                  let val = `location${++k}`;
                    return e.country == 'India' && <li key={val}>{e.name}</li> 
                })
            }
        </>
    );
}

export default List;