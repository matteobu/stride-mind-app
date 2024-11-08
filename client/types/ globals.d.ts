declare module 'react-big-calendar' {
  import { ComponentType } from 'react';

  export interface CalendarProps<TEvent = any, TResource = any> {
    events?: TEvent[];
    views?: any;
    startAccessor?: string | ((event: TEvent) => Date);
    endAccessor?: string | ((event: TEvent) => Date);
    localizer?: any;
    style?: React.CSSProperties;
    // Add other props as needed
  }

  export const Calendar: ComponentType<CalendarProps>;
  export const dateFnsLocalizer: (config: any) => any;
}
