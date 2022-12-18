import React from 'react';
const Gallery = () => {
    return (
        <div>
            <section className="overflow-hidden font-mono relative">
                <h1 className="text-2xl font-bold text-center mt-36 text-secondary">
                    A Story Behind a Pictures
                </h1>
                <p className="text-[16px] text-center w-7/12 mx-auto text-secondary">
                    Donate Blood And Inspires Others.. Together We Can Make World More Health & Better
                </p>
                <h1 className="md:text-[110px] text-4xl absolute left-1/4 top-36 -z-10 text-[#F7F7F7] text-center font-mono font-bold">Photo Gallery</h1>
                <div className="w-11/12 px-5 mx-auto lg:pt-10 lg:px-20">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://croptheme.com/blad-ai/assets/images/services/blood-donation.png" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://templatekit.jegtheme.com/redirect/wp-content/uploads/sites/141/2021/08/center-of-blood-transfusion.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://templatekit.jegtheme.com/redirect/wp-content/uploads/sites/141/2021/08/centrifuge-for-blood-donation.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://templatekit.jegtheme.com/redirect/wp-content/uploads/sites/141/2021/08/cropped-view-of-doctor-in-latex-gloves-doing-injection-in-hospital.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;