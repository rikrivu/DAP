import React, { isValidElement, JSXElementConstructor, ReactElement, ReactNode, useContext, useState } from 'react'
import { AnalyticOptionConfigModel } from '../../model/AnalyticOptionModel'
import { Multiselect } from "multiselect-react-dropdown";
import './CommonInputCard.scss'
import { ColumnDetailsModel } from '../../model/ContentWrapperModel';
import FileInput from '../FileInput/FileInput';
import { InputConfig } from '../../config/JsonConfiguration/InputConfig';
import { dataMiningStore, StoreType } from '../../store/DataminingStore';
import { analysisSubmited } from '../../service/data-service';
import SelectAnalysisDropDown from '../SelectAnalysisDropDown/SelectAnalysisDropDown';
import { Children } from 'react';
import { cloneElement } from 'react';
import { CommonInputCardProps } from '../../model/AppModels';

export default function CommonInputCard(props: CommonInputCardProps ) {
    const state: StoreType = useContext<StoreType>(dataMiningStore)
    const {dispatch} = state;
    const [filterState, setFilterState] = useState(InputConfig);
    const [uploadedFileData, setuploadedFileData] = useState<File>();
    const [result,setResult] = useState<[]>();
    const [inputState,setInputState] = useState<any>()
    const handleState = (val:any) => {
        setInputState(val)
    }
    // const [uploadedFile, setuploadedFile] = useState(any);
    // const [inputData, setinputData] = useState([]);
    // const [columns, setStateFirstCoulmn] = useState<ColumnDetailsModel[]>([]);
    // const [inputAnalyticOption, setInputAnalyticOption] = useState(analyticType);
    //submit api call
    const handleSubmit = () => {
            let preprocessing_array =[];
            if(filterState.outlierRemovalChckBx){
              preprocessing_array.push("Outlier Removal");
              
            }
            if(filterState.missingValImpChckBx){
              preprocessing_array.push("Missing Value");
            }
            if(filterState.regroupCategoriesChckBx){
              preprocessing_array.push("Regrouping categories");
            }
           
        console.log("submit")
        if (uploadedFileData) 
        {
            let formData = new FormData();
            formData.append("Input1", "Raw Summary");
            formData.append("Input2", "");
            formData.append("Input3", "");
            formData.append("Input4","");
            formData.append("Input5", "");
            formData.append("File", uploadedFileData);
            formData.append("Preprocessing", "Missing Value");
        analysisSubmited(formData)
            .then(function (response: any) {
                if (response.status === 200) {
                    setResult(response.data)
                    dispatch({
                        actions: [{
                            type: 'result',
                            data: response.data
                        }]
                    });
                 }
            })
        }
    }
    //call from the children
    const childrenWithProps: ReactElement<any, string | JSXElementConstructor<any>>[] | null | undefined =
    Children.map(props.children, child =>{
        if(isValidElement(child)){
            return cloneElement(child, {handleState: handleState})
        }
    })
return (
    <div className="outside">
        <div className="row">
            <div className="col-lg-3">
                <p className="label-heading">Select CSV/Excel:</p>
                <FileInput uploadFileCallBack = {(file) => setuploadedFileData(file)}/>
            </div>
            <div className="col-lg-8">
              {childrenWithProps}
            </div>

            <div className="col-lg-1">
                <button className="button-wrapper mt-5 mr-3" type="submit" value="Submit"
                 onClick={() => handleSubmit()}>
                    Submit</button>
            </div>
        </div>
    </div>
)

}

