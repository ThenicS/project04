'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface IFormButtonProps {
    children: React.ReactNode;
}

const FormButton = ({ children }: IFormButtonProps) => {
    // https://react.dev/reference/react-dom/hooks/useFormStatus
    // const { pending, data, method, action } = useFormStatus();
    const { pending } = useFormStatus();

    return (
        <Button type='submit' isLoading={pending}>
            {children}
        </Button>
    );
};

// ***************************
export default FormButton;
