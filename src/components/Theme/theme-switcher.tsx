'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Select, SelectItem, Dropdown, DropdownItem } from '@nextui-org/react';
import { MoonIcon, SunIcon, ServerIcon } from '@heroicons/react/24/outline';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Select
            className='w-1/2'
            size='md'
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
