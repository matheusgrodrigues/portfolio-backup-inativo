import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

import * as RadixToast from '@radix-ui/react-toast';

import { lineHeight } from '@/src/config/theme/theme';

const ToastRoot = styled(RadixToast.Root)`
    background-color: ${({ theme }) => theme.ref.colors['white']};
    border-radius: ${({ theme }) => theme.ref.borderRadius['radius_6']};
    box-shadow:
        hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    padding: ${({ theme }) => theme.ref.spacing['spacing_16']};
    display: flex;
    flex-direction: column;

    &[data-state='open'] {
        animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &[data-state='closed'] {
        animation: swipeOut 100ms ease-out;
    }

    &[data-swipe='move'] {
        transform: translateX(${({ theme }) => theme.ref.spacing['spacing_32']});
    }

    &[data-swipe='cancel'] {
        transform: translateX(0);
        transition: transform 200ms ease-out;
    }

    &[data-swipe='end'] {
        animation: swipeOut 100ms ease-out;
    }

    @keyframes hide {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(calc(100% + ${({ theme }) => theme.ref.spacing['spacing_12']}));
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes swipeOut {
        from {
            transform: translateX(-${({ theme }) => theme.ref.spacing['spacing_32']});
        }
        to {
            transform: translateX(calc(100% + ${({ theme }) => theme.ref.spacing['spacing_32']}));
        }
    }
`;

const ToastTitle = styled(RadixToast.Title)`
    margin-bottom: ${({ theme }) => theme.ref.spacing['spacing_8']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['semibold']};
    color: ${({ theme }) => theme.ref.colors['gray900']};
    font-size: ${({ theme }) => theme.ref.fontSize['md']};
`;

const ToastDescription = styled(RadixToast.Description)`
    margin: 0;

    color: ${({ theme }) => theme.ref.colors['gray900']};
    font-size: ${({ theme }) => theme.ref.fontSize['sm']};
    line-height: ${({ theme }) => lineHeight(`${theme.ref.fontSize['sm']}`)};
`;

const ToastViewport = styled(RadixToast.ToastViewport)`
    top: ${({ theme }) => theme.ref.spacing['spacing_32']};
    right: ${({ theme }) => theme.ref.spacing['spacing_12']};

    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 480px;
    max-width: 100vw;
    margin: 0;
    list-style: none;
    z-index: 2147483647;
    outline: none;
`;

export interface ToastRef {
    show: (content: { title: string; description: string }) => void;
}

type ToastContent = {
    title: string;
    description: string;
};

const Toast: React.ForwardRefRenderFunction<ToastRef, object> = (props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState<ToastContent>({ title: '', description: '' });

    useImperativeHandle(
        ref,
        () => ({
            show: ({ title, description }) => {
                setOpen(true);
                setContent({ title, description });
            },
        }),
        []
    );

    return (
        <RadixToast.Provider swipeDirection="down" duration={6000}>
            <ToastRoot open={open} onOpenChange={setOpen}>
                <ToastTitle>{content.title}</ToastTitle>
                <ToastDescription asChild>
                    <>{content.description}</>
                </ToastDescription>
            </ToastRoot>
            <ToastViewport />
        </RadixToast.Provider>
    );
};

export default forwardRef(Toast);
