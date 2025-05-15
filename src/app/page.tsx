import PostFeed from '@/components/PostFeed';

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-8 py-4">
      {/* Left Sidebar */}
      <div className="bg-blue-50 rounded-lg shadow p-4 h-fit sticky top-4">
        <h2 className="text-xl font-bold text-primary mb-4">SoVery</h2>
        <nav className="space-y-2">
          <a href="#" className="flex items-center text-text hover:text-primary transition p-2 rounded hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-sm ml-2">Home</span>
          </a>
          <a href="#" className="flex items-center text-text hover:text-primary transition p-2 rounded hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-sm ml-2">Profile</span>
          </a>
          <a href="#" className="flex items-center text-text hover:text-primary transition p-2 rounded hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
              <polyline points="15,9 18,9 18,14"></polyline>
              <path d="M6 10h2"></path>
              <path d="M6 14h4"></path>
            </svg>
            <span className="text-sm ml-2">Notifications</span>
          </a>
          <a href="#" className="flex items-center text-text hover:text-primary transition p-2 rounded hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className="text-sm ml-2">Messages</span>
          </a>
        </nav>
      </div>
      
      {/* Middle column - Feed */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <PostFeed />
      </div>
      
      {/* Right Sidebar */}
      <div className="bg-pink-50 rounded-lg shadow p-4 h-fit sticky top-4">
        <h2 className="text-xl font-bold mb-4">Who to follow</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">Taylor Swift</p>
                <p className="text-sm text-gray-500">@taylorswift</p>
              </div>
            </div>
            <button className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">Elon Musk</p>
                <p className="text-sm text-gray-500">@elonmusk</p>
              </div>
            </div>
            <button className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">Bill Gates</p>
                <p className="text-sm text-gray-500">@billgates</p>
              </div>
            </div>
            <button className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 transition">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 