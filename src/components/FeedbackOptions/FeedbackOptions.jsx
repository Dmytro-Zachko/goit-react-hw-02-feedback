import React from "react";
import PropTypes from 'prop-types';
import { OptionList,OptionListItem } from "./FeedbackOptions.styled";

export const FeedbackOptions =  ({options, onLeaveFeedback}) => {
    return (<OptionList>{options.map(option => {
        return (
            <li key={option}><OptionListItem value={option} onClick={onLeaveFeedback}>{option}</OptionListItem></li>
        );
      })}</OptionList>
    
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array,
}