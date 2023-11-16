import { Button } from './ui/button'; // Assuming you have a Button component

export default function DotsButton({ keyProp, label }) {
    return (
        <Button
            key={keyProp} // Use the provided key prop
            variant="outline"
            disabled
            className="p-1 xs:h-8 xs:w-8 xs:rounded-md xs:text-xs sm:h-10 sm:w-10 lg:rounded-lg"
        >
            {label}
        </Button>
    );
}
