'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
    const session = useSession();
    console.log(session.data);
    if (session.data?.user) {
        return (
            <div>
                From client: User is Signed in
                {JSON.stringify(session.data)}
            </div>
        );
    }

    return <div>From client: User is NOT Signed in</div>;
}
