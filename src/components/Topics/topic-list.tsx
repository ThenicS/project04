import Link from 'next/link';

import { Chip } from '@nextui-org/react';
import { db } from '@/lib/db';

import paths from '@/paths/index';

import type { Topic } from '@prisma/client';

const TopicList = async () => {
    const topics = await db.topic.findMany();

    const renderTopics = topics.map((topic) => {
        return (
            <div key={topic.id}>
                <Link href={paths.topicsPage(topic.slug)}>
                    <Chip>{topic.slug}</Chip>
                </Link>
            </div>
        );
    });

    return (
        <div className='flex flex-row flex-wrap gap-2 bg-lime-100'>
            {renderTopics}
        </div>
    );
};

// ***************************
export default TopicList;
