import React from 'react';
import createReactClass from 'create-react-class';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import {Collapse} from '../..';


export const InitiallyOpened = createReactClass({
  getInitialState() {
    return {isOpened: true};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened} = this.state;
    const height = 100;

    return (
      <div>
        <div className="config">
          <label className="label">
            Opened:
            <input className="input"
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>
        </div>
        <Collapse isOpened={isOpened}>
          <div style={{height}} className="blob" />
        </Collapse>
      </div>
    );
  }
});
