import { Context, createContext, useReducer } from "react";
export interface StoreType  {
    [key : string] : any;
}
export interface StoreAction {
    type: string;
    data: any;
}
export interface StoreStateActions{
    actions: StoreAction[];
}

const reducerDispatcher = (
    state: StoreType,
    actionList: StoreStateActions | ((prev: StoreType) => StoreStateActions) 
) => {
    const newState: StoreType = {...state};
    const actionsToWork: StoreStateActions = 
    typeof actionList === "function" ? actionList(newState) : actionList;
    actionsToWork.actions.forEach((action: StoreAction) => {
        newState[action.type] = action.data;
    })
    return newState;
}
const dataMiningStore: Context<StoreType> = createContext<StoreType>({});
const Provider: React.Provider<StoreType> = dataMiningStore.Provider;
//compund components
const DataMiningStateProvider = ({children}: any) => {
//state variable
//type of usereducer is function
    const [state, dispatch] = useReducer<
        (
            state: StoreType,
            action: StoreStateActions | ((prev: StoreType) => StoreStateActions) 
        ) => StoreType
    >
    (reducerDispatcher, {})

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {dataMiningStore, DataMiningStateProvider};
