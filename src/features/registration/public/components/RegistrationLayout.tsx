import {
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
  Building,
  Users,
  CreditCard,
  Receipt,
  FileInput,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface RegistrationLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  onStepChange: (step: number) => void;
}

const steps = [
  {
    id: 1,
    label: '1. Basic Details',
    icon: FileText,
  },
  {
    id: 2,
    label: '2. Address',
    icon: MapPin,
  },
  {
    id: 3,
    label: '3. Contact Information',
    icon: Phone,
  },
  {
    id: 4,
    label: '4. Facilities',
    icon: Building,
  },
  {
    id: 5,
    label: '5. Accompanying Persons',
    icon: Users,
  },
  {
    id: 6,
    label: '6. Payment',
    icon: CreditCard,
  },
];

export const RegistrationLayout = ({
  children,
  currentStep,
  onStepChange,
}: RegistrationLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="text-xl font-bold text-blue-600">
              ORG - Registration
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
              >
                <FileText className="w-4 h-4" />
                Registration
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium"
              >
                <FileInput className="w-4 h-4" />
                Abstract Submissions
              </a>
            </nav>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <Button variant="outline" size="sm" className="gap-2">
                <Receipt className="w-4 h-4" />
                View receipts
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-medium text-xs">
                  DH
                </div>
                <div className="hidden sm:block text-xs">
                  <p className="font-medium text-gray-900">Dheeraj</p>
                  <p className="text-gray-500">Delegate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            COMPLETED
          </p>
          <h1 className="text-2xl font-bold text-gray-900">
            Registration Form
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  REGISTRATION STEPS
                </h3>
              </div>
              <nav className="p-2 space-y-1">
                {steps.map((step) => {
                  const isCompleted = step.id < currentStep;
                  const isCurrent = step.id === currentStep;

                  return (
                    <button
                      key={step.id}
                      onClick={() => onStepChange(step.id)}
                      className={cn(
                        'w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors',
                        isCurrent
                          ? 'bg-green-50 text-green-700'
                          : isCompleted
                          ? 'text-green-600 hover:bg-gray-50'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : isCurrent ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      ) : (
                        <step.icon className="w-4 h-4" />
                      )}
                      {step.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Abstract Management Sidebar Section */}
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-[400px]">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  ABSTRACT MANAGEMENT
                </h3>
              </div>
              <nav className="p-2 space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                  <FileInput className="w-4 h-4" />
                  Abstract Submissions
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                  <CheckCircle2 className="w-4 h-4" />
                  My Accepted Abstracts
                </button>
              </nav>
            </div>
          </aside>

          {/* Form Content */}
          <div className="flex-1 space-y-6">
            {/* Success Message Banner */}
            <div className="bg-white border-l-4 border-green-500 p-4 rounded-r-md shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-green-800">
                  Thank you! Registration completed
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Your registration process is completed. Click here to view all
                  your payment and refund receipts.
                </p>
              </div>
            </div>

            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Copyright © 2025 ORG. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:demo@gmail.com" className="hover:text-gray-900">
              demo@gmail.com
            </a>
            <span className="hover:text-gray-900">+91-1234567890</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
