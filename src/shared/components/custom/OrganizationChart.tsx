import { useState } from 'react';
import { generateOrgChart, type OrgNode } from '@/shared/utils/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';

interface OrgNodeProps {
  node: OrgNode;
  level: number;
}

const OrgNodeComponent = ({ node, level }: OrgNodeProps) => {
  const [expanded, setExpanded] = useState(level < 2);

  return (
    <div className="flex flex-col items-center">
      {/* Node Card */}
      <Card className="w-64 hover:shadow-lg transition-shadow duration-200">
        <CardContent className="p-4">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-16 h-16 mb-3">
              <AvatarImage src={node.avatar} />
              <AvatarFallback>
                {node.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-gray-900 dark:text-white">
              {node.name}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
              {node.position}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <Mail className="w-3 h-3" />
              <span>{node.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Children */}
      {node.children && node.children.length > 0 && (
        <>
          {/* Expand/Collapse Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="my-2"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Expand ({node.children.length})
              </>
            )}
          </Button>

          {/* Vertical Line */}
          {expanded && (
            <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
          )}

          {/* Children Container */}
          {expanded && (
            <div className="flex gap-8 relative">
              {/* Horizontal Line */}
              {node.children.length > 1 && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
              )}

              {node.children.map((child) => (
                <div key={child.id} className="relative">
                  {/* Vertical connector to horizontal line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="pt-8">
                    <OrgNodeComponent node={child} level={level + 1} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export const OrganizationChart = () => {
  const [zoom, setZoom] = useState(100);
  const orgData = generateOrgChart();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Organization Chart
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            View the organizational hierarchy
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom(Math.max(50, zoom - 10))}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-16 text-center">
            {zoom}%
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom(Math.min(150, zoom + 10))}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Chart Container */}
      <Card>
        <CardContent className="p-8">
          <div
            className="overflow-auto"
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top center',
              transition: 'transform 0.2s ease',
            }}
          >
            <div className="inline-block min-w-full">
              <OrgNodeComponent node={orgData} level={0} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
