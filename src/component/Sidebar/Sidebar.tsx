import './Sidebar.scss';
import { SetStateAction, useState } from 'react'
import { analyticOptionConfig } from '../../config/JsonConfiguration/AnalyticOption';
import { getIcon } from '../../utils/globalUtilityMethod';
import CustomTooltip from '../shared/CustomTooltip/CustomTooltip';
import { Dispatch } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Sidebar () {

    const currentAnalytics = useLocation().pathname.replace('/', '');
    const navHistory = useHistory();

    const [expanded, setExpanded]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(true);

    return (
        <div className={`sidebar${expanded ? ' sidebar-expanded' : ' sidebar-collapsed'}`}>

            <div className="sidebar-header">
                <CustomTooltip title={expanded ? 'Collapse' : 'Expand'}>
                    <button type="button" className="icon-btn" onClick={()=>{setExpanded((prev: boolean) => !prev)}}>
                        {getIcon(expanded ? 'back' : 'forward')}
                    </button>
                </CustomTooltip>
            </div>

            {
                Object.keys(analyticOptionConfig).map((key: string, j: number) => (
                    <button
                        type="button"
                        className={`sidebar-elements${
                            analyticOptionConfig[key].route === currentAnalytics ? ' el-selected' : ''
                        }`} key={`sideBarOption-${j}`}
                        onClick={() => navHistory.push(`/${analyticOptionConfig[key].route}`)}
                    >                            
                        <CustomTooltip title={analyticOptionConfig[key].title}> 
                            <span>
                                <span>{getIcon(analyticOptionConfig[key].route)} </span>
                                <span className="ml-1">{analyticOptionConfig[key].title}</span>
                            </span>
                        </CustomTooltip>

                        {
                            expanded && 
                            <CustomTooltip title={analyticOptionConfig[key].description}>
                                {getIcon("information")}
                            </CustomTooltip>
                        }
                    </button>
                ))
            }
        </div>
    )
}


