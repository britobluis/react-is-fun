import React from 'react';
import ReactDOM from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

class SkyDayCounter extends React.Component {
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calculateGoalProgress = (total, goal) => {
        return this.getPercent(total/goal)
    }
    render() {
        const {total, powder, backcountry, goal} = this.props // Easier to read variables
        return (
            <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Powder Days: {powder}</p>
                </div>
                <div>
                    <p>Backcountry Days: {backcountry}</p>
                </div>
                <div>
                    <p>Goal Days: {goal}</p>
                </div>
                <div>
                    <p>Goal Progress: {this.calculateGoalProgress(total, goal)}</p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <SkyDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}
    />,
    document.getElementById('root')
)