
export interface  ContentWrapperModel{
    type: "small" | "large";
    children: React.ReactNode;
  }
export interface ColumnDetailsModel {
    name: string,
    selector: string,
  }
export interface InputStateModel {
  file: null;
  outlierRemovalChckBx: boolean;
  missingValImpChckBx: boolean;
  regroupCategoriesChckBx: boolean;
  binarizeChckBx: boolean;
  typeOfAnalysis: [];
  
}
