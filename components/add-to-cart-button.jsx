'use client';

import { Button } from './ui/button';
import { DialogLogin } from './dialog-login';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const AddToCartButton = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return isAuthenticated ? (
        <Button variant="outline" size="sm" className="xs:hidden md:flex">
            <FaPlus className="mr-1 h-3 w-3" /> Cart
        </Button>
    ) : (
        <DialogLogin>
            <Button variant="outline" size="sm" className="xs:hidden md:flex">
                <FaPlus className="mr-1 h-3 w-3" /> Cart
            </Button>
        </DialogLogin>
    );
};
export default AddToCartButton;
