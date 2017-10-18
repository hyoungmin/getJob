import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';
import RandomNumber from './RandomNumber';
import _ from 'underscore';
class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: _.random(0,100)
      }
      this.updateValue = this.updateValue.bind(this);
    }
    updateValue(randomValue) {
      this.setState({
        value: randomValue
      });
    }
    render(){
        return  (
            <div>
                <Header title={this.props.headerTitle}/>
                <Content title={this.props.contentTitle}
                        body = {this.props.contentBody}/>
                <RandomNumber number={this.state.value}
                              onUpdate={this.updateValue}/>
            </div>
        );
    }
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'default contentTitle',
  contentBody: 'default contentBody'
}
export default App;
