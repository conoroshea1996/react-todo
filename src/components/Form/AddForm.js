import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddForm extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        }
        )
    }
    render() {
        return (
            <div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="outlined-name"
                        label="To-Do"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                    <Button variant="outlined" color="primary" fullWidth type='submit'>
                        Add To-Do
                    </Button>
                </form>
            </div>
        );
    }
}

export default AddForm;