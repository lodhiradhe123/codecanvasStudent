import React, { useState, useEffect } from "react";
import { Input, Button, Checkbox, Radio, Select, Card } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const { Option } = Select;

const RegisterCohort = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-03-24T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="max-w-md mx-auto shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-xl font-semibold">
        Next cohort starts on 24<sup>th</sup> Mar
      </h2>
      <div className="flex justify-center space-x-4 mt-4 text-lg font-semibold">
        <div>
          {timeLeft.days} <span className="block text-sm">Days</span>
        </div>
        <div>
          {timeLeft.hours} <span className="block text-sm">Hours</span>
        </div>
        <div>
          {timeLeft.minutes} <span className="block text-sm">Minutes</span>
        </div>
        <div>
          {timeLeft.seconds} <span className="block text-sm">Seconds</span>
        </div>
      </div>
      <div className="mt-6 text-left">
        <Input placeholder="Name" className="mb-4" />
        <Input type="email" placeholder="Email" className="mb-4" />
        <div className="flex items-center space-x-2 mb-4">
          <Select defaultValue="IN" className="w-20">
            <Option value="IN">+91</Option>
            <Option value="US">+1</Option>
            <Option value="UK">+44</Option>
          </Select>
          <Input placeholder="Phone Number" prefix={<PhoneOutlined />} />
        </div>
        <Radio.Group defaultValue="myself" className="mb-4">
          <Radio value="myself">Myself</Radio>
          <Radio value="company">My Company</Radio>
        </Radio.Group>
        <Checkbox className="mb-4">
          By providing your contact details, you agree to our{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
        </Checkbox>
      </div>
      <Button type="primary" className="w-full mb-2">
        Talk to our advisor
      </Button>
      <Button className="w-full">View Schedules</Button>
    </Card>
  );
};

export default RegisterCohort;
