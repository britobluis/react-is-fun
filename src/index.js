import React from 'react';
import ReactDOM from 'react-dom';
import SkiDayCounter from './SkiDayCounter';
import Library from './Library';

// Using SkiDayCounter
let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}
// To render
// <SkiDayCounter
    //     total={skiData.total}
    //     powder={skiData.powder}
    //     backcountry={skiData.backcountry}
    //     goal={skiData.goal}
    // />

ReactDOM.render(
    <Library />,
    document.getElementById('root')
)