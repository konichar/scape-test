import React, { setState } from 'react';


class Mono extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            blogurl: '',
            checker: ''
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
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <div>
                    <label htmlFor="">Email:
                        <input type="email" name="email" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <div>

                    <label htmlFor="">Phone:
                        <input type="text" name="phone" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <div>

                    <label htmlFor="">Blogurl:
                        <input type="text" name="url" onChange={this.handleChange}/>
                    </label>
                    </div>
                    <button type='submit' value='submit'>Verify</button>
                </form>
            <p>{this.state.checker}</p>
            </div>
        );
    }
    }

    export default Mono;