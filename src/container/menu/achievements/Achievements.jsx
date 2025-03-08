import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Button, Typography, Breadcrumb, Progress, Empty } from "antd";
import { FaTrophy, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const studentAchievements = [
  {
    id: 1,
    title: "Completed JavaScript Mastery",
    progress: 100,
    date: "March 2025",
  },
  {
    id: 2,
    title: "Solved 50+ DSA Problems",
    progress: 80,
    date: "February 2025",
  },
  {
    id: 3,
    title: "Completed Machine Learning Module",
    progress: 60,
    date: "January 2025",
  },
];

export default function Achievements() {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState(studentAchievements);

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
          <FaTrophy className="text-yellow-500 text-3xl" />
          <Title level={3} className="text-gray-800">
            My Achievements
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
        <Breadcrumb.Item>Achievements</Breadcrumb.Item>
      </Breadcrumb>

      {/* Achievements Section */}
      {achievements.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {achievements.map((achievement) => (
            <motion.div whileHover={{ scale: 1.05 }} key={achievement.id}>
              <Card
                bordered={false}
                className="p-6 rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <FaChartLine className="text-blue-500 text-4xl" />
                  <div>
                    <Title level={4} className="m-0 text-gray-800">
                      {achievement.title}
                    </Title>
                    <Text className="text-gray-500">
                      Achieved: {achievement.date}
                    </Text>
                  </div>
                </div>
                <Progress
                  percent={achievement.progress}
                  status={achievement.progress === 100 ? "success" : "active"}
                  className="mt-4"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16">
          <Empty description={<span>No Achievements Yet</span>} />
          <Text className="text-gray-500 mt-4">
            Keep learning and track your progress here!
          </Text>
          <Button
            type="primary"
            className="mt-4 bg-indigo-600 hover:bg-indigo-700"
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </Button>
        </div>
      )}
    </div>
  );
}
