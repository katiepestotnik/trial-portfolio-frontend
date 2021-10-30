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
                <h2>{about.name}</h2>
                <img className="anon"src={about.headshot} alt="anon"/>
                <p className="email">{about.email}</p>
                <a rel="noreferrer"target="_blank"href={about.gitHub}>{about.gitHub}</a>
                <div className="empty">
                    <p className="bio">{about.bio}</p>
                </div>

            </div>
        );
    };
    const loading = () => {
        return <h1>Loading</h1>
    };
    return about ? loaded():loading()
};
export default About;