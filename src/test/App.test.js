import renderer, { act } from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../components/App';

describe('Body of the whole landing page', () => {
  it('checks for the name of the country', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });
  });
  waitFor(() => {
    const chillForDOM = screen.findByText(/Namibia/);
    expect(chillForDOM).not.toBeNull();
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Eswatini/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Sudan/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/British Indian Ocean Territory/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Burkina Faso/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('checks for the name of the country', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });
    waitFor(() => {
      const chillForDOM = screen.findByText(/Rwanda/);
      expect(chillForDOM).not.toBeNull();
    });
  });

  it('matching snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
