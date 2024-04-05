import React, { forwardRef, useImperativeHandle, useMemo } from 'react';

import styled from 'styled-components';

import * as RadixToast from '@radix-ui/react-toast';

import { lineHeight, screen } from '@/src/config/theme/theme';

import Icon from '@/src/components/atoms/Icon';

const ToastRoot = styled(RadixToast.Root)`
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
        transform: translateY(${({ theme }) => theme.ref.spacing['spacing_32']});
    }

    &[data-swipe='cancel'] {
        transform: translateY(0);
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
            transform: translateY(calc(100% + ${({ theme }) => theme.ref.spacing['spacing_12']}));
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes swipeOut {
        from {
            transform: translateY(-${({ theme }) => theme.ref.spacing['spacing_32']});
        }
        to {
            transform: translateY(calc(100% + ${({ theme }) => theme.ref.spacing['spacing_32']}));
        }
    }
`;

const ToastTitle = styled(RadixToast.Title)`
    margin-bottom: ${({ theme }) => theme.ref.spacing['spacing_8']};
    font-weight: ${({ theme }) => theme.ref.fontWeight['semibold']};
    font-size: ${({ theme }) => theme.ref.fontSize['md']};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.ref.spacing['spacing_8']};
`;

const ToastDescription = styled(RadixToast.Description)`
    margin: 0;

    font-size: ${({ theme }) => theme.ref.fontSize['sm']};
    line-height: ${({ theme }) => lineHeight(`${theme.ref.fontSize['sm']}`)};
`;

const ToastViewport = styled(RadixToast.ToastViewport)`
    bottom: ${({ theme }) => theme.ref.spacing['spacing_32']};
    right: 0;

    padding: ${({ theme }) => theme.ref.spacing['spacing_12']};

    ${({ theme }) => screen('md', `right: ${theme.ref.spacing['spacing_32']}`)};

    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 342px;
    margin: 0;
    list-style: none;
    z-index: 2147483647;
    outline: none;
`;

type ToastType = 'success' | 'error' | 'primary';

interface ToastContent {
    type: ToastType;
    title: string;
    description: string;
}

export interface ToastRef {
    show: (content: ToastContent) => void;
}

const Toast: React.ForwardRefRenderFunction<ToastRef, object> = (props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState<ToastContent>({ type: 'success', title: '', description: '' });

    const cssProperties: React.CSSProperties = useMemo(
        () => ({
            backgroundColor:
                content.type === 'success'
                    ? 'rgb(237, 247, 237)'
                    : content.type === 'error'
                      ? 'rgb(253, 237, 237)'
                      : content.type === 'primary'
                        ? 'rgb(229, 246, 253)'
                        : '',
            color:
                content.type === 'success'
                    ? 'rgb(30, 70, 32)'
                    : content.type === 'error'
                      ? 'rgb(95, 33, 32)'
                      : content.type === 'primary'
                        ? 'rgb(1, 67, 97)'
                        : '',
        }),
        [content]
    );

    useImperativeHandle(
        ref,
        () => ({
            show: ({ type, title, description }) => {
                setOpen(true);
                setContent({ type, title, description });
            },
        }),
        []
    );

    return (
        <RadixToast.Provider swipeDirection="down" duration={3000}>
            <ToastRoot open={open} onOpenChange={setOpen} style={cssProperties}>
                <ToastTitle style={cssProperties}>
                    {content.type === 'primary' && <Icon icon="info-circled-icon" />}
                    {content.type === 'success' && <Icon icon="check-circled-icon" />}
                    {content.type === 'error' && <Icon icon="cross-circled-icon" />}

                    {content.title}
                </ToastTitle>
                <ToastDescription asChild>
                    <>{content.description}</>
                </ToastDescription>
            </ToastRoot>
            <ToastViewport />
        </RadixToast.Provider>
    );
};

export default forwardRef(Toast);
