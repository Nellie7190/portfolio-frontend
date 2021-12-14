import { useState, useEffect } from "react";

const About = (props) => {
    //state to hold data
    const [about, setAbout] = useState(null);

    //function to make api call
    const getAboutData = async () => {
        //make api call and get response
        const response = await fetch(props.URL);
        //turn response into JS object
        const data = await response.json();
        //set the about state to data
        setAbout(data);
    };

    //make an initial call for the data inside useEffect so loads once
    useEffect(() => getAboutData(), []);

    //function that returns JSX needed when getting data
    const loaded = () => {
        return (
        <div>
            <img id="profile" src={about.headshot} alt="no image" />
            <h2>{about.role}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
        )
    };
    return about ? loaded() : <h1>Loading...</h1>
};

export default About;