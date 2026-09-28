# 🇳🇵 SarkarKhoj

**SarkarKhoj** is a simple and organized directory for finding **Nepal government websites and online services** in one place.

Instead of searching the internet for individual government websites, users can use SarkarKhoj to quickly discover and access official government portals, departments, organizations, and public services.

## ✨ Features

- 🔎 Search government websites by name, department, or keyword
- 🔗 Direct links to official `.gov.np` websites
- 🏛️ Government departments and organizations in one place
- 🗂️ Browse by category with region filters (federal / provincial / local)
- 📝 Website information managed through JSON
- 🇳🇵 Bilingual — English with Nepali (देवनागरी) labels
- ⚡ Simple and lightweight interface
- 📱 Responsive design

## 🎯 Purpose

Nepal has many government websites and online services, but finding the correct official website can sometimes be difficult.

**SarkarKhoj aims to solve this by providing a single, simple directory where users can discover government websites quickly.**

## 🛠️ Tech Stack

- **React**
- **Vite**
- **TypeScript**
- **SCSS**
- **JSON**

## 📂 Project Structure

```
SarkarKhoj/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## 📊 Data Structure

Government website information is stored in JSON files under `src/data/`, making it easy to add or update websites without changing the application logic.

Example:

```json
{
  "name": "Office of the Prime Minister and Council of Ministers",
  "nepali": "प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय",
  "domain": "opmcm.gov.np",
  "url": "https://opmcm.gov.np",
  "description": "Apex executive body overseeing federal policies, governance directives, and cabinet actions."
}
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/SarkarKhoj.git
```

### 2. Navigate to the project

```bash
cd SarkarKhoj
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL shown in your terminal.

## 🏗️ Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🤝 Contributing

Contributions are welcome.

If you know of an official Nepal government website that is missing or contains incorrect information, you can contribute by updating the project data and submitting a pull request.

### Contribution Guidelines

1. Fork the repository.
2. Create a new branch.
3. Add or update the government website information in `src/data/`.
4. Make sure the URL points to the official `.gov.np` website.
5. Test your changes.
6. Submit a pull request.

## ⚠️ Disclaimer

SarkarKhoj is an independent directory and is **not affiliated with or operated by the Government of Nepal**.

The project provides links to government websites for easier discovery and access. Users should verify information on the respective official government website.

## 📌 Project Status

🚧 **Work in Progress**

The directory will continue to grow as more Nepal government websites and online services are added.

## 🌟 Future Improvements

- Add more government websites
- Improve search functionality
- Add more detailed information about services
- Improve accessibility

## 📄 License

This project is open source and available under the **MIT License**.

---

Made with ❤️ for easier access to Nepal's government services.

🇳🇵 **SarkarKhoj — Find Government, Simply.**
