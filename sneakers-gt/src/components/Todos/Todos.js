import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: true,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        case "ADD":
            return [...state, action.todo]
        case "REMOVE":
            return state.filter((item) => item.id !== action.todo.id)
        default:
            return state;
    }
};


export const Todos = () => {
    const [todos, dispatch] = React.useReducer(reducer, initialTodos)

    const formRef = React.useRef(null)

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    const editar = () => {
        alert('editar')
    }

    const eliminar = (todo) => {
        dispatch({ type: 'REMOVE', todo: todo })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let id = todos[todos.length - 1].id + 1
        dispatch({
            type: 'ADD', todo: {
                id: id,
                title: event.target.todoField.value,
                complete: false
            }
        })
        formRef.current.reset()
    }

    return (
        <div className='container border p-5 shadow p-3 mb-5 bg-white rounded'>

            <div className='row justify-content-center'>
                <div className='col-6 mb-5'>
                    <h3>Todo List</h3>
                </div>
                <div className='col-8'>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}>
                        {todos.map((todo) => {
                            return (
                                <ListItem
                                    key={todo.id}
                                    secondaryAction={
                                        <>
                                            <IconButton onClick={editar} edge="end" >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => eliminar(todo)} edge="end" >
                                                <DeleteIcon />
                                            </IconButton>
                                        </>

                                    }
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={() => handleComplete(todo)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={todo.complete}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': todo.id }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            style={todo.complete ? { textDecoration: 'line-through' } : {}}
                                            id={todo.id}
                                            primary={todo.title} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </div>
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className='row justify-content-center align-items-center mt-5'>
                    <div className='col-1'>

                    </div>
                    <div className='col-5'>
                        <TextField sx={{ width: '100%' }} name="todoField" label="Task" variant="filled" />
                    </div>
                    <div className='col-2'>
                        <Button variant="contained" type='submit'>
                            Add
                        </Button>
                    </div>
                </div>
            </form>
        </div>

    );
}