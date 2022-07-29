import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Country from '../components/Country/Country';
import store from '../redux/store';

describe('The indivial page of the app countires', () => {
  it('renders properly', async () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Country />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
