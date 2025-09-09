import Icon from "./assets/images/icon-success-check.svg"

export default function Message() {
    return(
        <>
            <div className="message-card">
                <div className="message-title">
                    <div className="image">
                        <img src={Icon} alt="success" />
                    </div>
                    <h1 className="title">
                        Message Sent!
                    </h1>
                </div>
                <p className="description">
                    Thanks for completing the form. We'll be in touch soon!
                </p>
            </div>
        </>
    );
}