import React from 'react';
import "../setupTests"
import { shallow, mount } from 'enzyme';
import { MemoryRouter} from 'react-router'
import { Route } from 'react-router-dom';
import App from '../src/routes/index'
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import About from '../src/pages/About';
import PageNotFound from '../src/pages/PageNotFound';

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Login component for /Login (getting array of routes)', () => {

    expect(pathMap['/Login']).toBe(Login);
  })
  it('should show Dashboard component for /Dashboard router', () => {
    expect(pathMap['/Dashboard']).toBe(Dashboard);
  })
  it('should show About component  for /About router', () => {
    expect(pathMap['/About']).toBe(About);
  })
  it('should show PageNotFound component for route not defined', ()=>{
      expect(pathMap['*']).toBe(PageNotFound);
  })
})