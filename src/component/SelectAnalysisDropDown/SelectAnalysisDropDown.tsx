import Multiselect from 'multiselect-react-dropdown'
import React, { useState } from 'react'
import { InputFieldModel } from '../../model/AnalyticOptionModel';
import './SelectAnalysisDropDown.scss';
export default function SelectAnalysisDropDown(props:{differentAnalysisOption: InputFieldModel[]}) {
//    const [analysisOption, setstateAnalysisOption] = useState(props.differentAnalysisOption)
   const analysisOption = props.differentAnalysisOption
   console.log(analysisOption)
    return (
        <div>
            {/* {Object.keys(analysisOption).map((inputvalue, b) => (
                console.log({inputvalue})
            ))} */}
            {/* {analysisOption.map((i,j) => {
                {i.inputName}
            })} */}
                  {/* <div key={b}>
                     {inputvalue} */}
                     {props.differentAnalysisOption.map((i,j) =>
                     (
                         <>
                 <p className="label-heading ml-5">{i.inputLabel}:</p>
                 <Multiselect
                     options={i.options}
                     displayValue="name"
                     showCheckbox={true}
                     placeholder={i.placeholder}

                 /> 
                 </>
                     )
                 )}
             {/* </div>
           
            {/* {analysisOption.map(()) */}
             {/* {analysisOption.map((inputvalue, b) => (
                    <div key={b}>
                        <p className="label-heading ml-5">{inputvalue.inputLabel}:</p>
                        <Multiselect
                            options={inputvalue.options}
                            displayValue="name"
                            showCheckbox={true}
                            placeholder={inputvalue.placeholder}

                        />
                    </div>
                ))} */}
                {/* {typeof props.differentAnalysisOption} */}
        </div>
    )
}
