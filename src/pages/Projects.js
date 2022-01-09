import { useState, useEffect } from "react";
import styled from "styled-components";
//work on

const Projects = (props) => {
    const imgStyle = {
        width: "70%",
        height: "70%",
        border: "3px solid black",
        margin: "auto",
      };
    //state to hold projects
    const [projects, setProjects] = useState(null);
    const [searchTerm, setSearchTerm] = useState('')

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
        
        return (
            <div>
                <input
                id='search'
                type='text'
                placeholder='search'
                onChange={event=> {
                    setSearchTerm(event.target.value)
                }}/>
                    {projects.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return (
                            <>
                            <h1>{val.name}</h1>
                            <img style={imgStyle} src={val.image} />
                            <p>{val.description}</p>
                            <br />
                            <a href={val.git} target='#'>
                                <button>Github</button>
                            </a>
                            <a href={val.live} target='#'>
                                <button>Live Site</button>
                            </a>
                            </>
                        )
                    })}
                {/* projects.map((project) => (
                    <div>
                        
                    </div>
                )) */}
            </div>
            )
    }


    // const loaded = () => {
    //     <input
    //     id='search'
    //     type='text'
    //     placeholder='search'
    //     onChange={event=> {
    //         setSearchTerm(event.target.value)
    //     }}>
    //         {projects.filter((val) => {
    //             if (searchTerm == "") {
    //                 return val
    //             } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    //                 return val
    //             }
    //         })}
    //     </input>
    //     return (
    //     projects.map((project) => (
    //         <div>
    //             <h1>{project.name}</h1>
    //             <img style={imgStyle} src={project.image} />
    //             <p>{project.description}</p>
    //             <br />
    //             <a href={project.git} target='#'>
    //                 <button>Github</button>
    //             </a>
    //             <a href={project.live} target='#'>
    //                 <button>Live Site</button>
    //             </a>
    //         </div>
    //     )))
    // }
    return projects ? loaded() : <h1>Loading...</h1>
};

export default Projects;