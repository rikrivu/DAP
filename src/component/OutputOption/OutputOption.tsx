import React, { useContext } from 'react'
import { useState } from 'react';
import { StoreType, dataMiningStore } from '../../store/DataminingStore';
import Table from '../Table/Table';
// import TableContentWrapper from '../TableContentWrapper/TableContentWrapper'
import './OutputOption.scss';

export default function OutputOption() {
    const apiResult: StoreType = useContext<StoreType>(dataMiningStore);
    const [visulaization, setVisulaization] = useState<string>("tabular");
    const outputTableDetails: [] = apiResult.state;
    return (
    <div>
      
                {Object.keys(outputTableDetails).length === 0 ?
                    (<p>No data to display</p>)
                    :
                    (
                        <>
                        <div className="visulaization-selection ml-3">
                        <input type="radio" id="Tabular"  value="Tabular" checked={visulaization === "tabular"} 
                        onChange={() => setVisulaization("tabular")}
                        />
                        <label>Tabular</label>
                        <input type="radio" id="Graphical"  value="Graphical" checked={visulaization === "graphical"}
                        onChange={() => setVisulaization("graphical")}/>
                        <label>Graphical</label>
                        </div>
                        {visulaization === "tabular" ? 
                        (
                            <Table tableDetail={outputTableDetails}/>
                        )
                        : 
                        (<div className="card ml-2">Graphical View</div>)}
                    </>   
                    )
                }

                
                {/* {state.length}  */}
                {/* <TableContentWrapper outputResult={OutputTableDetails}>
                        </TableContentWrapper> */}
            </div>
   
    )
}
