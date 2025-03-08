import React, { useState, useEffect } from "react";
import { Input, Button, Card, Typography, message } from "antd";
import { PhoneOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Ant Design message instance
  const [messageApi, contextHolder] = message.useMessage();
  const info = (messages) => {
    messageApi.info(messages);
  };

  const navigate = useNavigate();

  // Handle OTP input change
  const onChange = (text) => {
    console.log("onChange:", text);
    setOtp(text);
  };

  const onInput = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps = { onChange, onInput };

  // Function to handle mobile number input (only numbers, 8-14 length)
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 14) {
      setMobile(value);
    }
  };

  // Function to send OTP
  const handleSendOtp = () => {
    if (mobile.length < 8 || mobile.length > 14) {
      info("Please enter a valid mobile number (8-14 digits)");
      return;
    }
    setOtpSent(true);
    setResendTimer(59); // Start countdown
    info("OTP sent successfully!");
    console.log("OTP sent successfully!");
  };

  // Function to handle OTP login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      info("Please enter a valid 6-digit OTP");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      info("Logged in successfully!");
      console.log("Logged in successfully!");
      navigate("/dashboard");
    }, 1500);
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    info("Google login is currently unavailable.");
  };

  // Resend OTP Timer
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 to-gray-50">
      {contextHolder}
      <Card className="w-96 p-6 shadow-2xl rounded-xl bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          🎓 CodeCanvas
        </h2>
        <Title level={3} className="text-center text-blue-600">
          Login
        </Title>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Mobile Number Input */}
          <Input
            size="large"
            placeholder="Enter your mobile number"
            prefix={<PhoneOutlined className="text-blue-500" />}
            value={mobile}
            onChange={handleMobileChange}
            required
          />

          <Button
            type="primary"
            size="large"
            onClick={handleSendOtp}
            disabled={otpSent}
            block
          >
            {otpSent ? "OTP Sent" : "Send OTP"}
          </Button>

          {/* OTP Input */}
          {otpSent && (
            <Input.OTP
              size="large"
              placeholder="Enter 6-digit OTP"
              prefix={<LockOutlined className="text-green-500" />}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
              formatter={(str) => str.toUpperCase()}
              {...sharedProps}
            />
          )}

          {/* Resend OTP Button (appears after 59 seconds) */}
          {otpSent && resendTimer === 0 && (
            <Button
              type="link"
              onClick={handleSendOtp}
              className="text-blue-500"
            >
              Resend OTP
            </Button>
          )}

          {otpSent && resendTimer > 0 && (
            <Text className="text-gray-500 text-center">
              Resend OTP in {resendTimer}s
            </Text>
          )}

          <Text className="text-start text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup here
            </Link>
          </Text>

          {otpSent && (
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={loading}
              block
            >
              Verify
            </Button>
          )}
        </form>

        <hr className="my-4" />

        {/* Google Login Button */}
        <Button
          type="default"
          icon={<GoogleOutlined className="text-red-500" />}
          size="large"
          onClick={handleGoogleLogin}
          block
        >
          Sign in with Google
        </Button>
      </Card>
    </div>
  );
}

export default Login;
