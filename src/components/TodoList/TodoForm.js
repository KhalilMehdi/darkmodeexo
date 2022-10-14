import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid';

function TodoForm({todo, setTodo, todoList, setTodoList}) {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id: nanoid()}]);
        setTodo("");
    }

    return(
        <div className="todoForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control value={todo} onChange={handleChange} type="text"/>
                    <Button variant="primary" type="submit">Add</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default TodoForm;