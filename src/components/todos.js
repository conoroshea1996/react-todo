import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Todos({ todos, deleteTodo }) {
    const isTodos = todos.length ? true : false;
    return (
        <div >
            <List >
                {isTodos ?
                    todos.map(todo =>
                        <ListItem>
                            <ListItemText
                                id={todo.id}
                                primary={todo.content}
                            />
                        </ListItem>
                    )
                    :
                    <h1>Noting Todo 🐸</h1>
                }
            </List>
        </div>
    )
}

export default Todos;