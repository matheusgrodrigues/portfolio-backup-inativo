import React from 'react';

import { SunIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

import { IconProps as RadixIconProps } from '@radix-ui/react-icons/dist/types';

import { ButtonTransparent } from './Button';

type IconVariant = 'linkedin-rounded' | 'github-rounded' | 'github-square' | 'sun';

interface IconProps extends RadixIconProps {
    icon: IconVariant;
    callback?: () => void;
}

export const Icon = ({ icon, callback, ...props }: IconProps) => {
    return (
        <ButtonTransparent onClick={callback}>
            {icon === 'linkedin-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-rounded' && <LinkedInLogoIcon {...props} />}
            {icon === 'github-square' && <GitHubLogoIcon {...props} />}
            {icon === 'sun' && <SunIcon width={'200px'} {...props} />}
        </ButtonTransparent>
    );
};
