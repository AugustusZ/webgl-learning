import * as React from 'react';
import { AppCanvas } from './libs/AppCanvas';

export default class App extends React.PureComponent {
  componentDidMount() {
    const app = new AppCanvas();
    app.test();
  }

  render() {
    return (
      <div
        id="canvas-container"
        style={{
          width: '100vw',
          height: '100vh'
        }}
      >
        <canvas id="canvas" />
      </div>
    );
  }
}
