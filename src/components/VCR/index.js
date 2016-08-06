import React, { PropTypes } from 'react';
import Icon from '../Icon';

import './index.scss';


const VCR = ({ position }) => {
  return (
    <div className={`redux-vcr-component ${position}`}>
      <div className="vcr-button eject-button">
        <Icon value="eject" color="#f4f7f8" size="12" />
      </div>
      <div className="casette-slot">
        Load Casette
      </div>

      <div className="vcr-screen">
        231e7e68-8b63-443d-958b-60d6c4b95cea
      </div>

      <div className="primary-action-buttons">
        <div className="vcr-button fast-rewind-button">
          <Icon value="fast_rewind" color="#f4f7f8" size="12" />
        </div>

        <div className="vcr-button play-button">
          <Icon value="play" color="#f4f7f8" size="24" />
        </div>

        <div className="vcr-button fast-forward-button">
          <Icon value="fast_forward" color="#f4f7f8" size="12" />
        </div>
      </div>

      <div className="decorative-outputs">
        <div className="decorative-output yellow" />
        <div className="decorative-output white" />
        <div className="decorative-output red" />
      </div>

      <div className="power-light" />

      <div className="vcr-foot vcr-foot-left" />
      <div className="vcr-foot vcr-foot-right" />
    </div>
  )
};

VCR.propTypes = {
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
};

VCR.defaultProps = {
  position: 'bottom-left',
};

export default VCR;
