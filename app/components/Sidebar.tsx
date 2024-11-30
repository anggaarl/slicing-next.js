import {
  HomeIcon,
  CubeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-60  bg-white border-r shadow-sm">
      {/* Main Section */}
      <div className="px-6 py-4">
        <h2 className="text-xs font-semibold pb-2 text-gray-400 uppercase">Main</h2>
        <ul>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <HomeIcon className="w-4 h-4" />
              Dashboard
            </a>
          </li>
        </ul>
      </div>

      {/* Product Management Section */}
      <div className="px-6">
        <h2 className="text-xs font-semibold pb-2 text-gray-400 uppercase">
          Product Management
        </h2>
        <ul>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <CubeIcon className="w-4 h-4" />
              Knowledge Base
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <ShoppingBagIcon className="w-4 h-4" />
              Inventory
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <CurrencyDollarIcon className="w-4 h-4" />
              Marketing Kit
            </a>
          </li>
        </ul>
      </div>

      {/* Financial Management Section */}
      <div className="px-6 py-4">
        <h2 className="text-xs font-semibold pb-2 text-gray-400 uppercase">
          Financial Management
        </h2>
        <ul>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <CurrencyDollarIcon className="w-4 h-4" />
              Withdrawals
            </a>
          </li>
        </ul>
      </div>

      {/* Order Management Section */}
      <div className="px-6">
        <h2 className="text-xs font-semibold pb-2 text-gray-400 uppercase">
          Order Management
        </h2>
        <ul>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <ShoppingBagIcon className="w-4 h-4" />
              Orders
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <CurrencyDollarIcon className="w-4 h-4" />
              Transactions
            </a>
          </li>
        </ul>
      </div>

      {/* Feedback Control Section */}
      <div className="px-6 py-4">
        <h2 className="text-xs font-semibold pb-2 text-gray-400 uppercase">
          Feedback Control
        </h2>
        <ul>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <StarIcon className="w-4 h-4" />
              Reviews
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <QuestionMarkCircleIcon className="w-4 h-4" />
              Questions
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <ExclamationTriangleIcon className="w-4 h-4" />
              Bug Report
            </a>
          </li>
        </ul>
      </div>

      {/* User Control Section */}
      <div className="px-6">
        <h2 className="text-xs font-semibold pb-2 text-gray-400 uppercase">
          User Control
        </h2>
        <ul>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center gap-2 p-2 pl-0 text-xs font-normal text-gray-700 rounded hover:bg-green-50 hover:text-green-800"
            >
              <UserGroupIcon className="w-4 h-4" />
              Staff
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
