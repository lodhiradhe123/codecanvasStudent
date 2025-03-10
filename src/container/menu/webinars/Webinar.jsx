import { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Breadcrumb, Button, Card, Radio, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { SiElectron } from "react-icons/si";
const { Title, Text } = Typography;

export default function Webinar() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [learningGoal, setLearningGoal] = useState(null);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "🚀 Join Our Exclusive Webinar on Full Stack Development!",
      startDate: "27 february, 2025",
      endDate: "31 june, 2025",
      description:
        "Are you eager to master Full Stack Development and kickstart your career in web development? Join our exclusive live webinar where industry experts will guide you through the essential skills needed to become a proficient Full Stack Developer!",
      bgColor: "bg-yellow-50",
    },
    {
      id: 2,
      title: " 🚀 Join Our Exclusive Webinar on DevOps Mastery!",
      startDate: "28 January, 2025",
      endDate: "2 Agust, 2025",
      description:
        "Are you ready to supercharge your IT career with DevOps? Join our live webinar where industry experts will walk you through the DevOps lifecycle, tools, and best practices to accelerate software development and deployment!",
      bgColor: "bg-yellow-50",
    },
  ];

  const handleExpand = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };
  // const handleTest = () => {
  //   // console.log("Test clicked");
  //   navigate("/testPaper");
  // };

  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-blue-100 to-white p min-h-screen p-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg text-white mt-4"
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
              onClick={() => navigate("/dashboard/webinar")}
            >
              webinar
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Start Session </h1>
            <div className="flex space-x-4 text-gray-600"></div>
          </div>

          {/* Enrolled Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full "
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
                    Join Now →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Weekly Learning Goal */}

          {/* Referral Section */}
          <div className="mt-6 bg-purple-100 shadow-md rounded-lg p-6 text-center">
            <h2 className="text-lg font-bold">
              🚀 Share This Amazing Opportunity with Your Friends! 🚀
            </h2>
            <p className="text-gray-700 text-sm">Refer your friend now!</p>
            <button className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              👉 Share this link with your network
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
