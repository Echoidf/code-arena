import { Card, Space, Layout, Avatar, Drawer } from "antd";
import { useState } from "react";
const { Header } = Layout;

const { Meta } = Card;

export default function Home() {
  const onClickBlobCard = () => {
    window.open("https://echoidf.github.io/mynotes/", "_blank");
  };

  const avatarUrl = "https://s2.loli.net/2023/02/26/XJxWyKoaOvDb8sB.jpg";

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Header
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          <span role="img" aria-label="Welcome">
            👋 Welcome to the Home 👋
          </span>
        </h1>

        <Space size={16} wrap>
          
          <Avatar
            size={42}
            src={<img src={avatarUrl} alt="avatar" />}
            onClick={showDrawer}
            style={{
              cursor: "pointer",
            }}
          />
        </Space>

        <Drawer
          title="Username"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Header>

      <Layout
        style={{
          display: "flex",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Space size={32}>
              <Card
                style={{ width: 300 }}
                hoverable
                cover={<img alt="code" src="code.png" />}
              >
                <Meta title="添加题目" description="add title" />
              </Card>
              <Card
                style={{ width: 300 }}
                hoverable
                cover={<img alt="code" src="book.jpg" />}
              >
                <Meta title="我的题目" description="My title" />
              </Card>
            </Space>

            <Space size={32}>
              <Card
                style={{ width: 300, backgroundColor: "#FAFAD2" }}
                hoverable
              >
                <div className="flex">
                  <Meta title="我的收藏" description="⭐️⭐️⭐️" />
                </div>
              </Card>

              <Card
                style={{ width: 300, backgroundColor: "#E0FFFF" }}
                hoverable
                onClick={onClickBlobCard}
              >
                <Meta
                  title="我的博客"
                  description="https://echoidf.github.io/mynotes/"
                />
              </Card>
            </Space>
          </Space>
        </div>
      </Layout>
    </Layout>
  );
}
