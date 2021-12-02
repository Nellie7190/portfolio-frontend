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
            <img id="profile" src="https://media-exp1.licdn.com/dms/image/D4E35AQGlMG0PaQ1MFQ/profile-framedphoto-shrink_400_400/0/1638291556754?e=1638550800&v=beta&t=_Fo_IFKys5HDK1usI_KJgR_63wEqGYB0QR9Y51BUbqQ" alt="no image" />
            <h2>{about.role}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
        )
    };
    return about ? loaded() : <h1>Loading...</h1>
};

export default About;