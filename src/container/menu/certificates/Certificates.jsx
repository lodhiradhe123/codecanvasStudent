import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Button, Typography, Breadcrumb } from "antd";
import { FaDownload, FaCertificate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const certificates = [
  {
    id: 1,
    title: "MERN Stack Development",
    issueDate: "March 2025",
    certificateUrl: "#", // Replace with actual certificate URL
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    issueDate: "February 2025",
    certificateUrl: "#", // Replace with actual certificate URL
  },
  {
    id: 3,
    title: "Machine Learning with TensorFlow",
    issueDate: "January 2025",
    certificateUrl: "#", // Replace with actual certificate URL
  },
];

export default function Certificates() {
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
          <FaCertificate className="text-yellow-500 text-3xl" />
          <Title level={3} className="text-gray-800">
            My Certificates
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
        <Breadcrumb.Item>Certificates</Breadcrumb.Item>
      </Breadcrumb>

      {/* Certificates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {certificates.map((cert) => (
          <motion.div whileHover={{ scale: 1.05 }} key={cert.id}>
            <Card
              bordered={false}
              className="p-6 rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <FaCertificate className="text-yellow-500 text-4xl" />
                <div>
                  <Title level={4} className="m-0 text-gray-800">
                    {cert.title}
                  </Title>
                  <Text className="text-gray-500">
                    Issued: {cert.issueDate}
                  </Text>
                </div>
              </div>
              <Button
                type="primary"
                className="mt-4 w-full bg-green-600 hover:bg-green-700"
                icon={<FaDownload />}
                loading={downloading === cert.id}
                onClick={() => handleDownload(cert.id, cert.certificateUrl)}
              >
                {downloading === cert.id
                  ? "Downloading..."
                  : "Download Certificate"}
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
