'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useToast } from './ui/use-toast';
import useFcmToken from '@/utils/useFcmToken';
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from '@/utils/firebase';

export default function NumberNotification() {
    const { fcmToken, notificationPermissionStatus } = useFcmToken();
    const { toast } = useToast();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handlePushNotification = (payload) => {
            setCount((prev) => prev + 1);
            toast({
                title: payload.notification.title,
                description: payload.notification.body,
                action: payload.notification.image && (
                    <Image
                        alt={payload.notification.image}
                        src={payload.notification.image}
                        width={60}
                        height={60}
                        className="aspect-square object-contain"
                    />
                ),
            });
        };

        const subscribeToPushNotifications = () => {
            const messaging = getMessaging(firebaseApp);
            const unsubscribe = onMessage(messaging, handlePushNotification);
            return unsubscribe;
        };

        const handleTokenChange = () => {
            fcmToken && console.log('FCM token:', fcmToken);
        };

        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            const unsubscribeFromPush = subscribeToPushNotifications();
            handleTokenChange();

            return () => {
                unsubscribeFromPush();
            };
        }
    }, [fcmToken, toast]);

    return (
        <>
            {count > 0 && (
                <span className="absolute right-0 top-0 -mr-1 -mt-2 flex h-4 items-center justify-center rounded-full border bg-white px-1 text-xs font-bold text-slate-900">
                    {count}
                </span>
            )}
        </>
    );
}
