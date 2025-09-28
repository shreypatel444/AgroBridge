# 🌾 AgroBridge

**Connecting Farmers & Brokers for a Sustainable Marketplace**  

AgroBridge is a **Next.js web application** designed to bridge the gap between farmers and brokers, enabling direct interaction, better price transparency, and a seamless agricultural marketplace experience. It features **high-level UI/UX, responsive design, and rich functionality** for both farmers and brokers.

---

## 🚀 Features

- **Responsive & High-Level UI** – Built with **TailwindCSS**, **Framer Motion**, and **Lottie animations** for a smooth and modern interface.  
- **Authentication** – Secure login and user management using **Clerk**.  
- **Dynamic Navbar** – Shows different navigation links depending on whether the user is signed in.  
- **About Page** – Showcases the mission and vision of AgroBridge.  
- **Contact Page** – Allows signed-in users to reach out to support or stakeholders.  
- **Book Appointment** – Schedule meetings between farmers and brokers.  
- **Market Explore** – Browse agricultural markets and discover opportunities.  
- **Brokers Directory** – List of verified brokers for easy contact and networking.  
- **Animations & Interactions** – Smooth transitions, hover effects, and animated hero section for engaging UX.  

---

## 📦 Tech Stack

- **Frontend:** Next.js, React  
- **Styling:** TailwindCSS  
- **Authentication:** Clerk  
- **Animations:** Framer Motion, Lottie  
- **Icons:** Lucide React  

---

## ⚡ Pages

| Page                     | Description                                           |
|---------------------------|-------------------------------------------------------|
| Home                      | Landing page with hero section and latest updates.   |
| About                     | Information about AgroBridge.                        |
| Contact                   | Contact form for signed-in users.                    |
| Market Locations          | Explore available agricultural markets.              |
| Brokers List              | List of registered brokers.                          |
| Book Appointment          | Schedule meetings with brokers/farmers.             |
| Sign In / User Profile    | Authentication and user management.                 |

---

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/shreypatel444/AgroBridge.git
cd AgroBridge
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

---

## 📌 Usage
- Navigate to the Home page to see the hero section and latest updates.
- Sign in via Clerk to access Contact, Services, and Book Appointment features.
- Explore markets and brokers using the Services dropdown.
- Book appointments directly with brokers through the appointment page.

---

## 💡 Future Enhancements
- Integrate live market data for real-time updates.
- Enable notifications for appointment reminders.

---

## 📄 License
This project is licensed under the MIT License.
