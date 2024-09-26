import axios from 'axios';
import React from 'react';

class App extends React.Component {
    state = { details: [], loading: true }

    componentDidMount() {
        axios.get('http://localhost:8000/react-items/') // URL located according to the Django Backend
            .then(res => {
                this.setState({
                    details: res.data,
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
                this.setState({ loading: false }); // Error catching
            });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;  // Show loading state
        }

        return (
            <div>
                <h1>Data Generated from Django</h1>
                <hr/>
                {this.state.details.map(output => (
                    <div key={output.username}>
                        {/*<body>Firstname and Lastname and Username</body>*/}
                        <h2>{output.firstname} {output.lastname} {output.username}</h2>
                        <hr/>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
