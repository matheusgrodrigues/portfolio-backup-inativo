import React from 'react';

import { IconProps as RadixIconProps } from '@radix-ui/react-icons/dist/types';
import { SunIcon, LinkedInLogoIcon, GitHubLogoIcon, Cross2Icon } from '@radix-ui/react-icons';

interface IconProps extends RadixIconProps {
    icon: 'linkedin-rounded' | 'github-rounded' | 'github-square' | 'close' | 'sun';
}

const Icon = ({ icon, ...props }: IconProps) => {
    return (
        <>
            {icon === 'linkedin-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-square' && <GitHubLogoIcon {...props} />}
            {icon === 'close' && <Cross2Icon {...props} />}
            {icon === 'sun' && <SunIcon {...props} />}
        </>
    );
};

export default Icon;
