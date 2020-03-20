import React, { Component } from 'react';
import WeeklySongListItem from './components/WeeklySongListItem';
import WeeklySongListItem2 from './components/WeeklySongListItem2';

class App extends Component {
  render() {
    return <div className="App">
      <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000} />
      <WeeklySongListItem2
        order="02"
        title="Em Có Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={2000} />
    </div>;
  }
}

export default App;