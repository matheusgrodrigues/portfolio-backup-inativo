import React from 'react';

import { IconProps as RadixIconProps } from '@radix-ui/react-icons/dist/types';
import { SunIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

interface IconProps extends RadixIconProps {
    icon: 'linkedin-rounded' | 'github-rounded' | 'github-square' | 'sun';
    callback?: () => void;
}

const Icon = ({ icon, ...props }: IconProps) => {
    return (
        <>
            {icon === 'linkedin-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-square' && <GitHubLogoIcon {...props} />}
            {icon === 'sun' && <SunIcon width={'200px'} {...props} />}
        </>
    );
};

export default Icon;
