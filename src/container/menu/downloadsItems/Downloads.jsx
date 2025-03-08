import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Button, Typography, Breadcrumb } from "antd";
import { FaDownload, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const downloads = [
  {
    id: 1,
    title: "Full Stack Development Roadmap",
    category: "Roadmaps & Guides",
    fileUrl: "#", // Replace with actual file URL
  },
  {
    id: 2,
    title: "JavaScript Mastery Notes",
    category: "Class Notes",
    fileUrl: "#", // Replace with actual file URL
  },
  {
    id: 3,
    title: "AI & ML Webinar Notes",
    category: "Webinar Notes",
    fileUrl: "#", // Replace with actual file URL
  },
  {
    id: 4,
    title: "Live Classes Summary - Python Basics",
    category: "Live Class Notes",
    fileUrl: "#", // Replace with actual file URL
  },
  {
    id: 5,
    title: "Data Structures & Algorithms Book",
    category: "Books & Tutorials",
    fileUrl: "#", // Replace with actual file URL
  },
];

export default function Downloads() {
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(null);

  const handleDownload = (id, url) => {
    setDownloading(id);
    setTimeout(() => {
      window.open(url, "_blank");
      setDownloading(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg mt-4"
      >
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          className="text-white text-lg"
          onClick={() => navigate(-1)}
        />
        <div className="flex space-x-2 text-xl font-semibold">
          <Title level={3} className="text-gray-800 flex">
            <FaBook className="text-indigo-500 text-3xl" />
            Downloads
          </Title>
        </div>
        <div></div>
      </motion.div>

      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mt-6 text-gray-700">
        <Breadcrumb.Item>
          <span
            className="cursor-pointer hover:text-indigo-500 transition"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Downloads</Breadcrumb.Item>
      </Breadcrumb>

      {/* Downloads Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {downloads.map((item) => (
          <motion.div whileHover={{ scale: 1.05 }} key={item.id}>
            <Card
              bordered={false}
              className="p-6 rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <FaChalkboardTeacher className="text-blue-500 text-4xl" />
                <div>
                  <Title level={4} className="m-0 text-gray-800">
                    {item.title}
                  </Title>
                  <Text className="text-gray-500">{item.category}</Text>
                </div>
              </div>
              <Button
                type="primary"
                className="mt-4 w-full bg-green-600 hover:bg-green-700"
                icon={<FaDownload />}
                loading={downloading === item.id}
                onClick={() => handleDownload(item.id, item.fileUrl)}
              >
                {downloading === item.id ? "Downloading..." : "Download File"}
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
