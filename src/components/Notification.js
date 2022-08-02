const Notification = (props) => {
  const { noteStatus } = props;
  const renderNotification = () => {
    switch (noteStatus) {
      case "added":
        return "Person has been successfully added!";
      case "updated":
        return "Number has been successfully updated!";
      default:
        return "";
    }
  };

  const text = renderNotification();

  return <div>{text}</div>;
};

// Add switch statement that changes returned paragraph based on condition passed in

export default Notification;
