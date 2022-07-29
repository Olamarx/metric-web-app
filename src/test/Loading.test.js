import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loading from '../components/Loading/Loading';
import store from '../redux/store';

describe('The indivial page of the app countires', () => {
  it('renders properly', async () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Loading />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
