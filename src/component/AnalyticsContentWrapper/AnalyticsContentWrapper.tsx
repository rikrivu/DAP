import React from 'react'
import { ContentWrapperModel } from '../../model/ContentWrapperModel';
import './AnalyticsContentWrapper.scss';

export default function AnalyticsContentWrapper({type, children}: ContentWrapperModel) {
  return (
    <div className={`${
        type === "small" ? "small" : type === "large" ? "large" : null
      }-wrapper`}
    >
      {children} 
    </div>
  )
}
