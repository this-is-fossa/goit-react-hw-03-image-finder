import { Component } from "react";
import { Overlay, ModalWindow, CloseModalBtn } from './Modal.styled'
import PropTypes from 'prop-types';


export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = () => {
    this.props.closeModal();
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {

    return (
      <Overlay
        onClick={this.handleOverlayClick}
        tabIndex={0}
      >
        <ModalWindow>{this.props.children}</ModalWindow>

        <CloseModalBtn
          type="button"
          onClick={this.handleClick}
        >
          X
        </CloseModalBtn>
      </Overlay>
    );
  }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
  };