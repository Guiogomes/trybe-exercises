type Notification = {
  phone: string,
  email: string,
  console: string,
}
export default function progressNotification(
  message: string,
  notificationType: Notification
): void {
  switch (notificationType) {
    case notificationType.email:
      console.log('Email: ', message);
      break;
    case notificationType.phone:
      console.log('Phone: ', message);
      break;
    case notificationType.console:
      console.log('Console: ', message)
      break;
  }
};