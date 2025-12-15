import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Ticket,
  Plus,
  Search,
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  Download,
  Edit,
  Trash2,
  MoreVertical,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TicketType {
  id: string;
  name: string;
  eventName: string;
  price: number;
  totalQuantity: number;
  sold: number;
  available: number;
  status: 'active' | 'sold-out' | 'inactive';
  validFrom: string;
  validUntil: string;
}

const generateTickets = (): TicketType[] => {
  return [
    {
      id: 'TKT-001',
      name: 'Early Bird',
      eventName: 'Tech Conference 2024',
      price: 99,
      totalQuantity: 100,
      sold: 87,
      available: 13,
      status: 'active',
      validFrom: '2024-01-01',
      validUntil: '2024-03-01',
    },
    {
      id: 'TKT-002',
      name: 'VIP Pass',
      eventName: 'Tech Conference 2024',
      price: 299,
      totalQuantity: 50,
      sold: 50,
      available: 0,
      status: 'sold-out',
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
    },
    {
      id: 'TKT-003',
      name: 'Regular',
      eventName: 'Tech Conference 2024',
      price: 149,
      totalQuantity: 200,
      sold: 156,
      available: 44,
      status: 'active',
      validFrom: '2024-03-01',
      validUntil: '2024-12-31',
    },
    {
      id: 'TKT-004',
      name: 'Student',
      eventName: 'Medical Summit',
      price: 49,
      totalQuantity: 75,
      sold: 62,
      available: 13,
      status: 'active',
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
    },
    {
      id: 'TKT-005',
      name: 'Workshop Bundle',
      eventName: 'Business Forum',
      price: 199,
      totalQuantity: 30,
      sold: 28,
      available: 2,
      status: 'active',
      validFrom: '2024-02-01',
      validUntil: '2024-06-30',
    },
    {
      id: 'TKT-006',
      name: 'General Admission',
      eventName: 'Science Expo',
      price: 79,
      totalQuantity: 150,
      sold: 0,
      available: 150,
      status: 'inactive',
      validFrom: '2024-06-01',
      validUntil: '2024-12-31',
    },
  ];
};

export const TicketingPage = () => {
  const [tickets] = useState(generateTickets());
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || ticket.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalRevenue = tickets.reduce((sum, t) => sum + t.sold * t.price, 0);
  const totalSold = tickets.reduce((sum, t) => sum + t.sold, 0);
  const totalAvailable = tickets.reduce((sum, t) => sum + t.available, 0);
  const activeTickets = tickets.filter((t) => t.status === 'active').length;

  const getStatusBadge = (status: TicketType['status']) => {
    const variants = {
      active:
        'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'sold-out': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      inactive: 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300',
    };
    return variants[status];
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ticket Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage ticket types and track sales
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Ticket Type
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Total Revenue
            </CardTitle>
            <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
              ${totalRevenue.toLocaleString()}
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+24.5%</span>
              <span className="text-blue-700 dark:text-blue-300 ml-1">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-green-900 dark:text-green-100">
              Tickets Sold
            </CardTitle>
            <Ticket className="w-5 h-5 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900 dark:text-green-100">
              {totalSold}
            </div>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">
              {totalAvailable} still available
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-purple-900 dark:text-purple-100">
              Active Ticket Types
            </CardTitle>
            <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              {activeTickets}
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
              {tickets.length} total types
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-orange-900 dark:text-orange-100">
              Avg. Ticket Price
            </CardTitle>
            <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-900 dark:text-orange-100">
              ${Math.round(totalRevenue / totalSold)}
            </div>
            <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
              Per ticket sold
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by ticket name, event, or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="sold-out">Sold Out</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            {/* Export Button */}
            <Button variant="outline" className="w-full md:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-800">
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Sold / Total</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTickets.map((ticket) => {
                  const soldPercentage =
                    (ticket.sold / ticket.totalQuantity) * 100;

                  return (
                    <TableRow
                      key={ticket.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <TableCell className="font-mono text-sm">
                        {ticket.id}
                      </TableCell>
                      <TableCell className="font-medium text-gray-900 dark:text-white">
                        {ticket.name}
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {ticket.eventName}
                      </TableCell>
                      <TableCell className="font-semibold text-gray-900 dark:text-white">
                        ${ticket.price}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {ticket.sold} / {ticket.totalQuantity}
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div
                              className="bg-blue-600 h-1.5 rounded-full transition-all"
                              style={{ width: `${soldPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`font-medium ${
                            ticket.available === 0
                              ? 'text-red-600 dark:text-red-400'
                              : ticket.available < 20
                              ? 'text-orange-600 dark:text-orange-400'
                              : 'text-green-600 dark:text-green-400'
                          }`}
                        >
                          {ticket.available}
                        </span>
                      </TableCell>
                      <TableCell className="font-semibold text-gray-900 dark:text-white">
                        ${(ticket.sold * ticket.price).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(ticket.status)}>
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Ticket className="w-4 h-4 mr-2" />
                              View Sales
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {filteredTickets.length === 0 && (
            <div className="text-center py-12">
              <Ticket className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No tickets found
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
