import { AnalyticOptionConfigModel } from "../../model/AnalyticOptionModel";

export const analyticOptionConfig: AnalyticOptionConfigModel = {
  
    datamining: {
        title: "Data Mining",
        description: `Explore all the functionalites of the
         EDA tool here. Explore the different types of 
         analysis like Bivariate, Univariate, Decision Tree analysis that can be performed on a csv or an excel file here. Users will be able to visualize the results of the analysis in this environment. Click here to explore the EDA tool.`,
        route: "datamining",
        icon: "datamining",
        fileType: "CSV/Excel",
        fileUpload:"Select CSV/Excel file",
        inputs: [
            {
                inputName: "typeOfAnalysis",
                inputLabel: "Type of Analysis",
                placeholder: "Select Type of Analysis",
                type: "multiSelect",
                options: [
                    { name: "Raw Summary", selector: "rawSummary" },
                    { name:"EDA", selector: "eda"},
                    { name:"Clustering", selector:"clustering"}
                ]
            }
        ]
    },
  
    car: {
        title: "CAR",
        route: "car",
        description: `Explore all the functionalites of the CAR tool here. 
        Explore the different types of custom analyses that can be performed here. 
        Users will be able to visualize the results of the custom analyses in this 
        single integrated environment. Click here to explore the CAR tool.`,
        icon: "car",
        inputs: []
        
    },
    ehs: {
        title: "EHS",
        description: `Explore all the functionalites of the EHS tool here.
         Explore the different types of custom analyses that can be performed here.
          Users will be able to visualize the results of the custom analyses in this
           single integrated environment. Click here to explore the EHS tool.`,
        route: "ehs",
        icon: "ehs",
        inputs: []
    },
    nlp: {
        title: "NLP",
        description: `Explore all the functionalites of the NLP tool here. 
        Explore the different types of custom analyses that can be performed here. 
        Users will be able to visualize the results of the custom analyses in this single 
        integrated environment. Click here to explore the NLP tool.`,
        route: "nlp",
        icon: "nlp",
        inputs: []
    },
    utility: {
        title: "Utility",
        description: `Explore all the functionalites of the Utility tool here. 
        Explore the different types of custom analyses that can be performed here. 
        Users will be able to visualize the results of the custom analyses in this single 
        integrated environment. Click here to explore the Utility tool.`,
        route: "utility",
        icon:"utility",
        inputs: []
    },
    visualization: {
        title: "Visualization",
        description: `Explore all the functionalites of the Visualization tool here. 
        Explore the different types of custom analyses that can be performed here. 
        Users will be able to visualize the results of the custom analyses in this single integrated 
        environment. Click here to explore the Visualization tool.`,
        route: "visualization",
        icon:"visualization",
        inputs: []
    },
    wateranalytics: {
        title: "Water Analytics",
        description: `Explore all the functionalites of the Water Analytics tool here. 
        Explore the different types of custom analyses that can be performed here. 
        Users will be able to visualize the results of the custom analyses in this 
        single integrated environment. Click here to explore the Water Analytics tool.`,
        route: "wateranalytics",
        icon:"Wateranalytics",
        inputs: []


    }
    
}

