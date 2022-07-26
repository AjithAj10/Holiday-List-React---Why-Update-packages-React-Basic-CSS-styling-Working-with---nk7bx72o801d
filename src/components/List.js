import React from 'react';

function List(props) {
    console.log(props);
    let k = 0;
    return (
        <>
            {
                props.List.map(e => {
                  let val = `location${++k}`;
                //   e.country == 'India' &&
                    return<li key={val}>{e.name}</li> 
                })
            }
        </>
    );
}

export default List;