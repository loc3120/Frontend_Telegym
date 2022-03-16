import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesheets/styleListBox.css';

class SelectCustom extends Component {
  state = {
    defaultType: '',
    defaultTitle: '',
    isOpen: false
  };

  handleSelect = (sportType, sportTitle) => {
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      defaultType: sportType,
      defaultTitle: sportTitle,
    }));
  };

  handleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  handleOutsideClick = () => {
    this.handleSelect();
  };

  render() {
    const { data, placeholder } = this.props;
    const { defaultType, defaultTitle } = this.state;

    return (
      <div className='option-custom'>
        <div className='select-input' onClick={this.handleOpen}>
          <FontAwesomeIcon className='select-icon' icon={defaultType} />
          <span className={`${placeholder && defaultTitle === '' ? 'select-title placeholder' : 'select-title'}`}>{defaultTitle === '' ? placeholder : defaultTitle}</span>
        </div>

        {this.state.isOpen ?
          <div className='select-list'>
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => this.handleSelect(data[index].sportType, data[index].sportTitle)}
                className='select-item'
              >
                <FontAwesomeIcon className='select-icon' icon={item.sportType} />
                <span className='select-title'>{item.sportTitle}</span>
              </div>
            ))}
          </div>
          : ''
        }
      </div>
    );
  }
}

export default SelectCustom;