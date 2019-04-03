import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <footer className="text-center">
      <p>
        2019 IeltsOnlineTests. All Rights Reserved <br />
        IELTS là một thương hiệu đã được đăng ký của Đại học Cambrigde, Hội
        đồng Anh và IDP Education Australia. Trang web này và chủ sở hữu
        trang web không được trả tiền, chấp thuận hay xác nhận bởi Hội Đồng
        Khảo Thí Tiếng Anh Trường Đại Học Cambridge, Hội đồng Anh và IDP
        Education Australia
      </p>
    </footer>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
