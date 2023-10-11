import React from 'react';

export default function Testimonials() {
  return (
    <div id="testimonios" className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5" data-aos-duration="300" data-aos="fade-up">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="mb-2 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Que dicen los clientes de mi</h1>
            <h3 className="text-xl mb-5 font-light">Testimonios reales</h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-sabagreen-50 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-sabagreen-50 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-sabagreen-50"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-sabagreen-50 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-sabagreen-50 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex flex-wrap items-start">
            {/* Primer testimonio */}
            <div className="px-3 md:w-1/3 ">
              <div className="w-full shadow-2xl min-h-[14rem] mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" className=' w-10 h-10' alt="Imagen usuario review" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                </div>
              </div>
            </div>

            {/* Segundo testimonio */}
            <div className="px-3 md:w-1/3">
              <div className="w-full shadow-2xl min-h-[14rem] mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=2" className=' w-10 h-10' alt="Imagen usuario review" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                </div>
              </div>
            </div>

            {/* Tercer testimonio */}
            <div className="px-3 md:w-1/3">
              <div className="w-full shadow-2xl min-h-[14rem] mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=3" className=' w-10 h-10' alt="Imagen usuario review" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                </div>
              </div>
            </div>

            {/* Cuarto testimonio */}
            <div className="px-3 md:w-1/3">
              <div className="w-full shadow-2xl min-h-[14rem] mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=4" className=' w-10 h-10' alt="Imagen usuario review" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                </div>
              </div>
            </div>

            {/* Quinto testimonio */}
            <div className="px-3 md:w-1/3">
              <div className="w-full shadow-2xl min-h-[14rem] mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=5" className=' w-10 h-10' alt="Imagen usuario review" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                </div>
              </div>
            </div>

            {/* Sexto testimonio */}
            <div className="px-3 md:w-1/3">
              <div className="w-full shadow-2xl min-h-[14rem] mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=6" className=' w-10 h-10' alt="Imagen usuario review" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
