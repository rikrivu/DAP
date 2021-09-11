import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InfoIcon from '@material-ui/icons/Info';
const faPropIcon = faGithub as IconProp;
const iconDictionary: {[name: string]: JSX.Element} = {
    'datamining': <FontAwesomeIcon  icon={faPropIcon}/>,
    'car': <FontAwesomeIcon icon={faPropIcon}/>,
    'ehs': <FontAwesomeIcon icon={faPropIcon}/>,
    'nlp': <FontAwesomeIcon icon={faPropIcon}/>,
    'utility': <FontAwesomeIcon icon={faPropIcon}/>,
    'visualization': <FontAwesomeIcon icon={faPropIcon}/>,
    'wateranalytics': <FontAwesomeIcon icon={faPropIcon}/>,
    'back': <ChevronLeftIcon/>,
    'forward': <ChevronRightIcon/>,
    'information': <InfoIcon style={{fontSize:"18px"}}/>

    
    }
export const getIcon = (icon: string):JSX.Element => {
    return iconDictionary[icon] ? iconDictionary[icon] : <></>
} 