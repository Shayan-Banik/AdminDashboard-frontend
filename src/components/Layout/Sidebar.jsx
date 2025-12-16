import {
  Zap,
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    count: "2.7K",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "e-commerce",
    label: "ECommerce",
    icon: ShoppingBag,
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    count: "456",
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageSquare,
    count: "44",
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: CreditCard,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: Calendar,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileText,
  },
];
const Sidebar = ({ collapsed, activePage, onChangePage, sidebarOpen, onClose }) => {
  const [selectPage, setselectPage] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // lock background scroll when mobile sidebar is open
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sidebarOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev || '';
      };
    }
  }, [sidebarOpen]);

  return (
    // Container: on small screens render an overlay + slide-in panel when `sidebarOpen` is true.
    <>
      {/* Backdrop for mobile */}
      <div
        role="presentation"
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}></div>

      <div
        className={`transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col z-30 ${
          collapsed ? 'md:w-16' : 'md:w-72'
        } ${
          sidebarOpen ? 'fixed inset-y-0 left-0 w-64 translate-x-0 pointer-events-auto' : 'fixed inset-y-0 left-0 w-64 -translate-x-full pointer-events-none md:pointer-events-auto md:relative md:translate-x-0'
        }`}
        style={{ willChange: 'transform' }}>
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 ">
          <div className="w-10 h-10 bg-gradient-to-r from-sky-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg ">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {/* mobile close button */}
          <div className="ml-auto md:hidden">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {!collapsed && (
            <div className="">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white ">
                Admin Hub
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 ">
                Control & Management Panel
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex-1 flex-col items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
              item.active || activePage === item.id
                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                : "text-slate-600 dark:text-slate-300"
            }`}
            onClick={() => {
              onChangePage(item.id);
              if (item.submenu) {
                setselectPage(!selectPage);
              }
              setOpenMenu(openMenu === item.id ? null : item.id);
            }}>
            <div className="flex gap-5 items-center ">
              <div className=" flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
                <div className=" flex flex-col items-center space-x-2">
                  {item.badge && (
                    <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full ">
                      {item.badge}
                    </span>
                  )}
                  {item.count && (
                    <span className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded-full ">
                      {item.count}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1 flex justify-end">
                {!collapsed && item.submenu && (
                  <ChevronDown
                    className={` w-4 h-4 text-slate-600 dark:text-slate-300 `}
                    style={{
                      transform:
                        openMenu === item.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                )}
              </div>
            </div>
            {/* sub menu */}

            {!collapsed && item.submenu && (
              <div
                className={`ml-10 mt-1 -space-y-1 ${
                  openMenu === item.id
                    ? "max-h-50 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                } `}>
                {item.submenu.map((sub) => (
                  <button
                    className={`flex py-3 text-slate-400 hover:text-slate-200 text-[15px] cursor-pointer transition-all
                      `}>
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
  {/* User Profile */}
  {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50  ">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 ">
            <img
              src="https://i.pravatar.cc/300"
              alt="User Avatar"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500 "
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-white ">
                  John Doe
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate ">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Sidebar;
