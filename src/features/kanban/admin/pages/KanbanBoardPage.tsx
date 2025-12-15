import { useState } from 'react';
import { generateKanbanTasks, type Task } from '@/shared/utils/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Plus, MoreVertical, Calendar, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const priorityColors = {
  low: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  medium: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  high: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
};

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card className="mb-3 hover:shadow-md transition-shadow duration-200 cursor-move">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
            {task.title}
          </h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Move to...</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
          {task.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Calendar className="w-3 h-3" />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
          <Badge className={priorityColors[task.priority]}>
            {task.priority}
          </Badge>
        </div>

        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <Avatar className="w-6 h-6">
            <AvatarFallback className="text-xs">
              {task.assignee
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {task.assignee}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

interface ColumnProps {
  title: string;
  tasks: Task[];
  color: string;
}

const Column = ({ title, tasks, color }: ColumnProps) => {
  return (
    <div className="flex-1 min-w-[280px]">
      <Card className="h-full">
        <CardHeader className={`${color} rounded-t-lg`}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
              {title}
              <Badge variant="secondary" className="bg-white/20 text-white">
                {tasks.length}
              </Badge>
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-3 bg-gray-50 dark:bg-gray-800/50 min-h-[500px]">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {tasks.length === 0 && (
            <div className="text-center py-8 text-gray-400 dark:text-gray-600">
              <p className="text-sm">No tasks</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export const KanbanBoardPage = () => {
  const [tasks] = useState(generateKanbanTasks());

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Kanban Board
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage tasks and track progress
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        <Column
          title="To Do"
          tasks={tasks.todo}
          color="bg-gradient-to-r from-gray-600 to-gray-700"
        />
        <Column
          title="In Progress"
          tasks={tasks['in-progress']}
          color="bg-gradient-to-r from-blue-600 to-blue-700"
        />
        <Column
          title="Review"
          tasks={tasks.review}
          color="bg-gradient-to-r from-orange-600 to-orange-700"
        />
        <Column
          title="Done"
          tasks={tasks.done}
          color="bg-gradient-to-r from-green-600 to-green-700"
        />
      </div>
    </div>
  );
};
