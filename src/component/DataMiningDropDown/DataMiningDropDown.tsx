import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { AnalyticOptionConfigModel } from '../../model/AnalyticOptionModel';
import { DataMiningDropDownProps } from '../../model/AppModels';

export default function DataMiningDropDown(props: DataMiningDropDownProps) {
// export default function DataMiningDropDown(props: any) {
    // console.log('DataMiningDropDown', props)
    return (
        <>
            {props.config.inputs.map((inputvalue, b) => (
                <div key={b}>
                    <p className="label-heading ml-5">{inputvalue.inputLabel}:</p>
                    <Multiselect
                        options={inputvalue.options}
                        displayValue="name"
                        showCheckbox={true}
                        placeholder={inputvalue.placeholder}
                        // onSelect={handleState}
                    />
                </div>
            ))}
        </>
    )
}
