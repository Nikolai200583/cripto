import { Layout, Select, Space, Button } from "antd";
import { useCrypto } from "../context/cripto-context";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

export default function AppHeader() {
  const { cripto } = useCrypto();
  function handleSelect(value) {
    console.log(value);
  }
  return (
    <Layout.Header style={headerStyle}>
      <Select
        // mode="multiple"
        style={{
          width: "250px"
        }}
        onSelect={handleSelect}
        value="press / to open"
        optionLabelProp="label"
        options={cripto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary">Add Asset</Button>
    </Layout.Header>
  );
}
