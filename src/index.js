class GeneralInquiries extends React.Component {
        state = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            topic: '',
            textarea: ''
        }
    
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }
    
    render() {
        return (
            <div style={styles.app}>
            <h2 >General Inquiries</h2>
            <form style={styles.form}>
            <label>First Name:<br />
            <input type="text" defaultValue={this.state.firstName} style={styles.input} required />
            </label>
            <br /><br />
            <label>Last Name:<br />
            <input type="text" defaultValue={this.state.lastName} style={styles.input} onChange={this.handleChange} required />
            </label>
            <br /> <br />
            <label>Email:<br />
            <input type="email" defaultValue={this.state.email} style={styles.input} onChange={this.handleChange} required />
            </label>
            <br /><br />
            <label>Phone(<i>optional</i>):<br />
            <input type="tel" defaultValue={this.state.tel} style={styles.input} onChange={this.handleChange} />
            </label>
            <br /><br />
            <label>What is query regarding?<br />
            <select style={styles.input}>
            <option defaultValue disabled>--please select one--</option>
            <option value="food order">Food Order</option>
            <option value="reservation">Reservation</option>
            <option value="complaint">Complaint</option>
            <option value="job-opening">Job Opening</option>
            <option value="hours-of-operation">Hours of Operation</option>
            <option value="other">Other</option>
            </select>
            </label>
            <br /><br />
            <textarea rows="10" min="50"></textarea><br />
            <button type="submit" style={styles.submit}>Submit</button>
            </form>
            </div>
        );
    }
}

const styles = {
    app: {
        margin: "auto",
        width: "70%",
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        MsFexDirection: "column",
        flexDirection: "column",
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center"
    },
    input: {
        width: "100%"
},
    form: {
        width: "60%",
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        MsFexDirection: "column",
        flexDirection: "column",
        flexDirection: "column"
    },
    submit: {
        padding: "8px",
        cursor: "pointer"
    }
}
    
ReactDOM.render(<GeneralInquiries />, document.getElementById("general-inquiries"));