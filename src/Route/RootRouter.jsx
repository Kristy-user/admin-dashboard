import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import MainPage from '../Scenes/MainPage/MainPage';
import Locations from '../Components/Pages/Locations';
import MenuComponent from '../Scenes/MainPage/Components/MenuComponent';
import SubMenuSetting from '../Scenes/SubMenu/Components/SubMenuSetting';

const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />}>
        <Route
          path={'dashboard'}
          element={<MainPage component={<MenuComponent />} />}
        />
        <Route
          path={'users'}
          element={<MainPage component={<MenuComponent />} />}
        />
        <Route
          path={'p&l'}
          element={<MainPage component={<MenuComponent />} />}
        />
        <Route
          path={'vacation-manager'}
          element={<MainPage component={<MenuComponent />} />}
        />
        <Route
          path={'settings'}
          element={<MainPage component={<SubMenuSetting />} />}
        >
          <Route path={'general'} element={<MenuComponent />} />
          <Route path={'vacation-manager'} element={<MenuComponent />}>
            <Route path={'leave-types'} element={<MenuComponent />} />
            <Route path={'locations'} element={<Locations />} />
          </Route>
        </Route>
        <Route path={'settings/vacation manager'} element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
