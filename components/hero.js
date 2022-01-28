export default function Hero() {
    return (
        <div
            className="text-3xl hero md:text-5xl"
            id="hero-banner"
        >
            <div className="bg-opacity-50 hero-overlay"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mt-5 mb-5 font-bold text-7xl">
                        Nonfunge Land
                    </h1>
                    <div className="mt-10 mb-10 ml-20 mr-20 card glass bg-opacity-5 text-neutral-content max-h-min">
                        <figure className="p-6">
                            <img
                                src="/images/hero.gif"
                                className="rounded-lg shadow-lg"
                            />
                        </figure>
                        <div className="">
                            <div className="mb-7 space-y-7">
                                <button className="text-xl rounded-md btn btn-primary">
                                    Mint
                                </button>
                                <p>0 / 383</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
