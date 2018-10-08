import React, {Component} from 'react';

class App extends Component {
  constructor (props, context){
    super(props,context);
    console.log('Props:',this.props);
  }

  render () {

    return (
      <div>This is an Application</div>
    )
  }
}

export default App;
