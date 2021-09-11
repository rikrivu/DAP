export interface AnalyticOptionModel {
    title: string;
    route: string;
    description: string;
    icon: string;
    fileType?: string;
    fileUpload?: string;
    inputs: InputFieldModel[];
}

export interface InputFieldModel {
    inputName: string;
    inputLabel: string;
    placeholder: string;
    type: "multiSelect" | "dropdown" | "text" | "number";
    options: InputFieldOptionModel[]; 
}

export interface InputFieldOptionModel{
    name: string;
    selector: string;
}

export interface AnalyticOptionConfigModel {
    [name: string]: AnalyticOptionModel;
}

// export const getAnalytics = (name)

// const test: AnalyticOptionConfigModel  = {
//     name: {title:" ",
//     readableName:" ",
//     description:" ",
//     icon:" ",
// }
// }
    


