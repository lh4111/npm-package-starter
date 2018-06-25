import layerToHtml from '../src/layerToHtml'

describe('layer to html', () => {
  it('render layer to html', () => {
    const layer = {
      _class: 'Shape',
      name: 'testShape',
      frame: {
        x: 100,
        y: 100,
        width: 200,
        height: 200
      }
    }
    expect(layerToHtml(layer)).toMatchSnapshot()
  });
});
