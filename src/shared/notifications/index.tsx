import { notification } from "antd";

export const renderNotificationSuccess = () => {
  notification.success({
    message: "Success",
    description: "Logged in successfully",
  });
};

export const renderNotificationError = ({
  message,
  description,
}: {
  message: string;
  description: string;
}) => {
  notification.error({
    message,
    description,
  });
};

export const renderNotificationWarning = (warning: unknown) => {
  const warningCustom = warning as { message: string };

  notification.warning({
    message: "Warning",
    description: warningCustom.message,
  });
};
