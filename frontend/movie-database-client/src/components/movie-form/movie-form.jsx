import React from 'react';

export default class MovieForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            year: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();        
        this.props.onMovieFormSubmit(this.state);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,            
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-horizontal col-6">
                <fieldset>
                    <legend className="text-center">Create Movie</legend>
                    <div className="form-group">
                        <label htmlFor="name" className="col-lg-2 control-label">Name</label>
                        <div className="col-lg-10">
                            <input type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="year" className="col-lg-3 control-label">Realease Year</label>
                        <div className="col-lg-10">
                            <input type="text" 
                                className="form-control" 
                                name="year"
                                value={this.state.year}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-10 col-lg-offset-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}