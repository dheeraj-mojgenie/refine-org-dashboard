import { RegistrationForm } from '../components/RegistrationForm';

export const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          TechConf 2024
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Join us for the biggest tech event of the year
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <RegistrationForm />
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2024 Tech Events Inc. All rights reserved.</p>
      </div>
    </div>
  );
};
