import React, { forwardRef, useImperativeHandle, useState } from 'react';

import styled from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';

import Button from '@/src/components/atoms/Button';
import Icon from '@/src/components/atoms/Icon';

export interface ModalRef {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Content = styled(Dialog.Content)`
    background-color: ${({ theme }) => theme.ref.colors['color_gray900']};
    box-shadow:
        hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    transform: translate(-50%, -50%);
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    position: fixed;
    padding: 25px;
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
`;

const Modal: React.ForwardRefRenderFunction<ModalRef, DialogProps> = ({ children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

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
                            <Icon icon="close" width={32} height={32} color="white" />
                        </Button>
                    </Header>

                    {children}
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default forwardRef(Modal);
