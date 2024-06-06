function DisplayLands(props) {
  const lands = props.lands
  const title = props.title

  return (
    <div className='displaylands'>
      <ul className='landsul'>
        {
          lands.map(land => (
            <li className='landlist' key={land.name}>
              <button className='landlistbutton' onClick={props.onClick}>{land.name}</button>
            </li>
          ))
        }
      </ul>
    </div>

  );
}

export default DisplayLands;