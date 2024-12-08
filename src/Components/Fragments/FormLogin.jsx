import React, { useState } from "react";
import axios from "axios";
import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const getCsrfTokenFromMeta = () => {
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    return metaTag ? metaTag.getAttribute("content") : "";
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Ambil token CSRF dari meta tag
    const csrfToken = getCsrfTokenFromMeta();

    if (!csrfToken) {
      alert("CSRF token not found");
      return;
    }

    try {
      // Dapatkan CSRF cookie
      await axios.get("http://erp.test/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      // Kirim permintaan login ke backend Laravel
      const response = await axios.post(
        "http://erp.test/api/login", // URL API login
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json", // Pastikan header ini dikirim
            "X-CSRF-TOKEN": csrfToken, // Sertakan CSRF token di header
          },
          withCredentials: true, // Pastikan mengirimkan cookies
        }
      );

      // Ambil token dari response dan simpan ke localStorage
      // setToken(response.data.access_token);
      const token = response.data.access_token;

      localStorage.setItem("auth_token", token);

      alert("Login successful!");
      window.location.href = "http://erp.test/dashboard";
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        title="Username"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <InputForm
        title="Password"
        type="password"
        placeholder="******"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button variant="bg-blue-800 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
