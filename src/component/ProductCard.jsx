export default function ProductCard() {
    return (
      <div className="col-span-3 mt-6">
        <div className="max-w-sm w-full p-4 shadow-lg rounded-lg border">
          <div>
            <img
              src="https://www.frostnyc.com/cdn/shop/products/green_1_a87d568c-e6cf-4228-ae04-10ceb30bf71e.jpg?v=1742233411"
              alt="Watch"
              className="w-full max-h-80 object-contain rounded-lg"
            />
          </div>
          <div className="mt-4">
            <label className="block text-lg font-semibold">Garmin For Runner 4</label>
            <p className="flex items-center justify-between text-gray-700 font-medium">
              $120.00
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 15.883L17.191 8.383C18.4872 7.08786 18.8084 5.10828 17.9883 3.46975C17.3766 2.24665 16.2142 1.39215 14.8643 1.17313C13.5144 0.954121 12.1416 1.3973 11.1745 2.36425L10 3.538L8.82552 2.36425C7.85848 1.3973 6.4856 0.954121 5.13572 1.17313C3.78583 1.39215 2.6235 2.24665 2.01177 3.46975C1.1928 5.10758 1.51363 7.08571 2.80827 8.38075L10 15.883Z"
                  fill="#F93C65"
                  stroke="#F93C65"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
  
            <div className="flex mt-2 space-x-1">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 10.88L3.29772 14.4721L5.26096 8.88997L0.391548 5.52786L6.30718 5.67003L8 0L9.69282 5.67003L15.6085 5.52786L10.739 8.88997L12.7023 14.4721L8 10.88Z"
                    fill="#FF9500"
                  />
                </svg>
              ))}
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 10.88L3.29772 14.4721L5.26096 8.88997L0.391548 5.52786L6.30718 5.67003L8 0L9.69282 5.67003L15.6085 5.52786L10.739 8.88997L12.7023 14.4721L8 10.88Z"
                  fill="black"
                />
              </svg>
            </div>
  
            <p className="mt-1 text-sm text-gray-500">300 reviews</p>
  
            <div className="mt-4">
              <button className="bg-[#E2EAF8] px-6 py-2 rounded-xl font-medium hover:bg-[#d0def0]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  