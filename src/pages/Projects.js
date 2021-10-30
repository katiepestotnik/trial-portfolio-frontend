import {useState, useEffect} from 'react'
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
        return projects.map((project) => {
            return<div>
                <h1>{project.name}</h1>
                <img src={project.image} alt="project" />
                <a href={project.live}>
                    <button>View Project</button>
                </a>
                <a href={project.git}>
                <button>GITHUB</button>
                </a>
            </div>
        })
    }
    const loading = () => {
        return<h1>Loading</h1>
    }
    return projects?loaded():loading()

};
export default Projects;