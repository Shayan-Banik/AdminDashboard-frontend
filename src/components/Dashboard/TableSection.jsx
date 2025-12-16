import { MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react";

const orders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,005",
    status: "completed",
    date: "2024-01-12",
  },
  {
    id: "#3848",
    customer: "Emily Johnson",
    product: "iPhone 15 Pro",
    amount: "$1,299",
    status: "pending",
    date: "2024-01-13",
  },
  {
    id: "#3849",
    customer: "Michael Brown",
    product: "Apple Watch Ultra",
    amount: "$799",
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "#3850",
    customer: "Sophia Williams",
    product: "iPad Pro 12.9",
    amount: "$1,099",
    status: "cancelled",
    date: "2024-01-15",
  },
  {
    id: "#3851",
    customer: "Daniel Miller",
    product: "AirPods Max",
    amount: "$549",
    status: "completed",
    date: "2024-01-16",
  },
  {
    id: "#3852",
    customer: "Olivia Davis",
    product: "Mac Mini M2",
    amount: "$699",
    status: "pending",
    date: "2024-01-17",
  },
  {
    id: "#3853",
    customer: "James Wilson",
    product: "iMac 24-inch",
    amount: "$1,499",
    status: "completed",
    date: "2024-01-18",
  },
  {
    id: "#3854",
    customer: "Ava Martinez",
    product: "Magic Keyboard",
    amount: "$199",
    status: "completed",
    date: "2024-01-19",
  },
  {
    id: "#3855",
    customer: "Liam Anderson",
    product: "MacBook Air M2",
    amount: "$1,199",
    status: "pending",
    date: "2024-01-20",
  },
  {
    id: "#3856",
    customer: "Isabella Taylor",
    product: "Studio Display",
    amount: "$1,599",
    status: "completed",
    date: "2024-01-21",
  },
];

const topProducts = [
  {
    id: 1,
    name: "MacBook Pro 16",
    sales: 1240,
    revenue: "$2.48M",
    change: "+12%",
    trend: "up"
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    sales: 2180,
    revenue: "$2.83M",
    change: "+18%",
    trend: "up"
  },
  {
    id: 3,
    name: "iPad Pro 12.9",
    sales: 980,
    revenue: "$1.07M",
    change: "-6%",
    trend: "down"
  },
  {
    id: 5,
    name: "MacBook Air M2",
    sales: 1420,
    revenue: "$1.70M",
    change: "+14%",
    trend: "up"
  },
  {
    id: 6,
    name: "AirPods Pro",
    sales: 1950,
    revenue: "$487K",
    change: "-4%",
    trend: "down"
  },
  {
    id: 7,
    name: "iMac 24-inch",
    sales: 640,
    revenue: "$959K",
    change: "+7%",
    trend: "up"
  },
  {
    id: 9,
    name: "Studio Display",
    sales: 410,
    revenue: "$656K",
    change: "-3%",
    trend: "down"
  },
  {
    id: 10,
    name: "Magic Keyboard",
    sales: 1320,
    revenue: "$263K",
    change: "+5%",
    trend: "up"
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest Customer Orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-500">
                  Order Id
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-500">
                  Customer
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-500">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-500">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-500">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <span className="text-sm font-medium text-pink-500 dark:text-purple-200">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.customer}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.amount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-xs w-full px-3 py-1 text-slate-400 dark:text-white font-medium rounded-full ${getStatusColor(
                        order.status
                      )}`}>
                      {order.date}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Top Products */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800 dark:text-white">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Best performing products
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="p-6 space-y-4">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-slate-800 dark:text-white">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {product.sales}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-600 dark:text-white">{product.revenue}</p>
                <div className="flex items-center space-x-1">
                  {product.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}

                  <span className="text-slate-600 dark:text-white">{product.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
