import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function Todos({ todos, deleteTodo }) {
    const isTodos = todos.length ? true : false;
    return (
        <div >
            <List >
                {isTodos ?
                    todos.map(todo =>
                        <div>
                            <ListItem>
                                <ListItemText
                                    id={todo.id}
                                    primary={todo.content}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => { deleteTodo(todo.id) }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                    :
                    <h1>Noting Todo 🐸</h1>
                }
            </List>
        </div>
    )
}

export default Todos;