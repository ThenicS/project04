'use client';

import { Button, divider } from '@nextui-org/react';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
    return <Button onClick={() => signOut()}>Sign Out</Button>;
}
