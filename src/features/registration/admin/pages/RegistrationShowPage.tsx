import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Download, Printer } from 'lucide-react';

export const RegistrationShowPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, fetch based on ID
  const registration = {
    id: id,
    attendeeName: 'John Doe',
    email: 'john.doe@example.com',
    eventName: 'TechConf 2024',
    ticketType: 'VIP',
    registrationDate: '2024-03-15',
    status: 'confirmed',
    amount: 299,
    paymentMethod: 'Credit Card',
    transactionId: 'tx_123456789',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/admin/registrations')}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Registration Details
            </h1>
            <p className="text-gray-500 dark:text-gray-400">ID: {id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Invoice
          </Button>
          <Button>
            <Mail className="w-4 h-4 mr-2" />
            Resend Confirmation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendee Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Full Name
                  </label>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {registration.attendeeName}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Email Address
                  </label>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {registration.email}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Phone
                  </label>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Organization
                  </label>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    Acme Corp
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Event Name
                  </label>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {registration.eventName}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Registration Date
                  </label>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {registration.registrationDate}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Status */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status & Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-500 block mb-2">
                  Registration Status
                </label>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  {registration.status.toUpperCase()}
                </Badge>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 block mb-2">
                  Ticket Type
                </label>
                <Badge variant="outline" className="text-base">
                  {registration.ticketType}
                </Badge>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">Amount Paid</span>
                  <span className="font-bold text-lg">
                    ${registration.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Payment Method</span>
                  <span className="font-medium">
                    {registration.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm mt-1">
                  <span className="text-gray-500">Transaction ID</span>
                  <span className="font-mono text-xs">
                    {registration.transactionId}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
