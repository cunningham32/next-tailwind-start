import { useEffect } from "react";

export default function Carousel() {
    useEffect(() => {
        import("tw-elements");
        return () => {};
    }, []);

    return (
        <div className="">
            <div className="max-w-3xl mt-5 text-3xl text-center md:text-5xl">
                <h2>Legendary Items</h2>
            </div>

            <div
                id="carouselExampleIndicators"
                className="relative p-10 carousel slide"
                data-bs-ride="carousel"
            >
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="relative w-full overflow-hidden carousel-inner">
                    <div className="float-left w-full carousel-item active">
                        <div class="card text-center shadow-2xl">
                            <figure class="px-10 pt-10">
                                <img
                                    src="https://picsum.photos/id/1005/400/250"
                                    class="rounded-xl"
                                />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    shadow, center, padding
                                </h2>
                                <p>
                                    Rerum reiciendis beatae tenetur excepturi
                                    aut pariatur est eos. Sit sit necessitatibus
                                    veritatis sed molestiae voluptates incidunt
                                    iure sapiente.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="float-left w-full carousel-item">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            className="block w-full"
                            alt="Camera"
                        />
                    </div>
                    <div className="float-left w-full carousel-item">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            className="block w-full"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>
                <button
                    className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        className="inline-block bg-no-repeat carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        className="inline-block bg-no-repeat carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
