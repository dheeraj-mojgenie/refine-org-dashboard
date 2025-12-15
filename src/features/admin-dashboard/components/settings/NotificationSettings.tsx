import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Mail, Bell } from 'lucide-react';

export const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>
            Manage how you receive email notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <Label htmlFor="email-notifications" className="font-medium">
                  Email Notifications
                </Label>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive email updates about your activity
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-medium text-sm text-gray-900 dark:text-white">
              Email me when:
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="new-registration" className="font-normal">
                  New registration received
                </Label>
                <Switch id="new-registration" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="event-reminder" className="font-normal">
                  Event reminders
                </Label>
                <Switch id="event-reminder" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="payment-received" className="font-normal">
                  Payment received
                </Label>
                <Switch id="payment-received" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="weekly-summary" className="font-normal">
                  Weekly summary
                </Label>
                <Switch id="weekly-summary" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Manage browser push notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <Label htmlFor="push-notifications" className="font-medium">
                  Push Notifications
                </Label>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive push notifications in your browser
              </p>
            </div>
            <Switch
              id="push-notifications"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
