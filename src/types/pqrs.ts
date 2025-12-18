/**
 * PQRS Types
 * Types for Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones
 */

export type PQRSCategory = 'petition' | 'complaint' | 'claim' | 'suggestion' | 'congratulation';

export type PQRSStatus = 'pending' | 'inReview' | 'responded' | 'closed';

export interface CreatePQRSRequest {
  name: string;
  email?: string;
  phone: string;
  message: string;
  location: string;
  category: PQRSCategory;
}

export interface PQRSResponse {
  id: string;
  filing_number?: string;
  name: string;
  email?: string;
  phone: string;
  message: string;
  location: string;
  category: string;
  status: string;
  created_at: string;
  updated_at?: string;
}

export interface CreatePQRSResponse {
  success: boolean;
  data: PQRSResponse;
  message?: string;
}

export interface GetPQRSResponse {
  success: boolean;
  data: PQRSResponse | null;
  message?: string;
}
