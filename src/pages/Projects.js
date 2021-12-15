import { useState, useEffect } from "react";

const Projects = (props) => {
    const imgStyle = {
        width: "70%",
        height: "70%",
        border: "3px solid black",
        margin: "auto",
      };
    //state to hold projects
    const [projects, setProjects] = useState(null);

    //function to make api call
    const getProjectsData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + 'projects');
        //turn response into JS object
        const data = await response.json();
        //set the projects state to the data
        setProjects(data);
    };

    //initial call for the data inside a useEffect so loads only once
    useEffect(() => getProjectsData(), []);

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img style={imgStyle} src={project.image} />
                <br />
                <a href={project.git} target='#'>
                    <button>Github</button>
                </a>
                <a href={project.live} target='#'>
                    <button>live site</button>
                </a>
            </div>
        ))
    }
    return projects ? loaded() : <h1>Loading...</h1>
};

export default Projects;