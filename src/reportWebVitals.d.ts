// src/reportWebVitals.d.ts
declare module 'reportWebVitals' {
  import { Metric } from 'web-vitals';

  const reportWebVitals: (onPerfEntry?: (metric: Metric) => void) => void;
  export default reportWebVitals;
}

