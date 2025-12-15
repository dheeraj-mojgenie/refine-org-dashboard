import { useState } from 'react';
import {
  generateScheduleSessions,
  type ScheduleSession,
} from '@/shared/utils/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';

interface TimeSlot {
  time: string;
  hour: number;
}

const timeSlots: TimeSlot[] = [
  { time: '09:00', hour: 9 },
  { time: '10:00', hour: 10 },
  { time: '11:00', hour: 11 },
  { time: '12:00', hour: 12 },
  { time: '13:00', hour: 13 },
  { time: '14:00', hour: 14 },
  { time: '15:00', hour: 15 },
  { time: '16:00', hour: 16 },
  { time: '17:00', hour: 17 },
];

const rooms = ['Main Hall', 'Room A', 'Room B', 'Room C'];

export const ScientificSchedulerPage = () => {
  const [sessions] = useState(generateScheduleSessions());
  const [currentDate, setCurrentDate] = useState(new Date('2024-12-15'));
  const [view, setView] = useState<'day' | 'week'>('day');

  const getSessionsForTimeAndRoom = (hour: number, room: string) => {
    return sessions.filter((session) => {
      const startHour = new Date(session.startTime).getHours();
      return startHour === hour && session.room === room;
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Scientific Scheduler
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage conference sessions and schedules
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">+ Add Session</Button>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Date Navigation */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const newDate = new Date(currentDate);
                  newDate.setDate(newDate.getDate() - 1);
                  setCurrentDate(newDate);
                }}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 min-w-[200px] justify-center">
                <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  {currentDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const newDate = new Date(currentDate);
                  newDate.setDate(newDate.getDate() + 1);
                  setCurrentDate(newDate);
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* View Tabs */}
            <Tabs
              value={view}
              onValueChange={(v) => setView(v as 'day' | 'week')}
            >
              <TabsList>
                <TabsTrigger value="day">Day View</TabsTrigger>
                <TabsTrigger value="week">Week View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent>
          {/* Schedule Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-[100px_repeat(4,1fr)] gap-2 mb-2">
                <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                  Time
                </div>
                {rooms.map((room) => (
                  <div
                    key={room}
                    className="font-semibold text-gray-900 dark:text-white text-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  >
                    {room}
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {timeSlots.map((slot) => (
                <div
                  key={slot.time}
                  className="grid grid-cols-[100px_repeat(4,1fr)] gap-2 mb-2"
                >
                  {/* Time Label */}
                  <div className="flex items-start pt-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {slot.time}
                    </span>
                  </div>

                  {/* Room Cells */}
                  {rooms.map((room) => {
                    const roomSessions = getSessionsForTimeAndRoom(
                      slot.hour,
                      room
                    );

                    return (
                      <div
                        key={room}
                        className="min-h-[80px] border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900"
                      >
                        {roomSessions.map((session) => {
                          return (
                            <Card
                              key={session.id}
                              className="mb-2 border-l-4 hover:shadow-md transition-shadow cursor-pointer"
                              style={{ borderLeftColor: session.color }}
                            >
                              <CardContent className="p-3">
                                <div className="space-y-1">
                                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                                    {session.title}
                                  </h4>
                                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                    <Clock className="w-3 h-3" />
                                    <span>
                                      {new Date(
                                        session.startTime
                                      ).toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      })}{' '}
                                      -{' '}
                                      {new Date(
                                        session.endTime
                                      ).toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      })}
                                    </span>
                                  </div>
                                  {session.speaker && (
                                    <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                      <User className="w-3 h-3" />
                                      <span>{session.speaker}</span>
                                    </div>
                                  )}
                                  <Badge
                                    className="text-xs"
                                    style={{
                                      backgroundColor: `${session.color}20`,
                                      color: session.color,
                                    }}
                                  >
                                    {session.category}
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Session Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: '#3b82f6' }}
              ></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Keynote
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: '#10b981' }}
              ></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Technical
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: '#f59e0b' }}
              ></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Workshop
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: '#8b5cf6' }}
              ></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Panel
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: '#6b7280' }}
              ></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Break
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
