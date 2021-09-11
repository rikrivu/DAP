import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import { analyticOptionConfig } from '../../config/JsonConfiguration/AnalyticOption';
import { DataMiningStateProvider } from '../../store/DataminingStore';
import AboutUs from '../../views/AboutUs/AboutUs';
import Car from '../../views/Car/Car';
import ContactUs from '../../views/ContactUs/ContactUs';
import DataMining from '../../views/DataMining/DataMining';
import EHS from '../../views/EHS/EHS';
import NLP from '../../views/NLP/NLP';


import OtherTools from '../../views/OtherTools/OtherTools';
import Utility from '../../views/Utility/Utility';
import Visualization from '../../views/Visulaization/Visualization';
import WaterAnalytics from '../../views/WaterAnalytics/WaterAnalytics';
import Sidebar from '../Sidebar/Sidebar';

const routerComponentDictionary: {[name: string]: (props?: any) => JSX.Element} = {
    about: AboutUs,
    contactus: ContactUs,
    othertools: OtherTools,
    datamining: DataMining,
    car: Car,
    ehs: EHS,
    nlp: NLP,
    utility: Utility,
    visualization: Visualization,
    wateranalytics: WaterAnalytics
}

export default function ViewPort() {

    return (
        <Router>
            <Sidebar/>
                <div className="viewport-content">
                    <Switch>
                    {
                        Object.keys(analyticOptionConfig).map((key: string) => (
                            <DataMiningStateProvider>
                                <Route exact key={`app-route-${key}`}
                                    path={`/${analyticOptionConfig[key].route}`}
                                    component={routerComponentDictionary[analyticOptionConfig[key].route]}
                                />
                            </DataMiningStateProvider>
                        ))
                    }
                    </Switch> 
                </div> 
        </Router>
    )
}
