import renderer from 'react-test-renderer'

import { Display } from '@/src/components/atoms/Display'

describe('Deve renderizar o ADisplay corretamente', () => {
    it('Deve preservar a estrutura visual do ADisplay', () => {
        const three = renderer
            .create(
                <Display fontWeight="semibold" $variant="lg" color="gradient">
                    ADisplay
                </Display>
            )
            .toJSON()

        expect(three).toMatchSnapshot()
    })
})
