import React from "react";
import PropTypes from "prop-types";

module.exports = class extendedPasswordWidget extends React.Component {
    static propTypes = {// eslint-disable-line no-undef
        id: PropTypes.string.isRequired,
        registry: PropTypes.object,
        options: PropTypes.object,
        value: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            error: "",
            type: "password",
            className: "password-eye password-invisible"
        };
    }

    _onChange(data) {
        this.setState({
            value: data.target.value
        });
    }

    _onBlur() {
        if (this.props.options.confirm) {
            let confirmPasswordVal = this.state.value,
                passwordVal = this.props.value;
            if (confirmPasswordVal !== "" && confirmPasswordVal !== passwordVal) {
                this.setState({
                    error: "Two input password must be consistent."
                });
            } else {
                this.setState({
                    error: ""
                });
            }
        }
    }

    _onClick() {
        let passwordType = this.state.type;
        if (passwordType === "password") {
            this.setState({
                type: "text",
                className: "password-eye password-visible"
            });
        } else {
            this.setState({
                type: "password",
                className: "password-eye password-invisible"
            });

        }
    }

    render() {
        const {BaseInput} = this.props.registry.widgets;
        return (
            <div>
                <BaseInput type={this.state.type} {...this.props} onBlur={this._onBlur.bind(this)}/>
                {
                    this.props.options.visual &&
                    <div className={this.state.className} onClick={this._onClick.bind(this)}>

                    </div>
                }
                {
                    this.props.options.confirm && this.props.options.visual !== true &&
                    <div>
                        <label className="control-label">Confirm Password</label>
                        <input type="password" className="form-control confirm-password"
                               onBlur={this._onBlur.bind(this)} onChange={this._onChange.bind(this)}/>
                        <span className="text-danger confirm-password-error">{this.state.error}</span>
                    </div>
                }
            </div>
        );
    }
};
