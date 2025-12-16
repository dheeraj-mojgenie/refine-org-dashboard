import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BasicDetailsStep = () => {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-4 border-b">
        <CardTitle className="text-lg font-medium text-gray-900">
          1. Basic Details
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm font-medium">
            Category <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger id="category" className="bg-white">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pgt-asi-non-member">
                PGT ASI non member
              </SelectItem>
              <SelectItem value="member">ASI Member</SelectItem>
              <SelectItem value="non-member">Non Member</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <p className="text-xs text-gray-500">
            Provide your fullname, with initials being last.
          </p>
          <div className="flex gap-4">
            <div className="w-32">
              <Select defaultValue="dr">
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr">Dr.</SelectItem>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="mrs">Mrs.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                  <SelectItem value="prof">Prof.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              id="fullName"
              placeholder="Full Name"
              className="flex-1 bg-white"
            />
          </div>
        </div>

        {/* Age and Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium">
              Age <span className="text-red-500">*</span>
            </Label>
            <Input id="age" type="number" className="bg-white w-24" />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Gender <span className="text-red-500">*</span>
            </Label>
            <RadioGroup defaultValue="male" className="flex gap-6 pt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="font-normal cursor-pointer">
                  Male
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="font-normal cursor-pointer">
                  Female
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="font-normal cursor-pointer">
                  Prefer not to answer
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Professional Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="medical-council" className="text-sm font-medium">
              State Medical Council No. <span className="text-red-500">*</span>
            </Label>
            <Input id="medical-council" className="bg-white" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="institute" className="text-sm font-medium">
              Institute/Hospital
            </Label>
            <Input id="institute" className="bg-white" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="designation" className="text-sm font-medium">
              Designation
            </Label>
            <Input id="designation" className="bg-white" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
            View address &raquo;
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
