import { useState } from 'react';

const Form = (props) => {
    // Desestructurar props
    const { list, setList } = props;

    // Propiedad de la tarea
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState(false);

    //Metodo para anadir tarea
    const addTask = (e) =>{
        e.preventDefault();
        //si la tarea viene vacia
        if (title.length === 0) {
            return;
        }
        const newTask = {
            title, status
        }
        setList([...list, newTask]);

    }


    return (
        <div>
            <form onSubmit={addTask}>
                <label>Nex Task</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)}/>
                <input type='submit' value={"Add task"} />
            </form>
        </div>
    )


}

export default Form;