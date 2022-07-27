import React from 'react';

function List(props) {
    console.log(props.List);
    let k = 0;
    return (
        <>
            {
                props.List.filter(e => {
  
                    return e.country === 'India';
                }).map(e => {
                    let val = `location${++k}`;
                    return <li key={val}>{e.name}</li>
                })
            }
        </>
    );
}

export default List;