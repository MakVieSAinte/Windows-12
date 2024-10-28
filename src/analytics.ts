// src/analytics.ts
import { inject } from '@vercel/analytics';

export default function initializeAnalytics(): void {
  inject(); // Injection du script Analytics de Vercel
}
