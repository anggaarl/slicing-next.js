import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="pr-32 h-16 content-center border-r border-gray-5 cursor-pointer">
          <Image
            src="/images/studio-logo.png"
            alt="Studio Logo"
            width={110}
            height={21}
          />
        </div>

        {/* Hamburger */}
        <div className="flex items-center px-1 cursor-pointer">
          <Image
            src="/images/hamburger.png"
            alt="Nav Butt"
            width={20}
            height={20}
          />
        </div>

        <div className="flex items-center w-4/5 bg-grey border border-gray-300 rounded-full pr-4">
          {/* Search Icon */}
          <div className="px-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search your route..."
            className="w-full pr-40 py-2 bg-grey text-xs justify-start focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-6">
        <button className="px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-full hover:bg-green-700 border-r border-gray-5">
          Create Shop
        </button>
        <button className="flex items-center gap-1 bg-grey h-8 px-4 py-2 text-xs font-medium text-green-600 border border-green-600 rounded-full hover:bg-green-50">
          {/* Icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.91546 1.6875C3.54271 1.6875 3.18496 1.836 2.92171 2.1L1.94671 3.0735C1.44288 3.57639 1.14849 4.25163 1.12291 4.96304C1.09734 5.67444 1.34247 6.36907 1.80889 6.90685C2.27531 7.44463 2.9283 7.78553 3.63617 7.86081C4.34404 7.93609 5.05412 7.74015 5.62321 7.3125C6.09346 7.665 6.67771 7.875 7.31071 7.875C7.94371 7.875 8.52871 7.665 8.99821 7.3125C9.46771 7.665 10.0527 7.875 10.6857 7.875C11.3187 7.875 11.903 7.665 12.3732 7.3125C12.9423 7.74015 13.6524 7.93609 14.3602 7.86081C15.0681 7.78553 15.7211 7.44463 16.1875 6.90685C16.6539 6.36907 16.8991 5.67444 16.8735 4.96304C16.8479 4.25163 16.5535 3.57639 16.0497 3.0735L15.0747 2.09925C14.8111 1.83573 14.4537 1.68763 14.081 1.6875H3.91546Z"
              fill="#0D9965"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 15.1881V8.62184C3.315 9.12734 4.56 9.12659 5.625 8.62184C6.15235 8.87198 6.72884 9.00137 7.3125 9.00059C7.9155 9.00059 8.4885 8.86409 9 8.62109C9.52729 8.87149 10.1038 9.00113 10.6875 9.00059C11.2905 9.00059 11.8628 8.86409 12.375 8.62109C13.44 9.12659 14.685 9.12734 15.75 8.62184V15.1881H16.3125C16.4617 15.1881 16.6048 15.2474 16.7102 15.3529C16.8157 15.4584 16.875 15.6014 16.875 15.7506C16.875 15.8998 16.8157 16.0429 16.7102 16.1484C16.6048 16.2539 16.4617 16.3131 16.3125 16.3131H1.6875C1.53832 16.3131 1.39524 16.2539 1.28975 16.1484C1.18426 16.0429 1.125 15.8998 1.125 15.7506C1.125 15.6014 1.18426 15.4584 1.28975 15.3529C1.39524 15.2474 1.53832 15.1881 1.6875 15.1881H2.25ZM4.5 10.6881C4.5 10.5389 4.55926 10.3959 4.66475 10.2904C4.77024 10.1849 4.91332 10.1256 5.0625 10.1256H7.3125C7.46168 10.1256 7.60476 10.1849 7.71025 10.2904C7.81574 10.3959 7.875 10.5389 7.875 10.6881V12.9381C7.875 13.0873 7.81574 13.2304 7.71025 13.3359C7.60476 13.4414 7.46168 13.5006 7.3125 13.5006H5.0625C4.91332 13.5006 4.77024 13.4414 4.66475 13.3359C4.55926 13.2304 4.5 13.0873 4.5 12.9381V10.6881ZM10.6875 10.1256C10.5383 10.1256 10.3952 10.1849 10.2898 10.2904C10.1843 10.3959 10.125 10.5389 10.125 10.6881V14.6256C10.125 14.9361 10.377 15.1881 10.6875 15.1881H12.9375C13.0867 15.1881 13.2298 15.1289 13.3352 15.0234C13.4407 14.9179 13.5 14.7748 13.5 14.6256V10.6881C13.5 10.5389 13.4407 10.3959 13.3352 10.2904C13.2298 10.1849 13.0867 10.1256 12.9375 10.1256H10.6875Z"
              fill="#0D9965"
            />
          </svg>

          {/* Text */}
          <span>Visit Store</span>
        </button>

        {/* Icon Buttons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full">
            <Image src="/images/cart.png" alt="Cart" width={50} height={50} />
          </button>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-2">
              <p className="text-xs font-medium">Wesclicdev</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
