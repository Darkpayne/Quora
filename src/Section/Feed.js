import React from 'react'

const Feed = () => {
  return (
    <aside className='sticky top-16'>
        <div className="grid bg-white border">
            <div className="py-2 px-4 font-semibold">Improve Your Feed</div>
        </div>
        <div className="grid bg-white border-x border-b">
            <div className="py-2 px-4 flex items-center">
                <span className='text-green-600 font-semibold mr-2 flex'><ion-icon name="checkmark-outline"></ion-icon></span>
                <span className='line-through text-gray-400 text-sm font-semibold'>Visit your feed</span>
            </div>
        </div>
        
        <div className="grid bg-white border-x border-b">
            <div className="py-2 px-4 flex items-center">
                <span className='text-green-600 font-semibold mr-2 flex'>
                    <input type="checkbox" />
                </span>
                <span className='text-xs font-semibold text-gray-600 py-1'>Follow 5 more Spaces</span>
            </div>
        </div>
        
        <div className="grid bg-white border-x border-b">
            <div className="py-2 px-4 flex items-center">
                <span className='text-green-600 font-semibold mr-2 flex'>
                    <input type="checkbox" />
                </span>
                <span className='text-xs font-semibold text-gray-600 py-1'>Upvote 5 more good pieces of content</span>
            </div>
        </div>
        
        <div className="grid bg-white border-x border-b">
            <div className="py-2 px-4 flex items-center">
                <span className='text-green-600 font-semibold mr-2 flex'>
                    <input type="checkbox" />
                </span>
                <span className='text-xs font-semibold text-gray-600 py-1'>Ask a question</span>
            </div>
        </div>
        
        <div className="grid bg-white border-x border-b">
            <div className="py-2 px-4 flex items-center">
                <span className='text-green-600 font-semibold mr-2 flex'>
                    <input type="checkbox" />
                </span>
                <span className='text-xs font-semibold text-gray-600 py-1'>Ask 3 credentials about where you live, work or study</span>
            </div>
        </div>
        
        <div className="grid bg-white border-x border-b">
            <div className="py-2 px-4 flex items-center">
                <span className='text-green-600 font-semibold mr-2 flex'>
                    <input type="checkbox" />
                </span>
                <span className='text-xs font-semibold text-gray-600 py-1'>Answer a question</span>
            </div>
        </div>
        
       
    </aside>
  )
}

export default Feed