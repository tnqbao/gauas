/**
 * Domain Types
 * Shared type definitions for the application
 */

export interface Skill {
  id: number;
  name: string;
  icon: string;
  description?: string;
}

export interface Service {
  id: number;
  titleKey: string;
  descKey: string;
  icon: any;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface DevTool {
  name: string;
  icon: string;
}

export interface ProgrammingLanguage {
  name: string;
  icon: string;
}

export interface ApiResponse<T> {
  data: T;
  error: string | null;
}
