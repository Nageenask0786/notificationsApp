const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, messageText } = props;
  const notificationContainer = `notificationcontainer ${className}`;
  return (
    <div className={notificationContainer}>
      <img className="icon" src={iconUrl} />
      <p className="msg">{messageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className = "card">
    <Notification
      className="bg1"
      iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      messageText="Information Message"
    />
    </div>
    <Notification
      className="bg2"
      iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      messageText="Success Message"
    />
    <Notification
      className="bg3"
      iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      messageText="Warning Message"
    />
    <Notification
      className="bg4"
      iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      messageText="Failure Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
