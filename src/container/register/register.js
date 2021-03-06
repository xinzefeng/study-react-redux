import React from 'react';
import {Redirect} from 'react-router-dom';
import Logo from '../../component/logo/logo';
import {List, InputItem, WhiteSpace, Button, WingBlank, Radio} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from "../../redux/user.redux";
import '../../css/register.css';

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: '',
            type: 'genius'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    handleRegister() {
        console.log(this.state);
        this.props.register(this.state);
        console.log(this.props);
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo></Logo>
                <List>
                    {this.props.msg ? <span className='error-msg'>{this.props.msg}</span> : null}
                    <WingBlank>
                        <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' onChange={v => this.handleChange('repeatPwd', v)}>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type == 'boss'}
                                   onChange={() => this.handleChange('type', 'boss')}>
                            boss
                        </RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type == 'genius'}
                                   onChange={() => this.handleChange('type', 'genius')}>
                            牛人
                        </RadioItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleRegister}>注册</Button>
                    </WingBlank>
                </List>
            </div>
        )
    }
}

export default Register