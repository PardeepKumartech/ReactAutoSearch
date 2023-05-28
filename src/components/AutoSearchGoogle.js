import React from "react";
import { AutoComplete } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { inputCall } from "../redux/reducers/AutoComplete";

const AutoSearchGoogle = () => {
  const addresses = useSelector((state) => state.AutoComplete.addresses);
  const dispatch = useDispatch();

  const handleSearch = (label, value) => {
    const data = {
      label,
      value,
    };
    dispatch(inputCall(data));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4>Search Address</h4>
          <AutoComplete
            style={{
              width: 200,
            }}
            onSelect={handleSearch}
            placeholder="Search here"
            options={addresses}
            filterOption={true}
          />
        </div>
      </div>
    </div>
  );
};
export default AutoSearchGoogle;
