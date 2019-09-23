import React from 'react';
import TextField from '@material-ui/core/TextField';

class AddForm extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="To-Do"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default AddForm;