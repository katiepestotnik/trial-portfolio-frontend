import {Button} from '../styles'
const Form = (props) => {
    return (
        <form className="form"action="/projects" method="POST">
            Project Name:<br/> <input type="text" name="name" /><br />
            Live Project Link:<br /> <input type="url" name="live"></input><br/>
            GitHub Link:<br/> <input type="url" name='git'></input><br/>
            Project Image:<br/> <input type="url" name="image"></input><br/><br/>
            <Button>ADD PROJECT</Button>
        </form>
    );
};
export default Form