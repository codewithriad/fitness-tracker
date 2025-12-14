type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions extends RequestInit {
  data?: unknown;
}

class ApiClient {
  private async request<T>(endpoint: string, method: RequestMethod, options: FetchOptions = {}): Promise<T> {
    const { data, headers, ...customConfig } = options;

    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...customConfig,
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    const response = await fetch(`/api${endpoint}`, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Something went wrong' }));
      throw new Error(error.message || 'API request failed');
    }

    return response.json();
  }

  get<T>(endpoint: string, options?: FetchOptions) {
    return this.request<T>(endpoint, 'GET', options);
  }

  post<T>(endpoint: string, data: unknown, options?: FetchOptions) {
    return this.request<T>(endpoint, 'POST', { ...options, data });
  }

  put<T>(endpoint: string, data: unknown, options?: FetchOptions) {
    return this.request<T>(endpoint, 'PUT', { ...options, data });
  }

  delete<T>(endpoint: string, options?: FetchOptions) {
    return this.request<T>(endpoint, 'DELETE', options);
  }
}

export const apiClient = new ApiClient();
