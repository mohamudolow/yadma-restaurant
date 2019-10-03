class GeneralInquiries extends React.Component {
        state = {
            firstName: '',
            response: false
        }
    
    handleChange = e => {
        this.setState({firstName: e.target.value});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({response: true});
    }
    
    refreshPage = () => {
        window.location.reload();
    }
    
    render() {
        const {firstName} = this.state;
        return (
            (this.state.response === false) ? (
            <div style={styles.app}>
                <h2 >General Inquiries</h2>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <label>First Name:<br />
                        <input type="text" style={styles.input} onChange={this.handleChange} required />
                    </label>
                    <br /><br />
                    <label>Last Name:<br />
                        <input type="text" style={styles.input} required />
                    </label>
                    <br /> <br />
                    <label>Email:<br />
                        <input type="email" style={styles.input} required />
                    </label>
                    <br /><br />
                    <label>Phone(<i>optional</i>):<br />
                        <input type="tel" style={styles.input} />
                    </label>
                    <br /><br />
                    <label>What is query regarding?<br />
                        <select style={styles.input}>
                            <option disabled>--please select one--</option>
                            <option value="food order">Food Order</option>
                            <option value="reservation">Reservation</option>
                            <option value="complaint">Complaint</option>
                            <option value="job-opening">Job Opening</option>
                            <option value="hours-of-operation">Hours of Operation</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <br /><br />
                    <textarea rows="10" minLength="50"></textarea><br />
                    <button type="submit" style={styles.submit}>Submit</button>
                </form>
            </div>
                ) : (
                <div style={styles.response}>
                    <h4>Thanks for reaching out {firstName}!</h4>
                    <p>We will get back to you as soon possible.</p>
                    <button type="button" style={styles.responseBtn} onClick={this.refreshPage}>Go Back</button>
                </div>
            )
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
    },
    response: {
        backgroundColor: "gray",
        color: "#fff",
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        MsFexDirection: "column",
        flexDirection: "column",
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        MsFlexPack: "center",
        justifyContent: "center"
},
    responseBtn: {
        backgroundColor: "#3c6382",
        color: "#fff",
        padding: "10px 50px",
        border: "none",
        borderRadius: "10px"
    }
}
    
ReactDOM.render(<GeneralInquiries />, document.getElementById("general-inquiries"));