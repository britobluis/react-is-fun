import React from 'react';

// Data used by components

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

// Functions used in function component

const getPercent = decimal => {
    return decimal * 100 + '%'
}
const calculateGoalProgress = (total, goal) => {
    return getPercent(total / goal)
}

// FUNCTION COMPONENT EXAMPLE

const SkiDayCounterF = (props) => {
    return (
        <section>
            <div>
                <p>Total Days: {props.total}</p>
            </div>
            <div>
                <p>Powder Days: {props.powder}</p>
            </div>
            <div>
                <p>Backcountry Days: {props.backcountry}</p>
            </div>
            <div>
                <p>Goal Days: {props.goal}</p>
            </div>
            <div>
                <p>Goal Progress: {calculateGoalProgress(props.total, props.goal)}</p>
            </div>
        </section>
    )
}

// CLASS COMPONENT EXAMPLE

class SkiDayCounter extends React.Component {
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calculateGoalProgress = (total, goal) => {
        return this.getPercent(total / goal)
    }
    render() {
        const { total, powder, backcountry, goal } = this.props // Easier to read variables
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

export default SkiDayCounter