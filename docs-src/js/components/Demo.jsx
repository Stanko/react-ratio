import React, { Component } from 'react';

// Loads our component from src for easier development
import Ratio from '../../../src/index';

export default class extends Component {
  render() {
    return (
      <div className='Content Content--ratios'>
        <div className='Ratios'>
          <Ratio className='Ratio--1' ratio={ 16 / 9 }>16 / 9</Ratio>
          <Ratio className='Ratio--2' ratio={ 1 }>1</Ratio>
          <Ratio className='Ratio--3' ratio={ 1 / 2 }>1 / 2</Ratio>
          <Ratio className='Ratio--4' ratio={ 3 / 4 }>3 / 4</Ratio>
          <Ratio className='Ratio--5' ratio={ 4 / 3 }>4 / 3</Ratio>
        </div>
      </div>
    );
  }
}
