/**
 * API endpoints constants
 * Define all API endpoints here for centralized management
 */

export const Endpoints = {
  // Auth endpoints
  auth: {
    login: '/StaffProfile/Login',
    logout: '/StaffProfile/Logout',
    refreshToken: '/StaffProfile/RefreshToken',
    profile: '/StaffProfile/Profile',
  },
  
  // Add more endpoint groups as needed
  // Example:
  // users: {
  //   list: '/Users',
  //   detail: (id: string | number) => `/Users/${id}`,
  //   create: '/Users',
  //   update: (id: string | number) => `/Users/${id}`,
  //   delete: (id: string | number) => `/Users/${id}`,
  // },
} as const;
