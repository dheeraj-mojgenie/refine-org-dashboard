import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Palette, Globe, Database } from 'lucide-react';

export const PreferenceSettings = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how the application looks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <Label htmlFor="dark-mode" className="font-medium">
                  Dark Mode
                </Label>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use dark theme across the application
              </p>
            </div>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                <SelectItem value="ist">
                  India Standard Time (GMT+5:30)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data & Privacy</CardTitle>
          <CardDescription>
            Manage your data and privacy settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <Label htmlFor="analytics" className="font-medium">
                  Usage Analytics
                </Label>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Help us improve by sharing anonymous usage data
              </p>
            </div>
            <Switch id="analytics" defaultChecked />
          </div>

          <Separator />

          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Download My Data
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-red-600 hover:text-red-700"
            >
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
