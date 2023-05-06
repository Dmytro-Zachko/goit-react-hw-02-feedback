import React from "react";
import PropTypes from 'prop-types';
import { StatsContainer } from "./Statistic.styled";

export const Statistic = ({ good,bad,neutral,total,positivePercentage }) => {
   return ( <div><StatsContainer>Good: {good} </StatsContainer>
                <StatsContainer>Neutral: {neutral} </StatsContainer>
                <StatsContainer>Bad: {bad} </StatsContainer>
                <StatsContainer>Total: {total} </StatsContainer>
       <StatsContainer>Positive feedback: {" "}
       {total > 0 ? positivePercentage : '0'}%</StatsContainer></div>
    ) 
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}