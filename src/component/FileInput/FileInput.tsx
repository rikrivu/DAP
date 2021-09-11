import React, { useState } from 'react'
import * as XLSX from 'xlsx';
import { WorkBook } from 'xlsx';
import { ColumnDetailsModel } from '../../model/ContentWrapperModel';

export default function FileInput( {uploadFileCallBack}: {uploadFileCallBack: (childData: any) => void})
 {
    const [uploadedFile, setuploadedFile] = useState(null);
    const [inputData, setinputData] = useState([]);
    const [columns,setStateFirstCoulmn] = useState<ColumnDetailsModel[]>([]);
    
const processData = (data: string) => {
    const dataStringLines = data.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    
    const list: never[] = [];
    
    
    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));
    if (columns[0].name === ""){
      columns.shift();
    }
    // console.log(typeof columns);
    // console.log(list)
    setinputData(list);
    setStateFirstCoulmn(columns);
    // console.log(columns); 
    // parentCallback(columns)
    
  }

    //upload file function
    const fileUploadHandler = (e : any) => {
        // console.log(e.target.files[0])
        const file = e.target.files[0];
        console.log(file.name);
         if(file.name.includes(".csv")){
          uploadFileCallBack(file);
            const reader: FileReader = new FileReader();
            reader.onload = (evt) =>{
                const bstr = evt.target?.result;
                const wb: WorkBook =  XLSX.read(bstr, { type: 'binary' });
            
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                const data = XLSX.utils.sheet_to_csv(ws );
                console.log(data);
                processData(data);
               
               };
               reader.readAsBinaryString(file);

       }
       else{
           alert("slect proper file")
       }
    
    }
return(
  <>
   
    <input
    type="file"
    accept=".csv, .xlsx, .xls"
    onChange = {fileUploadHandler}
   />
   </>
)
}







