import * as React from 'react';
import { AppCanvas } from './libs/AppCanvas/AppCanvas';

export default class App extends React.PureComponent {
  componentDidMount() {
    const app = new AppCanvas();
    app.start();
  }

  render() {
    return (
      <div
        id="canvas-container"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'silver'
        }}
      >
        <canvas
          id="canvas"
          style={{
            backgroundColor: 'white'
          }}
        />
      </div>
    );
  }
}
