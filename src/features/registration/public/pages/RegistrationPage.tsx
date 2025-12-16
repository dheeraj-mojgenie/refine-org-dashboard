import { useState } from 'react';
import { RegistrationLayout } from '../components/RegistrationLayout';
import { BasicDetailsStep } from '../components/steps/BasicDetailsStep';
import { AddressStep } from '../components/steps/AddressStep';
import { ContactInfoStep } from '../components/steps/ContactInfoStep';
import { FacilitiesStep } from '../components/steps/FacilitiesStep';
import { AccompanyingPersonsStep } from '../components/steps/AccompanyingPersonsStep';
import { PaymentStep } from '../components/steps/PaymentStep';

export const RegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicDetailsStep />;
      case 2:
        return <AddressStep />;
      case 3:
        return <ContactInfoStep />;
      case 4:
        return <FacilitiesStep />;
      case 5:
        return <AccompanyingPersonsStep />;
      case 6:
        return <PaymentStep />;
      default:
        return <BasicDetailsStep />;
    }
  };

  return (
    <RegistrationLayout currentStep={currentStep} onStepChange={setCurrentStep}>
      {renderStep()}
    </RegistrationLayout>
  );
};
