import React from 'react'

const Education = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center">
        My
        <span className="text-blue-600"> Journey</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">A selection of my education</p>
    
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          {
            workData.map((data,index)=>(
              <div key={index} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-blue-600 cursor-pointer hover:-translate-y-2 translate-all duration-300">
                {/* timeline*/}
                <div className="absolute left-[-0.5rem] top-o w-6 h-6 rounded-full bg-blue-600">

                </div>
                {/* box*/}
                <div className="bg-gray-400 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{data.role}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-600 rounded-full text-xs md:text-sm">{data.duration}</span>
                  </div>
                <p className="text-gray-300">{data.company}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>            
    </div>
  )
}

export default Education