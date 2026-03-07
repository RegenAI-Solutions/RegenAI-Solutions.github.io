import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export function Layout() {
  const { user, isAdmin, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/api-keys", label: "API Keys" },
  ];

  if (isAdmin) {
    navItems.push({ path: "/admin/users", label: "Users" });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="text-xl font-bold text-gray-900">
              RegenAI
            </Link>
            <nav className="flex gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {user?.full_name || user?.username}
              {isAdmin && (
                <span className="ml-2 rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-700">
                  Admin
                </span>
              )}
            </span>
            <button
              onClick={logout}
              className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
