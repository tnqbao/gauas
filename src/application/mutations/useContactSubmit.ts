/**
 * useContactSubmit Hook
 * TanStack Query mutation hook for contact form submission
 */

import { useMutation } from '@tanstack/react-query';
import { ContactFormData, ContactResponse } from '@/src/domain/types';
import { apiClient } from '@/src/infrastructure/api/client';

export const useContactSubmit = () => {
  return useMutation<ContactResponse, Error, ContactFormData>({
    mutationFn: async (data: ContactFormData) => {
      // Call API endpoint for contact submission
      const response = await apiClient.post<ContactResponse>(
        '/contact',
        data
      );

      if (response.error) {
        throw new Error(response.error);
      }

      return response.data;
    },
  });
};
