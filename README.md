🌾 AgroBridge
Connecting Farmers & Brokers for a Sustainable Marketplace

AgroBridge is a Next.js web application designed to bridge the gap between farmers and brokers, enabling direct interaction, better price transparency, and a seamless agricultural marketplace experience. It features high-level UI/UX, responsive design, and rich functionality for both farmers and brokers.

🚀 Features
Responsive & High-Level UI – Built with TailwindCSS, Framer Motion, and Lottie animations for a smooth and modern interface.

Authentication – Secure login and user management using Clerk.

Dynamic Navbar – Shows different navigation links depending on whether the user is signed in.

About Page – Showcases the mission and vision of AgroBridge.

Contact Page – Allows signed-in users to reach out to support or stakeholders.

Book Appointment – Schedule meetings between farmers and brokers.

Market Explore – Browse agricultural markets and discover opportunities.

Brokers Directory – List of verified brokers for easy contact and networking.

Animations & Interactions – Smooth transitions, hover effects, and animated hero section for engaging UX.

🖥️ Screenshots
(Add screenshots of Home, About, Contact, Services, etc.)

📦 Tech Stack
Frontend: Next.js, React

Styling: TailwindCSS

Authentication: Clerk

Animations: Framer Motion, Lottie

Icons: Lucide React

⚡ Pages & Routes
Page	Route	Description
Home	/	Landing page with hero section and latest updates.
About	/about	Information about AgroBridge.
Contact	/contact	Contact form for signed-in users.
Market Locations	/services/markets	Explore available agricultural markets.
Brokers List	/services/brokers	List of registered brokers.
Book Appointment	/services/book-appointment	Schedule meetings with brokers/farmers.
Sign In / User Profile	/sign-in / Clerk UserButton	Authentication and user management.
🔧 Installation
Clone the repository

git clone https://github.com/shreypatel444/AgroBridge.git
cd AgroBridge
Install dependencies

npm install
# or
yarn install
Set up environment variables

Create a .env.local file and add your Clerk keys:

NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
Run the development server

npm run dev
# or
yarn dev
Open http://localhost:3000 to see your app in the browser.

📌 Usage
Navigate to / to see the Home page.

Sign in via Clerk to access Contact, Services, and Book Appointment features.

Explore markets and brokers using the Services dropdown.

Book appointments directly with brokers through the appointment page.

💡 Future Enhancements
Integrate live market data for real-time updates.

Enable notifications for appointment reminders.

Add multi-language support for farmers from different regions.

Implement rating & review system for brokers.

🤝 Contributing
Contributions are welcome!

Fork the repository

Create your feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

💬 Contact
Developer: Shrey Patel

Email: your-email@example.com

GitHub: https://github.com/shreypatel444

🌟 Project Status
✅ Fully functional Next.js application with responsive design and essential features for farmers and brokers.

