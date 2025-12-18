/**
 * PQRS API Service
 * Service for managing Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones
 */

import env from '../config/env';
import type { CreatePQRSRequest, CreatePQRSResponse, GetPQRSResponse } from '../types/pqrs';

const SUPABASE_URL = env.supabase.url;
const SUPABASE_ANON_KEY = env.supabase.anonKey;

/**
 * Create a new PQRS
 */
export async function createPQRS(data: CreatePQRSRequest): Promise<CreatePQRSResponse> {
  try {
    console.log('Creating PQRS with data:', data);
    console.log('URL:', `${SUPABASE_URL}/functions/v1/pqr/create`);
    
    const response = await fetch(`${SUPABASE_URL}/functions/v1/pqr/create`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(data),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error response:', errorData);
      throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Success response:', result);
    
    // Si la respuesta tiene un campo 'data', usar ese, sino usar la respuesta completa
    const pqrsData = result.data || result;
    
    return {
      success: true,
      data: pqrsData,
    };
  } catch (error) {
    console.error('Error creating PQRS:', error);
    return {
      success: false,
      data: null as any,
      message: error instanceof Error ? error.message : 'Error al crear la solicitud. Verifica tu conexión a internet.',
    };
  }
}

/**
 * Get PQRS by ID
 */
export async function getPQRSById(pqrId: string): Promise<GetPQRSResponse> {
  try {
    console.log('Fetching PQRS with ID:', pqrId);
    console.log('URL:', `${SUPABASE_URL}/functions/v1/pqr/${pqrId}`);
    
    const response = await fetch(`${SUPABASE_URL}/functions/v1/pqr/${pqrId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      if (response.status === 404) {
        return {
          success: false,
          data: null,
          message: 'No se encontró ninguna solicitud con este número de radicado',
        };
      }
      const errorData = await response.json().catch(() => ({}));
      console.error('Error response:', errorData);
      throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Success response:', result);
    
    // Si la respuesta tiene un campo 'data', usar ese, sino usar la respuesta completa
    const pqrsData = result.data || result;
    
    return {
      success: true,
      data: pqrsData,
    };
  } catch (error) {
    console.error('Error fetching PQRS:', error);
    return {
      success: false,
      data: null,
      message: error instanceof Error ? error.message : 'Error al consultar la solicitud. Verifica tu conexión a internet.',
    };
  }
}
