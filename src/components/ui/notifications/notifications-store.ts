import { nanoid } from 'nanoid';
import { atom, useRecoilState } from 'recoil';

export type Notification = {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message?: string;
};

// Atom to store the notifications array
export const appNotificationsState = atom<Notification[]>({
  key: 'appNotificationsState',
  default: [],
});

// Custom hook to manage notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useRecoilState(appNotificationsState);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const newNotification: Notification = {
      id: nanoid(),
      ...notification,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const dismissNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return {
    notifications,
    addNotification,
    dismissNotification,
  };
};
