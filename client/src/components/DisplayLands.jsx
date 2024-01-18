import React from 'react'

function DisplayLands(props) {
  const lands = props.lands
  const title = props.title

  return (
    <div className='displaylands'>
      <h3>{title}</h3>
      <ul>
        {
          lands.map(land => (
            <li className='landlist' key={land.name}>
              <button onClick={props.onClick}>{land.name}</button>
            </li>
          ))
        }
      </ul>
    </div>

  );
}

export default DisplayLands;