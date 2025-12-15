import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto border-none shadow-lg">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Registration Successful!
          </h2>
          <p className="text-gray-600">
            Thank you for registering. We have sent a confirmation email with
            your ticket details.
          </p>
          <Button className="w-full mt-4" onClick={() => setIsSuccess(false)}>
            Register Another Attendee
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto border-none shadow-xl">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Event Registration
        </CardTitle>
        <CardDescription className="text-center">
          Enter your details to secure your spot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              required
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ticketType">Ticket Type</Label>
            <Select required>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Select ticket type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Admission ($99)</SelectItem>
                <SelectItem value="vip">VIP Access ($299)</SelectItem>
                <SelectItem value="student">Student ($49)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company / Organization (Optional)</Label>
            <Input
              id="company"
              placeholder="Acme Inc."
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary">Dietary Requirements (Optional)</Label>
            <Select>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="gluten-free">Gluten Free</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Complete Registration'}
          </Button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By registering, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
