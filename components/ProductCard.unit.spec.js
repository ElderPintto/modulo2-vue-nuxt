
import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard'
import { makeServer } from '@/miragejs/server'

describe('ProductCard - unit', () => {

  let server;

  beforeEach(() => {
    server = makeServer({environment: 'teste'})
  })

  afterEach(() => {
    server.shutdown()
  })

  it('should match snapshot', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: server.create('product', {
          title: 'Relógio Bonito',
          price: '23.00',
          image: 'http://placeimg.com/640/480/cats'
        })
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })


  it('Should mount the component', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: server.create('product', {
          title: 'Relógio Bonito',
          price: '22.00',
        })
      }
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.text()).toContain('Relógio Bonito')
    expect(wrapper.text()).toContain('22.00')
  })

  it('Should mount the component', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: {}
      }
    })

    expect(wrapper.vm).toBeDefined()
  })
})
