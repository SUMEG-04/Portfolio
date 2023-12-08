// /src/services/api.js

const API_BASE_URL = 'http://localhost:3000/api'; // Update with your backend URL

const headers = {
  'Content-Type': 'application/json',
  // Add any other headers if needed, such as authorization headers
};

const api = {
  // Admin functionality
  admin: {
    login: async (credentials) => {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/login`, {
          method: 'POST',
          credentials:"include",
          headers,
          body: JSON.stringify(credentials),
        });

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error during admin login:', error);
        throw error;
      }
    },

    getAllAdmins: async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/admins`, {
          method: 'GET',
          credentials:"include",
          headers,
        });

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error getting all admins:', error);
        throw error;
      }
    },

    addNewAdmin: async (adminData) => {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/admins`, {
          method: 'POST',
          credentials:"include",
          headers,
          body: JSON.stringify(adminData),
        });

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error adding new admin:', error);
        throw error;
      }
    },
    getCurrentAdmin: async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/admin/current`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error getting current admin:', error);
          throw error;
        }
      },
  },

  // Project functionality
project: {
  getAllProjects: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/project/projects`, {
        method: 'GET',
        credentials: "include",
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting all projects:', error);
      throw error;
    }
  },

  getProjectbyId: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/project/projects/${id}`, {
        method: 'GET',
        credentials: "include",
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting all projects:', error);
      throw error;
    }
  },

  addNewProject: async (projectData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/project/projects`, {
        method: 'POST',
        credentials: "include",
        body: projectData,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding new project:', error);
      throw error;
    }
  },

  deleteProject: async (projectId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/project/projects/${projectId}`, {
        method: 'DELETE',
        credentials: "include",
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  },
},

// Blog functionality
blog: {
  getAllBlogPosts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blog/posts`, {
        method: 'GET',
        credentials: "include",
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting all blog posts:', error);
      throw error;
    }
  },

  getBlogbyId: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blog/posts/${id}`, {
        method: 'GET',
        credentials: "include",
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting all projects:', error);
      throw error;
    }
  },

  addNewBlogPost: async (blogData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blog/posts`, {
        method: 'POST',
        credentials: "include",
        body:blogData,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding new blog post:', error);
      throw error;
    }
  },

  deleteBlogPost: async (blogId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blog/posts/${blogId}`, {
        method: 'DELETE',
        credentials: "include",
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }
    },
  },

};

export default api;
