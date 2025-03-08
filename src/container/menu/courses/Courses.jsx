import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, Button, Typography, Breadcrumb } from "antd";
import {
  FaLaptopCode,
  FaCloud,
  FaPython,
  FaReact,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import {
  SiElectron,
  SiJavascript,
  SiMongodb,
  SiTensorflow,
} from "react-icons/si";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      description:
        "Master MongoDB, Express.js, React, and Node.js to build full-stack applications.",
      icon: <FaReact className="text-blue-500 text-4xl" />,
      bgColor: "from-blue-100 to-white",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      description:
        "Strengthen your problem-solving skills with DSA in C++, Java, and Python.",
      icon: <FaDatabase className="text-yellow-500 text-4xl" />,
      bgColor: "from-yellow-100 to-white",
    },
    {
      id: 3,
      title: "DevOps & Cloud Computing",
      description:
        "Learn Kubernetes, Docker, CI/CD, AWS, and Terraform for scalable deployments.",
      icon: <FaCloud className="text-indigo-500 text-4xl" />,
      bgColor: "from-indigo-100 to-white",
    },
    {
      id: 4,
      title: "JavaScript Mastery",
      description:
        "Understand JavaScript ES6+, async programming, and modern frameworks.",
      icon: <SiJavascript className="text-orange-500 text-4xl" />,
      bgColor: "from-orange-100 to-white",
    },
    {
      id: 5,
      title: "Python for AI & ML",
      description:
        "Explore Python for Artificial Intelligence, Machine Learning, and Data Science.",
      icon: <FaPython className="text-green-500 text-4xl" />,
      bgColor: "from-green-100 to-white",
    },
    {
      id: 6,
      title: "Machine Learning with TensorFlow",
      description:
        "Build intelligent applications with TensorFlow and deep learning models.",
      icon: <SiTensorflow className="text-red-500 text-4xl" />,
      bgColor: "from-red-100 to-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Header Section */}
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
      <Breadcrumb className="mt-6 text-gray-700">
        <Breadcrumb.Item>
          <span
            className="cursor-pointer hover:text-indigo-500 transition"
            onClick={() => navigate("/dashboard")}
          >
            dashboard
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span
            className="cursor-pointer hover:text-indigo-500 transition"
            onClick={() => navigate("/dashboard/courses")}
          >
            courses
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Courses Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {courses.map((course) => (
          <motion.div whileHover={{ scale: 1.05 }} key={course.id}>
            <Card
              bordered={false}
              className={`p-6 rounded-lg shadow-lg bg-gradient-to-b ${course.bgColor} transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="flex items-center space-x-4">
                {course.icon}
                <Title level={4} className="m-0 text-gray-800">
                  {course.title}
                </Title>
              </div>
              <Text className="text-gray-700">{course.description}</Text>
              <Button
                type="primary"
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700"
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                Enroll Now →
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Invite Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="mt-10 bg-gradient-to-r bg-purple-100 shadow-lg rounded-xl p-6 text-center text-white transition-all duration-300 hover:shadow-2xl"
      >
        <Title level={4} className="text-white">
          🚀 Invite Your Friends & Learn Together!
        </Title>
        <Text className="text-gray-200">
          Refer your friends and earn rewards while learning!
        </Text>
        <Button
          type="default"
          className="mt-4 bg-white text-red-600 hover:bg-gray-100 w-full"
        >
          Refer & Earn ₹500
        </Button>
      </motion.div>
    </div>
  );
}
