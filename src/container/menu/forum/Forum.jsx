import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  Button,
  Typography,
  Input,
  List,
  Avatar,
  Divider,
  Breadcrumb,
} from "antd";
import { FaQuestionCircle, FaReply, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function QnAForum() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    if (newQuestion.trim() === "") return;
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        text: newQuestion,
        answers: [],
        student: {
          profile:
            "https://images.unsplash.com/photo-1740004731264-3cde5c198cc2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
          username: "radheshyamlodhi",
        },
      },
    ]);
    setNewQuestion("");
  };

  const handleAnswerQuestion = (questionId, answer) => {
    if (answer.trim() === "") return;
    setAnswers((prev) => ({ ...prev, [questionId]: "" }));
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              student: { profile: "radhe", username: "radheshyamlodhi" },
              answers: [...q.answers, answer],
            }
          : q
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg text-white mt-4 "
      >
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          className="text-white text-lg"
          onClick={() => navigate(-1)}
        />

        <div className="flex space-x-2 text-xl font-semibold">
          <FaQuestionCircle className="text-blue-500 text-3xl" />
          <Title level={3} className="text-gray-800">
            Student Q&A Forum
          </Title>
        </div>

        <div className="flex space-x-4"></div>
      </motion.div>

      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mt-8 text-gray-700 ">
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
            onClick={() => navigate("/dashboard/forum")}
          >
            forum
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr className="text-blue-100 mb-6" />
      {/* Ask Question Section */}
      <Card className="mt-6 p-6 shadow-lg bg-white rounded-lg ">
        <Title level={4} className="text-gray-800">
          Ask a Question
        </Title>
        <Input.TextArea
          rows={3}
          placeholder="Type your question here..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <Button
          type="primary"
          className="mt-4 bg-blue-600 hover:bg-blue-700 w-full"
          onClick={handleAskQuestion}
        >
          Post Question
        </Button>
      </Card>

      <Divider />

      {/* Questions List */}
      <List
        className="mt-6"
        itemLayout="vertical"
        dataSource={questions}
        renderItem={(question) => (
          <Card className="mb-4 shadow-md bg-white rounded-lg">
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    src={question.student.profile}
                    alt=""
                    className="text-gray-500 w-12 h-12 rounded-full"
                  />
                }
                title={
                  <Text className="font-semibold text-lg">{question.text}</Text>
                }
              />
              {/* Answer Input */}
              <Input
                placeholder="Write an answer..."
                value={answers[question.id] || ""}
                onChange={(e) =>
                  setAnswers({ ...answers, [question.id]: e.target.value })
                }
                className="mt-3"
              />
              <Button
                type="default"
                className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                icon={<FaReply />}
                onClick={() =>
                  handleAnswerQuestion(question.id, answers[question.id])
                }
              >
                Submit Answer
              </Button>
              {/* Answers Section */}
              {question.answers.length > 0 && (
                <List
                  className="mt-4"
                  itemLayout="horizontal"
                  dataSource={question.answers}
                  renderItem={(answer) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<FaUserCircle />} />}
                        title={<Text className="text-gray-700">{answer}</Text>}
                      />
                    </List.Item>
                  )}
                />
              )}
            </List.Item>
          </Card>
        )}
      />
    </div>
  );
}
