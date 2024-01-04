"use client";


const Page = () => {
    return (
        <div
            style={{ backgroundImage: "url(/bg-2.jpg)" }}
            className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
        >
            <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="font-semibold text-white text-[50px]">
                        Skills{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                             {" "}
                            &{" "}
                        </span>
                        Technologies
                    </h1>

                    <p className="text-gray-400 text-[20px]">
                        Using the latest tech this world has to offer
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page;