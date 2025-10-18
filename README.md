# Mini Employee Dashboard

A modern, responsive employee management dashboard built with Angular 17 and Tailwind CSS with DaisyUI components.

## 🚀 Live Demo

**Deployed Application:** [https://mini-employee-dashboard.netlify.app/](https://mini-employee-dashboard.netlify.app/)

## ✨ Features

### Core Functionality
- **Employee Management**: Add, view, and delete employees
- **Department Filtering**: Filter employees by department (HR, Engineering, Sales, Marketing)
- **Sorting Options**: Sort by name or date of joining
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🎁 Bonus Features
- **📊 CSV Export**: Export employee data to CSV format for external use
- **🌙 Dark Mode Toggle**: Switch between light and dark themes with a beautiful moon/sun icon toggle

## 🛠️ Tech Stack

- **Frontend Framework**: Angular 17
- **Styling**: Tailwind CSS v4 with DaisyUI components
- **Build Tool**: Angular CLI
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mini-employee-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install --force
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
ng build
```

## 🎨 UI Components

The application uses DaisyUI components for a clean, modern interface:
- **Navbar**: Responsive navigation with theme toggle
- **Tables**: Styled data tables with sorting and filtering
- **Modals**: Confirmation dialogs for actions
- **Buttons**: Consistent button styling throughout
- **Forms**: Clean form inputs and validation

## 🌙 Theme Support

The application includes a sophisticated theme system:
- **Light Theme**: Clean, bright interface for daytime use
- **Dark Theme**: Easy-on-the-eyes dark interface for low-light environments
- **Smooth Transitions**: Animated theme switching with rotating icons
- **System Preference**: Automatically detects user's system theme preference

## 📊 Data Management

### Employee Data Structure
```typescript
interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  dateOfJoining: string;
}
```

### Export Functionality
- **CSV Export**: Download employee data in CSV format
- **Filtered Data**: Export respects current filters and sorting
- **Customizable**: Easy to extend for additional export formats

## 🏗️ Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── add-employee/     # Add new employee component
│   │   ├── employee-list/    # Employee listing component
│   │   ├── header/           # Navigation header
│   │   └── dashboard-layout/ # Main layout component
│   └── app.component.*       # Root component
├── assets/
│   └── images/               # Theme toggle icons
└── styles.css                # Global Tailwind CSS imports
```
