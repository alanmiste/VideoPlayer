// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Screen from './components/videoScreen'
import Header from './components/header'
import Button from './components/button';
import { FiPlay } from 'react-icons/fi';
import { FaStop } from 'react-icons/fa';
import { FiPause } from 'react-icons/fi';
import { FiFastForward } from 'react-icons/fi';
import { FiRewind } from 'react-icons/fi';

class App extends Component {

  state = {
    pp: false
  }

  playPause= () => {
    const hh = this.state.pp;
    this.setState({pp: !hh })
    
  }


  render() {
    return (
      <div>
        <Header classText='header' />
        <Screen classText='screen' />
        <div className='main'>
          <Button classText='controlBtn' fontIcon={<FaStop />} />
          {
            !this.state.pp ? <Button classText='controlBtn' cb={this.playPause} fontIcon={<FiPlay />} />
              :
              <Button classText='controlBtn' cb={this.playPause} fontIcon={<FiPause />} />
          }
          <Button classText='controlBtn' fontIcon={<FiRewind />} />
          <Button classText='controlBtn' fontIcon={<FiFastForward />} />
        </div>
      </div>

    );
  }
}


export default App;
