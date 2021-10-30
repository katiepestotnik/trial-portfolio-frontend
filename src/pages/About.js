import { useState, useEffect } from 'react';
const About = (props) => {
    const [about, setAbout] = useState(null);
    const getAbout = async () => {
        const response = await fetch(props.url + "about");
        const data = await response.json();
        setAbout(data);
        console.log(data)

    };
    useEffect(() => {
        getAbout();
    }, []);
    const loaded = () => {
        return (
            <div>
                <h3>{about.name}</h3>
                <p>{about.email}</p>
                <a href={about.gitHub}>{about.gitHub}</a>
                <p>{about.bio}</p>
                <img src={about.headshot} alt="anon"/>
            </div>
        );
    };
    const loading = () => {
        return <h1>Loading</h1>
    };
    return about ? loaded():loading()
};
export default About;