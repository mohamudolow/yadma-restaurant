var _app, _form;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralInquiries = function (_React$Component) {
    _inherits(GeneralInquiries, _React$Component);

    function GeneralInquiries() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GeneralInquiries);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GeneralInquiries.__proto__ || Object.getPrototypeOf(GeneralInquiries)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            topic: '',
            textarea: ''
        }, _this.handleChange = function (input) {
            return function (e) {
                _this.setState(_defineProperty({}, input, e.target.value));
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GeneralInquiries, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: styles.app },
                React.createElement(
                    'h2',
                    null,
                    'General Inquiries'
                ),
                React.createElement(
                    'form',
                    { style: styles.form },
                    React.createElement(
                        'label',
                        null,
                        'First Name:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'text', defaultValue: this.state.firstName, style: styles.input, required: true })
                    ),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        null,
                        'Last Name:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'text', defaultValue: this.state.lastName, style: styles.input, onChange: this.handleChange, required: true })
                    ),
                    React.createElement('br', null),
                    ' ',
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        null,
                        'Email:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'email', defaultValue: this.state.email, style: styles.input, onChange: this.handleChange, required: true })
                    ),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        null,
                        'Phone(',
                        React.createElement(
                            'i',
                            null,
                            'optional'
                        ),
                        '):',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'tel', defaultValue: this.state.tel, style: styles.input, onChange: this.handleChange })
                    ),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        null,
                        'What is query regarding?',
                        React.createElement('br', null),
                        React.createElement(
                            'select',
                            { style: styles.input },
                            React.createElement(
                                'option',
                                { defaultValue: true, disabled: true },
                                '--please select one--'
                            ),
                            React.createElement(
                                'option',
                                { value: 'food order' },
                                'Food Order'
                            ),
                            React.createElement(
                                'option',
                                { value: 'reservation' },
                                'Reservation'
                            ),
                            React.createElement(
                                'option',
                                { value: 'complaint' },
                                'Complaint'
                            ),
                            React.createElement(
                                'option',
                                { value: 'job-opening' },
                                'Job Opening'
                            ),
                            React.createElement(
                                'option',
                                { value: 'hours-of-operation' },
                                'Hours of Operation'
                            ),
                            React.createElement(
                                'option',
                                { value: 'other' },
                                'Other'
                            )
                        )
                    ),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement('textarea', { rows: '10', min: '50' }),
                    React.createElement('br', null),
                    React.createElement(
                        'button',
                        { type: 'submit', style: styles.submit },
                        'Submit'
                    )
                )
            );
        }
    }]);

    return GeneralInquiries;
}(React.Component);

var styles = {
    app: (_app = {
        margin: "auto",
        width: "70%",
        display: "-webkit-box"
    }, _defineProperty(_app, 'display', "-ms-flexbox"), _defineProperty(_app, 'display', "flex"), _defineProperty(_app, 'WebkitBoxOrient', "vertical"), _defineProperty(_app, 'WebkitBoxDirection', "normal"), _defineProperty(_app, 'MsFexDirection', "column"), _defineProperty(_app, 'flexDirection', "column"), _defineProperty(_app, 'WebkitBoxAlign', "center"), _defineProperty(_app, 'MsFlexAlign', "center"), _defineProperty(_app, 'alignItems', "center"), _app),
    input: {
        width: "100%"
    },
    form: (_form = {
        width: "60%",
        display: "-webkit-box"
    }, _defineProperty(_form, 'display', "-ms-flexbox"), _defineProperty(_form, 'display', "flex"), _defineProperty(_form, 'WebkitBoxOrient', "vertical"), _defineProperty(_form, 'WebkitBoxDirection', "normal"), _defineProperty(_form, 'MsFexDirection', "column"), _defineProperty(_form, 'flexDirection', "column"), _defineProperty(_form, 'flexDirection', "column"), _form),
    submit: {
        padding: "8px",
        cursor: "pointer"
    }
};

ReactDOM.render(React.createElement(GeneralInquiries, null), document.getElementById("general-inquiries"));