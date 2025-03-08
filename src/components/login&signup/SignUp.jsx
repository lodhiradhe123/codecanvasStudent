import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoPerson,
  IoMail,
  IoCall,
  IoSchool,
  IoBook,
  IoBusiness,
  IoCalendar,
  IoEye,
  IoEyeOff,
  IoLockClosed,
} from "react-icons/io5";
import { GoogleOutlined } from "@ant-design/icons";
import { Input, Button, Card, Typography, message } from "antd";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [greeting, setGreeting] = useState("");

  //ant message
  const [messageApi, contextHolder] = message.useMessage();
  const info = (messages) => {
    messageApi.info(messages);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning! ☀️");
    else if (hour < 18) setGreeting("Good Afternoon! 🌤");
    else setGreeting("Good Evening! 🌙");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // if (password !== confirmPassword) {
    //   setErrorMessage("Passwords do not match.");
    //   setLoading(false);
    //   return;
    // }

    // Creating an object with all form values
    const formData = {
      fullName,
      email,
      phone,
      college,
      course,
      branch,
      passingYear,
    };

    console.log("Form Data:", formData);

    setLoading(false);
    info("Signup successful!");
    navigate("/login");
  };

  // Dummy Google Login Function
  const handleGoogleLogin = () => {
    // message.info("Google login is currently unavailable.");
    info("Google login is currently unavailable.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 to-gray-50">
      {contextHolder}
      <div className="w-full max-w-lg bg-white px-6 py-8 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          🎓 CodeCanvas
        </h2>
        <p className="text-gray-600 text-center mb-6">Register to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            {
              label: "Full Name",
              value: fullName,
              setValue: setFullName,
              icon: IoPerson,
            },
            {
              label: "Email ID",
              value: email,
              setValue: setEmail,
              icon: IoMail,
            },
            {
              label: "Phone Number",
              value: phone,
              setValue: setPhone,
              icon: IoCall,
              type: "tel", // Ensures numeric keypad on mobile
              onChange: (e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                if (value.length <= 14) {
                  setPhone(value);
                }
              },
            },
          ].map(
            ({
              label,
              value,
              setValue,
              icon: Icon,
              type = "text",
              onChange,
            }) => (
              <div key={label} className="relative flex flex-col">
                <label className="text-sm font-semibold mb-1">* {label}</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus-within:ring-2 focus-within:ring-blue-400">
                  <Icon className="text-gray-500 mr-2" size={20} />
                  <input
                    type={type}
                    value={value}
                    onChange={onChange || ((e) => setValue(e.target.value))}
                    required
                    className="w-full bg-transparent focus:outline-none text-sm"
                    placeholder={label}
                    minLength={label === "Phone Number" ? 8 : undefined}
                    maxLength={label === "Phone Number" ? 14 : undefined}
                  />
                </div>
              </div>
            )
          )}

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "College Name",
                value: college,
                setValue: setCollege,
                icon: IoSchool,
              },
              {
                label: "Select Course",
                value: course,
                setValue: setCourse,
                icon: IoBook,
              },
              {
                label: "Branch",
                value: branch,
                setValue: setBranch,
                icon: IoBusiness,
              },
              {
                label: "Year of Passing",
                value: passingYear,
                setValue: setPassingYear,
                icon: IoCalendar,
                type: "number",
              },
            ].map(({ label, value, setValue, icon: Icon, type = "text" }) => (
              <div key={label} className="relative flex flex-col">
                <label className="text-sm font-semibold mb-1">* {label}</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus-within:ring-2 focus-within:ring-blue-400">
                  <Icon className="text-gray-500 mr-2" size={20} />
                  <input
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    className="w-full bg-transparent focus:outline-none text-sm"
                    placeholder={label}
                  />
                </div>
              </div>
            ))}
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Sign Up"}
          </button>

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
        </form>
      </div>
    </div>
  );
}
