// Dummy data generators for the application

export interface Registration {
  id: string;
  eventName: string;
  attendeeName: string;
  email: string;
  phone: string;
  registrationDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  ticketType: string;
  amount: number;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  attendees: number;
  capacity: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  department: string;
}

export interface OrgNode {
  id: string;
  name: string;
  position: string;
  avatar: string;
  email: string;
  children?: OrgNode[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  assignee: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
}

export interface ScheduleSession {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  speaker: string;
  room: string;
  category: string;
  color: string;
}

// Generate dummy registrations
export const generateRegistrations = (count: number = 50): Registration[] => {
  const statuses: Registration['status'][] = ['pending', 'confirmed', 'cancelled'];
  const ticketTypes = ['VIP', 'Regular', 'Student', 'Early Bird'];
  const events = ['Tech Conference 2024', 'Medical Summit', 'Business Forum', 'Science Expo'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `REG-${String(i + 1).padStart(5, '0')}`,
    eventName: events[Math.floor(Math.random() * events.length)],
    attendeeName: `Attendee ${i + 1}`,
    email: `attendee${i + 1}@example.com`,
    phone: `+1 ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
    registrationDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    ticketType: ticketTypes[Math.floor(Math.random() * ticketTypes.length)],
    amount: Math.floor(Math.random() * 500) + 50,
  }));
};

// Generate dummy events
export const generateEvents = (count: number = 10): Event[] => {
  const statuses: Event['status'][] = ['upcoming', 'ongoing', 'completed'];
  const locations = ['New York', 'San Francisco', 'London', 'Tokyo', 'Berlin'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `EVT-${String(i + 1).padStart(4, '0')}`,
    name: `Event ${i + 1}`,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
    location: locations[Math.floor(Math.random() * locations.length)],
    attendees: Math.floor(Math.random() * 500) + 50,
    capacity: Math.floor(Math.random() * 500) + 500,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

// Generate dummy users
export const generateUsers = (count: number = 20): User[] => {
  const roles = ['Admin', 'Manager', 'Staff', 'Coordinator'];
  const departments = ['Operations', 'Marketing', 'Sales', 'IT', 'HR'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `USR-${String(i + 1).padStart(4, '0')}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@organization.com`,
    role: roles[Math.floor(Math.random() * roles.length)],
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    department: departments[Math.floor(Math.random() * departments.length)],
  }));
};

// Generate organization chart data
export const generateOrgChart = (): OrgNode => {
  return {
    id: '1',
    name: 'John Smith',
    position: 'CEO',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ceo',
    email: 'john.smith@org.com',
    children: [
      {
        id: '2',
        name: 'Sarah Johnson',
        position: 'CTO',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cto',
        email: 'sarah.j@org.com',
        children: [
          {
            id: '5',
            name: 'Mike Chen',
            position: 'Engineering Manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=eng1',
            email: 'mike.c@org.com',
          },
          {
            id: '6',
            name: 'Lisa Wang',
            position: 'Product Manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pm1',
            email: 'lisa.w@org.com',
          },
        ],
      },
      {
        id: '3',
        name: 'David Brown',
        position: 'CFO',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cfo',
        email: 'david.b@org.com',
        children: [
          {
            id: '7',
            name: 'Emily Davis',
            position: 'Accounting Manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=acc1',
            email: 'emily.d@org.com',
          },
        ],
      },
      {
        id: '4',
        name: 'Maria Garcia',
        position: 'COO',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=coo',
        email: 'maria.g@org.com',
        children: [
          {
            id: '8',
            name: 'James Wilson',
            position: 'Operations Manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ops1',
            email: 'james.w@org.com',
          },
          {
            id: '9',
            name: 'Anna Lee',
            position: 'HR Manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hr1',
            email: 'anna.l@org.com',
          },
        ],
      },
    ],
  };
};

// Generate kanban tasks
export const generateKanbanTasks = (): Record<string, Task[]> => {
  const tasks: Task[] = [
    {
      id: 'TASK-001',
      title: 'Design new landing page',
      description: 'Create mockups for the new landing page',
      status: 'todo',
      assignee: 'John Doe',
      dueDate: '2024-12-20',
      priority: 'high',
      tags: ['design', 'ui'],
    },
    {
      id: 'TASK-002',
      title: 'Implement authentication',
      description: 'Add JWT authentication to the API',
      status: 'in-progress',
      assignee: 'Jane Smith',
      dueDate: '2024-12-18',
      priority: 'high',
      tags: ['backend', 'security'],
    },
    {
      id: 'TASK-003',
      title: 'Write documentation',
      description: 'Document the new API endpoints',
      status: 'review',
      assignee: 'Bob Johnson',
      dueDate: '2024-12-15',
      priority: 'medium',
      tags: ['docs'],
    },
    {
      id: 'TASK-004',
      title: 'Fix mobile responsiveness',
      description: 'Ensure all pages work on mobile devices',
      status: 'done',
      assignee: 'Alice Brown',
      dueDate: '2024-12-10',
      priority: 'medium',
      tags: ['frontend', 'mobile'],
    },
    {
      id: 'TASK-005',
      title: 'Set up CI/CD pipeline',
      description: 'Configure automated testing and deployment',
      status: 'todo',
      assignee: 'Charlie Wilson',
      dueDate: '2024-12-25',
      priority: 'low',
      tags: ['devops'],
    },
    {
      id: 'TASK-006',
      title: 'Database optimization',
      description: 'Optimize slow queries and add indexes',
      status: 'in-progress',
      assignee: 'David Lee',
      dueDate: '2024-12-22',
      priority: 'high',
      tags: ['backend', 'performance'],
    },
  ];

  return {
    todo: tasks.filter(t => t.status === 'todo'),
    'in-progress': tasks.filter(t => t.status === 'in-progress'),
    review: tasks.filter(t => t.status === 'review'),
    done: tasks.filter(t => t.status === 'done'),
  };
};

// Generate schedule sessions
export const generateScheduleSessions = (): ScheduleSession[] => {
  return [
    {
      id: 'SES-001',
      title: 'Opening Keynote',
      startTime: '2024-12-15T09:00:00',
      endTime: '2024-12-15T10:00:00',
      speaker: 'Dr. Jane Smith',
      room: 'Main Hall',
      category: 'Keynote',
      color: '#3b82f6',
    },
    {
      id: 'SES-002',
      title: 'AI in Healthcare',
      startTime: '2024-12-15T10:30:00',
      endTime: '2024-12-15T11:30:00',
      speaker: 'Prof. John Doe',
      room: 'Room A',
      category: 'Technical',
      color: '#10b981',
    },
    {
      id: 'SES-003',
      title: 'Workshop: Data Science',
      startTime: '2024-12-15T10:30:00',
      endTime: '2024-12-15T12:00:00',
      speaker: 'Dr. Sarah Johnson',
      room: 'Room B',
      category: 'Workshop',
      color: '#f59e0b',
    },
    {
      id: 'SES-004',
      title: 'Panel Discussion',
      startTime: '2024-12-15T13:00:00',
      endTime: '2024-12-15T14:00:00',
      speaker: 'Multiple Speakers',
      room: 'Main Hall',
      category: 'Panel',
      color: '#8b5cf6',
    },
    {
      id: 'SES-005',
      title: 'Networking Break',
      startTime: '2024-12-15T14:00:00',
      endTime: '2024-12-15T14:30:00',
      speaker: '',
      room: 'Lobby',
      category: 'Break',
      color: '#6b7280',
    },
  ];
};

// Dashboard statistics
export const getDashboardStats = () => ({
  totalRegistrations: 1247,
  activeEvents: 8,
  totalRevenue: 125430,
  attendanceRate: 87.5,
  monthlyGrowth: 12.3,
  recentRegistrations: generateRegistrations(5),
  upcomingEvents: generateEvents(3),
});
