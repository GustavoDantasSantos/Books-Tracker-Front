import React from 'react';
import { ToastNotification } from '@carbon/react';

type ToastProps = {
    title: string,
    kind: string
}

export const Toast: React.FC<ToastProps> = ({ title, kind }: ToastProps) => {
    return (
        <ToastNotification
            role="status"
            caption="00:00:00 AM"
            timeout={0}
            title={title}
            kind={kind}
        />
    );
};
