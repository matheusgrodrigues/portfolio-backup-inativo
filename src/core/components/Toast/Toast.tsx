import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

import * as RadixToast from '@radix-ui/react-toast';

const ToastRoot = styled(RadixToast.Root)`
    background-color: white;
    border-radius: 6px;
    box-shadow:
        hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    padding: 15px;
    display: grid;
    grid-template-areas: 'title action' 'description action';
    grid-template-columns: auto max-content;
    column-gap: 15px;
    align-items: center;

    &[data-state='open'] {
        animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &[data-state='closed'] {
        animation: hide 100ms ease-in;
    }

    &[data-swipe='move'] {
        transform: translateX(var(--radix-toast-swipe-move-x));
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
            transform: translateX(calc(100% + var(--viewport-padding)));
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes swipeOut {
        from {
            transform: translateX(var(--radix-toast-swipe-end-x));
        }
        to {
            transform: translateX(calc(100% + var(--viewport-padding)));
        }
    }
`;

const ToastTitle = styled(RadixToast.Title)`
    grid-area: title;
    margin-bottom: 5px;
    font-weight: 500;
    color: var(--slate-12);
    font-size: 15px;
`;

const ToastDescription = styled(RadixToast.Description)`
    grid-area: description;
    margin: 0;
    color: var(--slate-11);
    font-size: 13px;
    line-height: 1.3;
`;

const ToastViewport = styled(RadixToast.ToastViewport)`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 390px;
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
        <RadixToast.Provider swipeDirection="down" duration={3333}>
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
