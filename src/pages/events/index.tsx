import { useState } from 'react';
import { generateEvents, type Event } from '@/shared/utils/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Plus,
  Grid3x3,
  List,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  events: Event[];
}

export const EventsPage = () => {
  const [events] = useState(generateEvents(20));
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  // Calendar logic
  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const startingDayOfWeek = firstDay.getDay();
    const days: CalendarDay[] = [];

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthLastDay - i);
      days.push({
        date,
        isCurrentMonth: false,
        events: getEventsForDate(date),
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({
        date,
        isCurrentMonth: true,
        events: getEventsForDate(date),
      });
    }

    // Next month days to complete the grid
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      days.push({
        date,
        isCurrentMonth: false,
        events: getEventsForDate(date),
      });
    }

    return days;
  };

  const getEventsForDate = (date: Date): Event[] => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const today = () => {
    setCurrentDate(new Date());
  };

  const calendarDays = getDaysInMonth(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getStatusColor = (status: Event['status']) => {
    const colors = {
      upcoming: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      ongoing:
        'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      completed:
        'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300',
    };
    return colors[status];
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Events Calendar
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and view all your events
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Date Navigation */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={previousMonth}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 min-w-[200px] justify-center">
                <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  {currentDate.toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={today} className="ml-2">
                Today
              </Button>
            </div>

            {/* View Toggle */}
            <Tabs
              value={view}
              onValueChange={(v) => setView(v as 'calendar' | 'list')}
            >
              <TabsList>
                <TabsTrigger value="calendar">
                  <Grid3x3 className="w-4 h-4 mr-2" />
                  Calendar
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List className="w-4 h-4 mr-2" />
                  List
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>

        <CardContent>
          {view === 'calendar' ? (
            <div className="space-y-2">
              {/* Week Days Header */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-center font-semibold text-sm text-gray-700 dark:text-gray-300 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                  const isToday =
                    day.date.toDateString() === new Date().toDateString();

                  return (
                    <div
                      key={index}
                      className={`min-h-[100px] border rounded-lg p-2 ${
                        day.isCurrentMonth
                          ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
                          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800'
                      } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                    >
                      <div
                        className={`text-sm font-medium mb-1 ${
                          day.isCurrentMonth
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-400 dark:text-gray-600'
                        } ${isToday ? 'text-blue-600 dark:text-blue-400' : ''}`}
                      >
                        {day.date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {day.events.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded truncate cursor-pointer hover:opacity-80 ${getStatusColor(
                              event.status
                            )}`}
                            title={event.name}
                          >
                            {event.name}
                          </div>
                        ))}
                        {day.events.length > 2 && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                            +{day.events.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {events
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .map((event) => (
                  <Card
                    key={event.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                              {event.name}
                            </h3>
                            <Badge className={getStatusColor(event.status)}>
                              {event.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {new Date(event.date).toLocaleDateString(
                                  'en-US',
                                  {
                                    weekday: 'short',
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>
                                {event.attendees} / {event.capacity} attendees
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                      {/* Progress Bar */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                          <span>Capacity</span>
                          <span>
                            {Math.round(
                              (event.attendees / event.capacity) * 100
                            )}
                            %
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{
                              width: `${Math.min(
                                (event.attendees / event.capacity) * 100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {events.length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {events.filter((e) => e.status === 'upcoming').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Attendees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {events.reduce((sum, e) => sum + e.attendees, 0)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
