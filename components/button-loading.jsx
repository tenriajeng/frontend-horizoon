import { ReloadIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';

export function ButtonLoading({ size, customClass }) {
    return (
        <Button
            size={size}
            disabled={true}
            className={`${customClass ? customClass : 'w-full'}`}
        >
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
        </Button>
    );
}
