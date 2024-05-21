#### Image Wizard AI - Next.js SaaS App 

### Live: https://image-wizard-ai.vercel.app/sign-in

## Overview

This project is a Software-as-a-Service (SaaS) application built with Next.js 14, Cloudinary AI, Clerk, and Stripe. The app allows users to upload, manage, and monetize AI-transformed images through a seamless and secure platform. Users can authenticate using Clerk, upload images, apply AI transformations using Cloudinary, and purchase credits for image processing using Stripe.

## Features

- **User Authentication**: Secure user authentication and authorization using Clerk.
- **Image Upload**: Users can upload their images to the application.
- **AI Transformations**: Leverage Cloudinary AI capabilities to apply various transformations to uploaded images.
- **Payments and Credits**: Users can purchase credits using Stripe to unlock advanced features and AI transformations.
- **Image Gallery**: Browse and manage uploaded images with search and pagination functionality.
- **Image Details**: View detailed information about each uploaded image, including applied transformations and metadata.
- **Update and Delete Images**: Users can update or delete their uploaded images.

## Technologies Used

- **Next.js 14**: A React framework for building server-rendered and static websites.
- **Cloudinary AI**: A cloud-based media management platform with AI capabilities for image and video transformations.
- **Clerk**: A secure and easy-to-use authentication solution for modern web applications.
- **Stripe**: A popular online payment processing platform for accepting and managing payments.
- **React Hook Form**: A library for building form validation and management in React applications.
- **Zod**: A TypeScript-first schema validation library for data validation.

## Getting Started

### Prerequisites

- Node.js (v14 or later) and npm installed on your machine.
- A Cloudinary account with an API key and secret.
- A Clerk account with an API key and secret.
- A Stripe account with API keys for accepting payments.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/shobhitsinha-A/Image-Wizard-AI.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Image-Wizard-AI
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env.local` file in the project root directory and add the following environment variables:**

    ```bash
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    CLERK_FRONTEND_API_KEY=<your-clerk-frontend-api-key>
    STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
    ```

    Replace the placeholders with your actual API keys and secrets.

5. **Start the development server:**

    ```bash
    npm run dev
    ```

    The application should now be running at [http://localhost:3000](http://localhost:3000).

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Cloudinary Documentation](https://cloudinary.com/documentation) - learn about Cloudinary features and API.
- [Clerk Documentation](https://clerk.dev/docs) - learn about Clerk features and API.
- [Stripe Documentation](https://stripe.com/docs) - learn about Stripe features and API.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please create a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Screenshots

### Website

![Screenshot 1](https://github.com/shobhitsinha-A/Image-Wizard-AI/assets/64719272/e5d73c58-c846-4249-a511-f2e80edb3765)
---
![Screenshot 2](https://github.com/shobhitsinha-A/Image-Wizard-AI/assets/64719272/29b24007-0cda-4f09-be46-46f398896daf)
---
![Screenshot 3](https://github.com/shobhitsinha-A/Image-Wizard-AI/assets/64719272/8820d8d4-2ab1-445a-b7e5-be246c27741d)
---
![Screenshot 4](https://github.com/shobhitsinha-A/Image-Wizard-AI/assets/64719272/f597711f-7013-4e34-b459-a9dd019fc2ea)
---
![Screenshot 5](https://github.com/shobhitsinha-A/Image-Wizard-AI/assets/64719272/44e949a6-8530-46ed-aa86-a28872569658)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---
