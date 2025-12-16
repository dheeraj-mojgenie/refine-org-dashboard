import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FacilitiesStep = () => {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-4 border-b">
        <CardTitle className="text-lg font-medium text-gray-900">
          4. Facilities
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-500">Facilities form will go here.</p>
      </CardContent>
    </Card>
  );
};
