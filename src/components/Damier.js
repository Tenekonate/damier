import React,{useState} from "react";

const Damier = ({rows, cols}) => {
     const [rows, setRows] = useState(0);
    
    const damier= [];
    const drows = [];
    console.log(rows);

     
    for (let r = 1; r <= rows ; r++) {
        drows.push(<td style={{
                backgroundColor: r % 2 == 0 ? 'black'}}
                key={r}>" "</td>);
        if( r % 2 == 0) {
            
        }
        else{
            drows.push(<td key={r}>{r}</td>);   
        }
    
        }
    for (let c = 1; c <= cols ; c++) {
              
        damier.push(<tr key={c}>{c} {drows}</tr>)
    }


    return (
        <div>
            <table>
                <tbody>
                   {damier}
                </tbody>
            </table>
            <button value={rows} onClick ={ ((e) => rows + 1) }>{rows} +</button>
        </div>
    )
}

export default Damier;