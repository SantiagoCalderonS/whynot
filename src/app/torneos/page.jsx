import { datos } from "../../../datos"
import Torneo from "@/componentes/torneo/torneo"


export default function Torneos() {
    
    const torneos = datos.torneos

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ul style={{padding: "0px"}}>
            {torneos.map((T)=>{
                return(
                    <Torneo torneo={T} key={T.ID}/>
                    )
            })}
        </ul>
        </div>
    )}
