import { useEffect, useRef, useState } from "react";

export default function BadForm() {
  // отдельный useState на каждое поле
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [agree, setAgree] = useState(false);

  // счетчик ререндеров
  const renders = useRef(0);
const [renderCount, setRenderCount] = useState(0);

useEffect(() => {
  renders.current += 1;
  setRenderCount(renders.current);
});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // плохая валидация email
    if (!email.includes("@")) {
      alert("Email incorrect");
      return;
    }

    // ручная проверка
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // submit не блокируется
    // alert вместо ошибок в UI

    alert("Form submitted");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bad Form</h2>

      <p>Renders: {renderCount}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            Accept terms
          </label>
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}