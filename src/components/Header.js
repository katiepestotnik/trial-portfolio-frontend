import { Link } from 'react-router-dom';
const Header = (props) => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        border: '3px solid #bbdcff',
        padding: '8px',
        width: '90%',
        margin: 'auto'
    };
    return (
        <header>
            <div className="footer">Test</div>
            <h1>Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
            </nav>
        </header>
    );
};
export default Header;