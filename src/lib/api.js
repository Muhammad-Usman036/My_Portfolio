const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  async submitContact(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit contact form');
      }

      return data;
    } catch (error) {
      console.error('Contact API error:', error);
      throw error;
    }
  },

  async getProjects(featured, category) {
    try {
      const params = new URLSearchParams();
      if (featured) params.append('featured', 'true');
      if (category) params.append('category', category);

      const response = await fetch(`${API_BASE_URL}/projects?${params.toString()}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch projects');
      }

      return data;
    } catch (error) {
      console.error('Projects API error:', error);
      throw error;
    }
  },

  async downloadResume() {
    try {
      const response = await fetch(`${API_BASE_URL}/resume/download`, {
        method: 'GET',
      });

      if (!response.ok) {
        // Try to get error message from response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to download resume (${response.status})`);
      }

      // Check if response is actually a PDF
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/pdf')) {
        // If not PDF, might be JSON error
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Invalid file type received');
      }

      // Get the blob from response
      const blob = await response.blob();
      
      // Create a temporary URL and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Muhammad_Usman_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Resume download error:', error);
      throw error;
    }
  },
};


