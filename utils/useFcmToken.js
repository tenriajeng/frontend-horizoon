import { useState, useEffect } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from './firebase';
import { getFcmToken, setFcmToken } from './fcmTokenCookie';

const useFcmToken = () => {
    const [fcmToken, setFcmTokenState] = useState('');
    const [notificationPermissionStatus, setNotificationPermissionStatus] =
        useState('');

    const checkAndRetrieveToken = async () => {
        try {
            if (
                typeof window === 'undefined' ||
                !('serviceWorker' in navigator)
            ) {
                return;
            }

            const messaging = getMessaging(firebaseApp);

            const permission = await Notification.requestPermission();
            setNotificationPermissionStatus(permission);

            if (permission === 'granted') {
                const fcmTokenFromCookie = await getFcmToken();

                if (!fcmTokenFromCookie) {
                    const currentToken = await getToken(messaging, {
                        vapidKey: process.env.SERVER_KEY,
                    });

                    if (currentToken) {
                        setFcmTokenState(currentToken);
                        setFcmToken(currentToken);
                    } else {
                        console.log(
                            'No registration token available. Request permission to generate one.',
                        );
                    }
                } else {
                    setFcmTokenState(fcmTokenFromCookie);
                }
            }
        } catch (error) {
            console.error(
                'An error occurred while retrieving the token:',
                error,
            );
        }
    };

    useEffect(() => {
        checkAndRetrieveToken();
    }, []);

    return { fcmToken, notificationPermissionStatus };
};

export default useFcmToken;
