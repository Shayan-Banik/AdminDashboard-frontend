import { Bell, ChevronDown, Filter, Menu, Moon, Plus, Search, Settings, Sun } from "lucide-react";
const Header = ({onToggleSidebar}) => {

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-5 ">
      <div className="flex items-center justify-between ">
        <div className="left flex items-center space-x-4">
          <button 
          onClick={onToggleSidebar}
           className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ">
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white ">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 ">
              Welcome back, John! here's happening today
            </p>
          </div>
        </div>
        <div className="flex-1 max-w-md  mx-8 hidden sm:block ">
          <div className="relative w-full ">
            <Search className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400 " />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
            <Filter className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 " />
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-sky-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all cursor-pointer ">
            <Plus className="w-5 h-5" />
            <span className="text-sm font-bold ">New</span>
          </button>
          <button  className=" text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">
            <Sun className="w-6 h-6" />
          </button>
          <button  className="relative text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors  ">
           <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center border-2 border-white dark:border-slate-900 text-xs">2</span>
          </button>
          <button className=" hidden sm:inline text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors  ">
            <Settings className="w-6 h-6 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors  " />
          </button>
          <div className="hidden md:flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700 ">
            <img
              src="https://i.pravatar.cc/300"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover "
            />
            <div className="hidden md:block">
                <p className="text-sm text-slate-800 dark:text-white ml-2 ">John Doe</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-300 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
