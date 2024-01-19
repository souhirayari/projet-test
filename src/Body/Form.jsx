
import "./FormStyle.css"
export default function Form() {
    return (
        <div className="contentForm">
            <div className="form">
                <div className="title">Contact Us</div>
                <div className="subtitle">Let's create opportunity</div>
                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label for="firstname" className="placeholder"> First Name</label>
                </div>

                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label for="email" className="placeholder">Email</label>
                </div>
                <div className="input-container ic2">
                    <input id="lastname" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label for="lastname" className="placeholder">Message</label>
                </div>
               
                <button type="text" className="submit">Send the message </button>
            </div>
        </div>
    )
}