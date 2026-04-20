import React, { Component } from 'react';
import data from "../src/data2.json"

// "Experiences": [
//     {
//         "companyName": "Demo1 Technologies",
//         "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
//         "url": "https://www.google.com/",
//         "roles": [
//             {
//                 "title": "Full Stack Developer",
//                 "description": "Built and updated various Chrome Extensions.",
//                 "startDate": "2017-01-01",
//                 "endDate": "2017-05-01",
//                 "location": "New York, USA"
//             }
//         ]
//     },

class Example3 extends Component {
    render() {
        return (
            <>
                {data.Experiences.map((experience, index) => (<div key={index}>
                    <img src={experience.logo} />
                    <h2><a href={experience.url}>{experience.companyName}</a></h2>
                    <div>{experience.roles.map((role, index) => (
                        <>  <p>{role.title}</p><br />
                            <p>{role.startDate} {role.location}</p><br />
                            <p>{role.description}</p><br />
                        </>
                    ))
                    } </div>

                </div>))}

            </>

        )
    }
}

export default Example3;