import React from 'react';
import Login from '../src/screens/Login';
import {create} from 'react-test-renderer';
import Component from '../src/helpers/testComponent';

const component = create(Component(<Login />));
describe('Login', () => {
  test('match a snapshot', async () => {
    expect(component).toMatchSnapshot();
  });
});
