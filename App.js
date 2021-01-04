import React from 'react';
import Handler from './components/handler'
import Home_animations from './components/home-animation';

class App extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
        }
      }

      performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            5500
          )
        );
      }

      async componentWillMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
          this.setState({ isLoading: false });
        }
      }

    render() {
        if(this.state.isLoading){
            return <Home_animations />
        }
        return(
            <Handler />
        );
    }
}

export default App;