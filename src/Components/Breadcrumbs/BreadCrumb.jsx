import React from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import IconSettings from '../../Scenes/Menu/Components/Icons/IconSettings';
import styled from 'styled-components';
import setting_bread from '../../assets/icons/setting-bread.svg';
const BreadcrumbWrapper = styled.div`
  margin-left: 0;
  .ant-breadcrumb a,
  .ant-breadcrumb li:last-child a {
    color: #00a0ec;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
  }

  .icon {
    background-color: #00a0ec;
    margin: auto 0;
    margin-right: 7px;
    display: inline-block;
    height: 13.6px;
    width: 14px;
    mask-image: url(${setting_bread});
  }

  .ant-breadcrumb li {
    margin-left: 0;
  }
`;

const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split('/').filter((item) => item);

  const capitalize = (s) =>
    s
      .split('-')
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(' ');

  return (
    <BreadcrumbWrapper>
      <Breadcrumb separator=">">
        {pathnames.slice(0, -1).map((name, index, arr) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

          if (pathnames.length > 0) {
            if (index === 0) {
              return (
                <Breadcrumb.Item key={index}>
                  {pathnames[0] === 'settings' ? (
                    <IconSettings className={'icon'} />
                  ) : null}
                  <Link to={`${routeTo}`}>{capitalize(name)}</Link>
                </Breadcrumb.Item>
              );
            } else {
              return (
                <Breadcrumb.Item key={index}>
                  <Link to={`${routeTo}`}>{capitalize(name)}</Link>
                </Breadcrumb.Item>
              );
            }
          }
        })}
      </Breadcrumb>
    </BreadcrumbWrapper>
  );
};

export default BreadCrumb;
