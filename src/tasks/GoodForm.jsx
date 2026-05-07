import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "./good-form/schema";

export default function GoodForm() {
  const renders = useRef(0);
const [renderCount, setRenderCount] = useState(0);

useEffect(() => {
  renders.current += 1;
  setRenderCount(renders.current);
});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  
  const fakeApi = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email.includes("taken@")) {
          reject();
        } else {
          resolve();
        }
      }, 1500);
    });
  };

  const onSubmit = async (data) => {
    try {
      await fakeApi(data);

      reset();
    } catch {
      setError("email", {
        message: "Этот email уже занят",
      });
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Good Form</h2>

      <p>Renders: {renderCount}</p>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* FIRST NAME */}
        <div>
          <input
            placeholder="First name"
            aria-invalid={!!errors.firstName}
            aria-describedby="firstName-error"
            {...register("firstName")}
          />

          {errors.firstName && (
            <span id="firstName-error">
              {errors.firstName.message}
            </span>
          )}
        </div>

        {/* LAST NAME */}
        <div>
          <input
            placeholder="Last name"
            aria-invalid={!!errors.lastName}
            aria-describedby="lastName-error"
            {...register("lastName")}
          />

          {errors.lastName && (
            <span id="lastName-error">
              {errors.lastName.message}
            </span>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            placeholder="Email"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
            {...register("email")}
          />

          {errors.email && (
            <span id="email-error">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Password"
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
            {...register("password")}
          />

          {errors.password && (
            <span id="password-error">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            aria-invalid={!!errors.confirmPassword}
            aria-describedby="confirmPassword-error"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <span id="confirmPassword-error">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* ROLE */}
        <div>
          <select
            aria-invalid={!!errors.role}
            aria-describedby="role-error"
            {...register("role")}
          >
            <option value="">Select role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {errors.role && (
            <span id="role-error">
              {errors.role.message}
            </span>
          )}
        </div>

        {/* CHECKBOX */}
        <div>
          <label>
            <input
              type="checkbox"
              {...register("agree")}
            />
            Accept terms
          </label>

          {errors.agree && (
            <span>
              {errors.agree.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Отправляем..."
            : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
}