import React from 'react';

import { IconProps as RadixIconProps } from '@radix-ui/react-icons/dist/types';
import { SunIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

import Button from './Button';

interface IconProps extends RadixIconProps {
    icon: 'linkedin-rounded' | 'github-rounded' | 'github-square' | 'sun';
    callback?: () => void;
}

const Icon = ({ icon, callback, ...props }: IconProps) => {
    return (
        <Button variant="link" onClick={callback}>
            {icon === 'linkedin-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-square' && <GitHubLogoIcon {...props} />}
            {icon === 'sun' && <SunIcon width={'200px'} {...props} />}
        </Button>
    );
};

export default Icon;
