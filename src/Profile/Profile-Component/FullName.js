import React from 'react'


const FullName = ({ title, subTitle, handleAlert, studentsNumber, introductionAgenda}) => {
        //console.log(props)
        return (
            <div>
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <h4>students watching the video: {studentsNumber}</h4>
                <button onClick ={ () => handleAlert(title)}>Click Me</button>
            <div>
                    <h4>Introduction Agenda</h4>
                    <ul>
                        {introductionAgenda.map((el, i) => (
                            <li key={i}>{el}</li>
                        ))}
                    </ul>
            </div>    
             
            </div>
            
        )
    }
   

export default FullName;
