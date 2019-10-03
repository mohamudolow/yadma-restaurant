var _app, _form, _response;

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
            response: false
        }, _this.handleChange = function (e) {
            _this.setState({ firstName: e.target.value });
        }, _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.setState({ response: true });
        }, _this.refreshPage = function () {
            window.location.reload();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GeneralInquiries, [{
        key: "render",
        value: function render() {
            var firstName = this.state.firstName;

            return this.state.response === false ? React.createElement(
                "div",
                { style: styles.app },
                React.createElement(
                    "h2",
                    null,
                    "General Inquiries"
                ),
                React.createElement(
                    "form",
                    { style: styles.form, onSubmit: this.handleSubmit },
                    React.createElement(
                        "label",
                        null,
                        "First Name:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", style: styles.input, onChange: this.handleChange, required: true })
                    ),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        null,
                        "Last Name:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", style: styles.input, required: true })
                    ),
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        null,
                        "Email:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "email", style: styles.input, required: true })
                    ),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        null,
                        "Phone(",
                        React.createElement(
                            "i",
                            null,
                            "optional"
                        ),
                        "):",
                        React.createElement("br", null),
                        React.createElement("input", { type: "tel", style: styles.input })
                    ),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        null,
                        "What is query regarding?",
                        React.createElement("br", null),
                        React.createElement(
                            "select",
                            { style: styles.input },
                            React.createElement(
                                "option",
                                { disabled: true },
                                "--please select one--"
                            ),
                            React.createElement(
                                "option",
                                { value: "food order" },
                                "Food Order"
                            ),
                            React.createElement(
                                "option",
                                { value: "reservation" },
                                "Reservation"
                            ),
                            React.createElement(
                                "option",
                                { value: "complaint" },
                                "Complaint"
                            ),
                            React.createElement(
                                "option",
                                { value: "job-opening" },
                                "Job Opening"
                            ),
                            React.createElement(
                                "option",
                                { value: "hours-of-operation" },
                                "Hours of Operation"
                            ),
                            React.createElement(
                                "option",
                                { value: "other" },
                                "Other"
                            )
                        )
                    ),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("textarea", { rows: "10", minLength: "50" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { type: "submit", style: styles.submit },
                        "Submit"
                    )
                )
            ) : React.createElement(
                "div",
                { style: styles.response },
                React.createElement(
                    "h4",
                    null,
                    "Thanks for reaching out ",
                    firstName,
                    "!"
                ),
                React.createElement(
                    "p",
                    null,
                    "We will get back to you as soon possible."
                ),
                React.createElement(
                    "button",
                    { type: "button", style: styles.responseBtn, onClick: this.refreshPage },
                    "Go Back"
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
    }, _defineProperty(_app, "display", "-ms-flexbox"), _defineProperty(_app, "display", "flex"), _defineProperty(_app, "WebkitBoxOrient", "vertical"), _defineProperty(_app, "WebkitBoxDirection", "normal"), _defineProperty(_app, "MsFexDirection", "column"), _defineProperty(_app, "flexDirection", "column"), _defineProperty(_app, "WebkitBoxAlign", "center"), _defineProperty(_app, "MsFlexAlign", "center"), _defineProperty(_app, "alignItems", "center"), _app),
    input: {
        width: "100%"
    },
    form: (_form = {
        width: "60%",
        display: "-webkit-box"
    }, _defineProperty(_form, "display", "-ms-flexbox"), _defineProperty(_form, "display", "flex"), _defineProperty(_form, "WebkitBoxOrient", "vertical"), _defineProperty(_form, "WebkitBoxDirection", "normal"), _defineProperty(_form, "MsFexDirection", "column"), _defineProperty(_form, "flexDirection", "column"), _defineProperty(_form, "flexDirection", "column"), _form),
    submit: {
        padding: "8px",
        cursor: "pointer"
    },
    response: (_response = {
        backgroundColor: "gray",
        color: "#fff",
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "-webkit-box"
    }, _defineProperty(_response, "display", "-ms-flexbox"), _defineProperty(_response, "display", "flex"), _defineProperty(_response, "WebkitBoxOrient", "vertical"), _defineProperty(_response, "WebkitBoxDirection", "normal"), _defineProperty(_response, "MsFexDirection", "column"), _defineProperty(_response, "flexDirection", "column"), _defineProperty(_response, "WebkitBoxAlign", "center"), _defineProperty(_response, "MsFlexAlign", "center"), _defineProperty(_response, "alignItems", "center"), _defineProperty(_response, "WebkitBoxPack", "center"), _defineProperty(_response, "MsFlexPack", "center"), _defineProperty(_response, "justifyContent", "center"), _response),
    responseBtn: {
        backgroundColor: "#3c6382",
        color: "#fff",
        padding: "10px 50px",
        border: "none",
        borderRadius: "10px"
    }
};

ReactDOM.render(React.createElement(GeneralInquiries, null), document.getElementById("general-inquiries"));