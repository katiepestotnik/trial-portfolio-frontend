import { useState, useEffect } from 'react';
import { Button } from "../styles";
const Projects = (props) => {
    const [projects, setProjects] = useState(null);
    const getProjects = async () => {
        const response = await fetch(props.url + "projects");
        const data = await response.json();
        setProjects(data);
        console.log(data)
    };
    useEffect(() => {
        getProjects();
    }, []);
    const loaded = () => {
        return <section className="style-projects">{
            projects.map((project) => {
                return <div>
                    <h1>{project.name}</h1>
                    <div class="background-style">
                        <img className="size-images" src={project.image} alt="project" /></div><br />
                    <a rel="noreferrer"target="_blank"href={project.live}>
                        <Button>LIVE PROJECT</Button>
                    </a>
                    <a rel="noreferrer"target="_blank"href={project.git}>
                        <Button>GITHUB</Button>
                    </a>
                </div>
            })
        }
            </section>
    }
    const loading = () => {
        return<h1>Loading</h1>
    }
    return projects?loaded():loading()

};
export default Projects;