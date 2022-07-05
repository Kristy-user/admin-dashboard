import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import info from 'assets/icons/info.svg';
import styled from 'styled-components';
import { ModalStyle } from 'CommonStyles/modalWindow';
import {
  Form,
  Input,
  Tooltip,
  Select,
  Row,
  Col,
  InputNumber,
  Checkbox,
  Button,
} from 'antd';

import 'antd/dist/antd.css';
import UserSelect from '../AntdForm/UserSelect';
import MonthSelect from '../AntdForm/MonthSelect';
import {
  daysOfWeek,
  expiryDate,
  infoDefault,
  infoQuota,
  timeZone,
  USERS,
} from '../../assets/textInfo';
import StartWeek from '../AntdForm/StartWeek';

import TimeZone from '../AntdForm/TimeZone';
import { Link } from 'react-router-dom';
import { createNewLocation, setDefault } from '../../store/actions/cards';
import { cardListSelector } from '../../store/selectors/cardsList';
infoQuota;

const CreateLocationStyle = styled.div`
  ${ModalStyle}
  min-width: 100%;

  .container {
    margin: 46px auto;

    text-align: left;
  }

  .workweek > .ant-form-item-label {
    text-align: left;
    margin-top: -8px;
    &:after {
      content: '*';
      color: red;
      position: relative;
      top: -0.5px;
      left: -1px;
    }
  }

  .name:after,
  .zone:after {
    content: '*';
    color: red;
    position: relative;
    top: -0.5px;
    left: -1px;
  }
  .ant-checkbox-wrapper > .info {
  }
  .workweek .ant-checkbox + span {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }
  .ant-form-item {
    margin: 0;
  }
  .ant-form-item {
    & input[placeholder] {
      padding: 8px 15px;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
    }
  }
  .ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input
    > span {
    padding: 8px 15px !important;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
  }
  .ant-form-item label:after {
    content: none;
  }

  .ant-form-item-label {
    margin-right: 67px;
  }

  .ant-col-8 {
    flex: 1 0 102px;
    margin-top: 5px;
    margin-left: 0;
    align-self: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .info {
    position: absolute;
    left: 96%;
    top: 13px;
    width: 16px;
    height: 16px;
    background-size: contain;
    background-image: url(${info});
    &.check {
      top: 11px;
      left: 53%;
    }
    &.default {
      left: 47%;
    }
  }
  .ant-form-item-control-input {
    width: 100%;
    & > .ant-select-selector {
      border: none;
    }
  }

  .form-group > input {
    border: none;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #eef7fc;
    border-color: #00a0ec;
    color: #00a0ec;
  }
  .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: #00a0ec;
  }
  .ant-select-selector {
    position: relative;
  }

  .ant-form-item-label > label {
    font-size: 13px;
  }
  .label,
  .ant-form-item-label > label {
    font-weight: 600;

    line-height: 15px;
  }
  .info-label {
    position: relative;
  }
  .field-label {
    position: relative;
    margin: 24px auto;
  }
  .label {
    font-size: 11px;
    position: absolute;
    z-index: 100;
    top: -4px;
    left: 7px;
    padding: 0 4px;
    background-color: #fff;
  }
  .ant-select-selection-search > .option {
    background-color: green;
  }
  .link-leave-policy {
    border: 1px solid #00a0ec40;
    margin: 24px auto;
    border-radius: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    padding: 8px 12px;
    background: #eef7fc;
    & a {
      color: #00a0ec;
      text-decoration: underline;
    }
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    content: '';
  }
  .ant-select-multiple.ant-select-lg .ant-select-selection-item {
    padding: 3px;
    height: fit-content;
    line-height: 16px;
    margin-left: 5px;
    background-color: #eef7fc;
    & svg {
      margin-left: 4px;
      fill: #00a0ec;
    }
  }
  .ant-select-selection-overflow-item {
    margin: 0;
  }
  .ant-btn {
    margin-bottom: 0;
    border-radius: 6px;
    background: #00a0ec;
    padding: 9px 23px;
    font-size: 13px;
    cursor: inherit;
    &.submit {
      margin-left: 10px;
      &:hover {
        border-color: #00a1eca9;
        background-color: #00a1eca9;
      }
    }

    &.cancel {
      background: #afb6c6bf;
      border-color: #afb6c6;
      &:hover {
        background: #afb6c6e6;
      }
    }
  }
  .buttons-form {
    display: flex;
    justify-content: flex-end;
  }
`;

const { Option } = Select;

const CreateLocation = (props) => {
  const dispatch = useDispatch();
  const cardsList = useSelector(cardListSelector);
  const lastId = cardsList[cardsList.length - 1].id;
  const [form] = Form.useForm();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [week, setWeek] = useState();
  const [selectedTimezone, setSelectedTimezone] = useState({
    abbrev: 'EEST',
    altName: 'Eastern European Summer Time',
    label: '(GMT+3:00) Athens, Minsk',
    offset: 3,
    value: 'Europe/Athens',
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredUsers = USERS.filter((o) => !selectedItems.includes(o));

  const onFinish = (values) => {
    let newLocation = {
      id: lastId + 1,
      isDefault: values.isDefault,
      tittle: values.location[0].toUpperCase() + values.location.slice(1),
      holidays: daysOfWeek.filter((i) => !values.workweek.includes(i)),
      leavePolicies: {
        quota: values.quota,
        startWeek: values.startWeek,
        expiryDate: values.expiryDate,
        timeZone: selectedTimezone.label,
      },
      users: values.users
        ? values.users.map((user) => {
            let obj = { name: user };
            return obj;
          })
        : null,
    };
    dispatch(createNewLocation(newLocation));
    if (values.isDefault) {
      dispatch(setDefault(newLocation.id));
    }
    props.setModal(false);
  };
  console.log(cardsList);
  return (
    <CreateLocationStyle>
      <h4>Create Location</h4>
      <div className="close" onClick={() => props.setModal(false)}></div>
      <div className={'container'}>
        <Form
          size="large"
          form={form}
          name="create location"
          style={{ width: '100%', height: '100%' }}
          initialValues={{
            workweek: ['Monday', 'Wednesday', 'Tuesday', 'Thursday', 'Friday'],
            quota: 'Accounting Year',
            startWeek: 'Monday',
            data: { month: 'January', day: 1 },
            expiryDate: true,
            isDefault: false,
          }}
          scrollToFirstError
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="field-label">
            <div className="label name">Name</div>
            <Form.Item
              name="location"
              style={{ width: '100%' }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: '100%', marginBottom: 0 }}
                placeholder="Location Name"
              />
            </Form.Item>
          </div>
          <Form.Item
            className={'workweek'}
            name="workweek"
            label="Workweek"
            rules={[
              {
                required: true,
              },
            ]}
            style={{ marginTop: 20 }}
          >
            <Checkbox.Group style={{ marginTop: -5 }}>
              <Row>
                {daysOfWeek.map((item, index) => (
                  <Col span={8}>
                    <Checkbox key={index} value={item}>
                      {item}
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <div className="field-label">
            <div className="label">Leave Quota Reset Based On</div>
            <Form.Item name="quota">
              <Select
                defaultValue="Accounting year"
                style={{
                  height: 22,
                  width: '94%',
                  fontSize: '13px',
                }}
              >
                <Option
                  style={{
                    height: 22,
                    width: '100%',
                    backgroundColor: '#ffff',
                  }}
                  value={'Accounting year'}
                >
                  <span className="option">Accounting year</span>
                </Option>
                <Option
                  style={{
                    height: 20,
                    width: '100%',
                    backgroundColor: '#ffff',
                  }}
                  value={'User Employment Date'}
                >
                  <span className="option">User Employment Date</span>
                </Option>
              </Select>
              <Tooltip placement="top" title={infoQuota}>
                <div className={'info'}></div>
              </Tooltip>
            </Form.Item>
          </div>
          <Form.Item>
            <div className="label">Fiscal Year Start</div>
            <Input.Group compact>
              <Form.Item name={['data', 'month']} noStyle>
                <MonthSelect value={month} onChange={setMonth} />
              </Form.Item>
              <Form.Item name={['data', 'day']} noStyle>
                <InputNumber
                  min={1}
                  max={31}
                  style={{ width: '16%', marginLeft: 3 }}
                  onChange={setDay}
                  value={day}
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <div className="info-label">
            <Form.Item
              name="expiryDate"
              valuePropName="checked"
              className=""
              style={{
                marginLeft: -5,
                marginTop: 14,
                fontWeight: '500',
                fontSize: 13,
              }}
            >
              <Checkbox
                style={{
                  marginLeft: 13,
                  fontWeight: '500',
                  fontSize: 13,
                }}
              >
                No Brought Forward Expiry Date
              </Checkbox>
            </Form.Item>
            <Tooltip placement="top" title={expiryDate}>
              <div className={'info check'}></div>
            </Tooltip>
          </div>
          <div className="field-label">
            <div className="label">Week Starts On</div>
            <Form.Item name="startWeek" style={{ width: '40%' }}>
              <StartWeek onChange={setWeek} value={week} />
            </Form.Item>
          </div>
          <div className="field-label">
            <div className="label zone">Time Zone</div>
            <Form.Item
              style={{ width: '92%' }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TimeZone
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
            </Form.Item>
            <Tooltip placement="top" title={timeZone}>
              <div className={'info '}></div>
            </Tooltip>
          </div>
          <Form.Item name="users">
            <UserSelect
              value={selectedItems}
              onChange={setSelectedItems}
              filteredUsers={filteredUsers}
            />
          </Form.Item>
          <div className="info-label">
            <Form.Item
              name="isDefault"
              valuePropName="checked"
              style={{
                marginLeft: -5,
                marginTop: 14,
                fontWeight: '500',
                fontSize: 13,
              }}
            >
              <Checkbox
                style={{
                  marginLeft: 13,
                  fontWeight: '500',
                  fontSize: 13,
                }}
              >
                Make This Location Default
              </Checkbox>
            </Form.Item>
            <Tooltip placement="top" title={infoDefault}>
              <div className={'info default '}></div>
            </Tooltip>
          </div>
          <div className="link-leave-policy">
            Once you've created a Location, assign a{' '}
            <Link to="">Leave Policy</Link> to the Location, in order to enable
            Users to request Leave. To assign a Leave Policy, go to Location
            &#62; Leave Policies &#62; Assign Leave Policy.
          </div>
          <div className="buttons-form">
            <Button
              className="cancel"
              type="primary"
              htmlType="button"
              onClick={() => props.setModal(false)}
            >
              Cancel
            </Button>
            <Button className="submit" type="primary" htmlType="submit">
              Create
            </Button>
          </div>
        </Form>
      </div>
    </CreateLocationStyle>
  );
};
export default CreateLocation;
