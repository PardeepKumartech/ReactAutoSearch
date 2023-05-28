import { useSelector } from "react-redux";
import { Typography, List } from "antd";

const { Title } = Typography;

const UserSearchHistory = () => {
  const selectedAddresses = useSelector(
    (state) => state.AutoComplete.selectedAddresses
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Title level={2}>User Tried History</Title>
          <List
            itemLayout="horizontal"
            dataSource={selectedAddresses}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta title={item.value} />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSearchHistory;
