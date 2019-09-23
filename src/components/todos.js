import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Todos(props) {
    console.log(props.todos);

    const isTodos = props.todos.length ? true : false;
    return (
        <div >
            <List >
                {isTodos ?
                    props.todos.map(todo =>
                        <ListItem>
                            <ListItemText
                                primary={todo.content}
                            />
                        </ListItem>
                    ) :
                    <h1>Noting Todo 🐸</h1>
                }
            </List>
        </div>
    )
}

export default Todos;