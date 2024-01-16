import { useEffect, useState } from "react"

function randomArea(url){

  const [area, SetArea] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        SetArea(data.areas[Math.ceil(Math.random() * data.areas.length)])
      })
  }, []);

  console.log(area);
}

export default randomArea