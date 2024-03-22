'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Select, SelectItem } from '@nextui-org/react';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client,
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Select
            value={theme}
            defaultSelectedKeys={['system']}
            aria-label='Select theme'
            onChange={(e) => setTheme(e.target.value)}>
            <SelectItem key='system' value='system'>
                System
            </SelectItem>
            <SelectItem key='dark' value='dark'>
                Dark
            </SelectItem>
            <SelectItem key='light' value='light'>
                Light
            </SelectItem>
        </Select>
    );
};

export default ThemeSwitcher;
