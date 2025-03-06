# 🚀 Micro-Frontend Architecture with Vite

This project implements a **Micro-Frontend Architecture** using **React 18, Vite, and Module Federation**. It consists of three applications:

- 🏠 **Host App** (`host-app`) - Main shell application that integrates micro-frontends.
- 💬 **Chat App** (`chat-app`) - A standalone micro-frontend providing chat functionality.
- 📧 **Email App** (`email-app`) - A standalone micro-frontend providing email functionality.

---

## 🛠 Tech Stack

- ⚛ **React 18**
- ⚡ **Vite** (for fast builds and development)
- 🏗 **Module Federation** (`@originjs/vite-plugin-federation`)
- 🚏 **React Router** (for navigation)
- 🎨 **Tailwind CSS v4** (for styling)
- 🔍 **ESLint** (for code linting)

---

## 📂 Project Structure

```plaintext
micro-frontend-project/
│── host-app/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│── chat-app/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│── email-app/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/micro-frontend-project.git
cd micro-frontend-project
```

### 2️⃣ Install Dependencies

Run the following command inside each app (`host-app`, `chat-app`, and `email-app`):

```sh
cd host-app && npm install
cd ../chat-app && npm install
cd ../email-app && npm install
```

### 3️⃣ Run the Applications

Start each application separately:

```sh
cd host-app && npm run dev
cd ../chat-app && npm run dev
cd ../email-app && npm run dev
```

Each app will start on a different port. The **host app** will load the micro-frontends dynamically.

---

## 🔗 Module Federation Setup

Each micro-frontend exposes components to be consumed by the **Host App** using `@originjs/vite-plugin-federation`. The federation configuration is inside `vite.config.js` of each app.

### 📝 Example `vite.config.js` for `chat-app`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    federation({
      name: "chatApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ChatApp": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

```

---

## 🤝 Contribution

Feel free to **fork** this repository, submit **pull requests**, or report **issues**. Any contribution is appreciated! 🚀

---

## 📜 License

This project is licensed under the **MIT License**.

---

🌟 *If you like this project, don't forget to give it a star!* ⭐

