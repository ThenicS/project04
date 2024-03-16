'use client';

import { useSession } from 'next-auth/react';

const Profile = () => {
    const session = useSession();
    // console.log('Profile', session);
    if (session.data?.user) {
        // console.log('ThenicS', session);
        return (
            <div>
                From client: User is Signed in
                {JSON.stringify(session.data)}
            </div>
        );
    }
    console.log('ThenicS', session.status);

    return <div>From client: User is NOT Signed in</div>;
};

// ***************************
export default Profile;
