import React, { Component } from 'react'
import { Menu, Dropdown, Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost,goba } from '../../actions/postActions';

class One extends Component {
    clickbtn=(val)=>{
      // 触发action
      console.log('触发redux')
      this.props.createPost(val);
    };
    TWOclickbtn=(val)=>{
      // 触发action
      console.log('触发redux')
      this.props.goba(val);
    };
    render() {
        const menu = (
            <Menu>
              <Menu.Item onClick={()=>this.clickbtn('111')}>
                <span>到西安</span>
              </Menu.Item>
              <Menu.Item onClick={()=>this.TWOclickbtn('222')}>
                <span>回原点</span>
              </Menu.Item>
              <Menu.Item>
                <span>333</span>
              </Menu.Item>
            </Menu>
        );
        return (
            <div>
                 <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>bottomLeft</Button>
                </Dropdown>
            </div>
        )
    }
}


One.propTypes = {
  createPost: PropTypes.func.isRequired,
  goba: PropTypes.func.isRequired,
}

export default connect(null, { createPost,goba })(One); 
