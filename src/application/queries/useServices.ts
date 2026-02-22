/**
 * useServices Hook
 * TanStack Query hook for fetching services data
 */

import { useQuery } from '@tanstack/react-query';
import { SERVICE_CATEGORIES } from '@/src/domain/constants/services';

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      // Return services from constants
      return Object.values(SERVICE_CATEGORIES);
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useServiceById = (id: number) => {
  return useQuery({
    queryKey: ['service', id],
    queryFn: async () => {
      return Object.values(SERVICE_CATEGORIES).find(
        (service) => service.id === id
      );
    },
    enabled: !!id,
  });
};
