'use client';

import { Button, divider } from '@nextui-org/react';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
    return <Button onClick={() => signOut()}>Sign Out</Button>;
};

// ***************************
export default SignOutButton;
