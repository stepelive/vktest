import React from 'react';
import PropTypes from 'prop-types';
import Icon32MoneyTransfer from '@vkontakte/icons/dist/32/money_transfer';
import {PopoutWrapper, getClassName, classNames} from '@vkontakte/vkui';
const baseClassName = getClassName('ScreenSpinner');

export default function ScreenSpinner ({ style, className, ...restProps }) {
  return (
    <PopoutWrapper className={classNames(baseClassName, className)} style={style}>
      <div className="ScreenSpinner__container">
        <Icon32MoneyTransfer size="large" {...restProps} />
      </div>
    </PopoutWrapper>
  );
}

ScreenSpinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ScreenSpinner.defaultProps = {};