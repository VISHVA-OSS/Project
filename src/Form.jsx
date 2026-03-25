import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import "./App.css";

function FullForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ get redirect path (where user came from)
  const redirectPath = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onBlur"
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);

    // ✅ mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    alert("Login Successful!");

    // ✅ redirect back to product page
    navigate(redirectPath);

    reset();
  };

  return (
    <div className="color">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2 className="text"> Login Form</h2>

        <input
          className={`border ${errors.firstName ? "error-border" : ""}`}
          placeholder="First Name"
          {...register("firstName", {
            required: "First Name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters required",
            },
          })}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}

        <input
          className={`border ${errors.lastName ? "error-border" : ""}`}
          placeholder="Last Name"
          {...register("lastName", { required: "Last Name is required" })}
        />
        {errors.lastName && (
          <p className="error">{errors.lastName.message}</p>
        )}

        <input
          className={`border ${errors.email ? "error-border" : ""}`}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          className={`border ${errors.password ? "error-border" : ""}`}
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
            pattern: {
              value: /^(?=.*[!@#$%^&*])/,
              message: "Must contain one special character",
            },
          })}
        />
        {errors.password && (
          <p className="error">{errors.password.message}</p>
        )}

        <input
          className={`border ${errors.confirmPassword ? "error-border" : ""}`}
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}

        <input
          className={`border ${errors.phone ? "error-border" : ""}`}
          type="tel"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter valid 10 digit number",
            },
          })}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        {/* Gender */}
        <label>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              value="Male"
              {...register("gender", { required: "Select gender" })}
            />
            Male
          </label>
          <label>
            <input type="radio" value="Female" {...register("gender")} />
            Female
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender.message}</p>}

        {/* DOB */}
        <input
          style={{ borderRadius: "5px", height: "30px" }}
          type="date"
          {...register("dob", { required: "Select Date of Birth" })}
        />
        {errors.dob && <p className="error">{errors.dob.message}</p>}

        {/* Country */}
        <select {...register("country", { required: "Select country" })}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p className="error">{errors.country.message}</p>}

        {/* Hobbies */}
        <label>Hobbies:</label>
        <div>
          <label>
            <input type="checkbox" value="Reading" {...register("hobbies")} />
            Reading
          </label>
          <label>
            <input type="checkbox" value="Sports" {...register("hobbies")} />
            Sports
          </label>
          <label>
            <input type="checkbox" value="Music" {...register("hobbies")} />
            Music
          </label>
        </div>

        {/* Address */}
        <textarea
          placeholder="Address"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <p className="error">{errors.address.message}</p>}

        {/* Profile Pic */}
        <input
          type="file"
          {...register("profilePic", { required: "Upload profile picture" })}
        />
        {errors.profilePic && (
          <p className="error">{errors.profilePic.message}</p>
        )}

        {/* Terms */}
        <label>
          <input
            type="checkbox"
            {...register("terms", { required: "Accept terms" })}
          />
          I agree to Terms & Conditions
        </label>
        {errors.terms && <p className="error">{errors.terms.message}</p>}

        <button type="submit" className="button">
          Submit
        </button>

        <button
          type="button"
          onClick={() => reset()}
          className="button reset-btn"
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default FullForm;