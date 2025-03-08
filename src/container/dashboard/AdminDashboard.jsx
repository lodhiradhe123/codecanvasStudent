import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import {
  GiAchievement,
  GiGraduateCap,
  GiVideoConference,
  GiOpenBook,
  GiNotebook,
  GiTrophyCup,
  GiSpellBook,
} from "react-icons/gi";
import { MdOutlineDownload } from "react-icons/md";
import { FaChalkboardTeacher, FaQuestionCircle } from "react-icons/fa";
import indew from "../../assets/images/indew.jpeg";

const { Title } = Typography;

const stats = [
  {
    title: "Tests",
    icon: <GiTrophyCup className="text-blue-500 text-5xl" />,
    path: "/dashboard/test",
  },
  {
    title: "Webinars",
    icon: <GiVideoConference className="text-red-500 text-5xl" />,
    path: "/dashboard/webinar",
  },
  {
    title: "Courses",
    icon: <GiOpenBook className="text-green-500 text-5xl" />,
    path: "/dashboard/courses",
  },
  {
    title: "Free Trials",
    icon: <GiNotebook className="text-yellow-500 text-5xl" />,
    path: "/dashboard/freetrial",
  },
  {
    title: "Certificates",
    icon: <GiSpellBook className="text-purple-500 text-5xl" />,
    path: "/dashboard/certificates",
  },
  {
    title: "Downloads",
    icon: <MdOutlineDownload className="text-pink-500 text-5xl" />,
    path: "/dashboard/downloads",
  },
  {
    title: "Achievements",
    icon: <GiAchievement className="text-indigo-500 text-5xl" />,
    path: "/dashboard/achievements",
  },
  {
    title: "Q&A Forum",
    icon: <FaQuestionCircle className="text-orange-500 text-5xl" />,
    path: "/dashboard/forum",
  },
];

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-blue-200 to-white">
      {/* Welcome Title */}
      <Title
        level={2}
        className="text-center text-4xl font-extrabold text-gray-800 mt-6"
      >
        <p className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text ">
          Welcome to 🎓 CodeCanvas
        </p>
      </Title>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-lg shadow-blue-100 flex flex-col items-center justify-center gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ y: -5 }}
            onClick={() => navigate(stat.path)}
          >
            <motion.div whileHover={{ rotate: 15 }}>{stat.icon}</motion.div>
            <div className="text-xl font-semibold text-gray-700">
              {stat.title}
            </div>
          </motion.div>
        ))}
      </div>
      <p className="w-full  text-center text-lg font-semibold p-6 items-center">
        <span className="text-xl font-bold">
          <img
            src={indew}
            alt="logo"
            className="inline w-[30px] rounded-full"
          />
          Indew Technology{" "}
        </span>{" "}
        , Indore. All rights reserved. Unauthorized reproduction, distribution,
        or modification of{" "}
        <span className="text-xl font-bold">🎓 CodeCanvas</span> is strictly
        prohibited. For inquiries, contact <br />
        <a href="support@indewtechnology.com." className="text-blue-500">
          support@indewtechnology.com.{" "}
        </a>
      </p>
    </div>
  );
};

export default StudentDashboard;
