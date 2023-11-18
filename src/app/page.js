import { datos } from "../../datos"


export default async function Home() {

const info = await getProps()

console.log(info)
  return (
    <div>
      <h1>{info.title}</h1>
    </div>
  )
}

export const getProps = async () =>{
  const res = await fetch("https://www.freetogame.com/api/games");
  const data = await res.json()
  
  return data[0]
}
