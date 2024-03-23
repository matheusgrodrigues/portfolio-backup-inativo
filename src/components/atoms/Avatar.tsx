import React from 'react';

import { styled } from 'styled-components';

import * as RadixAvatar from '@radix-ui/react-avatar';

type AvatarRootVariant = 'md';

interface AvatarRootProps extends RadixAvatar.AvatarProps {
    'data-testid'?: string;
    $variant?: AvatarRootVariant;
}

const AvatarRoot = styled(RadixAvatar.Root).attrs<AvatarRootProps>(() => ({
    as: 'span',
    'data-testid': 'a-avatar',
}))`
    background-color: ${({ theme }) => theme.ref.colors['color_gray500']};
    justify-content: center;
    vertical-align: middle;
    border-radius: 100%;
    align-items: center;
    user-select: none;
    border: 4px solid ${({ theme }) => theme.ref.colors['color_white']};
    overflow: hidden;
    display: inline-flex;
    height: ${({ $variant }) => ($variant === 'md' ? '92px' : '45px')};
    width: ${({ $variant }) => ($variant === 'md' ? '92px' : '45px')};
`;

interface AvatarImageProps extends RadixAvatar.AvatarImageProps {
    'data-testid'?: string;
}

const AvatarImage = styled(RadixAvatar.Image).attrs<AvatarImageProps>(() => ({
    as: 'img',
    'data-testid': 'a-avatar-image',
}))`
    border-radius: inherit;
    object-fit: cover;
    overflow: hidden;
    height: 100%;
    width: 100%;
`;

export interface AvatarProps extends RadixAvatar.AvatarProps {
    $variant?: AvatarRootVariant;
    src: string;
    alt?: string;
}

export function Avatar({ ...props }: AvatarProps) {
    const { src, alt } = props;

    return (
        <AvatarRoot {...props}>
            <AvatarImage src={src} alt={alt} />
        </AvatarRoot>
    );
}
