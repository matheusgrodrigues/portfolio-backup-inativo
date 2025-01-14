import React, { forwardRef, useImperativeHandle, useState } from 'react';

import styled, { useTheme } from 'styled-components';

import { screen } from '@/src/config/theme/theme';

import * as Dialog from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';

import Button from '@/src/components/atoms/Button';
import Icon from '@/src/components/atoms/Icon';

export interface ModalRef {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.ForwardRefRenderFunction<ModalRef, DialogProps> = ({ children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const theme = useTheme();

    useImperativeHandle(
        ref,
        () => ({
            setIsOpen,
        }),
        []
    );

    return (
        <Dialog.Root open={isOpen}>
            <Dialog.Portal>
                <Content>
                    <Header>
                        <Button variant="link" onClick={() => setIsOpen(false)}>
                            <Icon
                                icon="close"
                                width={32}
                                height={32}
                                color={`${theme.name === 'light' ? theme.ref.colors['gray900'] : theme.ref.colors['white']}`}
                            />
                        </Button>
                    </Header>

                    {children}
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const Content = styled(Dialog.Content)`
    background: ${({ theme }) => (theme.name === 'light' ? theme.ref.colors['white'] : theme.ref.colors['gray900'])};
    overflow-y: auto;

    box-shadow:
        hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

    transform: translate(-50%, -50%);
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    position: fixed;

    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;

    @keyframes contentShow {
        from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;

const Header = styled.header`
    justify-content: flex-end;
    display: flex;
    width: 100%;

    padding: ${(props) => props.theme.ref.spacing.spacing_32};

    ${({ theme }) => screen('md', `padding: ${theme.ref.spacing.spacing_24};`)}
`;

export default forwardRef(Modal);
