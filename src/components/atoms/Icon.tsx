import React from 'react';

import { IconProps as RadixIconProps } from '@radix-ui/react-icons/dist/types';

import {
    LinkedInLogoIcon,
    CheckCircledIcon,
    CrossCircledIcon,
    InfoCircledIcon,
    GitHubLogoIcon,
    Cross2Icon,
    CheckIcon,
    SunIcon,
} from '@radix-ui/react-icons';

interface IconProps extends RadixIconProps {
    icon:
        | 'check-circled-icon'
        | 'cross-circled-icon'
        | 'info-circled-icon'
        | 'linkedin-rounded'
        | 'github-rounded'
        | 'github-square'
        | 'check'
        | 'close'
        | 'sun';
}

const Icon = ({ icon, ...props }: IconProps) => {
    return (
        <>
            {icon === 'check-circled-icon' && <CheckCircledIcon {...props} />}
            {icon === 'cross-circled-icon' && <CrossCircledIcon {...props} />}
            {icon === 'info-circled-icon' && <InfoCircledIcon {...props} />}
            {icon === 'linkedin-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-square' && <GitHubLogoIcon {...props} />}
            {icon === 'check' && <CheckIcon {...props} />}
            {icon === 'close' && <Cross2Icon {...props} />}
            {icon === 'sun' && <SunIcon {...props} />}
        </>
    );
};

export default Icon;
