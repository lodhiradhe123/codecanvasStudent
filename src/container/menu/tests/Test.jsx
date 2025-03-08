import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Breadcrumb, Button, Card, Radio, Typography } from "antd";
import {
  ArrowLeftOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SiElectron } from "react-icons/si";

const { Title, Text } = Typography;

export default function LearningDashboard() {
  const [learningGoal, setLearningGoal] = useState(null);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Test Series for Product Based Companies",
      startDate: "27 February, 2025",
      endDate: "31 June, 2025",
      description:
        "Comprehensive test series to prepare for top product companies.",
    },
    {
      id: 2,
      title: "Combo | Basics of C++ with Data Structures",
      startDate: "28 January, 2025",
      endDate: "2 August, 2025",
      description: "Learn C++ with Data Structures and Algorithms in-depth.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg text-white"
      >
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          className="text-white text-lg"
          onClick={() => navigate(-1)}
        />

        <div className="flex space-x-2 text-xl font-semibold mt-1.5">
          <SiElectron className="text-blue-800 text-3xl animate-spin-slow " />
          <Title level={3} className=" text-white">
            Learning Dashboard
          </Title>
        </div>

        <div className="flex space-x-4"></div>
      </motion.div>

      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mt-8 text-gray-700">
        <Breadcrumb.Item>
          <span
            className="cursor-pointer hover:text-indigo-500 transition"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span
            className="cursor-pointer hover:text-indigo-500 transition"
            onClick={() => navigate("/dashboard/test")}
          >
            test
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Enrolled Courses Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8"
      >
        {courses.map((course) => (
          <motion.div whileHover={{ scale: 1.02 }} key={course.id}>
            <Card
              title={
                <Title level={4} className="m-0 text-indigo-700">
                  {course.title}
                </Title>
              }
              bordered={false}
              className="shadow-xl rounded-xl p-6 transition-all duration-300 hover:shadow-2xl bg-white bg-opacity-90 backdrop-blur-lg"
            >
              <Text className="text-gray-700">{course.description}</Text>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Start Date:</strong> {course.startDate} |
                <strong> End Date:</strong> {course.endDate}
              </p>
              <Button
                type="primary"
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Start Test
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Weekly Learning Goal Section */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="mt-10 bg-white bg-opacity-80 shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
      >
        <Title level={4} className="text-indigo-700">
          Set your weekly learning goal
        </Title>
        <Text type="secondary">Students who set a goal perform better.</Text>

        <Radio.Group
          onChange={(e) => setLearningGoal(e.target.value)}
          value={learningGoal}
          className="text-gray-900 mt-4 flex flex-col space-y-3"
        >
          <Radio value="2 days a week">2 days a week</Radio>
          <Radio value="3 days a week">3 days a week</Radio>
          <Radio value="5 days a week">5 days a week</Radio>
          <Radio value="7 days a week">7 days a week</Radio>
        </Radio.Group>

        <Button
          type="primary"
          disabled={!learningGoal}
          className="mt-5 w-full bg-green-500 hover:bg-green-600"
        >
          Set Weekly Learning Goal
        </Button>
      </motion.div>

      {/* Referral Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="mt-10 bg-gradient-to-r bg-purple-100 shadow-lg rounded-xl p-6 text-center text-white transition-all duration-300 hover:shadow-2xl"
      >
        <Title level={4} className="text-white">
          Bag Exciting Rewards by Inviting Friends
        </Title>
        <Text className="text-gray-200">Refer your friend now!</Text>
        <Button
          type="default"
          className="mt-4 bg-white text-red-600 hover:bg-gray-100 w-full"
        >
          Refer & Earn ₹1,000
        </Button>
      </motion.div>
    </div>
  );
}
