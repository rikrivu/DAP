
import AnalyticsContentWrapper from '../../component/AnalyticsContentWrapper/AnalyticsContentWrapper';
import CommonInputCard from '../../component/CommonInputCard/CommonInputCard';
import DataMiningDropDown from '../../component/DataMiningDropDown/DataMiningDropDown';
import OutputOption from '../../component/OutputOption/OutputOption';
import { analyticOptionConfig } from '../../config/JsonConfiguration/AnalyticOption';
import './DataMining.scss';

export default function DataMining() {
  return (
    <>
      <AnalyticsContentWrapper type="small">
      <CommonInputCard>
        <DataMiningDropDown config={analyticOptionConfig.datamining} />
     </CommonInputCard>
      </AnalyticsContentWrapper> 
      <AnalyticsContentWrapper type="large">
        <OutputOption/>
      </AnalyticsContentWrapper> 
    </>
  );
}
