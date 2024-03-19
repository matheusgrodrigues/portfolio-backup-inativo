import renderer from 'react-test-renderer'

import { Icon } from '@/src/components/atoms/Icon'

describe('Deve renderizar os icons corretamente', () => {
    it('Deve preservar a estrutura visual do icone', () => {
        const three = renderer.create(<Icon icon="sun" />).toJSON()

        expect(three).toMatchSnapshot()
    })
})
