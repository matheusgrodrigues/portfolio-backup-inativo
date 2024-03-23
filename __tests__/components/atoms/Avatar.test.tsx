import { render, screen } from '../../../src/core/utils/test-utils/testing-library-render';
import '@testing-library/jest-dom';

import { Avatar } from '@/src/components/atoms';

describe('Deve renderizar o Avatar, corretamente', () => {
    const image_src = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80';
    const image_alt = '';

    it('Deve renderizar o Avatar com a prop: src.', () => {
        render(<Avatar src={image_src} />);

        const get_avatar = screen.getByTestId('a-avatar');
        const get_avatar_image = screen.getByTestId('a-avatar-image');

        expect(get_avatar).toBeInTheDocument();
        expect(get_avatar_image).toBeInTheDocument();
        expect(get_avatar_image.getAttribute('src')).not.toHaveLength(0);
    });

    it('Deve renderizar o Avatar com  a prop: alt.', () => {
        render(<Avatar src={image_src} alt={image_alt} />);

        const get_avatar = screen.getByTestId('a-avatar');
        const get_avatar_image = screen.getByTestId('a-avatar-image');

        expect(get_avatar).toBeInTheDocument();
        expect(get_avatar_image).toBeInTheDocument();
        expect(get_avatar_image).toHaveProperty('alt');
    });
});
