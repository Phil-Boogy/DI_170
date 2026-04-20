import React, { Component } from 'react';
import data from "../src/data2.json"

class Example2 extends Component {
    render() {
        return (
            <>
                {data.Skills.map((item, index) => (<div key={index}>
                    <h1>{item.Area}</h1>
                    <ul>
                        {item.SkillSet.map((skill, index) => (
                            <li key={index}>{skill.Name}</li>
                        ))}
                    </ul>
                </div>))}
            </>

        )
    }
}

export default Example2;
