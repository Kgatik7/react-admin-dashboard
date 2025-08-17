import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegQuestionCircle, FaEnvelope, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

export default function PersonalInfo() {
  const nav = useNavigate();

  // form state (prefilled to match your screenshot)
  const [first, setFirst] = useState("Babangile");
  const [last, setLast]   = useState("Ncube");
  const [email, setEmail] = useState("222147008@ump.ac.za");
  const [country, setCountry] = useState("ZA");
  const [phone, setPhone] = useState("+27 (0)67-997-2425");

  const [showCur, setShowCur] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [curPass, setCurPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const onEditInfo = () => {
    // TODO: call API
    alert("Saved profile changes");
  };

  const onChangePassword = () => {
    // TODO: call API
    alert("Open change password flow");
  };

  return (
    <section className="space-y-8">
      {/* Header pill with back button */}
      <div className="relative">
        <div className="header-pill text-center">Personal Info</div>
        <button
          onClick={() => nav(-1)}
          className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-amber-400 shadow grid place-items-center"
          aria-label="Back"
          title="Back"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>
      </div>

      {/* Two-column form */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="space-y-6">
          <LabeledInput
            label="Name"
            placeholder="First name"
            icon={<FaUser />}
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />

          <LabeledInput
            label="Email"
            placeholder="Email address"
            icon={<FaEnvelope />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <button
            onClick={onChangePassword}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl shadow"
          >
            Change Password
          </button>

          <PasswordInput
            label="Current Password"
            show={showCur}
            setShow={setShowCur}
            value={curPass}
            onChange={(e) => setCurPass(e.target.value)}
          />

          <PasswordInput
            label="New Password"
            show={showNew}
            setShow={setShowNew}
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <LabeledInput
            label="Surname"
            placeholder="Last name"
            icon={<FaUser />}
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />

          {/* Country + phone inline to resemble the mock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
            <div className="flex gap-3">
              <select
                className="border rounded-full px-4 py-2.5 bg-white"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="ZA">ZA</option>
                <option value="BW">BW</option>
                <option value="NA">NA</option>
                <option value="MZ">MZ</option>
              </select>
              <input
                className="flex-1 border rounded-full px-4 py-2.5"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+27 ..."
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Cell phone Number</p>
          </div>

          <div className="pt-1">
            <button
              onClick={onEditInfo}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl shadow"
            >
              Edit Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- little building blocks to match the rounded inputs in your mock ---------- */

function LabeledInput({
  label, placeholder, icon, value, onChange, type = "text",
}: {
  label: string; placeholder: string; icon?: JSX.Element;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border rounded-full pl-10 pr-10 py-2.5"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FaRegQuestionCircle />
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1">{placeholder}</p>
    </div>
  );
}

function PasswordInput({
  label, show, setShow, value, onChange,
}: {
  label: string; show: boolean; setShow: (v: boolean) => void;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="Your password"
          className="w-full border rounded-full px-4 py-2.5 pr-12"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}
