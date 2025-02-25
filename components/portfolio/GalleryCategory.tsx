import React from 'react'

const GalleryCategory = () => {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat text-center mb-12">Industry Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Category Cards --> */}
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img src="retail-category.jpg" className="w-full h-64 object-cover transition-transform group-hover:scale-105">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-montserrat">Retail & E-commerce</h3>
                </div>
            </div>
            {/* <!-- Repeat for other categories --> */}
        </div>
    </div>
</section>
  )
}

export default GalleryCategory