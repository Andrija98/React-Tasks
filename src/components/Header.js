import { useRef } from "react";

const Header = (props) => {
    const textRef = useRef();
    const dayRef = useRef();

    function onClick(){
        console.log('Clicked')
    }
    
    function onSubmit(event){
        event.preventDefault();
        const text = textRef.current.value;
        const day = dayRef.current.value;
        const id = Math.floor(Math.random() * 100);
        const newTask = { 
            id, 
            text, 
            day
        }
        props.addTask(newTask);
        console.log(newTask);
    }

    return(
        <header className="header">
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Task</label>
                    <input id="text" type='text' placeholder="Add Task" ref={textRef}  />
                </div>
                <div className="form-control">
                    <label htmlFor="time">Day & Time</label>
                    <input id="time" type='text' placeholder="Add Day and Time" ref={dayRef}  />
                </div>
                <button type='submit' className="btn">Add Task</button>
            </form>
            
        </header>
    );
}

export default Header