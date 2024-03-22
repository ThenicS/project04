'use client';

// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';
// import { Button, Switch } from '@nextui-org/react';
// import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

// export function ThemeSwitcher() {
//     const [mounted, setMounted] = useState(false);
//     const { theme, setTheme } = useTheme();

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     if (!mounted) return null;

//     return (
//         // <div>
//         //     <Button onClick={() => setTheme('light')}>Light Mode</Button>
//         //     <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
//         // </div>
//         <Switch
//             defaultSelected
//             size='lg'
//             color='secondary'
//             thumbIcon={({ isSelected, className }) =>
//                 isSelected ? (
//                     <SunIcon
//                         className={className}
//                         onValueChange={setTheme('light')}
//                     />
//                 ) : (
//                     <MoonIcon
//                         className={className}
//                         onChange={setTheme('dark')}
//                     />
//                 )
//             }></Switch>
//     );
// }

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
        // <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        //     <option value='system'>System</option>
        //     <option value='dark'>Dark</option>
        //     <option value='light'>Light</option>
        // </select>
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
