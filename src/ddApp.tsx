import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d4a5c8] via-[#b89ac7] to-[#7b6ba3] flex items-start justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <h1 className="text-white text-2xl font-normal mb-8 tracking-wide">let's hang</h1>
        
        <div className="flex gap-8">
          {/* Left Column - Invitation Card */}
          <div className="w-[440px] flex-shrink-0">
            <div className="bg-gradient-to-br from-[#e8a8c8] via-[#b8a0e0] to-[#8890e8] rounded-3xl p-8 aspect-[3/4] relative overflow-hidden shadow-xl">
              {/* Invitation Text */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-white font-bold text-center leading-tight">
                  <div className="text-[88px] tracking-tighter">YOU'RE</div>
                  <div className="text-[88px] tracking-tighter -mt-4">INVITED</div>
                </div>
              </div>
              
              {/* Edit Icon */}
              <button className="absolute bottom-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            
            {/* Change Background Button */}
            <button className="w-full mt-6 bg-[#9b8ab8] hover:bg-[#8a79a7] transition-colors text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-2 text-base font-medium">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <rect x="3" y="3" width="14" height="14" rx="2" />
              </svg>
              Change background
            </button>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 space-y-6">
            {/* Title */}
            <h2 className="text-white text-5xl font-normal mb-8">Name your event</h2>

            {/* Phone Number Input */}
            <div className="bg-[#8e7a9f]/70 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <input 
                type="text" 
                placeholder="Enter phone number to save the draft"
                className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-base"
              />
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Date and Time */}
            <div className="bg-[#6d5f7e]/80 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 text-base">Date and time</span>
            </div>

            {/* Location */}
            <div className="bg-[#6d5f7e]/80 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 text-base">Location</span>
            </div>

            {/* Cost per person */}
            <div className="bg-[#6d5f7e]/80 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 text-base">Cost per person</span>
            </div>

            {/* Description */}
            <div className="bg-[#6d5f7e]/80 backdrop-blur-sm rounded-2xl px-6 py-4">
              <textarea 
                placeholder="Describe your event"
                className="w-full bg-transparent text-white placeholder-white/60 outline-none text-base resize-none h-24"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <button className="bg-[#6d5f7e]/80 hover:bg-[#7d6f8e]/80 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-2 text-white text-sm font-medium transition-colors">
                <span className="text-lg">+</span>
                Capacity
              </button>
              <button className="bg-[#6d5f7e]/80 hover:bg-[#7d6f8e]/80 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-2 text-white text-sm font-medium transition-colors">
                <span className="text-lg">+</span>
                Photo gallery
              </button>
              <button className="bg-[#6d5f7e]/80 hover:bg-[#7d6f8e]/80 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-2 text-white text-sm font-medium transition-colors">
                <span className="text-lg">+</span>
                Links
              </button>
              <button className="text-white/60 text-sm hover:text-white/80 transition-colors">
                Show more
              </button>
            </div>

            {/* Customize Section */}
            <div className="bg-[#6d5f7e]/60 backdrop-blur-sm rounded-2xl px-8 py-10 flex flex-col items-center">
              <div className="flex items-center justify-center gap-8 mb-6 opacity-60">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="text-white/60 text-4xl font-bold">RSVP</div>
              </div>
              <p className="text-white text-lg mb-6 text-center">Customize your<br />event your way</p>
              <button className="w-full bg-[#8e7a9f]/70 hover:bg-[#9e8aaf]/70 backdrop-blur-sm rounded-2xl py-4 px-6 flex items-center justify-center gap-2 text-white text-base font-medium transition-colors">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Customize
              </button>
            </div>

            {/* Go Live Button */}
            <button className="w-full bg-[#6d5f7e]/80 hover:bg-[#7d6f8e]/80 backdrop-blur-sm rounded-2xl py-5 px-6 flex items-center justify-center gap-2 text-white text-lg font-medium transition-colors">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">Go live</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
