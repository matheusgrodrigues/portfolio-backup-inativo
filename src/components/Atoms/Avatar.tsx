import { styled } from 'styled-components'

import * as RadixAvatar from '@radix-ui/react-avatar'

type AvatarRootVariant = 'md'

interface AvatarRoot extends RadixAvatar.AvatarProps {
    'data-testid'?: string
    $variant?: AvatarRootVariant
}

const AvatarRoot = styled(RadixAvatar.Root).attrs<AvatarRoot>((props) => ({
    as: 'span',
    'data-testid': 'a-avatar',
}))`
    background-color: ${({ theme }) => theme.ref.colors.color_gray500};
    justify-content: center;
    vertical-align: middle;
    border-radius: 100%;
    align-items: center;
    user-select: none;
    box-shadow:
        0px 4px 6px -2px rgba(16, 24, 40, 0.03),
        0px 12px 16px -4px rgba(16, 24, 40, 0.08);
    overflow: hidden;
    display: inline-flex;
    height: ${({ $variant }) => ($variant === 'md' ? '92px' : '45px')};
    width: ${({ $variant }) => ($variant === 'md' ? '92px' : '45px')};
`

interface AvatarImageProps extends RadixAvatar.AvatarImageProps {
    'data-testid'?: string
}

const AvatarImage = styled(RadixAvatar.Image).attrs<AvatarImageProps>((props) => ({
    as: 'img',
    'data-testid': 'a-avatar-image',
}))`
    border-radius: inherit;
    object-fit: cover;
    overflow: hidden;
    height: 100%;
    width: 100%;
`

export interface AvatarProps extends RadixAvatar.AvatarProps {
    src: string
    alt?: string
    $variant?: AvatarRootVariant
}

export function Avatar({ ...props }: AvatarProps) {
    const { src, alt } = props

    return (
        <AvatarRoot {...props}>
            <AvatarImage src={src} alt={alt} />
        </AvatarRoot>
    )
}
