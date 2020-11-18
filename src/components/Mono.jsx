import React, { setState } from 'react';

class Mono extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            blogurl: '',
            checker: 'Form is Incomplete!',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.isFormValid(true);
        let {
            blogurl,
            email,
            name,
            phone,
            url,
        } = this.state;

        if ( (name.length > 3) && (name.length < 30) && ( email !== '') ){
            console.log("fjlsd");
            this.setState({
                checker: "Form is Complete"
            });
        } else {
            this.setState({
                checker: "Form is Incomplete"
            });
        }
    }

    render(){
        return(
            <div>
                <h2>
                    This is a boy
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="">Name:
                        <input type="text" name="name" className="name" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <div>
                    <label htmlFor="">Email:
                        <input type="email" name="email" className="email" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <div>
                    <label htmlFor="">Phone:
                        <input type="text" name="phone" className="phone" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <div>
                    <label htmlFor="">Blogurl:
                        <input type="text" name="url" className="url" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <button type='submit' className="button" value='submit'>Verify</button>
                </form>
            <p className="message">{this.state.checker}</p>
            </div>
        );
        }
    }

    export default Mono;