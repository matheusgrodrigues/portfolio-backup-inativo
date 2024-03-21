type Breakpoint = 'bp_sm' | 'bp_md' | 'bp_lg' | 'bp_xl';

const bp = {
    bp_sm: '640px',
    bp_md: '768px',
    bp_lg: '1024px',
    bp_xl: '1280px',
};

export const bpHelper = (breakpoint: Breakpoint, content: string) =>
    `@media screen and (min-width: ${bp[breakpoint]}) {
    ${content}
  }`;

export default bp;
